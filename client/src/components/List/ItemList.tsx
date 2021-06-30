import React, { useCallback } from "react";
// import { useHistory } from "react-router-dom";
// import Link from "next/link";
import Link from "@material-ui/core/Link";
// import Button from "@material-ui/core/Button";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";

// import dataJson from "../../data/listdata.json";

interface ListProps {
  dataList: any;
}

const columns = [
  { field: "id", headerName: "ID", width: 80 },
  { field: "offender", headerName: "Offender", width: 130 },
  { field: "victim", headerName: "Victim", width: 130 },
  { field: "time", headerName: "Time", width: 130 },
  { field: "country", headerName: "Country", width: 130 },
  { field: "city", headerName: "City", width: 130 },
  {
    field: "evidence",
    headerName: "Evidence",
    width: 260,
    sortable: false,
  },
  { field: "level", headerName: "Level(What, 언어 폭행)", width: 260 },
];

function ItemList({ dataList }: ListProps): JSX.Element {
  // console.log(dataJson);

  // const history = useHistory();
  // const handleLink = useCallback(() => history.push("/list/1"), [history]);

  const handleLink = () => {
    console.log({ dataList }, "onRowLick");
    // return <Link href={`/list/${dataList.id}`}></Link>;
  };

  return (
    <>
      <Link href={`/list/1`}>
        Link Test 'list/1'
        {/* <Button component="a">// other component ...</Button> */}
      </Link>
      {/* <p> This is {dataList} datalistid in Listitem</p> */}
      {/* <Link href={`/list/${dataList.id}`}> */}
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={dataList}
          columns={columns}
          // loading
          hideFooterSelectedRowCount
          // checkboxSelection
          onRowClick={handleLink}
          // onRowSelected={handleLink}
        />
      </div>
      {/* </Link> */}
    </>
  );
}

export default ItemList;
