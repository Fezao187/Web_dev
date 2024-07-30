import { model, Schema } from "mongoose";

const workOutSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    reps:{
        type:Number,
        required:true
    },
    load:{
        type:Number,
        required:true
    }
},{timestamps:true});

export const WorkOut = model("Workout",workOutSchema);