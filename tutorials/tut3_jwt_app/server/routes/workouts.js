import { Router } from "express";
import { createWorkout, deleteWorkout, getWorkout, getWorkouts, updateWorkout } from "../controllers/workoutController";

const router = Router();

// Get all workouts
router.get("/", getWorkouts);
// Get one workout
router.get("/:id", getWorkout);
// Post a workout
router.post("/", createWorkout);
// Delete workout
router.delete("/:id", deleteWorkout);
// Update workout
router.patch("/:id", updateWorkout);

export default router;