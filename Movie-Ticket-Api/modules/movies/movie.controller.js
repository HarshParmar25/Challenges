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
      const movies = await getAllMoviesService(req.body.city_id);
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
      const movie = await getMovieByNameService(req.params.name);
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
      const movies = await getMoviesByYearService(req.params.year);
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
      const movies = await getMoviesInCinemaService(req.body.id);
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
      const { city_id, movie_id, cinema_id, cinema_hall_id } = req.body;
      const seatingPlan = await getSeatingPlanService(city_id, movie_id, cinema_id, cinema_hall_id);
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
