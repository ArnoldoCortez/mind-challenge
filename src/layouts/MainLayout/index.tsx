import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";

import TopNav from "./components/TopNav";
import { SideNav } from "./components/SideNav";
import Notifications from "../../components/Notifications";

const SIDE_NAV_WIDTH = 280;

const LayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  [theme.breakpoints.up("lg")]: {
    paddingLeft: SIDE_NAV_WIDTH,
  },
}));

const LayoutContainer = styled("div")({
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "column",
  width: "100%",
});

function MainLayout() {
  const { pathname } = useLocation();
  const prevLocation = useRef("");
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    if (openNav && prevLocation.current !== pathname) {
      setOpenNav(false);
    }
    prevLocation.current = pathname;
  }, [pathname, openNav]);

  return (
    <>
      <TopNav onNavOpen={() => setOpenNav(true)} />
      <SideNav onClose={() => setOpenNav(false)} open={openNav} />
      <LayoutRoot>
        <LayoutContainer>
          <Outlet />
        </LayoutContainer>
      </LayoutRoot>
      <Notifications />
    </>
  );
}

export default MainLayout;
