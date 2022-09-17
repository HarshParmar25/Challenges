import mysql from "mysql2";
let pool = mysql
  .createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "mark",
    database: "ticketbooking",
  })
  .promise();

export { pool };
