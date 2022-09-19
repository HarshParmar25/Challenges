export default class CaseChange {
  static toUpperCase(str: string): string {
    str = str.replace(/(?<=\b)\w/g, (match) => match.toUpperCase());
    return str.replace(/-/g, " ");
  }

  static toLowerCase(str: string): string {
    str = str.replace(/[^a-zA-Z0-9]/g, " ");
    return str.replace(/\s+/g, "-").toLowerCase();
  }

  static toUpperCaseDataset(data: string[]): string[] {
    return data.map((ele) => this.toUpperCase(ele));
  }

  static toLowerCaseDataset(data: string[]): string[] {
    return data.map((ele) => this.toLowerCase(ele));
  }
}

