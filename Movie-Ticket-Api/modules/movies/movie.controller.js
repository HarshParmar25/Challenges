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
      const { offset, limit } = req.query;
      const movies = await getAllMoviesService(req.body.city_id, offset, limit);
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
      const { offset, limit } = req.query;
      const movie = await getMovieByNameService(req.params.name, offset, limit);
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
      const { offset, limit } = req.query;
      const movies = await getMoviesByYearService(req.params.year, offset, limit);
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
      const { offset, limit } = req.query;
      const movies = await getMoviesInCinemaService(req.body.id, offset, limit);
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
      const { offset, limit } = req.query;
      const { city_id, movie_id, cinema_id, cinema_hall_id } = req.body;
      const seatingPlan = await getSeatingPlanService(city_id, movie_id, cinema_id, cinema_hall_id, offset, limit);
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
