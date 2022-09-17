import { getCityService, addCityService, editCityService, removeCityService } from "./city.model";
import { Request, Response, NextFunction } from "express";

export async function getCity(req: Request, res: Response, next: NextFunction) {
  try {
    const { offset, limit } = req.query;
    const result = await getCityService(offset, limit);
    return res.json({
      success: true,
      data: result[0],
    });
  } catch (err) {
    return res.json({
      success: false,
      data: err,
    });
  }
}

export async function addCity(req: Request, res: Response, next: NextFunction) {
  const { name, state } = req.body;
  try {
    const result = await addCityService(name, state);
    return res.json({
      success: true,
      insertId: result[0].insertId,
      message: "City added successfully",
    });
  } catch (err) {
    return res.json({
      success: false,
      data: err,
    });
  }
}

export async function editCity(req: Request, res: Response, next: NextFunction) {
  const { name, state, id } = req.body;

  try {
    const result = await editCityService(name, state, id);
    return res.json({
      success: true,
      message: "City updated successfully",
    });
  } catch (err) {
    return res.json({
      success: false,
      data: err,
    });
  }
}

export async function removeCity(req: Request, res: Response, next: NextFunction) {
  const id = req.body.id;

  try {
    const result = await removeCityService(id);
    return res.json({
      success: true,
      message: result[0].affectedRows ? "City deleted successfully" : "City not found",
    });
  } catch (err) {
    return res.json({
      success: false,
      data: err,
    });
  }
}
