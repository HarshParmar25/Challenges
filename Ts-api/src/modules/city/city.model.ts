import { pool } from "../db-connection/db.connect";
import { setOffsetLimit } from "../utils/limit-offset";

export function getCityService(offset: any, limit: any): Promise<any> {
  const LIMIT = setOffsetLimit(offset, limit);
  return pool.query("SELECT * FROM city ORDER BY id " + LIMIT);
}

export function addCityService(name: string, state: string): Promise<any> {
  return pool.query("INSERT INTO city (name, state) VALUES (?, ?)", [name, state]);
}

export function editCityService(name: string, state: string, id: number): Promise<any> {
  return pool.query("UPDATE city SET name = ?, state = ? WHERE id = ?", [name, state, id]);
}

export function removeCityService(id: number): Promise<any> {
  return pool.query("DELETE FROM city WHERE id = ?", [id]);
}
