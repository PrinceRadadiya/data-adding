const express = require('express');
const router = new express.Router();
const nana = require("../module/student");

// then method to call

// app.post("/student", (req, res) => {
//   try {
//     console.log("req.body", req.body);
//     const userfinaldata = new nana(req.body);
//     userfinaldata
//       .save()
//       .then(() => {
//         res.send(userfinaldata);
//       })
//       // .then(
//       //   res.send(userfinaldata))

//       .catch((e) => {
//         res.status(400).send(e);
//         console.log(e);
//       });
//   } catch (error) {
//     console.log(error);
//     res.send({ err: "err" });
//   }
// });

// aysnc await function




router.post("/student", async(req, res) => {
    // res.send("hello my name is prince")
    try {
      const userdata = new nana(req.body);
      const final = await userdata;
      const hhh = await final.save();
      res.status(201).send(hhh);
      console.log("req.body", req.body);
  
    } catch (e) {
      console.log("...........................", e)
      // res.send({ err: "err" });
      // res.status("400").send(e)
    }
  });
  
  router.get("/student", async (req, res) => {
    try {
      const show_data = await nana.find();
      res.send(show_data);
    } catch (e) {
      console.log(e);
    }
  });
  
  // patch method is use: data seem but update
  router.patch("/student/:id",async(req,res)=>{
    try {
      const _id = req.params.id;
      const updatedata = await nana.findByIdAndUpdate(_id,req.body)
      res.send(updatedata)
      console.log("----------------------------",updatedata)
    } catch (error) {
      res.status(404).send(error)
    }
  })
module.exports = router;