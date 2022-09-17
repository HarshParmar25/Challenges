import { Request, Response } from "express";

import {
  getAllMoviesService,
  getMovieByNameService,
  getMoviesByYearService,
  getMoviesInCinemaService,
  getSeatingPlanService,
} from "./movie.model";

export async function getAllMovies(req: Request, res: Response) {
  try {
    const { cityid, offset, limit } = req.query;
    const movies = await getAllMoviesService(cityid, offset, limit);
    res.json({
      success: true,
      data: movies[0],
    });
  } catch (err) {
    res.json({
      success: false,
      data: err,
    });
  }
}

export async function getMovieByName(req: Request, res: Response) {
  try {
    const { name, offset, limit } = req.query;
    const movie = await getMovieByNameService(name, offset, limit);
    res.json({
      success: true,
      data: movie[0],
    });
  } catch (err) {
    res.json({
      success: false,
      data: err,
    });
  }
}

export async function getMoviesByYear(req: Request, res: Response) {
  try {
    const { year, offset, limit } = req.query;
    const movies = await getMoviesByYearService(year, offset, limit);
    res.json({
      success: true,
      data: movies[0],
    });
  } catch (err) {
    res.json({
      success: false,
      data: err,
    });
  }
}

export async function getMoviesInCinema(req: Request, res: Response) {
  try {
    const { id, offset, limit } = req.query;
    const movies = await getMoviesInCinemaService(id, offset, limit);
    res.json({
      success: true,
      data: movies[0],
    });
  } catch (err) {
    res.json({
      success: false,
      data: err,
    });
  }
}

export async function getSeatingPlan(req: Request, res: Response) {
  try {
    const { cityid, movieid, cinemaid, cinemahallid, showid, offset, limit } = req.query;
    const seatingPlan = await getSeatingPlanService(cityid, movieid, cinemaid, cinemahallid, showid, offset, limit);
    res.json({
      success: true,
      data: seatingPlan[0],
    });
  } catch (err) {
    res.json({
      success: false,
      data: err,
    });
  }
}