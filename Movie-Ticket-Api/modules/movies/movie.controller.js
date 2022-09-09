const {
  getAllMoviesService,
  getMovieByNameService,
  getMoviesByYearService,
  getMoviesInCinemaService,
  getSeatingPlanService,
} = require("./movie.model.js");

module.exports = {
  getAllMovies: async (req, res) => {
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
  },

  getMovieByName: async (req, res) => {
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
  },

  getMoviesByYear: async (req, res) => {
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
  },

  getMoviesInCinema: async (req, res) => {
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
  },

  getSeatingPlan: async (req, res) => {
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
  },
};
