const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 8080;

const db = require("./models");

// Set Express app
const app = express();

// Set Handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/personal-portfolio", { useNewUrlParser: true });

// require routes
require("./routes/html.js")(app);
require("./routes/api.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
