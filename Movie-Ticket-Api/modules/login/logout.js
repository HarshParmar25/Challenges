module.exports = {
  logOut: (req, res) => {
    req.session.destroy();
    res.status(200).json({ success: true, message: "You are logged out" });
  },
};
