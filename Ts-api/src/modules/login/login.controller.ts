import { getUserInfo } from "../login/login.model";
import { Request, Response, NextFunction } from "express";
import { SessionData } from "express-session";

declare module "express-session" {
  interface SessionData {
    user: { username: string; password: string; role: string };
  }
}

export async function userLogIn(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;
  const result = await getUserInfo(username, password);
  if (result[0].length === 0) {
    res.status(400).json({
      success: false,
      message: "Invalid username or password",
    });
  } else {
    req.session.user = result[0][0];
    res.status(200).json({
      success: true,
      message: "Login successful",
    });
  }
}
