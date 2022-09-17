import { pool } from "../db-connection/db.connect";
import { setOffsetLimit } from "../utils/limit-offset";
import { NextFunction, Request, Response } from "express";
import { ResultSetHeader } from "mysql2";
import { ICinema } from "./cinema.interface";

export async function getCinemaService(offset: string, limit: string) {
  try {
    const LIMIT = setOffsetLimit(offset, limit);
    const results = await pool.query<ICinema[]>("SELECT * FROM cinema ORDER BY id " + LIMIT);
    return results;
  } catch (error) {
    throw error;
  }
}

export async function addCinemaService(code: string, name: string, city_id: number, address: string) {
  try {
    const results = (await pool.query("INSERT INTO cinema (code,name,city_id,address) VALUES (?, ?, ?, ?)", [
      code,
      name,
      city_id,
      address,
    ])) as ResultSetHeader[];
    return results;
  } catch (error) {
    throw error;
  }
}

export async function editCinemaService(code: string, name: string, city_id: number, address: string, id: number) {
  try {
    const results = (await pool.query("UPDATE cinema SET code = ?, name = ?, city_id = ?, address = ? WHERE id = ?", [
      code,
      name,
      city_id,
      address,
      id,
    ])) as ResultSetHeader[];
    return results;
  } catch (error) {
    throw error;
  }
}

export async function removeCinemaService(id: number) {
  try {
    const results = (await pool.query("DELETE FROM cinema WHERE id = ?", [id])) as ResultSetHeader[];
    return results;
  } catch (error) {
    throw error;
  }
}
