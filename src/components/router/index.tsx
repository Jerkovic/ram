import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout maxWidth={"lg"} pb={false} />}>
          <Route index element={<p>sample start page</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
