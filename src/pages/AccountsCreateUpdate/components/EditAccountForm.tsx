import { useEffect } from "react";
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
} from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AccountFormSchema } from "../schemas";
import { AccountForm } from "../types";

type Props = {
  onSubmit: SubmitHandler<AccountForm>;
  initialData: AccountForm;
};

function EditAccountForm({ onSubmit, initialData }: Props) {
  const { account, client, operationManager } = initialData;
  const { handleSubmit, formState, reset, control } = useForm<AccountForm>({
    resolver: zodResolver(AccountFormSchema),
    defaultValues: {
      account,
      client,
      operationManager,
    },
  });

  const { errors } = formState;

  useEffect(() => {
    reset({
      account,
      client,
      operationManager,
    });
  }, [reset, account, client, operationManager]);

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
                <Controller
                  name={"account"}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      required
                      label="Account"
                      error={errors.account ? true : false}
                      helperText={errors.account?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <Controller
                  name={"client"}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      required
                      label="Client"
                      error={errors.client ? true : false}
                      helperText={errors.client?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <Controller
                  name={"operationManager"}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      required
                      label="Operation Manager"
                      error={errors.operationManager ? true : false}
                      helperText={errors.operationManager?.message}
                      {...field}
                    />
                  )}
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

export default EditAccountForm;
