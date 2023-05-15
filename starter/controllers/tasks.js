//get - get all tasks
const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

//post - create a new task
const createTasks = (req, res) => {
  res.send("create a new task");
};

//get - get single task
const getTask = (req, res) => {
  res.send("get single task");
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
