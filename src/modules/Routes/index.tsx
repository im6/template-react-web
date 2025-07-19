import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { CircularProgress } from "@mui/material";

const Home = lazy(() => import("../Home"));
const Demo1 = lazy(() => import("../Demo1"));
const Demo2 = lazy(() => import("../Demo2"));

const AppRoutes = () => (
  <Routes>
    <Route
      index
      element={
        <Suspense fallback={<CircularProgress />}>
          <Home name="World" />
        </Suspense>
      }
    />
    <Route
      path="demo1"
      element={
        <Suspense fallback={<CircularProgress />}>
          <Demo1 name="Demo1" />
        </Suspense>
      }
    />
    <Route
      path="demo2"
      element={
        <Suspense fallback={<CircularProgress />}>
          <Demo2 name="Demo2" />
        </Suspense>
      }
    />
  </Routes>
);

export default AppRoutes;
