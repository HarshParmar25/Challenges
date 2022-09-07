const { getCinemaService, addCinemaService, editCinemaService, removeCinemaService } = require("./cinema.model.js");

module.exports = {
  getCinema: async (req, res, next) => {
    try {
      const result = await getCinemaService();
      return res.json({
        success: true,
        data: result[0],
      });
    } catch (err) {
      return res.json({
        success: false,
        data: err,
      });
    }
  },

  addCinema: async (req, res, next) => {
    const { code, name, city_id, address } = req.body;
    try {
      const result = await addCinemaService(code, name, city_id, address);
      return res.json({
        success: true,
        insertId: result[0].insertId,
        message: "Cinema added successfully",
      });
    } catch (err) {
      return res.json({
        success: false,
        data: err,
      });
    }
  },
  editCinema: async (req, res, next) => {
    const { code, name, city_id, address, id } = req.body;
    try {
      const result = await editCinemaService(code, name, city_id, address, id);
      return res.json({
        success: true,
        message: "Cinema updated successfully",
      });
    } catch (err) {
      return res.json({
        success: false,
        data: err,
      });
    }
  },
  removeCinema: async (req, res, next) => {
    const id = req.body.id;
    try {
      const result = await removeCinemaService(id);
      return res.json({
        success: true,
        message: result[0].affectedRows ? "Cinema deleted successfully" : "Cinema not found",
      });
    } catch (err) {
      return res.json({
        success: false,
        data: err,
      });
    }
  },
};
