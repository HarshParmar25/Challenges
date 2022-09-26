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

module.exports = CaseChange;


	static decodeQueryParams(queryParams: string): Record<string, string> {
		if(queryParams[0] === '?') {
			queryParams = queryParams.slice(1);
		}
		queryParams = decodeURIComponent(queryParams);
		const result: Record<string, string> = {};
		const params = queryParams.split('&');
		params.forEach((param) => {
			const [key, value] = param.split('=');
			result[key] = value;
		});
		return result;
     	}
    
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     	static generateQueryParams(data:Record<string,any>):string{
		const result = Object.keys(data).map((key) => {
			if (Array.isArray(data[key])) {
				return data[key].map((item: string) => `${key}=${encodeURI(item)}`).join('&');
			}
			return `${key}=${encodeURI(data[key])}`;
			}).join('&');
		return `?${result}`
     	}