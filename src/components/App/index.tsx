import { Provider } from "react-redux";
import Html from "../../components/Html/index";
import Layout from "../Layout/index";
import ThemeProvider from "../ThemeProvider/index";
import Routes from "../Routes/index";

interface IProps {
  reduxName: string;
  store: any;
}

const App: React.FC<IProps> = ({ reduxName, store }) => (
  <Provider store={store}>
    // The store is provided to the entire application via the Redux Provider.
    <Html reduxName={reduxName} initState={{}}>
      <ThemeProvider>
        <Layout>
          <Routes />
        </Layout>
      </ThemeProvider>
    </Html>
  </Provider>
);

export default App;
