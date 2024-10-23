const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(async (username, password, done) => {
    const user = await findUserByUsername(username);

    if (!user) {
      return done(null, false, { message: "Incorrect username." });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return done(null, false, { message: "Incorrect password." });
    }

    return done(null, user);
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await findUserById(id);
  done(null, user);
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: true,
  })
);
