import { ResultSetHeader } from "mysql2";
import { pool } from "../db-connection/db.connect";
import { setOffsetLimit } from "../utils/limit-offset";
import { ICity } from "./city.interface";

export async function getCityService(offset: string, limit: string) {
  try {
    const LIMIT = setOffsetLimit(offset, limit);
    const results = await pool.query<ICity[]>("SELECT * FROM city ORDER BY id " + LIMIT);
    return results;
  } catch (error) {
    throw error;
  }
}

export async function addCityService(name: string, state: string) {
  try {
    const results = (await pool.query("INSERT INTO city (name, state) VALUES (?, ?)", [
      name,
      state,
    ])) as ResultSetHeader[];
    return results;
  } catch (error) {
    throw error;
  }
}

export async function editCityService(name: string, state: string, id: number) {
  try {
    const results = (await pool.query("UPDATE city SET name = ?, state = ? WHERE id = ?", [
      name,
      state,
      id,
    ])) as ResultSetHeader[];
    return results;
  } catch (error) {
    throw error;
  }
}

export async function removeCityService(id: number) {
  try {
    const results = (await pool.query("DELETE FROM city WHERE id = ?", [id])) as ResultSetHeader[];
    return results;
  } catch (error) {
    throw error;
  }
}
