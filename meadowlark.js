import express from "express";
import { engine } from "express-handlebars";
import { dirname } from "path";
const app = express();

app.set("port", process.env.PORT || 3000);
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
app.use(express.static(dirname(".") + "/public"));
var fortunes = [
  "Conquer your fears or they will conquer you.",
  "Rivers need springs.",
  "Do not fear what you don't know.",
  "You will have a pleasant surprise.",
  "Whenever possible, keep it simple.",
  ];

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  let randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]

  res.render("about", {fortune: randomFortune});
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
