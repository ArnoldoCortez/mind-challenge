import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";
import {
  Avatar,
  Box,
  IconButton,
  Stack,
  SvgIcon,
  useMediaQuery,
} from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";

import { AccountPopover } from "./AccountPopover";
import { usePopover } from "../../../hooks/usePopover";
import { useAuth } from "../../../hooks/useAuth";

const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;

type Props = {
  onNavOpen: () => void;
};

function TopNav({ onNavOpen }: Props) {
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const accountPopover = usePopover();
  const { user, signOut } = useAuth();

  return (
    <>
      <Box
        component="header"
        sx={{
          backdropFilter: "blur(6px)",
          backgroundColor: (theme) =>
            alpha(theme.palette.background.default, 0.8),
          position: "sticky",
          left: {
            lg: `${SIDE_NAV_WIDTH}px`,
          },
          top: 0,
          width: {
            lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`,
          },
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 2,
          }}
        >
          <Box>
            {!lgUp && (
              <IconButton onClick={onNavOpen}>
                <SvgIcon fontSize="small">
                  <Bars3Icon />
                </SvgIcon>
              </IconButton>
            )}
          </Box>
          <Box>
            <Avatar
              onClick={accountPopover.handleOpen}
              ref={accountPopover.anchorRef}
              sx={{
                cursor: "pointer",
                height: 40,
                width: 40,
              }}
            />
          </Box>
        </Stack>
      </Box>
      <AccountPopover
        name={user?.name}
        anchorEl={accountPopover.anchorRef.current}
        open={accountPopover.open}
        onSignOut={signOut}
        onClose={accountPopover.handleClose}
      />
    </>
  );
}

export default TopNav;
