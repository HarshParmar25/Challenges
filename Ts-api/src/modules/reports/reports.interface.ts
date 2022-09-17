export interface ITopCustomers {
  constructor: {
    name: "RowDataPacket";
  };
  id: number;
  name: string;
  mobile_no: number;
  email_id: string;
  total: number;
}

export interface ICinemawiseBookingService {
  constructor: {
    name: "RowDataPacket";
  };
  "cinema-id": number;
  "total-bookings": number;
}

export interface IUniqueCustomerService {
  constructor: {
    name: "RowDataPacket";
  };
  id: number;
  name: string;
  mobile_no: number;
  email_id: string;
}

export interface ICinemaAndMovieWiseBookingService {
  constructor: {
    name: "RowDataPacket";
  };
  id: number;
  name: string;
  email_id: string;
  booking_id: string;
}
