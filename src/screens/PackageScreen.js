import axios from 'axios';
import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { BASE_URL } from '../config';
import createAuthStore from '../store/AuthStore';

const optionsPerPage = [10];

const PackageScreen = () => {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
  const token = createAuthStore((state) => state.token);
  const [data, setData] = React.useState([]);


  React.useEffect(() => {
    const fetchData = async () => {
    const url = `${BASE_URL}/api/user/trips?page=${page}&limit=${itemsPerPage}`;
      // console.log(url)
      const header = {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
        
    };
    const response = await axios({
      method: 'get',
      url: url,
      headers: header,
    });
    if(response.data.success == true) {
      setPage(response.data.meta.total_page)
      setData(response.data.data.trips)
    }
  }
  fetchData();
  }, [page,itemsPerPage]);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Start</DataTable.Title>
        <DataTable.Title numeric>End</DataTable.Title>
        <DataTable.Title numeric>Distance</DataTable.Title>
        <DataTable.Title numeric>Total</DataTable.Title>
        <DataTable.Title numeric>Status</DataTable.Title>
      </DataTable.Header>

    {data.map((item, index) => (
      <DataTable.Row>
        <DataTable.Cell>sandwich</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>  
    ))}


      <DataTable.Row>
        <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
        <DataTable.Cell numeric>237</DataTable.Cell>
        <DataTable.Cell numeric>8.0</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Pagination
        page={page}
        numberOfPages={3}
        onPageChange={(page) => setPage(page)}
        label="1-2 of 6"
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={'Rows per page'}
      />
    </DataTable>
  );
}

export default PackageScreen