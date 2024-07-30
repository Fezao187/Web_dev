import express from "express";
import appRoutes from "./routes/workouts.js";
import mongoose from "mongoose";
import { config } from "dotenv";

const app = express();
config();
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use("/api/workouts", appRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connected to DB and listening onm port", process.env.PORT);
        })
    })
    .catch((err) => {
        console.log(err);
    })