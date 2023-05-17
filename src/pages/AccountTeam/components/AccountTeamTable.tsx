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
import MinusCircleIcon from "@heroicons/react/24/solid/MinusCircleIcon";

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
  onRemove: (id: string) => void;
};

function AccountTeamTable(props: Props) {
  const {
    count = 0,
    items = [],
    onPageChange,
    page = 0,
    rowsPerPage = 0,
    onRemove,
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
              <TableCell>Remove</TableCell>
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
                        disabled={cvLink === ""}
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
                        <IconButton color="error" onClick={() => onRemove(id)}>
                          <SvgIcon>
                            <MinusCircleIcon />
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

export default AccountTeamTable;
