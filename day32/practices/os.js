const os = require("os");

console.log("운영 체제:", os.platform());
console.log("CPU 아키텍처:", os.arch());
console.log("메모리 총량:", os.totalmem());
console.log("사용 가능한 메모리:", os.freemem());
console.log("호스트 이름:", os.hostname());
