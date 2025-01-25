import express from "express";
const router = express.Router();

import {CreateTask,GetAllTask,DeleteTask,UpdateTask} from "../controller/TaskController.js";


router.post("/createtask",CreateTask);
router.get("/getalltask",GetAllTask);
router.delete("/deletetask/:id",DeleteTask);
router.patch("/updatetask/:id",UpdateTask);

export default router;