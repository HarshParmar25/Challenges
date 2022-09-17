import { NextFunction, Request, Response } from "express";
import { getCinemaService, addCinemaService, editCinemaService, removeCinemaService } from "./cinema.model";

interface GetCinema {
  offset: string;
  limit: string;
}

async function getCinema(req: Request<{}, {}, {}, GetCinema>, res: Response, next: NextFunction) {
  try {
    const { offset, limit } = req.query;
    const result = await getCinemaService(offset, limit);
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

async function addCinema(req: Request, res: Response, next: NextFunction) {
  const { code, name, city_id, address } = req.body;
  try {
    const result = await addCinemaService<{ insertId: string }>(code, name, city_id, address);
    return res.json({
      success: true,
      insertId: result[0].insertId,
      message: "Cinema added successfully",
    });
  } catch (err) {
    return res.json({
      success: false,
      data: err,
    });
  }
}
async function editCinema(req: Request, res: Response, next: NextFunction) {
  const { code, name, city_id, address, id } = req.body;
  try {
    const result = await editCinemaService(code, name, city_id, address, id);
    return res.json({
      success: true,
      message: "Cinema updated successfully",
    });
  } catch (err) {
    return res.json({
      success: false,
      data: err,
    });
  }
}
async function removeCinema(req: Request, res: Response, next: NextFunction) {
  const id = req.body.id;
  try {
    const result = await removeCinemaService(id);
    return res.json({
      success: true,
      message: result[0].affectedRows ? "Cinema deleted successfully" : "Cinema not found",
    });
  } catch (err) {
    return res.json({
      success: false,
      data: err,
    });
  }
}

export { addCinema, editCinema, getCinema, removeCinema };
