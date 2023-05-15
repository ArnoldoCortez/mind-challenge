import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { Button, Container, Stack, SvgIcon, Typography } from "@mui/material";

import AccountsTable from "./components/AccountsTable";
import { useMemo, useState } from "react";
import { applyPagination } from "../../utils/pagination.utils";

const data = [
  {
    id: "id1",
    account: "Account 1",
    client: "Client 1",
    operationManager: "Manager 1",
  },
  {
    id: "id2",
    account: "Account 2",
    client: "Client 2",
    operationManager: "Manager 2",
  },
  {
    id: "id3",
    account: "Account 3",
    client: "Client 3",
    operationManager: "Manager 3",
  },
  {
    id: "id4",
    account: "Account 4",
    client: "Client 4",
    operationManager: "Manager 4",
  },
  {
    id: "id5",
    account: "Account 5",
    client: "Client 5",
    operationManager: "Manager 5",
  },
  {
    id: "id6",
    account: "Account 6",
    client: "Client 6",
    operationManager: "Manager 6",
  },
  {
    id: "id7",
    account: "Account 7",
    client: "Client 7",
    operationManager: "Manager 7",
  },
  {
    id: "id8",
    account: "Account 8",
    client: "Client 8",
    operationManager: "Manager 8",
  },
  {
    id: "id9",
    account: "Account 9",
    client: "Client 9",
    operationManager: "Manager 9",
  },
  {
    id: "id10",
    account: "Account 10",
    client: "Client 10",
    operationManager: "Manager 10",
  },
  {
    id: "id11",
    account: "Account 11",
    client: "Client 11",
    operationManager: "Manager 11",
  },
  {
    id: "id12",
    account: "Account 12",
    client: "Client 12",
    operationManager: "Manager 12",
  },
  {
    id: "id13",
    account: "Account 13",
    client: "Client 13",
    operationManager: "Manager 13",
  },
  {
    id: "id14",
    account: "Account 14",
    client: "Client 14",
    operationManager: "Manager 14",
  },
  {
    id: "id15",
    account: "Account 15",
    client: "Client 15",
    operationManager: "Manager 15",
  },
  {
    id: "id16",
    account: "Account 16",
    client: "Client 16",
    operationManager: "Manager 16",
  },
  {
    id: "id17",
    account: "Account 17",
    client: "Client 17",
    operationManager: "Manager 17",
  },
  {
    id: "id18",
    account: "Account 18",
    client: "Client 18",
    operationManager: "Manager 18",
  },
  {
    id: "id19",
    account: "Account 19",
    client: "Client 19",
    operationManager: "Manager 19",
  },
  {
    id: "id20",
    account: "Account 20",
    client: "Client 20",
    operationManager: "Manager 20",
  },
];

const useAccounts = (page: number, rowsPerPage: number) => {
  return useMemo(() => {
    return applyPagination(data, page, rowsPerPage);
  }, [page, rowsPerPage]);
};

function AccountsPage() {
  const [page, setPage] = useState(0);
  const accounts = useAccounts(page, 10);

  const handlePageChange = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => {
    setPage(page);
  };

  return (
    <Container maxWidth="xl" component="main" sx={{ py: 8 }}>
      <Stack spacing={3}>
        <Stack direction="row" justifyContent="space-between" spacing={4}>
          <Typography component="h1" variant="h4">
            Accounts
          </Typography>
          <div>
            <Button
              startIcon={
                <SvgIcon fontSize="small">
                  <PlusIcon />
                </SvgIcon>
              }
              variant="contained"
            >
              Add New
            </Button>
          </div>
        </Stack>
        <AccountsTable
          count={data.length}
          items={accounts}
          page={page}
          rowsPerPage={10}
          onPageChange={handlePageChange}
        />
      </Stack>
    </Container>
  );
}

export default AccountsPage;
