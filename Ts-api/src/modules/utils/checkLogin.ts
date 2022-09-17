import { Request, Response, NextFunction } from "express";

export function checkLogin(req: Request, res: Response, next: NextFunction) {
  if (req.session.user) {
    next();
  } else {
    res.json({
      success: false,
      message: "You are not logged in",
    });
  }
}
