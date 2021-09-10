
const supertest = require('supertest');

const functions = require('../function')
const app = require('../index');
const Posts = require('../controllers/posts')

const post = new Posts()
const db = require('./db')



beforeAll(async () => await db.connect())

afterAll(async () => await db.clear());

afterAll(async () => await db.close());





describe('Post CRUD', () => {


    test("tests the base route and returns true for status", async () => {
        const response = await supertest(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body.status).toBe(true);

    });

    test(`POST /post method for creating a post`, async () => {
        const response = await supertest(app)
            .post('/post')
            .send({ title: 'Some Title', description: 'Some Description', author: 'pawan' })
            .expect(201);

        expect(response.status).toBe(201)
        expect(response.body.id).toBeTruthy();
        expect(response.body.success).toBeTruthy();

    });


    test(`GET /post method for getting posts`, async () => {
        const response = await supertest(app)
            .get('/post')
            .expect(200);

        expect(response.status).toBe(200)
        expect(response.body.success).toBeTruthy();

    });



    test("It responds with an updated post", async () => {
        const newPost = await supertest(app)
            .post('/post')
            .send({
                title: 'Some Title', description: 'Some Description', author: 'pawan'
            });

        const updatedPost = await supertest(app)
            .put(`/post/${newPost.body.id}`)
            .send({ title: 'title updated' });

        expect(updatedPost.body.posts.title).toStrictEqual('title updated')
        expect(updatedPost.body.posts).toHaveProperty("_id");
        expect(updatedPost.body.success).toBeTruthy();


    });


    test("It responds with an deleted post", async () => {
        const newPost = await supertest(app)
            .post('/post')
            .send({
                title: 'Some Title', description: 'Some Description', author: 'pawan'
            });

        const updatedPost = await supertest(app)
            .delete(`/post/${newPost.body.id}`)

        expect(updatedPost.body.posts).toHaveProperty("_id");
        expect(updatedPost.body.success).toBeTruthy();


    });

});



