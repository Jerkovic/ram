import React from "react";
import { AppBar as MuiAppBar } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { NavigationItem } from "./navigation/navLinks";
import NavigationBar from "../navigationBar";

interface AppBarProps {
  navItems: NavigationItem[];
}

export const AppBar = (props: AppBarProps) => {
  return (
    <MuiAppBar
      position={"sticky"}
      elevation={0}
      sx={{ borderLeft: 0, borderRight: 0 }}
    >
      <Box py={0}>
        <Container maxWidth="lg">
          <NavigationBar navigationItems={props.navItems} />
        </Container>
      </Box>
    </MuiAppBar>
  );
};
