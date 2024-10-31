const redis = require("redis");
const client = redis.createClient();

(async () => {
  await client.connect({ legacyMode: true, PORT: 6391 });

  client.on("error", (err) => {
    console.error("Redis error:", err);
  });

  // Sorted Set에 데이터 추가
  await client.zAdd("leaderboard", { score: 100, value: "친구1" });
  await client.zAdd("leaderboard", { score: 150, value: "친구2" });
  await client.zAdd("leaderboard", { score: 120, value: "친구3" });

  // Sorted Set 데이터 조회 (점수 기준 오름차순)
  const r = await client.zRange("leaderboard", 0, -1, "WITHSCORES");

  console.log(r);
})();
