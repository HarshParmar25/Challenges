const { topActorsService } = require("../actors/actors.model.js");

module.exports = {
  getTopActors: async (req, res) => {
    try {
      const actors = await topActorsService();
      res.json({
        success: true,
        data: actors[0],
      });
    } catch (err) {
      res.json({
        success: false,
        data: err,
      });
    }
  },
};
