interface IStateProfile {
  state: string;
}
interface ICityProfile extends IStateProfile {
  city: string;
  cityId: number;
}
interface IRegionProfile extends IStateProfile {
  region: string;
  regionId: number;
}
interface ISuburbProfile extends IStateProfile {
  suburb: string;
  postalCode: number;
}

interface ILocationProfile extends Partial<ICityProfile>, Partial<IRegionProfile>, Partial<ISuburbProfile> {
  state: string;
}

export { IStateProfile, ICityProfile, IRegionProfile, ISuburbProfile, ILocationProfile };
