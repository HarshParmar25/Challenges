"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLogin = void 0;
function checkLogin(req, res, next) {
    if (req.session.user) {
        next();
    }
    else {
        res.json({
            success: false,
            message: "You are not logged in",
        });
    }
}
exports.checkLogin = checkLogin;
