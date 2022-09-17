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

// const executeQuery = <T>(query: string, params: string[] | Object): Promise<T> => {
//   return new Promise<T>(async (resolve, reject) => {
//     try {
//       const results = (await pool.query(query, params)) as T;
//       resolve(results);
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

export { pool };
