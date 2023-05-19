import {
  Box,
  Divider,
  MenuItem,
  MenuList,
  Popover,
  Typography,
} from "@mui/material";

type Props = {
  name?: string;
  anchorEl: any;
  onSignOut: () => void;
  onClose: () => void;
  open: boolean;
};

export const AccountPopover = ({
  anchorEl,
  onSignOut,
  onClose,
  open,
  name = "User name",
}: Props) => {
  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "left",
        vertical: "bottom",
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 200 } }}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline">Account</Typography>
        <Typography color="text.secondary" variant="body2">
          {name}
        </Typography>
      </Box>
      <Divider />
      <MenuList
        disablePadding
        dense
        sx={{
          p: "8px",
          "& > *": {
            borderRadius: 1,
          },
        }}
      >
        <MenuItem component="button" onClick={onSignOut}>
          Sign out
        </MenuItem>
      </MenuList>
    </Popover>
  );
};
