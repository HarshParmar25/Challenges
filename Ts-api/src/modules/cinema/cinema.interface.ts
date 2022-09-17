export interface ICinema {
  constructor: {
    name: "RowDataPacket";
  };
  id: number;
  name: string;
  code: string;
  city_id: number;
  address: string;
}

export interface GetCinema {
  offset: string;
  limit: string;
}
export interface AddCinema {
  code: string;
  name: string;
  city_id: number;
  address: string;
}
export interface EditCinema {
  code: string;
  name: string;
  city_id: number;
  address: string;
  id: number;
}
export interface RemoveCinema {
  id: number;
}