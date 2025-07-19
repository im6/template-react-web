import { Provider } from "react-redux";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Layout from "../Layout/index";
import Html from "../../components/Html/index";
import ThemeProvider from "../ThemeProvider/index";
import Routes from "../../modules/Routes/index";

interface IProps {
  store: any;
}

const App: React.FC<IProps> = ({ store }) => {
  const cache = createCache({ key: "css", nonce: "123" });
  return (
    <Provider store={store}>
      <Html>
        <CacheProvider value={cache}>
          <ThemeProvider>
            <Layout>
              <Routes />
            </Layout>
          </ThemeProvider>
        </CacheProvider>
      </Html>
    </Provider>
  );
};

export default App;
