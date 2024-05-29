import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";

const Home = lazy(() => import("../../pages/Home"));

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout maxWidth={"lg"} pb={false} />}>
          <Route index element={<Home />} />
          {/* Catch-all route */}
          <Route path="*" element={<p>404 Not found</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
