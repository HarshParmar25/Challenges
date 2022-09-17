import { pool } from "../db-connection/db.connect.js";

export function getUserInfo(username: string, password: string): Promise<any> {
  const sql = `SELECT * FROM users WHERE username = ? AND password = ?`;
  return pool.query(sql, [username, password]);
}
