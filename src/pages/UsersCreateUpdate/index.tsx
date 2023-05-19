import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Typography, Stack } from "@mui/material";

import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import {
  useAddUserMutation,
  useEditUserMutation,
  useLazyGetUserByIdQuery,
} from "../../services/api.service";
import {
  AddUserForm as TAddUserForm,
  EditUserForm as TEditUserForm,
} from "./types";
import { useAppDispatch } from "../../store/hooks";
import { setNotification } from "../../store/general/general.slice";
import { UserRoles } from "../../constants/user.constants";
import { useAuth } from "../../hooks/useAuth";

function UsersCreateUpdate() {
  const { id, action } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isSuperAdmin } = useAuth();

  const [getUserById, { data: user, isLoading: isGetUserByIdLoading }] =
    useLazyGetUserByIdQuery();
  const [addNewUser, { isLoading: isAddNewUserLoading }] = useAddUserMutation();
  const [editUser, { isLoading: isEditUserLoading }] = useEditUserMutation();

  const isEdit = action === "edit";

  const initialData = {
    name: user ? user.name : "",
    email: user ? user.email : "",
    englishLevel: user ? user.englishLevel : "",
    technicalKnowledge: user ? user.knowledge : "",
    cvLink: user ? user.cvLink : "",
    isAdmin: user?.role === UserRoles.ADMIN,
  };

  useEffect(() => {
    if (isEdit && id) {
      getUserById(id);
    }
  }, [getUserById, id, isEdit]);

  const handleAddUserSubmit = async (data: TAddUserForm) => {
    await addNewUser({
      name: data.name,
      email: data.email,
      password: data.password,
      englishLevel: data.englishLevel,
      cvLink: data.cvLink,
      knowledge: data.technicalKnowledge,
      ...(data.isAdmin && { role: UserRoles.ADMIN }),
    })
      .unwrap()
      .then(() => {
        dispatch(
          setNotification({
            type: "success",
            message: "The user was successfully created!!",
          })
        );
        navigate("/users");
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

  const handleEditUserSubmit = async (data: TEditUserForm) => {
    if (id) {
      await editUser({
        id,
        name: data.name,
        englishLevel: data.englishLevel,
        cvLink: data.cvLink,
        knowledge: data.technicalKnowledge,
        ...(user?.role !== UserRoles.SUPER_ADMIN && {
          role: data.isAdmin ? UserRoles.ADMIN : UserRoles.USER,
        }),
      })
        .unwrap()
        .then(() => {
          navigate("/users");
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
    } else {
      navigate("/users");
    }
  };

  if (isGetUserByIdLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container maxWidth="xl" component="main" sx={{ py: 8 }}>
      <Stack spacing={3}>
        <Typography component="h1" variant="h4">
          {isEdit ? "Edit User" : "Create User"}
        </Typography>
        {isEdit ? (
          <EditUserForm
            isLoading={isEditUserLoading}
            disableIsAdminCheckbox={
              !isSuperAdmin || user?.role === UserRoles.SUPER_ADMIN
            }
            onSubmit={handleEditUserSubmit}
            initialData={initialData}
          />
        ) : (
          <AddUserForm
            isLoading={isAddNewUserLoading}
            onSubmit={handleAddUserSubmit}
            disableIsAdminCheckbox={!isSuperAdmin}
          />
        )}
      </Stack>
    </Container>
  );
}

export default UsersCreateUpdate;
