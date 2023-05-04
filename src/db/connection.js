const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/prince-ooo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("sucess data");
  })
  .catch((err) => {
    console.log("no data find");
  });
