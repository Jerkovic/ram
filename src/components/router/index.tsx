import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout maxWidth={"lg"} pb={false} />}>
          <Route index element={<p>sample start page</p>} />
          {/* Catch-all route */}
          <Route path="*" element={<p>404 Not found</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
