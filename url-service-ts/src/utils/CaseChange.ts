export default class CaseChange {
  static slugify<T>(data: { [x: string]: any }): T {
    for (let key in data) {
      if (typeof data[key] === "string") {
        data[key] = CaseChange.toLowerCase(data[key]);
      }
      if (Array.isArray(data[key])) {
        data[key] = CaseChange.toLowerCaseDataset(data[key]);
      }
    }
    return data as T;
  }

  private static toLowerCase(str: string): string {
    str = str.replace(/[^a-zA-Z0-9]/g, " ");
    return str.replace(/\s+/g, "-").toLowerCase();
  }

  private static toLowerCaseDataset(data: string[]): string[] {
    return data.map((ele) => this.toLowerCase(ele));
  }

  private static toUpperCase(str: string): string {
    str = str.replace(/(?<=\b)\w/g, (match) => match.toUpperCase());
    return str.replace(/-/g, " ");
  }

  private static toUpperCaseDataset(data: string[]): string[] {
    return data.map((ele) => this.toUpperCase(ele));
  }
}
