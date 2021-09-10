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

    async updatePost(req, res) {

        try {
            const postId = req.params.postId
            const updated = await postSchema.findOneAndUpdate({ _id: postId }, { $set: req.body }, { new: true })

            if (updated)
                return res.status(200).json({ message: "Posts updated", posts: updated, success: true })

        } catch (error) {
            throw error
        }
    }



    async deletePost(req, res) {

        try {
            const postId = req.params.postId
            const deleted = await postSchema.findOneAndRemove({ _id: postId })

            if (deleted)
                return res.status(200).json({ message: "Posts Deleted", posts: deleted, success: true })


        } catch (error) {
            throw error
        }
    }


}

module.exports = Posts
