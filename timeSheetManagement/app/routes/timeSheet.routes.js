module.exports = app => {
  const timesheets = require("../controller/timeSheet.controller.js");

  let router = require("express").Router();


  router.post("/", timesheets.create);
  router.get("/", timesheets.findAll);
  router.delete("/:id", timesheets.delete);
  app.use('/api/timesheets', router);
};

// const express = require("express");
// const controllers = require("../controller/timeSheet.controller.js");
// const router = express.Router();

// router.route("/").get(controllers.getAllTodos);
// module.exports = router;