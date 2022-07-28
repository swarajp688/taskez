const express = require("express");
const {register , login } = require('../controller/userController');
const {getAllTasks , addTask , getTask , updateTask , deleteTask} = require('../controller/taskController');
const {protected} = require('../middleware/authMiddleware');
const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.post("/addTodo",protected, addTask);
// add task
module.exports = userRouter;