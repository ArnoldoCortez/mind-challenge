import { Box, Button, Container, SvgIcon, Typography } from "@mui/material";
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import { useRollbar } from "@rollbar/react";
import ArrowLeftIcon from "@heroicons/react/24/solid/ArrowLeftIcon";

function ErrorPage() {
  const error = useRouteError();
  const rollbar = useRollbar();

  console.log(JSON.stringify(error));
  if (!isRouteErrorResponse(error)) {
    const err = error as Error;
    rollbar.error(err.message || JSON.stringify(error));
  }

  return (
    <Box
      component="main"
      sx={{
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
        minHeight: "100%",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            paddingTop: "200px",
          }}
        >
          {isRouteErrorResponse(error) ? (
            <>
              <Typography align="center" sx={{ mb: 3 }} variant="h3">
                {error.status}: {error.statusText}
              </Typography>
              <Typography align="center" color="text.secondary" variant="body1">
                {error.data}
              </Typography>
            </>
          ) : (
            <>
              <Typography align="center" sx={{ mb: 3 }} variant="h3">
                Oops, something went terribly wrong
              </Typography>
            </>
          )}

          <Button
            component={Link}
            to="/"
            startIcon={
              <SvgIcon fontSize="small">
                <ArrowLeftIcon />
              </SvgIcon>
            }
            sx={{ mt: 3 }}
            variant="contained"
          >
            Go back to dashboard
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default ErrorPage;
