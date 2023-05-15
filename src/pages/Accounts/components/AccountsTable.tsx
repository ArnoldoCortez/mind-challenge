import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  SvgIcon,
  IconButton,
  Stack,
} from "@mui/material";
import EyeIcon from "@heroicons/react/24/solid/EyeIcon";
import PencilSquareIcon from "@heroicons/react/24/solid/PencilSquareIcon";
import TrashIcon from "@heroicons/react/24/solid/TrashIcon";

type TableItems = {
  id: string;
  account: string;
  client: string;
  operationManager: string;
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

function AccountsTable(props: Props) {
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
              <TableCell>Account</TableCell>
              <TableCell>Client</TableCell>
              <TableCell>Operation Manager</TableCell>
              <TableCell>Team</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(({ id, account, client, operationManager }) => {
              return (
                <TableRow hover key={id}>
                  <TableCell>
                    <Typography variant="subtitle2">{account}</Typography>
                  </TableCell>
                  <TableCell>{client}</TableCell>
                  <TableCell>{operationManager}</TableCell>
                  <TableCell>
                    <IconButton color="primary">
                      <SvgIcon>
                        <EyeIcon />
                      </SvgIcon>
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <Stack direction="row">
                      <IconButton color="primary">
                        <SvgIcon>
                          <PencilSquareIcon />
                        </SvgIcon>
                      </IconButton>
                      <IconButton color="error">
                        <SvgIcon>
                          <TrashIcon />
                        </SvgIcon>
                      </IconButton>
                    </Stack>
                  </TableCell>
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

export default AccountsTable;
