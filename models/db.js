const mysql = require("mysql");
const express=require('express');
//const dbConfig = require("../config/db.config.js");

const dbConfig=require("../config/config.db");

var con = mysql.createConnection({
    host: "15.206.6.55",
    user: "hourlyrooms",
    password: "Hourlyr0Oms@1584",
    database: "jaymalha_hourooms" 
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  module.exports = con;