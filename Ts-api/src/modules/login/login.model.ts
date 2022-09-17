import { pool } from "../db-connection/db.connect.js";

interface IUser {
  constructor: {
    name: "RowDataPacket";
  };
  id: number;
  username: string;
  password: string;
  role: string;
}

export async function getUserInfo(username: string, password: string): Promise<any> {
  try {
    const results = await pool.query<IUser[]>(`SELECT * FROM users WHERE username = ? AND password = ?`, [
      username,
      password,
    ]);
    return results;
  } catch (error) {
    throw error;
  }
}
