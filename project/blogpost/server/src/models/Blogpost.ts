import { model, Schema } from "mongoose";

// Create blopost schema
const blogSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    body: {
        type: String,
        required: [true, "Body is required"]
    },
    username: {
        type: String
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

export const Blogpost = model("Blogpost", blogSchema);