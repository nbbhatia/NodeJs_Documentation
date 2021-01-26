const mongoose = require("mongoose");
// Create Connection
mongoose
  .connect("mongodb://localhost:27017/STUDENTRECORD", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection established");
  })
  .catch((err) => {
    console.log("err", err);
  });

// *******÷********************************************************************************

//   structure Create
const StudentData = new mongoose.Schema({
  name: String,
  RollNumber: Number,
  active: Boolean,
  age: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});
// *******÷********************************************************************************
// collection Create
const StudentDataModel = new mongoose.model("StudentDocuments", StudentData);

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
      name: "sanjay bhatia",
      RollNumber: 6,
      active: true,
      age: 55,
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
    console.log("resultmultipledata", resultmultipledata);
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
logicalOPerator();
