import { Link } from "react-router-dom";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { Button, Container, Stack, SvgIcon, Typography } from "@mui/material";

import UsersTable from "./components/UsersTable";
import { useState } from "react";
import { applyPagination } from "../../utils/pagination.utils";
import {
  useGetUsersQuery,
  useDeleteUserMutation,
} from "../../services/api.service";
import { useAppDispatch } from "../../store/hooks";
import { setNotification } from "../../store/general/general.slice";

function UsersPage() {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetUsersQuery();
  const [deleteUser, { isLoading: isDeleteUserLoading }] =
    useDeleteUserMutation();
  const [page, setPage] = useState(0);

  if (isLoading || isDeleteUserLoading) {
    return <h1>Loading...</h1>;
  }

  const usersData = data
    ? data.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        englishLevel: user.englishLevel,
        technicalKnowledge: user.knowledge,
        cvLink: user.cvLink,
      }))
    : [];
  const users = applyPagination(usersData, page, 10);

  const handlePageChange = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => {
    setPage(page);
  };

  const handleDeleteUser = async (userId: string) => {
    await deleteUser(userId)
      .unwrap()
      .then(() => {
        dispatch(
          setNotification({
            type: "success",
            message: "The user was successfully deleted!!",
          })
        );
      })
      .catch(() => {
        dispatch(
          setNotification({
            type: "error",
            message: "Sorry!! Wasn't possible to delete de user",
          })
        );
      });
  };

  return (
    <Container maxWidth="xl" component="main" sx={{ py: 8 }}>
      <Stack spacing={3}>
        <Stack direction="row" justifyContent="space-between" spacing={4}>
          <Typography component="h1" variant="h4">
            Users
          </Typography>
          <div>
            <Button
              component={Link}
              to="/users/add"
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
        <UsersTable
          count={usersData.length}
          items={users}
          page={page}
          rowsPerPage={10}
          onPageChange={handlePageChange}
          onDelete={handleDeleteUser}
        />
      </Stack>
    </Container>
  );
}

export default UsersPage;
