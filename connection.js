const mysql = require('mysql');

// create here mysql connection
var dbConn = mysql.createConnection({
    // host : process.env.DB_HOST,
    // user : process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME

    host : 'localhost',
    user : 'root',
    password: 'Root@123',
    database: 'nodecrud'
});

dbConn.connect(function (err){
    if(err) throw err;
    console.log("Database Connected!");
});

module.exports = dbConn;

