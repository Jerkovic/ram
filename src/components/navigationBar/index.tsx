import * as React from "react";
import Stack from "@mui/material/Stack";
import { NavigationItem } from "../layouts/navigation/navLinks";
import Typography from "@mui/material/Typography";

interface NavigationBarProps {
  navigationItems: NavigationItem[];
}
const NavigationBar = (props: NavigationBarProps) => {
  const navMenuItems = props.navigationItems.map((item, idx) => {
    return (
      <Typography key={idx} variant="h6" align="center">
        {item.title}
      </Typography>
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
