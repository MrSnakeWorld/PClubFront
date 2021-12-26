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
import {useDispatch} from 'react-redux';
import {useTypesSelector} from '../../redux/hooks';
import {IPermission} from '../../constants';

interface IEntries {
  id: number;
  date: string;
  time: string;
  user: string;
  idComp: string;
}

interface IEntriesProps {
  permission: IPermission;
}

const Entries = ({permission}: IEntriesProps) => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (permission === 'User') {
  //     dispatch(getUserEntries())
  //   } else if (permission === 'Admin') {
  //     dispatch(getAllEntries())
  //   }
  // }, [dispatch])

  // const entries = useTypesSelector(state => state.entries.items);
  // console.log(entries)
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const rows: IEntries[] = [
    {
      id: 1,
      date: '02.10.2021',
      time: '09:00 - 10:00',
      user: 'Артем Соболев',
      idComp: 'Пк 1'
    }
  ]

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