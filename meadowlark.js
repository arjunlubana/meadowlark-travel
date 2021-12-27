import express from "express";
import { engine } from "express-handlebars";
import { dirname } from "path";
import getFortune from "./lib/fortune.js";


const app = express();

app.set("port", process.env.PORT || 3000);
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
app.use(express.static(dirname(".") + "/public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about", {fortune: getFortune()});
});

// Custom 404 Page

app.use((req, res) => {
  res.status(404);
  res.render("404");
});

// Custom 500 Page
app.use((req, res, next) => {
  console.error(err.stack);
  res.status(500);
  res.render("500");
});

app.listen(app.get("port"), () => {
  console.log(
    "Express started on http://localhost:" + app.get("port"),
    "\nPress Ctrl-C to terminate."
  );
});
