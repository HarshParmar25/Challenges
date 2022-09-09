const { getUserInfo } = require("../login/login.model.js");

module.exports = {
  userLogIn: async (req, res, next) => {
    const { username, password } = req.body;
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
        message: "Login successful",
      });
    }
  },
};
