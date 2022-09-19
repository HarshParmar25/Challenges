import CaseChange from "../utils/CaseChange";

interface IAgencyUrl {
  agencyName: string;
  suburb: string;
  agencyId: number;
}

export class Agency {
  static getAgencyId(url: string): number | void {
    const agencyIdSlug = url.match(/-(\d+)\//);

    if (agencyIdSlug) return +agencyIdSlug[1];
  }

  static getAgencyUrl({ agencyName, suburb, agencyId }: IAgencyUrl): string {
    agencyName = CaseChange.toLowerCase(agencyName);
    suburb = CaseChange.toLowerCase(suburb);
    const baseUrl = `https://www.realestateview.com.au/real-estate-agency/`;
    return `${baseUrl}${agencyName}-${suburb}-${agencyId}/`;
  }
}