import React, {useEffect} from 'react';
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
import {getAllEntries, getUserEntries} from '../../redux/actions/entriesActions';
import {useTypesSelector} from '../../redux/hooks';
import {defaultEntriesString, IPermission} from '../../constants';

export interface IEntries {
  id: number | string;
  date: string;
  time: string;
  user: string;
  idComp: string;
}

interface IEntriesProps {
  permission: IPermission;
}

const Entries = ({permission}: IEntriesProps) => {
  useEffect(() => {
    // if (permission === 'User') {

    // } else if (permission === 'Admin') {

    // }
  }, [permission]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };



  // const rows: IEntries[] = [
  //   {
  //     id: 1,
  //     date: '02.10.2021',
  //     time: '09:00 - 10:00',
  //     user: 'Артем Соболев',
  //     idComp: 'Пк 1'
  //   }
  // ]

  const stringData: string[] = JSON.parse(localStorage.getItem('Entries') || defaultEntriesString);
  const data = stringData.map((val) => JSON.parse(val || ''));
  const rows = data.map((val, i) => ({...val, id: val.id ? val.id : i + 1 }))

  return (
    <Box>
      <h2 className="fheader">Список записей</h2>
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

export default Entries;