import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid,
  Stack,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AddUserFormSchema } from "../schemas";
import { AddUserForm as TAddUserForm } from "../types";

type Props = {
  disableIsAdminCheckbox?: boolean;
  onSubmit: SubmitHandler<TAddUserForm>;
};

function AddUserForm({ onSubmit, disableIsAdminCheckbox = true }: Props) {
  const { register, handleSubmit, formState, control } = useForm<TAddUserForm>({
    resolver: zodResolver(AddUserFormSchema),
  });
  const { errors } = formState;

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Card>
          <CardHeader
            subheader="Please complete all required fields"
            title="User Information"
          />
          <CardContent sx={{ pt: 0 }}>
            <Box sx={{ m: -1.5 }}>
              <Grid container spacing={3}>
                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    required
                    label="Name"
                    error={errors.name ? true : false}
                    helperText={errors.name?.message}
                    {...register("name")}
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    required
                    label="Email Address"
                    type="email"
                    error={errors.email ? true : false}
                    helperText={errors.email?.message}
                    {...register("email")}
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="English Level"
                    error={errors.englishLevel ? true : false}
                    helperText={errors.englishLevel?.message}
                    {...register("englishLevel")}
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Technical Knowledge"
                    error={errors.technicalKnowledge ? true : false}
                    helperText={errors.technicalKnowledge?.message}
                    {...register("technicalKnowledge")}
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="CV Link"
                    error={errors.cvLink ? true : false}
                    helperText={errors.cvLink?.message}
                    {...register("cvLink")}
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <Controller
                    name="isAdmin"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <FormControlLabel
                        disabled={disableIsAdminCheckbox}
                        control={<Checkbox {...field} />}
                        label="Is Admin"
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
        <Card>
          <CardHeader
            subheader="Please create a strong password"
            title="Password"
          />
          <CardContent sx={{ pt: 0 }}>
            <Box sx={{ m: -1.5 }}>
              <Grid container spacing={3}>
                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    required
                    label="Password"
                    type="password"
                    error={errors.password ? true : false}
                    helperText={errors.password?.message}
                    {...register("password")}
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    required
                    label="Confirm Password"
                    type="password"
                    error={errors.confirmPassword ? true : false}
                    helperText={errors.confirmPassword?.message}
                    {...register("confirmPassword")}
                  />
                </Grid>
              </Grid>
            </Box>
          </CardContent>
          <Divider />
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button type="submit" variant="contained">
              Save User
            </Button>
          </CardActions>
        </Card>
      </Stack>
    </form>
  );
}

export default AddUserForm;
