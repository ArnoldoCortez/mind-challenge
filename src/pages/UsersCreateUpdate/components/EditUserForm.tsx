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

import { EditUserFormSchema } from "../schemas";
import { EditUserForm as TEditUserForm } from "../types";
import { useEffect } from "react";

type Props = {
  onSubmit: SubmitHandler<TEditUserForm>;
  initialData: TEditUserForm & {
    email: string;
  };
};

function EditUserForm({ onSubmit, initialData }: Props) {
  const { email, name, englishLevel, technicalKnowledge, cvLink } = initialData;
  const { handleSubmit, formState, reset, control } = useForm<TEditUserForm>({
    resolver: zodResolver(EditUserFormSchema),
    defaultValues: {
      name,
      englishLevel,
      technicalKnowledge,
      cvLink,
    },
  });

  const { errors } = formState;

  useEffect(() => {
    reset({
      name,
      englishLevel,
      technicalKnowledge,
      cvLink,
    });
  }, [reset, name, englishLevel, technicalKnowledge, cvLink]);

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader
          subheader="Please complete all required fields"
          title="User Information"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <Controller
                  name={"name"}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      required
                      label="Name"
                      error={errors.name ? true : false}
                      helperText={errors.name?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  disabled
                  value={email}
                  label="Email Address"
                  type="email"
                />
              </Grid>
              <Grid xs={12} md={6}>
                <Controller
                  name={"englishLevel"}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      label="English Level"
                      error={errors.englishLevel ? true : false}
                      helperText={errors.englishLevel?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <Controller
                  name={"technicalKnowledge"}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      label="Technical Knowledge"
                      error={errors.technicalKnowledge ? true : false}
                      helperText={errors.technicalKnowledge?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <Controller
                  name={"cvLink"}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      label="CV Link"
                      error={errors.cvLink ? true : false}
                      helperText={errors.cvLink?.message}
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
            Save User
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}

export default EditUserForm;
