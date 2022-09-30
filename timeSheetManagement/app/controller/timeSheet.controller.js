const dbModel = require("../models");
const Timesheet = dbModel.timesheets;
require("mysql");
// const sequelize = require("sequelize");


// exports.findAllDetails = (req, res) => {

//   dbModel.timesheets.findAll()
//     .then(data => {
//       res.status(200).json({
//               data: data
//             });
//     })
// };
exports.create = (req, res) => {
  // Validate request

  const timesheet = {
    username: req.body.username,
    date: req.body.date,
    noOfHours: req.body.noOfHours,
    taskname: req.body.taskname
  };

  Timesheet.create(timesheet)
      res.send("posted");
};

exports.findAll = (req, res) => {
  Timesheet.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error on this path"
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Timesheet.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Timesheet data was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Timesheet with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete the data with id=" + id
      });
    });
};