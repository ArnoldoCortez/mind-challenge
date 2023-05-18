import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Stack, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import { useAppDispatch } from "../../store/hooks";
import { setCredentials } from "../../store/auth/auth.slice";
import { setNotification } from "../../store/general/general.slice";
import { LoginForm } from "./types";
import { LoginFormSchema } from "./schemas";
import { useLoginMutation } from "../../services/api.service";

function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const { register, handleSubmit, formState } = useForm<LoginForm>({
    resolver: zodResolver(LoginFormSchema),
  });
  const { errors } = formState;

  const onSubmit = async (data: LoginForm) => {
    try {
      const credentials = await login(data).unwrap();
      dispatch(setCredentials(credentials));
      navigate("/");
    } catch (err) {
      dispatch(
        setNotification({
          type: "error",
          message:
            "Sorry!! An error occurred and it was not possible to complete the authentication.",
        })
      );
    }
  };

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
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              required
              label="Email Address"
              type="email"
              error={errors.email ? true : false}
              helperText={errors.email?.message}
              {...register("email")}
            />
            <TextField
              fullWidth
              required
              label="Password"
              type="password"
              error={errors.password ? true : false}
              helperText={errors.password?.message}
              {...register("password")}
            />
          </Stack>
          <LoadingButton
            fullWidth
            loading={isLoginLoading}
            size="large"
            sx={{ mt: 3 }}
            type="submit"
            variant="contained"
          >
            Sign In
          </LoadingButton>
        </form>
      </Box>
    </Box>
  );
}

export default LoginPage;
