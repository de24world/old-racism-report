import * as React from "react";
import Link from "next/link";
import { DataGrid } from "@material-ui/data-grid";
// import dataJson from "../../data/listdata.json";

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

const ItemList = ({ dataList }) => {
  // console.log(dataJson);

  const handleLink = () => {
    console.log({ dataList }, "onRowLick");
    // return <Link href={`/list/${dataList.id}`}></Link>;
  };

  return (
    <>
      {/* <p> This is {dataList} datalistid in Listitem</p> */}

      {/* <Link href={`/list/${list.id}`}> */}
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
        {/* 인종 아이콘 switch 문 만들기 */}
      </div>
      {/* </Link> */}
    </>
  );
};

export default ItemList;
