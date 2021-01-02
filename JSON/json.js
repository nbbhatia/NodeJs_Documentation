const fs = require("fs");

const studentData = {
  name: "ram",
  age: 24,
  phone: 211212121,
};
// data ko dusri file m dal diya
fs.writeFile("index.json", JSON.stringify(studentData), (err) => {
  if (err) {
    console.log("err", err);
  } else {
    console.log("done");
  }
});

// read data

fs.readFile("index.json", "UTF-8", (err, data) => {
  if (err) {
    console.log("err", err);
  }
  console.log("data", JSON.parse(data));
});
