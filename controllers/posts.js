const postSchema = require('../schema/post')
class Posts {



    async createPost(req, res) {

        try {
            const newPost = new postSchema(req.body)
            await newPost.save()
            return res.status(201).json({ message: "Created Successfully", id: newPost._id, success: true })
        } catch (error) {
            console.log(error);
            throw new Error(`Can't store data to db`);
        }
    }

    async getPosts(req, res) {
        try {

            const posts = await postSchema.findOne({})
            if (posts)
                return res.status(200).json({ message: "Posts found", posts: posts, success: true })
            else
                return res.status(204).json({ message: "No Post", posts: posts, success: true })

        } catch (error) {

        }
    }


}

module.exports = Posts
