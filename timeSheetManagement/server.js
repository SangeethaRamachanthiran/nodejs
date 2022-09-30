
// const router = require("./app/routes/timeSheet.routes.js");

const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

// app.use(router);
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome!!." });
});
// app.get("/list", (req, res) => {
//   const control = require("./app/controller/timeSheet.controller.js");
//   control.list();
//   console.log("+++++++++++++++++++" + control);
// });
// const db = require("./app/models");
// db.sequelize.sync()
//   .then(() => {
//     console.log("Synced db.");
//   })
//   .catch((err) => {
//     console.log("Failed to sync db: " + err.message);
//   });

  require("./app/routes/timeSheet.routes.js")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// module.exports = app;
