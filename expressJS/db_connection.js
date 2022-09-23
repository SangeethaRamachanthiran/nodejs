require("dotenv").config({path: '/home/sangeetha/nodejs_learning/nodejs/.env'});
const mysql = require("mysql2");
exports.db_connect = function db() {
    let db_connection = mysql.createConnection({
        host     : process.env.DB_HOST,
        user     : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_DATABASE
      });
      return db_connection;
}