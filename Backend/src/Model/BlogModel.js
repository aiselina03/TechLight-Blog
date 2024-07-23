import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
    title: String,
    image: String,
    desc: String,
    username: { type: String, unique: true },

}, { timestamps: true }
);

export const BlogModel = mongoose.model("BlogModel", blogSchema);