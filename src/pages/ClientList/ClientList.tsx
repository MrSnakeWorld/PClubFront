import React from 'react';
import {Box} from '@mui/system';
import {columns} from './columns';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {IUserInfo} from '../../services/userAuthService';
import {Button} from '@mui/material';
import './ClientList.css';
import {IPermission} from '../../constants';

interface IClientsData {
  id: number;
  firstname: string;
  lastname: string;
  pass: string;
  email: string;
  phone: number | string;
}

const ClientList = ({permission}: {permission: IPermission}) => {
  const normalizeRows = (data: IUserInfo[]): IClientsData[] => data.map((val, i) => ({
    id: i + 1,
    firstname: val.firstName ? val.firstName : '',
    lastname: val.secondName ? val.secondName : '',
    pass: val.password ? val.password : '',
    email: val.email ? val.email : '',
    phone: val.phoneNumber ? val.phoneNumber : ''
  }))
  
  // console.log('location', );

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const stringData: string[] = JSON.parse(localStorage.getItem('Users') || '');
  const data = stringData.map((val) => JSON.parse(val || ''));
  const rows: IClientsData[] = normalizeRows(data);

  return (
    <Box>
      {permission === 'Admin' ? (<br/>) : null}
      <h2 className="fheader">Список клиентов</h2>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell align={column.align}>
                              {value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
      </Paper>
    </Box>
  )
}

export default ClientList;