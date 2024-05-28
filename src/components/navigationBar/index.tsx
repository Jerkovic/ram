import * as React from "react";
import Stack from "@mui/material/Stack";
import { NavigationItem } from "../layouts/navigation/navLinks";
import NavLink from "./NavItem";

interface NavigationBarProps {
  navigationItems: NavigationItem[];
}
const NavigationBar = (props: NavigationBarProps) => {
  const navMenuItems = props.navigationItems.map((item, idx) => {
    return (
      <NavLink
        key={idx}
        title={item.title}
        href={item.href ?? "/"}
        Icon={item.Icon}
      />
    );
  });

  return (
    <Stack
      width="100%"
      direction="row"
      component="nav"
      borderLeft={1}
      borderColor="border"
      flexWrap="wrap"
    >
      {navMenuItems}
    </Stack>
  );
};

export default NavigationBar;
