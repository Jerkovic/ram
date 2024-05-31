import React, { Suspense } from "react";
import Router from "./components/router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { defaultTheme } from "./themes/default";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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
