const redis = require("redis");
const client = redis.createClient();

client
  .connect({ legacyMode: true, PORT: 6391 })
  .then(async () => {
    console.log("연결 완");
    client.on("error", (err) => {
      console.error("Redis error:", err);
    });

    // String 데이터 설정
    const a = await client.set("greeting", "Hello, Redis!");
    const b = await client.get("greeting");

    console.log(a);
    console.log(b);
  })
  .catch((err) => {
    console.error(err);
  });
