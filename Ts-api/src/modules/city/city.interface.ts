export interface GetCity {
  offset: string;
  limit: string;
}
export interface AddCity {
  name: string;
  state: string;
}
export interface EditCity {
  name: string;
  state: string;
  id: number;
}
export interface RemoveCity {
  id: number;
}

export interface ICity {
  constructor: {
    name: "RowDataPacket";
  };
  id: number;
  name: string;
  state: string;
}
