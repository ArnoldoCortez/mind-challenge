import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Typography, Stack } from "@mui/material";

import {
  useLazyGetAccountByIdQuery,
  useAddAccountMutation,
  useEditAccountMutation,
} from "../../services/api.service";
import AddAccountForm from "./components/AddAccountForm";
import EditAccountForm from "./components/EditAccountForm";
import { AccountForm } from "./types";
import { useAppDispatch } from "../../store/hooks";
import { setNotification } from "../../store/general/general.slice";

function AccountsCreateUpdate() {
  const { id, action } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [
    getAccountById,
    { data: account, isLoading: isGetAccountByIdLoading },
  ] = useLazyGetAccountByIdQuery();
  const [addNewAccount, { isLoading: isAddNewAccountLoading }] =
    useAddAccountMutation();
  const [editAccount, { isLoading: isEditAccountLoading }] =
    useEditAccountMutation();

  const isEdit = action === "edit";

  const initialData = {
    account: account?.name ?? "",
    client: account?.clientName ?? "",
    operationManager: account?.operationManager ?? "",
  };

  useEffect(() => {
    if (isEdit && id) {
      getAccountById(id);
    }
  }, [getAccountById, id, isEdit]);

  const handleAddAccountSubmit = (data: AccountForm) => {
    navigate("/accounts");
    addNewAccount({
      name: data.account,
      clientName: data.client,
      operationManager: data.operationManager,
    })
      .unwrap()
      .then(() => {
        dispatch(
          setNotification({
            type: "success",
            message: "The account was successfully created!!",
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
  };

  const handleEditAccountSubmit = (data: AccountForm) => {
    navigate("/accounts");
    if (id) {
      editAccount({
        id,
        name: data.account,
        clientName: data.client,
        operationManager: data.operationManager,
      })
        .unwrap()
        .then(() => {
          dispatch(
            setNotification({
              type: "success",
              message: "The user was successfully edited!!",
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

  if (
    isAddNewAccountLoading ||
    isEditAccountLoading ||
    isGetAccountByIdLoading
  ) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container maxWidth="xl" component="main" sx={{ py: 8 }}>
      <Stack spacing={3}>
        <Typography component="h1" variant="h4">
          {isEdit ? "Edit Account" : "Create Account"}
        </Typography>
        {isEdit ? (
          <EditAccountForm
            initialData={initialData}
            onSubmit={handleEditAccountSubmit}
          />
        ) : (
          <AddAccountForm onSubmit={handleAddAccountSubmit} />
        )}
      </Stack>
    </Container>
  );
}

export default AccountsCreateUpdate;
