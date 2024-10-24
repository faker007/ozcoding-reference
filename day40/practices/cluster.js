const cluster = require("cluster");
const os = require("os");

if (cluster.isMaster) {
  const cpuCount = os.cpus().length;

  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.log(
      `워커 ${worker.id}가 종료되었습니다. 새로운 워커를 생성합니다.`
    );

    cluster.fork();
  });
} else {
  const express = require("express");

  const app = express();

  app.get("/", (req, res) => {
    res.send("Hello from worker " + cluster.worker.id);
  });

  app.listen(3000, () => {
    console.log(
      `워커 ${cluster.worker.id}가 ${3000}번 포트에서 실행 중입니다.`
    );
  });
}
