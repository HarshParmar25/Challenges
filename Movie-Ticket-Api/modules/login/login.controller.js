const { getUserInfo, getAdminInfo } = require("../login/login.model.js");

module.exports = {
  userLogIn: async (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({
        success: false,
        message: "Please provide username and password",
      });
    }

    const result = await getUserInfo(username, password);
    if (result[0].length === 0) {
      res.status(400).json({
        success: false,
        message: "Invalid username or password",
      });
    } else {
      req.session.user = result[0];
      res.status(200).json({
        success: true,
        message: "Login successful (user)",
      });
    }
  },

  adminLogIn: async (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({
        success: false,
        message: "Please provide username and password",
      });
    }

    const result = await getAdminInfo(username, password);
    if (result.length[0] === 0) {
      res.status(400).json({
        success: false,
        message: "Invalid username or password",
      });
    } else {
      req.session.admin = result[0];
      res.status(200).json({
        success: true,
        message: "Login successful (admin)",
      });
    }
  },
};
