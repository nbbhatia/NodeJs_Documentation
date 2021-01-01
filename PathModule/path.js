const path = require("path");

const dirName = path.dirname(
  "/Users/nidhibhatia/dev/Nodepractice/PathModule/path.js"
);
console.log("dirName", dirName);

const extensionname = path.extname(
  "/Users/nidhibhatia/dev/Nodepractice/PathModule/path.js"
);
console.log("extensionname", extensionname);

const completeInfo = path.parse(
  "/Users/nidhibhatia/dev/Nodepractice/PathModule/path.js"
);
console.log("completeInfo", completeInfo);
