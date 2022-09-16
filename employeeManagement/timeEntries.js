let db_credentials = require("./db_connect");
let prompt = require("prompt-sync")();
exports.add = function addTimeEntry() {
    let db_name = db_credentials.db_connect();
    db_name.connect(function(err) {
            console.log("Hello");
            if (err) throw err;
            let sql = `INSERT INTO timeSheet(userName,date, no_of_hours, task_name)VALUES (?,?,?,?);`;
            let userName = prompt("Enter your Name: ");
            let date = prompt("Enter the date for your task: ");
            let noOfHours = prompt("How many hours do you allotted for the task ? ");
            let taskName = prompt("What is the task about ?");
            db_name.query(sql,[userName,date,noOfHours,taskName], function (err, result) {
            if (err) throw err;
              console.log("Successfully! Task added");
            });
            db_name.end();
          });
    }

    exports.list = function listTimeEntry() {
      let db_name = db_credentials.db_connect();
      db_name.connect(function(err) {
            if (err) {
              console.log("Error");
            } 
            console.log("connected");
            db_name.query("SELECT * FROM timeSheet", function (error, result) {
              if(error) {
                throw error;
              }
              console.log(result);
            });
            db_name.end();
          });
      }

      exports.delete = function deleteTimeEntry() {
      let db_name = db_credentials.db_connect();
      db_name.connect(function(err) {
          if (err) throw err;
          let deleteTask = prompt("Enter the task name which you need to remove: ")
          db_name.query(`DELETE FROM timeSheet WHERE task_name = '${deleteTask}';`, function (err, result) {
          db_name.end();
        });
      });
    }

    exports.update = function updateTimeEntry() {
      let db_name = db_credentials.db_connect();
      db_name.connect(function(err) {
          if (err) throw err;
          let oldTaskName = prompt("Enter the old task name: ");
          let newTaskName = prompt("Enter the new task name to update: ");
          db_name.query(`UPDATE timeSheet SET task_name = '${newTaskName}' WHERE task_name = '${oldTaskName}';`, function (err, result) {
          db_name.end();
        });
      });
}