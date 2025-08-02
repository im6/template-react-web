import { FC, useState, useEffect } from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

import Html from "../Html/index";
import Layout from "../Layout/index";
import Loader from "../Loader/index";
import ThemeProvider from "../ThemeProvider/index";

interface IProps {
  isDark: boolean;
  children?: any;
  onToggleDarkMode?: () => void;
}

const AppShell: FC<IProps> = ({ children, isDark, onToggleDarkMode }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const cache = createCache({ key: "css", nonce: "123" });
  const handleToggleDarkMode = () => {
    if (typeof onToggleDarkMode === "function") {
      onToggleDarkMode();
    }
  };
  useEffect(() => {
    console.log("xxx lazyload AppShell mounted");
    setLoading(false);
  }, []);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider isDark={isDark}>
        <Html>
          <Layout darkMode={isDark} onToggleDarkMode={handleToggleDarkMode}>
            {loading ? <Loader /> : children}
          </Layout>
        </Html>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default AppShell;
