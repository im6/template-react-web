import { Provider } from "react-redux";
import Layout from "../Layout/index";
import Routes from "../Routes/index";
import Html from "../../components/Html/index";
import ThemeProvider from "../ThemeProvider/index";

interface IProps {
  store: any;
}

const App: React.FC<IProps> = ({ store }) => (
  <Provider store={store}>
    <Html>
      <ThemeProvider>
        <Layout>
          <Routes />
        </Layout>
      </ThemeProvider>
    </Html>
  </Provider>
);

export default App;
