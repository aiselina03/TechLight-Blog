import { BlogModel } from "../Model/BlogModel.js";

export const getAllBlog = async (req, res) => {
    try {
        // const blog = await BlogModel.find({});
        const blog = await BlogModel.find({}).sort({ createdAt: -1 });
        res.json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await BlogModel.findById(id);
        res.json(blog);
    } catch (error) {
        res.send(error.message);
    }
}

export const createBlog = async (req, res) => {
    try {
        const { title, desc, username } = req.body;
        const newBlog = new BlogModel({ title, image: "http://localhost:3000/image/" + req.uploadFileName, desc, username });
        await newBlog.save();
        return res.json({ newBlog });
    } catch (error) {
        res.send({ message: error.message });
    }
}

export const updateBlog = async (req, res) => {
    try {
        const { id } = req.params
        const { title, desc, username } = req.body
       const updateData = { title, desc, username };
        if (req.file) {
            updateData.image = "http://localhost:3000/image/" + req.uploadFileName;
        }
        const updatedBlog = await BlogModel.findByIdAndUpdate(id, updateData, { new: true });
        res.json(updatedBlog);
    } catch (error) {
        res.send(error.message);
    }
}

export const deleteBlog = async (req, res) => {

    try {
        const { id } = req.params
        const blog = await BlogModel.findByIdAndDelete(id);
        res.json(blog)
    } catch (error) {
        res.send(error.message);
    }
}