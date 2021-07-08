export interface IDataProps {
  id: number;
  offender: string;
  victim: string;
  time: string;
  // change to time type
  country: string;
  countryCode: string;
  city: string;
  evidence: string;
  level: "1" | "2" | "3";
  // change to 1 | 2 | 3
}
