"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slugify = void 0;
function slugify(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, " ");
    return str.replace(/\s+/g, "-").toLowerCase();
}
exports.slugify = slugify;
function slugToName(str) {
    str = str.replace(/(?<=\b)\w/g, (match) => match.toUpperCase());
    return str.replace(/-/g, " ");
}
