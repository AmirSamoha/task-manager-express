const Task = require("../models/Task");

//get - get all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).send({ tasks });
  } catch (error) {
    res.status(500).send({ error });
  }
};

//post - create a new task
const createTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).send(task);
  } catch (error) {
    res.status(500).send({ error });
  }
};

//get - get single task
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params; //take the id from the request url
    const task = await Task.findOne({ _id: taskID }); // find the task with the given id
    if (!task) {
      return res.status(404).send({ mgs: `No task with id ${taskID}` });
    }
    res.status(200).send({ task });
  } catch (error) {
    res.status(500).send({ mgs: error });
  }
};

//delete - delete a single task
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params; //take the id from the request url
    const task = await Task.findOneAndDelete({ _id: taskID }); // find the task with the given id and delete it
    if (!task) {
      return res
        .status(404)
        .send({ mgs: `Can NOT delete,No task with id ${taskID}` });
    }
    res.status(200).send({ task });
  } catch (error) {
    res.status(500).send({ mgs: error });
  }
};

//patch - update a single task
const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params; //take the id from the request url
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      // find the task with the given id and update it
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res
        .status(404)
        .send({ mgs: `Can NOT Update,No task with id ${taskID}` });
    }

    res.status(200).send({ task });
  } catch (error) {
    res.status(500).send({ mgs: error });
  }
};

//export the function out
module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
};
