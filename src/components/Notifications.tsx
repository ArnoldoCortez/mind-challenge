import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { notificationSelector } from "../store/general/general.selectors";
import { setNotification } from "../store/general/general.slice";
import { Stack, Snackbar, Alert } from "@mui/material";

function Notifications() {
  const dispatch = useAppDispatch();
  const notification = useAppSelector(notificationSelector);
  const {
    position = {
      vertical: "top",
      horizontal: "center",
    },
    type = "error",
    show = true,
    message = "",
  } = notification ?? {};

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setNotification(undefined));
  };

  return (
    <React.Fragment>
      {notification ? (
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar
            open={show}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{
              vertical: position.vertical,
              horizontal: position.horizontal,
            }}
          >
            <Alert
              onClose={handleClose}
              severity={type}
              variant="filled"
              sx={{ width: "100%" }}
            >
              {message}
            </Alert>
          </Snackbar>
        </Stack>
      ) : (
        <></>
      )}
    </React.Fragment>
  );
}

export default Notifications;
