import { FC } from "react";
import {
  AppBar,
  Button,
  Box,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

interface IProps {
  darkMode: boolean;
  drawerOpen: boolean;
  onClickMenu: (a: any) => void;
  onToggleDarkMode: () => void;
}

const Header: FC<IProps> = ({
  darkMode,
  drawerOpen,
  onClickMenu,
  onToggleDarkMode,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onClickMenu}
          >
            {drawerOpen ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React.js ({process.env.NODE_ENV === "development" ? "DEV" : "PROD"})
          </Typography>
          <IconButton
            sx={{ mr: 1 }}
            onClick={onToggleDarkMode}
            color="inherit"
            aria-label="toggle dark mode"
          >
            {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
          <Button component="a" color="inherit" href="/login">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
