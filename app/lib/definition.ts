export type Status = "Hindu" | "Christian" | "HinduChristian" | "No" |null;
export interface ReservationData {
  Name: string;
  Email: string;
  Status: Status;
  Message: string;
}