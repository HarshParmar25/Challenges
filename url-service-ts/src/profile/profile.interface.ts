interface IState {
  state: string;
}
interface ICity {
  state: string;
  city: string;
  cityId: number;
}
interface IRegion {
  state: string;
  region: string;
  regionId: number;
}
interface ISuburb {
  state: string;
  suburb: string;
  postalCode: number;
}

export { IState, ICity, IRegion, ISuburb };
