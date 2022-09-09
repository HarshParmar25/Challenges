const {
  topCustomersService,
  getCinemawiseBookingService,
  getUniqueCustomerService,
  getCinemaAndMovieWiseBookingService,
} = require("../reports/reports.model.js");

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
      const { id, offset, limit } = req.query;
      const bookings = await getCinemawiseBookingService(id, offset, limit);
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
  },

  getCinemaAndMovieWiseBooking: async (req, res) => {
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
  },
};
