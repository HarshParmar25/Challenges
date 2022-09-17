export interface GetMovies {
  cityid: string;
  offset: string;
  limit: string;
}

export interface GetMoviesByName {
  name: string;
  offset: string;
  limit: string;
}

export interface GetMoviesByYear {
  year: string;
  offset: string;
  limit: string;
}

export interface GetMoviesInCinema {
  id: string;
  offset: string;
  limit: string;
}

export interface GetSeatingPlan {
  cityid: string;
  movieid: string;
  cinemaid: string;
  cinemahallid: string;
  showid: string;
  offset: string;
  limit: string;
}

export interface IMovieService {
  constructor: {
    name: "RowDataPacket";
  };
  id: number;
  name: string;
  release_date: string;
  duration: string;
  description: string;
  certificate: string;
}

export interface IMoviesByNameService {
  constructor: {
    name: "RowDataPacket";
  };
  id: number;
  name: string;
  release_date: string;
  poster?: string;
  trailer?: string;
  duration: string;
  description: string;
  certificate: string;
}

export interface IMovieByYearService {
  constructor: {
    name: "RowDataPacket";
  };
  id: number;
  name: string;
  release_date: string;
  duration: string;
  description: string;
  certificate: string;
}


export interface ISeatingService {
  constructor: {
    name: "RowDataPacket";
  };
  id: number;
  number: string;
  row_id: number;
  status: string;
  price: number;
}