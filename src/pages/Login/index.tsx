import { Box, Button, Stack, TextField, Typography } from "@mui/material";

function LoginPage() {
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        flex: "1 1 auto",
        display: "flex",
        justifyContent: "center",
        paddingTop: "200px",
      }}
    >
      <Box
        sx={{
          maxWidth: 550,
          px: 3,
          width: "100%",
        }}
      >
        <Box sx={{ mb: 3 }}>
          <Typography variant="h4">Login</Typography>
        </Box>
        <form noValidate>
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
            />
          </Stack>
          <Button
            fullWidth
            size="large"
            sx={{ mt: 3 }}
            type="submit"
            variant="contained"
          >
            Sign In
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default LoginPage;
