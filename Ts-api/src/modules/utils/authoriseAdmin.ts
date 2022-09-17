import { Request, Response, NextFunction } from "express";

export function authoriseAdmin(req: Request, res: Response, next: NextFunction) {
  if (req.session.user)
    if (req.session.user.role === "admin") {
      next();
    } else {
      res.json({
        success: false,
        message: "You are not logged in as admin",
      });
    }
}
