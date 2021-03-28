import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "offender", headerName: "Offender", width: 130 },
  { field: "victim", headerName: "Victim", width: 130 },
  { field: "when", headerName: "When", width: 130 },
  { field: "country", headerName: "Country", width: 130 },
  { field: "city", headerName: "City", width: 130 },
  { field: "evidence", headerName: "Evidence", width: 260 },
];

const rows = [
  {
    id: 1,
    offender: "black women",
    victim: "asian women",
    when: "2020-01-01",
    country: "USA",
    city: "Atlanta",
    evidence: "https://youtu.be/dWehG6U2JOo",
  },
  {
    id: 2,
    victim: "Lannister",
    offender: "Cersei",
    country: "USA",
    city: "newyork",
  },
  {
    id: 3,
    victim: "Lannister",
    offender: "Jaime",
    country: "Germany",
    city: "",
  },
  {
    id: 4,
    victim: "Stark",
    offender: "Arya",
    country: "France",
    city: "Paris",
  },
  {
    id: 5,
    victim: "Targaryen",
    offender: "Daenerys",
    country: "Germany",
    city: "Leipzig",
  },
];

export default function List() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
