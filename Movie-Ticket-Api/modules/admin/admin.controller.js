const {
  topCustomersService,
  getCinemawiseBookingService,
  getUniqueCustomerService,
  getCinemaAndMovieWiseBookingService,
} = require("../admin/admin.model.js");

module.exports = {
  topCustomers: async (req, res) => {
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
  },

  getCinemawiseBooking: async (req, res) => {
    try {
      const bookings = await getCinemawiseBookingService(req.params.id);
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
  },

  getUniqueCustomer: async (req, res) => {
    try {
      const customers = await getUniqueCustomerService();
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
  },

  getCinemaAndMovieWiseBooking: async (req, res) => {
    try {
      const { cinema_id, movie_id } = req.params;
      const bookings = await getCinemaAndMovieWiseBookingService(cinema_id, movie_id);
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
  },
};
