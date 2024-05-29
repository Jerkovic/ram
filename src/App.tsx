import React, { Suspense } from "react";
import Router from "./components/router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { defaultTheme } from "./themes/default";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Suspense fallback={<div></div>}>
        <Router />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
