"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agency = void 0;
const CaseChange_1 = __importDefault(require("../utils/CaseChange"));
class Agency {
    static getAgencyId(url) {
        const agencyIdSlug = url.match(/-(\d+)\//);
        if (agencyIdSlug)
            return +agencyIdSlug[1];
    }
    static getAgencyUrl({ agencyName, suburb, agencyId }) {
        agencyName = CaseChange_1.default.toLowerCase(agencyName);
        suburb = CaseChange_1.default.toLowerCase(suburb);
        const baseUrl = `https://www.realestateview.com.au/real-estate-agency/`;
        return `${baseUrl}${agencyName}-${suburb}-${agencyId}/`;
    }
}
exports.Agency = Agency;
