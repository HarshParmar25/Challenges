import { topActorsService } from "./actors.model";
import { Request, Response } from "express";

export async function getTopActors(req: Request, res: Response) {
  try {
    const actors = await topActorsService();
    res.json({
      success: true,
      data: actors[0],
    });
  } catch (err) {
    res.json({
      success: false,
      data: err,
    });
  }
}
