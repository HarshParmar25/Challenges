module.exports = {
  checkLogin: (req, res, next) => {
    if (req.session.user) {
      next();
    } else {
      res.json({
        success: false,
        message: "You are not logged in",
      });
    }
  },
};
