require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: "root",//process.env.DB_USER,
  password: "1234Arroz!",//process.env.DB_PASS,
  database: "companydb",//process.env.DB_NAME,
  port: "3306", // replace with your port number
  multipleStatements: true

});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }else{
  
  console.log('Connected to MySQL!');
  }
});

module.exports = connection;

