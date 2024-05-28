import * as React from "react";
import Stack from "@mui/material/Stack";
import { NavigationItem } from "../layouts/navigation/navLinks";
import NavLink from "./NavItem";
import { NavMenu } from "./NavMenu";

interface NavigationBarProps {
  navigationItems: NavigationItem[];
}
// NavLinks
const NavigationBar = (props: NavigationBarProps) => {
  const navMenuItems = props.navigationItems.map((item, idx) => {
    const { href = "", title, type = "item", menuChildren = [], Icon } = item;
    switch (type) {
      case "group":
        return (
          <NavMenu
            key={idx}
            minWidth={item.menuMinWidth}
            menuChildren={menuChildren}
            Icon={Icon}
            title={title}
          />
        );
      default:
        return (
          <NavLink
            key={idx}
            title={title}
            href={href}
            Icon={Icon}
            showExpand={false}
          />
        );
    }
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
