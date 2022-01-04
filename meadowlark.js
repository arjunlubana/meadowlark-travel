var express = require("express");
var engine = require("express-handlebars").engine;
var dirname = require("path").dirname;
var getFortune = require("./lib/fortune.js");
var getWeatherData = require("./lib/weather.js");

var app = express();

app.set("port", process.env.PORT || 3000);
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// Middleware

app.use(express.static(dirname(".") + "/public"));
app.use(function (req, res, next) {
  res.locals.showTests =
    app.get("env") !== "production" && req.query.test === "1";
  next();
});
app.use(function (req, res, next) {
  if (!res.locals.partials) res.locals.partials = {};
  res.locals.partials.weather = getWeatherData();
  next();
});

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/about", function (req, res) {
  res.render("about", {
    fortune: getFortune(),
    pageTestScript: "/qa/tests-about.js",
  });
});

app.get("/tours/hood-river", function (req, res) {
  res.render("tours/hood-river");
});
app.get("/tours/request-group-rate", function (req, res) {
  res.render("tours/request-group-rate");
});
// Custom 404 Page

app.use(function (req, res) {
  res.status(404);
  res.render("404");
});

// Custom 500 Page
app.use(function (req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.render("500");
});

app.listen(app.get("port"), function () {
  console.log(
    "Express started on http://localhost:" + app.get("port"),
    "\nPress Ctrl-C to terminate."
  );
});
