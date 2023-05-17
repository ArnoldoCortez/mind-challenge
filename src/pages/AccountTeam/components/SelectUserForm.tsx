import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { Autocomplete, Button, Stack, SvgIcon, TextField } from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { SelectUserFormSchema } from "../schemas";
import { SelectUserForm as TSelectUserForm } from "../types";

type Option = {
  label: string;
  value: string;
};

type Props = {
  options: Option[];
  onSubmit: SubmitHandler<TSelectUserForm>;
};

function SelectUserForm({ onSubmit, options }: Props) {
  const { handleSubmit, control } = useForm<TSelectUserForm>({
    resolver: zodResolver(SelectUserFormSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="row" spacing={3}>
        <Controller
          name="user"
          control={control}
          render={({ field: { onChange, value, ref } }) => (
            <Autocomplete
              id="users-select"
              value={
                value
                  ? options.find((option) => {
                      return value === option.value;
                    }) ?? null
                  : null
              }
              getOptionLabel={(option) => {
                return option.label;
              }}
              onChange={(_event, newValue) => {
                onChange(newValue ? newValue.value : null);
              }}
              options={options}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="User" ref={ref} />
              )}
            />
          )}
        />
        <Button
          type="submit"
          startIcon={
            <SvgIcon fontSize="small">
              <PlusIcon />
            </SvgIcon>
          }
          variant="contained"
        >
          Add To The Team
        </Button>
      </Stack>
    </form>
  );
}

export default SelectUserForm;
