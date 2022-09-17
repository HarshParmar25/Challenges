import { pool } from "../db-connection/db.connect";
import { setOffsetLimit } from "../utils/limit-offset";
import { NextFunction, Request, Response } from "express";
import { ResultSetHeader } from "mysql2";

export function getCinemaService(offset: string, limit: string) {
  const LIMIT = setOffsetLimit(offset, limit);
  return pool.query("SELECT * FROM cinema ORDER BY id " + LIMIT);
}

export function addCinemaService(code: string, name: string, city_id: number, address: string): Promise<any> {
  return pool.query("INSERT INTO cinema (code,name,city_id,address) VALUES (?, ?, ?, ?)", [
    code,
    name,
    city_id,
    address,
  ]);
}

export function editCinemaService(code: string, name: string, city_id: number, address: string, id: number) {
  return pool.query("UPDATE cinema SET code = ?, name = ?, city_id = ?, address = ? WHERE id = ?", [
    code,
    name,
    city_id,
    address,
    id,
  ]);
}

export function removeCinemaService(id: number): Promise<any> {
  return pool.query("DELETE FROM cinema WHERE id = ?", [id]);
}
