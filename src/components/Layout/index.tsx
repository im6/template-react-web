import React, { ReactNode, useState, Fragment } from "react";
import { Box } from "@mui/material";

import Header from "./components/Header/index";
import LeftNav from "./components/LeftNav/index";

interface LayoutProps {
  darkMode: boolean;
  children?: ReactNode;
  onToggleDarkMode: () => void;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  darkMode,
  onToggleDarkMode,
}) => {
  const [leftNavOpen, setLeftNavOpen] = useState(false);
  const handleClickMenu = () => {
    setLeftNavOpen(!leftNavOpen);
  };
  const handleCloseLeftNav = () => {
    setLeftNavOpen(false);
  };
  const handleToggleDarkMode = () => {
    onToggleDarkMode();
  };
  return (
    <Fragment>
      <Header
        darkMode={darkMode}
        drawerOpen={leftNavOpen}
        onClickMenu={handleClickMenu}
        onToggleDarkMode={handleToggleDarkMode}
      />
      <LeftNav open={leftNavOpen} onClose={handleCloseLeftNav} />
      <Box component="main" sx={{ pt: 9, px: 2, overflow: "auto" }}>
        {children}
      </Box>
    </Fragment>
  );
};

export default Layout;
