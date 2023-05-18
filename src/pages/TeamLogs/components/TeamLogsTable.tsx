import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { format, parseISO, isValid as isValidDate } from "date-fns";

type TableItems = {
  id: string;
  userName: string;
  accountName: string;
  startDate: string;
  endDate: string;
};

type Props = {
  count: number;
  items: TableItems[];
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => void;
  page: number;
  rowsPerPage: number;
};

function TeamLogsTable(props: Props) {
  const {
    count = 0,
    items = [],
    onPageChange,
    page = 0,
    rowsPerPage = 0,
  } = props;

  return (
    <Card>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User Name</TableCell>
              <TableCell>Account Name</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(({ id, userName, accountName, startDate, endDate }) => {
              const parsedStartDate = parseISO(startDate);
              const parsedEndDate = parseISO(endDate);
              const formatedStartDate = isValidDate(parsedStartDate)
                ? format(parsedStartDate, "dd/MM/yyyy")
                : "";
              const formatedEndDate = isValidDate(parsedEndDate)
                ? format(parsedEndDate, "dd/MM/yyyy")
                : "";
              return (
                <TableRow hover key={id}>
                  <TableCell>{userName}</TableCell>
                  <TableCell>{accountName}</TableCell>
                  <TableCell>{formatedStartDate}</TableCell>
                  <TableCell>{formatedEndDate}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[10]}
      />
    </Card>
  );
}

export default TeamLogsTable;
