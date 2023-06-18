// let mysql = require ('mysql');
// let connection = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'local'
// });
// connection.connect(function(error){
//     if(error)throw error;
//     console.log("connected");
// });
// // connection.query ('select*from signup',(function(err,result){
//     if(err)throw err;
//     console.warn('all result here',result);
// }));
// connection.query("CREATE DATABASE local", function (err, result) {
//     if (err) throw err;
//     console.log("Database created")});
// var sql = "CREATE TABLE customer (name VARCHAR(255), address VARCHAR(255))";
// connection.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
// //   });
// var sql = "INSERT INTO customer (name, address) VALUES ('Company Inc', 'Highway 37')";
//   connection.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
var mysql = require('mysql')
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'local'
});
con.connect(function(error){
    if (error) throw error;
    console.log("database connected")
})

// con.query('select * from customer',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('select name from local',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// var sql = 'insert into local (name,address) values ("ram","delhi")'

// con.query(sql,function(error,result){
//     if(error) throw error;
//     console.log('data inserted')
// })

var sql = 'CREATE TABLE student (id INT AUTO_INCREMENT PRIMARY KEY ,name varchar(255),email varchar (255) )'
con.query(sql,function(error,result){
    if(error) throw error;
    console.log("table created")
})