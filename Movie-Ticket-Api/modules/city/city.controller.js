const { getCityService, addCityService, editCityService, removeCityService } = require("./city.model.js");

module.exports = {
  getCity: async (req, res, next) => {
    try {
      console.log(req.session);

      const { offset, limit } = req.query;
      const result = await getCityService(offset, limit);
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

  addCity: async (req, res, next) => {
    const { name, state } = req.body;
    try {
      const result = await addCityService(name, state);
      return res.json({
        success: true,
        insertId: result[0].insertId,
        message: "City added successfully",
      });
    } catch (err) {
      return res.json({
        success: false,
        data: err,
      });
    }
  },

  editCity: async (req, res, next) => {
    const { name, state, id } = req.body;

    try {
      const result = await editCityService(name, state, id);
      return res.json({
        success: true,
        message: "City updated successfully",
      });
    } catch (err) {
      return res.json({
        success: false,
        data: err,
      });
    }
  },

  removeCity: async (req, res, next) => {
    const id = req.body.id;

    try {
      const result = await removeCityService(id);
      return res.json({
        success: true,
        message: result[0].affectedRows ? "City deleted successfully" : "City not found",
      });
    } catch (err) {
      return res.json({
        success: false,
        data: err,
      });
    }
  },
};
