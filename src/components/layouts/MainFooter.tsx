import * as React from "react";
import { Box, Container } from "@mui/material";
import Stack from "@mui/material/Stack";

export const MainFooter = () => {
  return (
    <Box
      bgcolor={(theme) => theme.palette.background.paper}
      py={3}
      borderTop={1}
      borderColor="cuaternary.300"
    >
      <Container maxWidth="lg" component={Stack} direction="column" spacing={5}>
        footer
      </Container>
    </Box>
  );
};
