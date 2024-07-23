import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String,
    role: { type: String, default: "user" },
});
export const UserModel = mongoose.model("UserModel", userSchema);