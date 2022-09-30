
module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Sangi14.",
  DB: "timesheet",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

// const mysql = require('mysql');
// const conn = mysql.createConnection({
//  host: "localhost",
//  user: "root",
//  password: "Sangi14.",
//  database: "timesheet",
// });

// conn.connect();

// module.exports = conn;