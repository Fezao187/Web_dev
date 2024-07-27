import bcrypt from "bcrypt";
import { model, Schema } from "mongoose";

// Create user Schema
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Your name is required"],
    },
    email: {
        type: String,
        required: [true, "Your email is required"],
        unique: true
    },
    username: {
        type: String,
        required: [true, "Your username is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Your password is required"]
    }
});

// PreSave hook to hash password before saving
userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
});

export const User = model("User", userSchema);