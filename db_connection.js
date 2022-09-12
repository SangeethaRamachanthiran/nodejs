
const prompt = require("prompt-sync")();
const mysql = require('mysql2');
let ask = prompt("What you want to do? To add task, type 'ADD' or To know your tasks details, type 'SHOW'")
//// Create database in mysql using nodejs

///// To create database //////
  //   let connectdb = mysql.createConnection({
  //     host     : 'localhost',
  //     user     : 'sangeetha',
  //     password : 'Sangi14.'
  //   });
    
  //   connectdb.connect(function(err) {
  //       if (err){ 
  //         console.log("Error");
  //         throw err;
  //       };
  //       console.log("Connected!");
  //       connectdb.query("CREATE DATABASE nodedb", function (err, result) {
  //         if (err) {
  //           console.log(result);
  //           throw err;
  //         }
  //         console.log("Database created");
  //       });
  //     });
    // connectdb.connect(function(err) {
    //     if (err){ 
    //       console.log("Error");
    //       throw err;
    //     };
    //     console.log("Connected!");
    //     connectdb.query("CREATE TABLE todoApp(id int primary key auto_increment, tasks varchar(255) not null, task_date date not null)", function (err, result) {
    //       if (err) {
    //         console.log(result);
    //         throw err;
    //       }
    //       console.log("Successfully! Table created");
    //     });
    //     connectdb.end();
    //   });
      let connectdb = mysql.createConnection({
        host     : 'localhost',
        user     : 'sangeetha',
        password : 'Sangi14.',
        database : 'nodedb'
      });
      if(ask === 'ADD'){
        connectdb.connect(function(err) {
          if (err){ 
            console.log("Error");
            throw err;
          };
          console.log("Connected!");
          
          let sql = `INSERT INTO todoApp(tasks, task_date) VALUES (?,?);`;
          let task = prompt("Enter your task: ");
          let taskDate = prompt("Enter your date: ");
          connectdb.query(sql, [task, taskDate], function (err, result) {
            if (err) {
              console.log(result);
              throw err;
            }
            console.log("Successfully! Inserted");
          });
          connectdb.end();
        });
      }
      else if(ask === 'SHOW'){
        connectdb.connect(function(err) {
          if (err){ 
            console.log("Error");
            throw err;
          };
          console.log("Connected!");
          
          // let sql = "SELECT * FROM todoApp";
          connectdb.query("SELECT * FROM todoApp", function (err, result) {
            if (err) {
              
              throw err;
            }
            console.log(result);
          });
          connectdb.end();
        });
      }
      else{
        console.log("To add task, type 'ADD' / To view your task details, type 'SHOW'");
      }
    

  

