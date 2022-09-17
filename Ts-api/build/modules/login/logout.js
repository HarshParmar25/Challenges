"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logOut = void 0;
function logOut(req, res) {
    req.session.destroy((err) => {
        if (err) {
            return res.json({
                success: false,
                message: "Error logging out",
            });
        }
        res.status(200).json({ success: true, message: "You are logged out" });
    });
}
exports.logOut = logOut;
