const mongoose = require("mongoose");
require('dotenv').config()// צריך לייבא את זה מהמודל כדי שנוכל לעבוד עם זה 
mongoose.set("useFindAndModify", false);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("CONNECTED TO DB..."))
  .catch((err) => {
    console.log(err);
  });
