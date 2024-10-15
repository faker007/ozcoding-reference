const fs = require("fs");

const content = "Hello, Node.js!";

fs.writeFile("example.txt", content, (err) => {
  if (err) throw err;
  console.log("파일이 저장되었습니다.");

  fs.appendFile("example.txt", "\n추가된 내용입니다.", (err) => {
    if (err) throw err;
    console.log("추가 완");
  });

  setTimeout(() => {
    fs.unlink("example.txt", (err) => {
      if (err) throw err;
      console.log("삭제 완");
    });
  }, 3000);

  setTimeout(() => {
    fs.mkdir("new_directory", { recursive: true }, (err) => {
      if (err) throw err;
      console.log("dir 생성 완");
    });

    setTimeout(() => {
      fs.rmdir("new_directory", (err) => {
        console.log("디렉토리 삭제 완");
      });
    });
  }, 3000);
});
