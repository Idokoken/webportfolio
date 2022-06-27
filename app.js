const express = require("express");
const path = require("path");
const expressLayout = require("express-ejs-layouts");
const mongoose = require("mongoose");
const chalk = require("chalk");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const mainRouter = require("./routes/mainRouter");
const projectRouter = require("./routes/projectRouter");

//app setup
const app = express();
const port = process.env.PORT;

//views setup
app.set("view engine", "ejs");
app.set("views", "views");

//database setup
// mongoose.connect(process.env.MONGO_URI, {
//   useUnifiedTopology: true,
//   useNewUrlparser: true,
// });
mongoose.connect("mongodb://localhost/portfolio", {
  useUnifiedTopology: true,
  useNewUrlparser: true,
});

const db = mongoose.connection;
db.on("error", () =>
  console.log("error connecting to Music-Album " + chalk.cyan("database"))
);
db.once("open", () =>
  console.log("connected to " + chalk.cyan("portfolio database"))
);

//middleware setup
app.use(cors());
app.use(morgan("dev"));
app.use(expressLayout);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);

//routes setup
app.use("/", mainRouter);
app.use("/projects", projectRouter);

app.listen(port, () => console.log(`listening on ${chalk.cyan(8000)}`));
