import { Request, Response } from "express";
import {
  getAllMoviesService,
  getMovieByNameService,
  getMoviesByYearService,
  getMoviesInCinemaService,
  getSeatingPlanService,
} from "./movie.model";

interface GetMovies {
  cityid: string;
  offset: string;
  limit: string;
}

interface GetMoviesByName {
  name: string;
  offset: string;
  limit: string;
}

interface GetMoviesByYear {
  year: string;
  offset: string;
  limit: string;
}

interface GetMoviesInCinema {
  id: string;
  offset: string;
  limit: string;
}

interface GetSeatingPlan {
  cityid: string;
  movieid: string;
  cinemaid: string;
  cinemahallid: string;
  showid: string;
  offset: string;
  limit: string;
}

export async function getAllMovies(req: Request<{}, {}, {}, GetMovies>, res: Response) {
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

export async function getMovieByName(req: Request<{}, {}, {}, GetMoviesByName>, res: Response) {
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

export async function getMoviesByYear(req: Request<{}, {}, {}, GetMoviesByYear>, res: Response) {
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

export async function getMoviesInCinema(req: Request<{}, {}, {}, GetMoviesInCinema>, res: Response) {
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

export async function getSeatingPlan(req: Request<{}, {}, {}, GetSeatingPlan>, res: Response) {
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
