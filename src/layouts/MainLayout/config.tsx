import UserIcon from "@heroicons/react/24/solid/UserIcon";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import BuildingOfficeIcon from "@heroicons/react/24/solid/BuildingOffice2Icon";
import RectangleStackIcon from "@heroicons/react/24/solid/RectangleStackIcon";
import { SvgIcon } from "@mui/material";

export const items = [
  {
    title: "Profile",
    path: "/",
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Users",
    path: "/users",
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Accounts",
    path: "/accounts",
    icon: (
      <SvgIcon fontSize="small">
        <BuildingOfficeIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Team logs",
    path: "/team-logs",
    icon: (
      <SvgIcon fontSize="small">
        <RectangleStackIcon />
      </SvgIcon>
    ),
  },
];
