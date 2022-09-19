"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CaseChange {
    static toUpperCase(str) {
        str = str.replace(/(?<=\b)\w/g, (match) => match.toUpperCase());
        return str.replace(/-/g, " ");
    }
    static toLowerCase(str) {
        str = str.replace(/[^a-zA-Z0-9]/g, " ");
        return str.replace(/\s+/g, "-").toLowerCase();
    }
    static toUpperCaseDataset(data) {
        return data.map((ele) => this.toUpperCase(ele));
    }
    static toLowerCaseDataset(data) {
        return data.map((ele) => this.toLowerCase(ele));
    }
}
exports.default = CaseChange;
