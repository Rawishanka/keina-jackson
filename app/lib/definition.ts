export type Status = "Hindu" | "Christian" | "HinduChristian" | "No" ;
export interface ReservationData {
  Name: string;
  Phone: string;
  Status: Status;
  Guests:Number;
  Message: string;
}
export interface ReservationListData {
  Id: Number;
  Name: string;
  Phone: string;
  Status: Status;
  Guests:Number;
  Message: string;
}