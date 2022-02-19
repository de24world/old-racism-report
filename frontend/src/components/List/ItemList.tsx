import Link from '@material-ui/core/Link';
import { DataGrid } from '@material-ui/data-grid';

import { IDataProps } from '../../interfaces/interfaces';

interface ListProps {
  data: IDataProps[];
}

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'offender', headerName: 'Offender', width: 130 },
  { field: 'victim', headerName: 'Victim', width: 130 },
  { field: 'date', headerName: 'Date', width: 130 },
  { field: 'country', headerName: 'Country', width: 130 },
  { field: 'city', headerName: 'City', width: 130 },
  {
    field: 'evidence',
    headerName: 'Evidence',
    width: 260,
    sortable: false,
  },
  { field: 'level', headerName: 'Level(What, 언어 폭행)', width: 260 },
];

const ItemList = function ({ data }: ListProps): JSX.Element {
  const handleLink = () => {
    // console.log({ data }, "onRowLick");
    // return <Link href={`/list/${dataList.id}`}></Link>;
  };

  return (
    <>
      <Link href="/list/1">
        Link Test list/1
        {/* <Button component="a">// other component ...</Button> */}
      </Link>
      {/* <p> This is {dataList} datalistid in Listitem</p> */}
      {/* <Link href={`/list/${dataList.id}`}> */}
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={data}
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
};

export default ItemList;
