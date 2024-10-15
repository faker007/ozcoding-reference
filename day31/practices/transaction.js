const { MongoClient } = require("mongodb"); // npm install mongodb

async function main() {
  // MongoDB 연결 URI (Replica Set으로 연결해야 트랜잭션 사용 가능)
  const uri = "mongodb://localhost:27017/?replicaSet=rs1";

  // MongoClient 생성
  const client = new MongoClient(uri);

  try {
    // MongoDB에 연결
    await client.connect();

    console.log("Connected to MongoDB");

    // 세션 시작
    const session = client.startSession();

    // 트랜잭션에서 사용할 컬렉션 참조
    const ordersCollection = client.db("ecommerce").collection("orders");
    const inventoryCollection = client.db("ecommerce").collection("inventory");

    // TODO: Inventory Collection에 Document (재고 정보) 추가 하기.
    // await inventoryCollection.insertOne({ productId: "P1001", quantity: 1000});

    // 주문 데이터 정의
    const order = {
      orderId: 1001,
      customerId: 1,
      productId: "P1001",
      quantity: 996,
      orderDate: new Date(),
      status: "Pending",
    };

    const b = ordersCollection.find({});
    const c = await b.toArray();

    const d = inventoryCollection.find({});
    const dd = await d.toArray();

    console.log(c);
    console.log(dd);

    await session.withTransaction(async () => {
      // 주문 추가
      await ordersCollection.insertOne(order, { session });

      const updateResult = await inventoryCollection.updateOne(
        { productId: order.productId, quantity: { $gte: order.quantity } }, // 재고가 충분한지 확인
        { $inc: { quantity: -order.quantity } },
        { session }
      );

      if (updateResult.modifiedCount !== 1) {
        throw new Error(
          "Failed to update inventory: insufficient stock or invalid productId"
        );
      }

      // 주문 상태 업데이트
      await ordersCollection.updateOne(
        { orderId: order.orderId },
        { $set: { status: "Confirmed" } },
        { session }
      );

      // 발송 준비...

      // 발송 중...

      // 발송 완료...

      // 배달 중...

      // 배달 완료...
    });

    console.log("Transaction committed successfully");
  } catch (e) {
    console.error("Transaction aborted due to an error: ", e);
  } finally {
    // 세션 종료 및 MongoDB 연결 종료
    await client.close();

    console.log("Disconnected from MongoDB");
  }
}

main().catch(console.error);
