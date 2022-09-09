module.exports = {
  authoriseAdmin: (req, res, next) => {
    if (req.session.user[0].role === "admin") {
      next();
    } else {
      res.json({
        success: false,
        message: "You are not logged in as admin",
      });
    }
  },
};
