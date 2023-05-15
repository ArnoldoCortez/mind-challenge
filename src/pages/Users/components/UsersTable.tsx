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
import LinkIcon from "@heroicons/react/24/solid/LinkIcon";
import PencilSquareIcon from "@heroicons/react/24/solid/PencilSquareIcon";
import TrashIcon from "@heroicons/react/24/solid/TrashIcon";

type TableItems = {
  id: string;
  name: string;
  email: string;
  englishLevel: string;
  technicalKnowledge: string;
  cvLink: string;
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

function UsersTable(props: Props) {
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
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>English Level</TableCell>
              <TableCell>Technical Knowledge</TableCell>
              <TableCell>CV Link</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(
              ({
                id,
                name,
                email,
                englishLevel,
                technicalKnowledge,
                cvLink,
              }) => {
                return (
                  <TableRow hover key={id}>
                    <TableCell>
                      <Typography variant="subtitle2">{name}</Typography>
                    </TableCell>
                    <TableCell>{email}</TableCell>
                    <TableCell>{englishLevel}</TableCell>
                    <TableCell>{technicalKnowledge}</TableCell>
                    <TableCell>
                      <IconButton
                        color="primary"
                        component="a"
                        href={cvLink}
                        target="_blank"
                      >
                        <SvgIcon>
                          <LinkIcon />
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
              }
            )}
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

export default UsersTable;
