import { Suspense } from "react";
import Html from "../../components/Html";
import Hello from "../Hello";
import Layout from "../Layout/index";
import ThemeProvider from "../ThemeProvider/index";

interface IProps {
  reduxName: string;
}
const App: React.FC<IProps> = ({ reduxName }) => (
  <Html reduxName={reduxName} initState={{}}>
    <ThemeProvider>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          {/* You can add more components here that need to be rendered */}
          <div>Welcome to the React App!</div>
        </Suspense>
        <Hello name="React" />
      </Layout>
    </ThemeProvider>
  </Html>
);

export default App;
