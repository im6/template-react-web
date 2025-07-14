import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

const Home = lazy(() => import("../Home"));
const Demo1 = lazy(() => import("../Demo1"));
const Demo2 = lazy(() => import("../Demo2"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Home name="Demo1" />
          </Suspense>
        }
      />
      <Route
        path="demo1"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Demo1 name="Demo1" />
          </Suspense>
        }
      />
      <Route
        path="demo2"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Demo2 name="Demo2" />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
