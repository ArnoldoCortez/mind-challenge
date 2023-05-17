import {
  Box,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Unstable_Grid2 as Grid,
  Divider,
  CardActions,
  Button,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AccountFormSchema } from "../schemas";
import { AccountForm } from "../types";

type Props = {
  onSubmit: SubmitHandler<AccountForm>;
};

function AddAccountForm({ onSubmit }: Props) {
  const { register, handleSubmit, formState } = useForm<AccountForm>({
    resolver: zodResolver(AccountFormSchema),
  });
  const { errors } = formState;

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader
          subheader="Please complete all required fields"
          title="Account Information"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  label="Account"
                  error={errors.account ? true : false}
                  helperText={errors.account?.message}
                  {...register("account")}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  label="Client"
                  error={errors.client ? true : false}
                  helperText={errors.client?.message}
                  {...register("client")}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  label="Operation Manager"
                  error={errors.operationManager ? true : false}
                  helperText={errors.operationManager?.message}
                  {...register("operationManager")}
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button type="submit" variant="contained">
            Save Account
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}

export default AddAccountForm;
