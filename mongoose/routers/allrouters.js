const express = require("express");
const router = new express.Router();
const StudentModel = require("../models/studentModel");
const mongoose = require("mongoose");
// *******÷********************************************************************************

// *******÷********************************************************************************
// collection Create
const StudentDataModel = new mongoose.model("StudentDocuments", StudentModel);

//  create document or Insert Data
// simple way
// const StudentDocuments = new StudentDataModel({
//   name: "Ram",
//   RollNumber: 1,
//   active: true,
//   age: 20,
// });
// StudentDocuments.save();
// insert By using async and await
// *******÷********************************************************************************
const createDocument = async () => {
  try {
    // const StudentDocuments = new StudentDataModel({
    //   name: "krishana",
    //   RollNumber: 3,
    //   active: true,
    //   age: 24,
    // });
    // const StudentDocuments2 = new StudentDataModel({
    //   name: "nidhi",
    //   RollNumber: 4,
    //   active: true,
    //   age: 24,
    // });
    // const StudentDocuments3 = new StudentDataModel({
    //   name: "arjun",
    //   RollNumber: 5,
    //   active: true,
    //   age: 24,
    // });
    // const StudentDocuments4 = new StudentDataModel({
    //   name: "sanjay bhatia",
    //   RollNumber: 6,
    //   active: true,
    //   age: 24,
    // });
    const StudentDocuments5 = new StudentDataModel({
      name: "nidhi",
      RollNumber: 6,
      email: "nidhi@gmail.com",
      active: true,
      age: 5,
    });
    // for only single data insert
    const result = await StudentDocuments5.save();
    console.log("result", result);
    // for multipledata
    // const resultmultipledata = await StudentDataModel.insertMany([
    //   StudentDocuments5,
    //   StudentDocuments3,
    //   StudentDocuments4,
    // ]);
    // console.log("resultmultipledata", resultmultipledata);
  } catch (err) {
    console.log("err", err);
  }
};
// createDocument();
// ******All Read Query*÷********************************************************************************
// ReadDocument()
const ReadDocument = async () => {
  try {
    const AllreadData = await StudentDataModel.find();
    const singleData = await StudentDataModel.find({ name: "nidhi" });
    const getOnlyName = await StudentDataModel.find(
      { name: "arjun" },
      { name: 1 }
    );
    const getOnlyNameWithoutID = await StudentDataModel.find(
      { name: "nidhi" },
      { _id: 0, name: 1 }
    );
  } catch (err) {
    console.log(err);
  }
};
// ReadDocument();
// *******÷********************************************************************************
// Comparision operatr
const ComparisionQuery = async () => {
  try {
    const greaterThan = await StudentDataModel.find({ age: { $gt: 50 } });
    const lessThan = await StudentDataModel.find({ age: { $lte: 20 } });
    console.log("greaterThan", lessThan);
  } catch (err) {
    console.log("err", err);
  }
};
// ComparisionQuery();
// *******÷********************************************************************************
// logical opretor

const logicalOPerator = async () => {
  try {
    const OROpera = await StudentDataModel.find({
      $or: [{ age: { $lt: 20 } }, { age: 55 }],
    });
    const andOper = await StudentDataModel.find({
      $and: [{ age: 24 }, { age: 30 }],
    });
    console.log("OROpera", andOper);
  } catch (err) {
    console.log("err", err);
  }
};
// logicalOPerator();
// // *******÷********************************************************************************
// count and sort
const count = async () => {
  try {
    const counting = await StudentDataModel.find({
      age: { $gt: 20 },
    }).sort({ name: -1 });
    // countDocuments();
    console.log("counting", counting);
  } catch (err) {
    console.log("err", err);
  }
};
// count();
// // *******÷********************************************************************************
// update
const updateDocument = async (_id) => {
  // single data

  try {
    // updateOne or findOneAndUpdate
    const updateName = await StudentDataModel.updateOne(
      { _id },
      {
        $set: {
          name: "Shammi Bhatia",
        },
      }
    );
  } catch (err) {
    console.log("err", err);
  }
};
// updateDocument("60100793eee48009777411c4");
// // *******÷********************************************************************************
// delete document
const deleteDocument = async (name, _id) => {
  // single data

  try {
    // updateOne or findOneAndUpdate
    const deleteId = await StudentDataModel.deleteOne({ _id });
    // const deleteMany = await StudentDataModel.deleteMany({
    //   name: "Ram",
    // });
    console.log("deleteMany", deleteId);
  } catch (err) {
    console.log("err", err);
  }
};
// deleteDocument("601054565bb422188a08d441");
// // *******÷********************************************************************************
// RestApi
// get all data
router.get("/getStudents", async (req, res) => {
  try {
    const result = await StudentDataModel.find();
    console.log("result", result);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});
// get particular student data
router.get("/getStudents/:id", async (req, res) => {
  try {
    const Id = req.params.id;
    const resultById = await StudentDataModel.findById(Id);
    res.send(resultById);
  } catch (err) {
    res.send(err);
  }
});

// update data
router.patch("/updateStudents/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const resultById = await StudentDataModel.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(resultById);
    console.log("resultById", resultById);
  } catch (err) {
    res.send(err);
  }
});
//delete
router.delete("/delete/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const result = await StudentDataModel.findByIdAndDelete(_id);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});
module.exports = router;
