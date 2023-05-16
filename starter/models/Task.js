const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  // create new schema
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true, // הגדרה זאת בשביל שאם יהיה הרבה רווחים בהתחלה או סוף של השם יתעלם מהרווח
    maxlength: [20,'name can not be more then 20 characters']
  },
  completed: {type:Boolean,default:false},
});

module.exports = mongoose.model("Task", TaskSchema);
