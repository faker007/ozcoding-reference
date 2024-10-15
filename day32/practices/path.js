const path = require("path");

const filePath = "/home/user/docs/file.txt";
const base = path.basename(filePath);
const dir = path.dirname(filePath);
const ext = path.extname(filePath);
const joinedPath = path.join("/home", "user", "docs", "file.txt");
const absolutePath = path.resolve("docs", "file.txt");
const parsed = path.parse(filePath);
const formattedPath = path.format(parsed);

console.log(base);
console.log(dir);
console.log(ext);
console.log(joinedPath);
console.log(absolutePath);
console.log(parsed);
console.log(formattedPath);
