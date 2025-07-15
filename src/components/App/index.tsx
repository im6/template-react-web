import { Provider } from "react-redux";
import Html from "../../components/Html/index";
import Layout from "../Layout/index";
import ThemeProvider from "../ThemeProvider/index";
import Routes from "../Routes/index";

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
