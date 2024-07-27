import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";
import cookieParser from "cookie-parser";

config();
const app = express();
const { MONGO_URL, PORT } = process.env;

app.use(express.json());
// Use cors to allow frontend to access server
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.use(cookieParser());

// Connect to atlas
mongoose
    .connect(MONGO_URL)
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err: string) => console.log(err))

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})