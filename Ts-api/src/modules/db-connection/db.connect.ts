import mysql from "mysql2";
// let pool = mysql
//   .createPool({
//     connectionLimit: 10,
//     host: "localhost",
//     user: "root",
//     password: "mark",
//     database: "ticketbooking",
//   })
//   .promise();

let pool = mysql
  .createPool({
    connectionLimit: 10,
    host: "mysql_server",
    user: "harsh",
    password: "123456",
    database: "ticketbooking",
    port: 3306,
  })
  .promise();

export { pool };
