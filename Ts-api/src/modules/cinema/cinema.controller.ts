import { NextFunction, Request, Response } from "express";
import { getCinemaService, addCinemaService, editCinemaService, removeCinemaService } from "./cinema.model";

interface GetCinema {
  offset: string;
  limit: string;
}
interface AddCinema {
  code: string;
  name: string;
  city_id: number;
  address: string;
}
interface EditCinema {
  code: string;
  name: string;
  city_id: number;
  address: string;
  id: number;
}
interface RemoveCinema {
  id: number;
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

async function addCinema(req: Request<{}, {}, AddCinema>, res: Response, next: NextFunction) {
  const { code, name, city_id, address } = req.body;
  try {
    const result = await addCinemaService(code, name, city_id, address);
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
async function editCinema(req: Request<{}, {}, EditCinema>, res: Response, next: NextFunction) {
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
async function removeCinema(req: Request<{}, {}, RemoveCinema>, res: Response, next: NextFunction) {
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
