"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authoriseAdmin = void 0;
function authoriseAdmin(req, res, next) {
    if (req.session.user)
        if (req.session.user.role === "admin") {
            next();
        }
        else {
            res.json({
                success: false,
                message: "You are not logged in as admin",
            });
        }
}
exports.authoriseAdmin = authoriseAdmin;
