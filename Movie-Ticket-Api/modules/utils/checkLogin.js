module.exports = {
  checkUserLogin: (req, res, next) => {
    if (req.session.user || req.session.admin) {
      next();
    } else {
      res.json({
        success: false,
        message: "You are not logged in",
      });
    }
  },

  checkAdminLogin: (req, res, next) => {
    if (req.session.admin) {
      next();
    } else if (req.session.user) {
      res.json({
        success: false,
        message: "You are not logged in as admin",
      });
    } else {
      res.json({
        success: false,
        message: "You are not logged in",
      });
    }
  },
};
