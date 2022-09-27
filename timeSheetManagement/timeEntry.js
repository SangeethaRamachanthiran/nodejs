const path = require("path");
let db_credentials = require("./db_connection");
let prompt = require("prompt-sync")();
// let app_details = require("/home/sangeetha/nodejs_learning/nodejs/expressJS/app.js");
// console.log(app_details);
// let user_details = app_details.details();
console.log(user_details);
            let userName = user_details.userName;
            let date = user_details.userName;
            let noOfHours =user_details.userName;
            let taskName = user_details.userName;
exports.addTimeEntry = function() {
    let db_name = db_credentials.db_connect();
    db_name.connect(function(err) {
            console.log("Hello");
            if (err) throw err;
            let sql = `INSERT INTO timeSheet(userName,date, no_of_hours, task_name)VALUES (?,?,?,?);`;
            db_name.query(sql,[userName,date,noOfHours,taskName], function (err, result) {
            if (err) throw err;
              console.log("Successfully! Task added");
            });
            db_name.end();
          });
    }

//     exports.list = function listTimeEntry() {
//       let db_name = db_credentials.db_connect();
//       db_name.connect(function(err) {
//             if (err) {
//               console.log("Error");
//             } 
//             console.log("connected");
//             db_name.query("SELECT * FROM timeSheet", function (error, result) {
//               if(error) {
//                 throw error;
//               }
//               console.log(result);
//             });
//             db_name.end();
//           });
//       }

//       exports.delete = function deleteTimeEntry() {
//       let db_name = db_credentials.db_connect();
//       db_name.connect(function(err) {
//           if (err) throw err;
//           let deleteTask = prompt("Enter the task name which you need to remove: ")
//           db_name.query(`DELETE FROM timeSheet WHERE task_name = '${deleteTask}';`, function (err, result) {
//           db_name.end();
//         });
//       });
//     }

//     exports.update = function updateTimeEntry() {
//       let db_name = db_credentials.db_connect();
//       db_name.connect(function(err) {
//           if (err) throw err;
//           let oldTaskName = prompt("Enter the old task name: ");
//           let newTaskName = prompt("Enter the new task name to update: ");
//           db_name.query(`UPDATE timeSheet SET task_name = '${newTaskName}' WHERE task_name = '${oldTaskName}';`, function (err, result) {
//           db_name.end();
//         });
//       });
// }