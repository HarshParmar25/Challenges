import {
  topCustomersService,
  getCinemawiseBookingService,
  getUniqueCustomerService,
  getCinemaAndMovieWiseBookingService,
} from "../reports/reports.model";
import { Request, Response } from "express";

export async function topCustomers(req: Request, res: Response) {
  try {
    const customers = await topCustomersService();
    res.json({
      success: true,
      data: customers[0],
    });
  } catch (err) {
    res.json({
      success: false,
      data: err,
    });
  }
}

export async function getCinemawiseBooking(req: Request, res: Response) {
  try {
    const bookings = await getCinemawiseBookingService();
    res.json({
      success: true,
      data: bookings[0],
    });
  } catch (err) {
    res.json({
      success: false,
      data: err,
    });
  }
}

export async function getUniqueCustomer(req: Request, res: Response) {
  try {
    const { offset, limit } = req.query;
    const customers = await getUniqueCustomerService(offset, limit);
    res.json({
      success: true,
      data: customers[0],
    });
  } catch (err) {
    res.json({
      success: false,
      data: err,
    });
  }
}

export async function getCinemaAndMovieWiseBooking(req: Request, res: Response) {
  try {
    const { cinemaid, movieid, offset, limit } = req.query;
    const bookings = await getCinemaAndMovieWiseBookingService(cinemaid, movieid, offset, limit);
    res.json({
      success: true,
      data: bookings[0],
    });
  } catch (err) {
    res.json({
      success: false,
      data: err,
    });
  }
}
