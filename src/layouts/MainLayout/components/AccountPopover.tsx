import {
  Box,
  Divider,
  MenuItem,
  MenuList,
  Popover,
  Typography,
} from "@mui/material";

type Props = {
  anchorEl: any;
  onClose: () => void;
  open: boolean;
};

export const AccountPopover = ({ anchorEl, onClose, open }: Props) => {
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
          John Doe
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
        <MenuItem>Sign out</MenuItem>
      </MenuList>
    </Popover>
  );
};
