const prompt = require("prompt-sync")();
require("dotenv").config({path: '/home/sangeetha/nodejs_learning/nodejs/.env'});
const mysql = require("mysql2");
let db_connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DATABASE
});
console.log("Welcome");
    // timeSheetManagement();
    // function timeSheetManagement(){
    //   let userNeed = prompt("To add time entry, type 'ADD' or To list the time entries, type 'SHOW' or To delete your time entry, type 'DELETE' or To update your task name, type 'UPDATE'");
    //   switch(userNeed){
    //     case 'ADD':
          // addTimeEntry();
    //       break;
    //     case 'SHOW':
    //       listTimeEntry();
    //       break;
    //     case 'DELETE':
    //       deleteTimeEntry();
    //       break;
    //     case 'UPDATE':
    //       updateTimeEntry();
    //       break;
    //     default:
    //       console.log("No method like this");
    //       timeSheetManagement();
    //   }
    // }
  //   addTimeEntry();
  //   function addTimeEntry() {
  //     db_connection.connect(function(err) {
  //         if (err) throw err;
  //         let sql = `INSERT INTO timeSheet(userName,date, no_of_hours, task_name)VALUES (?,?,?,?);`;
  //         let userName = prompt("Enter your Name: ");
  //         let date = prompt("Enter the date for your task: ");
  //         let noOfHours = prompt("How many hours do you allotted for the task ? ");
  //         let taskName = prompt("What is the task about ?");
  //         db_connection.query(sql,[userName,date,noOfHours,taskName], function (err, result) {
  //         if (err) throw err;
  //           console.log("Successfully! Task added");
  //         });
  //         db_connection.end();
  //       });
  // }
  
// function listTimeEntry() {
//   db_connection.connect(function(err) {
//       if (err) {
//         console.log("Error");
//       } 
//       console.log("connected");
//       db_connection.query("SELECT * FROM timeSheet", function (error, result) {
//         if(error) {
//           throw error;
//         }
//         console.log(result);
//       });
//       db_connection.end();
//     });
// }


// function deleteTimeEntry() {
//   db_connection.connect(function(err) {
//       if (err) throw err;
//       let deleteTask = prompt("Enter the task name which you need to remove: ")
//       db_connection.query(`DELETE FROM timeSheet WHERE task_name = '${deleteTask}';`, function (err, result) {
//       listTimeEntry();
//       db_connection.end();
//     });
//   });
// }

// function updateTimeEntry() {
//   db_connection.connect(function(err) {
//       if (err) throw err;
//       let oldTaskName = prompt("Enter the old task name: ");
//       let newTaskName = prompt("Enter the new task name to update: ");
//       db_connection.query(`UPDATE timeSheet SET task_name = '${newTaskName}' WHERE task_name = '${oldTaskName}';`, function (err, result) {
//       listTimeEntry();
//       db_connection.end();
//     });
//   });
// }
