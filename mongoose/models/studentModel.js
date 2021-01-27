const mongoose = require("mongoose");
const validator = require("validator");
//   structure Create validatipn

const StudentData = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    // maxlength: 4,
    minlength: 2,
    // bs yahi 4 m se koi naam hona chahiye
    enum: ["nidhi", "arjun", "anita", "sanjay"],
  },
  RollNumber: {
    type: Number,
    // not proper way
    // validate: {
    //   validator: function (val) {
    //     return val.length < 0;
    //   },
    //   message: "Number is not in negetive",
    // },
  },
  email: {
    type: String,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("email is invalid");
      }
    },
  },

  active: Boolean,
  age: {
    type: Number,
    // custom validation
    validate(value) {
      if (value < 0) {
        throw new Error("age is not in negetive");
      }
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = StudentData;
