import express from "express"
import cors from "cors";
import 'dotenv/config'
import { userRouter } from "./src/Router/UserRouter.js";
import { blogRouter } from "./src/Router/BlogRouter.js";
import { authRouter } from "./src/Router/AuthRouter.js";
import mongoose from "mongoose";


const app = express();
app.use(express.json());
app.use(cors());
app.use("/image", express.static('./public/image'))
app.use("/api/users", userRouter)
app.use("/api/blog", blogRouter)
app.use("/", authRouter)


mongoose
    .connect(process.env.DB_SECRET_KEY)
    .then(() => console.log("Connected!"))
    .catch(() => console.log("Not Connected!"));

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});