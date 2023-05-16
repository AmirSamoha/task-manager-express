const Task = require("../models/Task");

//get - get all tasks
const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

//post - create a new task
const createTasks = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).send(task);
};

//get - get single task
const getTask = (req, res) => {
  res.send({ id: req.params.id });
};

//patch - update a single task
const updateTask = (req, res) => {
  res.send(" update a single task");
};

//delete - delete a single task
const deleteTask = (req, res) => {
  res.send(" delete a single task");
};

//export the function out
module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
};
