var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'donut2.cwmvcgt1jgye.us-east-1.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password:'coughing',
    database: 'foodsqr'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected To DB');
});
module.exports = connection;