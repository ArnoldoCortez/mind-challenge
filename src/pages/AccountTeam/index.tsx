import { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Stack, Typography } from "@mui/material";

import AccountTeamTable from "./components/AccountTeamTable";
import SelectUserForm from "./components/SelectUserForm";
import {
  useAddUserToAccountMutation,
  useGetAccountByIdQuery,
  useGetUsersQuery,
  useRemoveUserFromAccountMutation,
} from "../../services/api.service";
import { useAppDispatch } from "../../store/hooks";
import { setNotification } from "../../store/general/general.slice";
import { applyPagination } from "../../utils/pagination.utils";
import { SelectUserForm as TSelectUserForm } from "./types";

function AccountTeam() {
  const [page, setPage] = useState(0);
  const { id: accountId } = useParams();
  const dispatch = useAppDispatch();

  const { data: users, isLoading: isGetUsersLoading } = useGetUsersQuery();
  const { data: account, isLoading: isGetAccountByIdLoading } =
    useGetAccountByIdQuery(accountId ?? "");
  const [addUserToAccount] = useAddUserToAccountMutation();
  const [removeUserFromAccount] = useRemoveUserFromAccountMutation();

  const handlePageChange = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => {
    setPage(page);
  };

  const handleRemoveTeamMember = (id: string) => {
    if (accountId) {
      removeUserFromAccount({
        args: [{ userId: id, accountId: accountId }],
      })
        .unwrap()
        .then(() => {
          dispatch(
            setNotification({
              type: "success",
              message: "The user was successfully removed from the team!!",
            })
          );
        })
        .catch(() => {
          dispatch(
            setNotification({
              type: "error",
              message:
                "Sorry!! An error occurred and your changes were not saved.",
            })
          );
        });
    }
  };

  const handleAddUserToTeam = (data: TSelectUserForm) => {
    if (accountId) {
      addUserToAccount({ userId: data.user, accountId: accountId })
        .unwrap()
        .then(() => {
          dispatch(
            setNotification({
              type: "success",
              message: "The user was successfully added to the team!!",
            })
          );
        })
        .catch(() => {
          dispatch(
            setNotification({
              type: "error",
              message:
                "Sorry!! An error occurred and your changes were not saved.",
            })
          );
        });
    }
  };

  if (isGetAccountByIdLoading && isGetUsersLoading) {
    return <h1>Loading...</h1>;
  }

  const accountUsersData =
    account && account.users
      ? account.users.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          englishLevel: user.englishLevel,
          technicalKnowledge: user.knowledge,
          cvLink: user.cvLink,
        }))
      : [];
  const accountUsers = applyPagination(accountUsersData, page, 10);

  const accountNotMemberUsers = users
    ? users.filter(
        (user) =>
          !accountUsersData.find((accountUser) => accountUser.id === user.id)
      )
    : [];
  const usersSelectOptions = accountNotMemberUsers.map((user) => ({
    label: user.name,
    value: user.id,
  }));

  return (
    <Container maxWidth="xl" component="main" sx={{ py: 8 }}>
      <Stack spacing={3}>
        <Stack direction="row" justifyContent="space-between" spacing={4}>
          <Typography component="h1" variant="h4">
            {account?.name} Team
          </Typography>
          <SelectUserForm
            options={usersSelectOptions}
            onSubmit={handleAddUserToTeam}
          />
        </Stack>
        <AccountTeamTable
          count={accountUsersData.length}
          items={accountUsers}
          page={page}
          rowsPerPage={10}
          onPageChange={handlePageChange}
          onRemove={handleRemoveTeamMember}
        />
      </Stack>
    </Container>
  );
}

export default AccountTeam;
