import { Request, Response } from "express";

export function logOut(req: Request, res: Response) {
  req.session.destroy((err) => {
    if (err) {
      return res.json({
        success: false,
        message: "Error logging out",
      });
    }
    res.status(200).json({ success: true, message: "You are logged out" });
  });
}
