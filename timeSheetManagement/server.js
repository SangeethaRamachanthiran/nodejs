let express = require('express');
const path = require("path");
let app = express();
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use('/css',express.static(__dirname +'/css'));
let db_credentials = require("./db_connection");

app.get('/add', function(req, res){
    res.sendFile(path.join(__dirname+'/page.html'));
 });

 app.post('/submit-list', function (req, res) {
    let userName = req.body.user_name
    let date = req.body.date_of_task
    let noOfHours = req.body.no_of_hours
    let taskName = req.body.task_name
    let db_name = db_credentials.db_connect();
    db_name.connect(function(err) {
        console.log("Hello");
        if (err) throw err;
        let sql = `INSERT INTO timeSheet(userName,date, no_of_hours, task_name)VALUES (?,?,?,?);`;
        db_name.query(sql,[userName,date,noOfHours,taskName], function (err, result) {
        if (err) throw err;
        res.redirect("/show");
        });
       
      });
    
});
app.get("/show", (req, res) => {
    let db_name = db_credentials.db_connect();

    db_name.query("SELECT * FROM timeSheet", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.render('show', { title: 'Time sheet list', userData: result});
      }
    });
  });

  app.get('/edit/:id', function(req, res, next){
    let db_name = db_credentials.db_connect();
    let id = req.params.id;
    let query = `SELECT * FROM timeSheet WHERE id = "${id}"`;
    db_name.query(query, function(error, result){
      res.render('edit', { title: 'Time sheet list', userData: result[0]});
    });
  });

  app.post('/edit/:id', function(req, res, next){
    let id = req.params.id;
    let userName = req.body.user_name
    let date = req.body.date_of_task
    let noOfHours = req.body.no_of_hours
    let taskName = req.body.task_name
    let db_name = db_credentials.db_connect();
    db_name.connect(function(err) {
        console.log("Hello");
        if (err) throw err;
        let sql = `UPDATE timeSheet 
        SET userName = "${userName}", 
        date = "${date}", 
        no_of_hours = "${noOfHours}", 
        task_name = "${taskName}" 
        WHERE id = "${id}"
        `;
        db_name.query(sql, function (err, result) {
        if (err) throw err;
        res.redirect("/show");
        });
       
      });
  });
  

  app.get('/delete/:id', function (req, res) {
    let id_no = req.params.id;
    let db_name = db_credentials.db_connect();
    db_name.connect(function(err) {
        console.log("Hello");
        if (err) throw err;
        let sql = `DELETE FROM timeSheet WHERE id = "${id_no}"`;
        db_name.query(sql, function (err, result) {
        if (err) throw err;
        res.redirect('/show');
        });
      });
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});