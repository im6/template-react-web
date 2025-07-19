import React, { ReactNode, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import GlobalStyles from "@mui/material/GlobalStyles";
import { Box } from "@mui/material";

import Header from "./components/Header/index";
import LeftNav from "./components/LeftNav/index";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [leftNavOpen, setLeftNavOpen] = useState(false);
  const dispatch = useDispatch();
  const darkMode = useSelector((state: any) => state.ui.isDark);
  const handleClickMenu = () => {
    setLeftNavOpen(!leftNavOpen);
  };
  const handleCloseLeftNav = () => {
    setLeftNavOpen(false);
  };
  const handleToggleDarkMode = () => {
    dispatch({ type: "ui/toggle" });
  };
  return (
    <Fragment>
      <GlobalStyles styles={{ body: { margin: 0, padding: 0 } }} />
      <Header
        darkMode={darkMode}
        drawerOpen={leftNavOpen}
        onClickMenu={handleClickMenu}
        onToggleDarkMode={handleToggleDarkMode}
      />
      <LeftNav open={leftNavOpen} onClose={handleCloseLeftNav} />
      <Box component="main" sx={{ pt: 10, px: 5, overflow: "auto" }}>
        {children}
      </Box>
    </Fragment>
  );
};

export default Layout;
