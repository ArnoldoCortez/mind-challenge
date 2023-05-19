import UserIcon from "@heroicons/react/24/solid/UserIcon";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import BuildingOfficeIcon from "@heroicons/react/24/solid/BuildingOffice2Icon";
import RectangleStackIcon from "@heroicons/react/24/solid/RectangleStackIcon";
import { SvgIcon } from "@mui/material";

import { UserRoles } from "../../constants/user.constants";

export const items = [
  {
    title: "Profile",
    path: "/",
    accessRoles: [UserRoles.USER, UserRoles.ADMIN, UserRoles.SUPER_ADMIN],
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Users",
    path: "/users",
    accessRoles: [UserRoles.ADMIN, UserRoles.SUPER_ADMIN],
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Accounts",
    path: "/accounts",
    accessRoles: [UserRoles.ADMIN, UserRoles.SUPER_ADMIN],
    icon: (
      <SvgIcon fontSize="small">
        <BuildingOfficeIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Team logs",
    path: "/team-logs",
    accessRoles: [UserRoles.ADMIN, UserRoles.SUPER_ADMIN],
    icon: (
      <SvgIcon fontSize="small">
        <RectangleStackIcon />
      </SvgIcon>
    ),
  },
];
