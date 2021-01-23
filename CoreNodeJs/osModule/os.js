const os = require("os");
const osName = os.platform();
console.log("osName", osName);

const architecture = os.arch();
console.log("architecture", architecture);

const platform = os.platform();
console.log("platform", platform);

const freeMemory = os.freemem();
console.log("freeMemory", `${freeMemory / 1024 / 1024 / 1024} Gb`);

const TotalMemory = os.totalmem();
console.log("TotalMemory", `${TotalMemory / 1024 / 1024 / 1024} Gb`);

const tmpdir = os.tmpdir();
console.log("tmpdir", tmpdir);

const hostName = os.hostname();
console.log("hostName", hostName);
