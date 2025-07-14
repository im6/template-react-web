import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Html from "../../components/Html/index";
import Layout from "../Layout/index";
import ThemeProvider from "../ThemeProvider/index";

interface IProps {
  reduxName: string;
}

const Home = lazy(() => import("../Home"));
const Demo1 = lazy(() => import("../Demo1"));
const Demo2 = lazy(() => import("../Demo2"));

const App: React.FC<IProps> = ({ reduxName }) => (
  <Html reduxName={reduxName} initState={{}}>
    <ThemeProvider>
      <Layout>
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
      </Layout>
    </ThemeProvider>
  </Html>
);

export default App;
