import { useState } from "react";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { Button, Container, Stack, SvgIcon, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import AccountsTable from "./components/AccountsTable";
import { applyPagination } from "../../utils/pagination.utils";
import {
  useGetAccountsQuery,
  useDeleteAccountMutation,
} from "../../services/api.service";
import { useAppDispatch } from "../../store/hooks";
import { setNotification } from "../../store/general/general.slice";

function AccountsPage() {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(0);

  const { data, isLoading } = useGetAccountsQuery();
  const [deleteAccount, { isLoading: isDeleteAccountLoading }] =
    useDeleteAccountMutation();

  if (isLoading || isDeleteAccountLoading) {
    return <h1>Loading...</h1>;
  }

  const accountsData = data
    ? data.map((account) => ({
        id: account.id,
        account: account.name,
        client: account.clientName,
        operationManager: account.personResponsibleForOperation,
      }))
    : [];
  const accounts = applyPagination(accountsData, page, 10);

  const handlePageChange = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => {
    setPage(page);
  };

  const handleDeleteUser = (userId: string) => {
    deleteAccount(userId)
      .unwrap()
      .then(() => {
        dispatch(
          setNotification({
            type: "success",
            message: "The account was successfully deleted!!",
          })
        );
      })
      .catch(() => {
        dispatch(
          setNotification({
            type: "error",
            message: "Sorry!! Wasn't possible to delete de account",
          })
        );
      });
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
              component={Link}
              to="/accounts/add"
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
          count={accountsData.length}
          items={accounts}
          page={page}
          rowsPerPage={10}
          onPageChange={handlePageChange}
          onDelete={handleDeleteUser}
        />
      </Stack>
    </Container>
  );
}

export default AccountsPage;
