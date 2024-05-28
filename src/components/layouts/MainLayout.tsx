import * as React from "react";
import { Box, Breakpoint, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import { AppBar } from "./AppBar";
import navItems from "./navigation/navLinks";
import { MainFooter } from "./MainFooter";
interface MainLayoutProps {
  maxWidth: Breakpoint;
  pb: boolean;
}

export const MainLayout = (props: MainLayoutProps) => {
  return (
    <Box display="flex" minHeight="100vh" flexDirection="column">
      <MainHeader />
      <AppBar navItems={navItems} />
      <Container
        maxWidth={props.maxWidth}
        component="main"
        sx={{
          flex: "1 0 auto",
          ...(props.pb && {
            pb: 5,
          }),
        }}
      >
        <Outlet />
      </Container>
      <MainFooter />
    </Box>
  );
};
