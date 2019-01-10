const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const sql = require("mssql");
const promise = require("promise");
const config = require("./SqlConfig");

var q1, q2, q3;

app.use((req, res, next) =>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  // line above allows access to all domains, while line below allows access to only certain headers
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //this line allows http methods, options is usually implicitly sent before things like a post, to see if a post will work
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.use(bodyParser.json());

app.get('/home',(req, res, next) => {
  sql.close();
    sql.connect(config, function (err) {
      if(err) console.log(err);
      var request = new sql.Request();
      let query1 = "exec GetRecentArticles;";
      let query2 = "exec GetRecentBio;";
      request.query(query1, (err, recordset) =>{
        if(err){
          console.log(err);
          sql.close();
        }
        this.q1 = recordset;
        request.query(query2, (err, recordset2) =>{
          if(err){
            console.log(err);
            sql.close();
          }
          this.q2 = recordset2;
          sql.close();
          res.send({articles: this.q1, bio: this.q2});
        });
      });
  });
});

app.get('/home/:id',(req, res, next) => {
  sql.close();
  var id = req.params.id;
  sql.connect(config, function (err) {
    if(err) console.log(err);
    var request = new sql.Request();
    var query = "SELECT id, type, author, date, title, subtitle, CONCAT(content1, coalesce(content2, ''), coalesce(content3, ''), coalesce(content4, '')) as content FROM articles WHERE id = " + id;
    request.query(query, (err, recordset) => {
      if(err) console.log(err);
      // console.log(recordset);
      sql.close();
      res.send(recordset);
    });
  });
});

app.get('/sociology',(req, res, next) => {
  sql.close();
  sql.connect(config, function (err) {
    if(err) console.log(err);
    var request = new sql.Request();
    let query1 = "exec GetSocArticles;";
    let query2 = "exec GetSocBooks;";
    let query3 = "exec GetSocLinks;";
    request.query(query1, (err, recordset) =>{
      if(err){
        console.log(err);
        sql.close();
      }
      this.q1 = recordset;
      request.query(query2, (err, recordset2) =>{
        if(err){
          console.log(err);
          sql.close();
        }
        this.q2 = recordset2;
        request.query(query3, (err, recordset3) =>{
          if(err){
            console.log(err);
            sql.close();
          }
          this.q3 = recordset3;
          sql.close();
          // console.log(this.q1, this.q2, this.q3);
          res.send({articles: this.q1, books: this.q2, links: this.q3});
        });
      });
    });
});
});

app.get('/sociology/:id',(req, res, next) => {
  sql.close();
  var id = req.params.id;
  sql.connect(config, function (err) {
    if(err) console.log(err);
    var request = new sql.Request();
    var query = "SELECT id, type, author, date, title, subtitle, CONCAT(content1, coalesce(content2, ''), coalesce(content3, ''), coalesce(content4, '')) as content FROM articles WHERE id = " + id;
    request.query(query, (err, recordset) => {
      if(err) console.log(err);
      // console.log(recordset);
      sql.close();
      res.send(recordset);
    });
  });
});

app.get('/srilanka',(req, res, next) => {
  sql.close();
  sql.connect(config, function (err) {
    if(err) console.log(err);
    var request = new sql.Request();
    let query1 = "exec GetSLArticles;";
    let query2 = "exec GetSLVideos;";
    request.query(query1, (err, recordset) =>{
      if(err){
        console.log(err);
        sql.close();
      }
      this.q1 = recordset;
      request.query(query2, (err, recordset2) =>{
        if(err){
          console.log(err);
          sql.close();
        }
        this.q2 = recordset2;
        sql.close();
        res.send({articles: this.q1, videos: this.q2});
      });
    });
});
});

app.get('/srilanka/:id',(req, res, next) => {
  sql.close();
  var id = req.params.id;
  sql.connect(config, function (err) {
    if(err) console.log(err);
    var request = new sql.Request();
    var query = "SELECT id, type, author, date, title, subtitle, CONCAT(content1, coalesce(content2, ''), coalesce(content3, ''), coalesce(content4, '')) as content FROM articles WHERE id = " + id;
    request.query(query, (err, recordset) => {
      if(err) console.log(err);
      // console.log(recordset);
      sql.close();
      res.send(recordset);
    });
  });
});

app.post('/secure/login',(req, res) => {
  sql.close();
  var user = req.body.username;
  var pass = req.body.password;
  sql.connect(config, function (err) {
    if(err) console.log(err);
    var request = new sql.Request();
    var query = "SELECT count(id) as success FROM users WHERE username = '" + user + "' and password = '" + pass + "'";
    request.query(query, (err, recordset) => {
      if(err) console.log(err);
      sql.close();
      res.send(recordset);
    });
  });
});

module.exports = app;
