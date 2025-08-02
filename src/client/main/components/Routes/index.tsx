import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Loader from "../../../../components/Loader/index";

const Home = lazy(() => import(/* webpackChunkName: "main.home" */ "../Home"));
const Demo1 = lazy(
  () => import(/* webpackChunkName: "main.demo1" */ "../Demo1")
);
const Demo2 = lazy(
  () => import(/* webpackChunkName: "main.demo2" */ "../Demo2")
);

const AppRoutes = () => (
  <Routes>
    <Route
      index
      element={
        <Suspense fallback={<Loader />}>
          <Home name="World" />
        </Suspense>
      }
    />
    <Route
      path="demo1"
      element={
        <Suspense fallback={<Loader />}>
          <Demo1 name="Demo1" />
        </Suspense>
      }
    />
    <Route
      path="demo2"
      element={
        <Suspense fallback={<Loader />}>
          <Demo2 name="Demo2" />
        </Suspense>
      }
    />
  </Routes>
);

export default AppRoutes;
