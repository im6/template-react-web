/* eslint import/no-unresolved: 0 */
import React, { ReactNode, useState } from "react";
import GlobalStyles from "@mui/material/GlobalStyles";
import { Box } from "@mui/material";
// import { Link } from "react-router";
import Header from "./components/Header/index";
import LeftNav from "./components/LeftNav/index";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [leftNavOpen, setLeftNavOpen] = useState(false);
  const handleClickMenu = () => {
    setLeftNavOpen(!leftNavOpen);
  };
  const handleCloseLeftNav = () => {
    setLeftNavOpen(false);
  };
  return (
    <div>
      <GlobalStyles styles={{ body: { margin: 0, padding: 0 } }} />
      <Header drawerOpen={leftNavOpen} onClickMenu={handleClickMenu} />
      <LeftNav open={leftNavOpen} onClose={handleCloseLeftNav} />
      <div>
        Link: &nbsp;&nbsp;&nbsp;&nbsp;
        {/* <Link to="/">
          <span>Home</span>
        </Link>
        &nbsp;&nbsp;
        <Link to="/todos">
          <span>Todos</span>
        </Link> */}
      </div>
      <Box component="main" sx={{ pt: 8, px: 5, overflow: "auto" }}>
        {children}
      </Box>
    </div>
  );
};

export default Layout;
