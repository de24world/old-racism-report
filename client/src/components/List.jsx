import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import rows from "../../data/listdata.json";

const columns = [
  { field: "offender", headerName: "Offender", width: 130 },
  { field: "victim", headerName: "Victim", width: 130 },
  { field: "when", headerName: "When", width: 130 },
  { field: "country", headerName: "Country", width: 130 },
  { field: "city", headerName: "City", width: 130 },
  { field: "evidence", headerName: "Evidence", width: 260 },
  { field: "level", headerName: "Level", width: 260 },
];

export default function List() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
