require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const csrf = require("csurf");
const cookieParser = require("cookie-parser");
const path = require("path");

const User = require("./models/User");
const Product = require("./models/Product");
const Order = require("./models/Order");

const app = express();

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(async () => {
    console.log("MongoDB 연결 성공");
    await initializeProducts();
  })
  .catch((err) => console.log("MongoDB 연결 오류:", err));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // HTTPS 사용 시 true로 설정
  })
);

app.use(csrf({ cookie: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  res.locals.currentUser = req.session.user;

  next();
});

// 라우트 정의

// 홈 페이지 (로그인 상태에 따라서 제품 리스트로 리다이렉트)
app.get("/", (req, res) => {
  if (req.session.user) {
    return res.redirect("/products");
  }

  res.redirect("/login");
});

// 로그인 및 회원가입 라우트 (Project 1과 동일하게 구현)

// 회원가입 페이지
app.get("/signup", (req, res) => {
  res.render("signup", { error: null });
});

// 회원가입 처리
app.post("/signup", async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  // 유효성 검사
  if (!username || !email || !password || !confirmPassword) {
    return res.render("signup", { error: "모든 필드를 입력해주세요." });
  }

  if (password !== confirmPassword) {
    return res.render("signup", {
      error: "이메일이나 패스워드가 올바르지 않습니다.",
    });
  }

  try {
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });

    if (existingUser) {
      return res.render("signup", { error: "이미 존재하는 사용자입니다." });
    }

    const user = new User({ username, email, password });

    await user.save();

    req.session.user = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    res.redirect("/products");
  } catch (err) {
    console.error(err);

    res.render("signup", { error: "회원가입 중 오류가 발생했습니다." });
  }
});

// 로그인 페이지
app.get("/login", (req, res) => {
  res.render("login", { error: null });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.render("login", { error: "모든 필드를 입력해주세요." });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.render("login", {
        error: "이메일 또는 비밀번호가 올바르지 않습니다.",
      });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.render("login", {
        error: "이메일 또는 비밀번호가 올바르지 않습니다.",
      });
    }

    req.session.user = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    res.redirect("/products");
  } catch (err) {
    console.error(err);
    res.render("login", { error: "로그인 중 오류가 발생 했습니다." });
  }
});

// 제품 리스트 페이지 (로그인 필요)
app.get("/products", async (req, res) => {
  if (!req.session.user) {
    return res.redirect("/login");
  }

  try {
    const products = await Product.find({});

    res.render("products", { products });
  } catch (err) {
    console.error(err);

    res.send("제품 정보를 불러오는 중 오류가 발생했습니다.");
  }
});

// 제품 상세 페이지 (로그인 필요)
app.get("/products/:id", async (req, res) => {
  console.log("Hello?");
  if (!req.session.user) {
    return res.redirect("/login");
  }

  const productId = req.params.id;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.send("제품을 찾을 수 없습니다.");
    }

    res.render("product", { product });
  } catch (err) {
    console.error(err);

    res.send("제품 정보를 불러 오는 중 오류가 발새 ㅇ했습니다.");
  }
});

// 주문 폼 페이지 (로그인 필요)
app.get("/order/:id", async (req, res) => {
  if (!req.session.user) {
    return res.redirect("/login");
  }

  const productId = req.params.id;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.send("제품을 찾을 수 없습니다.");
    }

    console.log(product);

    res.render("order", { product, error: null });
  } catch (err) {
    console.error(err);

    res.send("주문 폼을 불러오는 중 오류가 발생했습니다.");
  }
});

// 주문 처리
app.post("/order/:id", async (req, res) => {
  if (!req.session.user) {
    return res.redirect("/login");
  }

  const productId = req.params.id;
  const { quantity, address, city, postalCode, country } = req.body;

  // 유효성 검사
  if (!quantity || !address || !city || !postalCode || !country) {
    try {
      const product = await Product.findById(productId);

      return res.render("order", {
        product,
        error: "모든 필드를 입력해주세요.",
      });
    } catch (err) {
      console.error(err);

      return res.send("오류가 발생했습니다.");
    }
  }

  try {
    const product = await Product.findById(productId);

    console.log(product);

    if (!product) {
      return res.send("제품을 찾을 수 없습니다.");
    }

    if (quantity > product.stock) {
      return res.render("order", { product, error: "재고가 부족합니다." });
    }

    const order = new Order({
      user: req.session.user.id,
      products: [
        {
          id: product._id,
          price: product.price,
          name: product.name,
          quantity: Number(quantity),
        },
      ],
      shippingInfo: { address, city, postalCode, country },
    });

    await order.save();

    product.stock -= quantity;

    await product.save();

    console.log(order);

    res.render("orderConfirmation", { order });
  } catch (err) {
    console.error(err);

    res.send("주문 처리 중 오류가 발생했습니다.");
  }
});

// 주문 확인 페이지 (로그인 필요)
app.get("/order-confirmation/:id", async (req, res) => {
  if (!req.session.user) {
    return res.redirect("/login");
  }

  const orderId = req.params.id;

  try {
    const order = await Order.findById(orderId).populate("products.product");

    if (!order) {
      return res.send("주문을 찾을 수 없습니다.");
    }

    res.render("orderConfirmation", { order });
  } catch (err) {
    console.error(err);

    res.send("주문 확인 중 오류가 발생했습니다.");
  }
});

// 로그아웃 처리
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.redirect("/products");
    }

    res.clearCookie("connect.sid");
    res.redirect("/login");
  });
});

const PORT = process.env.PORT || 3000;

const initializeProducts = async () => {
  const products = await Product.find({});
  if (products.length === 0) {
    await Product.insertMany([
      {
        name: "스마트폰",
        price: 699,
        description: "최신 스마트폰입니다.",
        stock: 50,
      },
      {
        name: "노트북",
        price: 1299,
        description: "고성능 노트북입니다.",
        stock: 30,
      },
      {
        name: "헤드폰",
        price: 199,
        description: "편안한 착용감의 헤드폰입니다.",
        stock: 100,
      },
    ]);
    console.log("초기 상품 데이터 삽입 완료");
  }
};

app.listen(PORT, async () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
