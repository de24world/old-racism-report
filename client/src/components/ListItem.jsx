import * as React from "react";
import Link from "next/link";
import { DataGrid } from "@material-ui/data-grid";
// import dataJson from "../../data/listdata.json";

const columns = [
  { field: "id", headerName: "ID", width: 80 },
  { field: "brand", headerName: "Offender", width: 130 },
  { field: "product_type", headerName: "Victim", width: 130 },
  { field: "created_at", headerName: "When", width: 130 },
  { field: "name", headerName: "Country", width: 130 },
  { field: "price", headerName: "City", width: 130 },
  {
    field: "website_link",
    headerName: "Evidence",
    width: 260,
    sortable: false,
  },
  { field: "rating", headerName: "Level(What, 언어 폭행)", width: 260 },
];

const ListItem = ({ dataList }) => {
  // console.log(dataJson);

  const handleLink = () => {
    // console.log({ list }, "onRowLick");
    // return <Link href={`/list/${list.id}`}></Link>;
  };

  return (
    <>
      {/* <Link href={`/list/${list.id}`}> */}
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={dataList} columns={columns} onRowClick={handleLink} />
        {/* 인종 아이콘 switch 문 만들기 */}
      </div>
      {/* </Link> */}
    </>
  );
};

export default ListItem;
