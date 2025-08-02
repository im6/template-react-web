import { FC } from "react";
import { Link } from "react-router";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";

interface IProps {
  open: boolean;
  onClose: () => void;
}
const LeftNav: FC<IProps> = ({ open, onClose }) => {
  const toggleDrawer = () => {
    onClose();
  };

  const DrawerList = (
    <Box sx={{ width: 250, pt: 8 }} onClick={onClose}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={<Typography>Home</Typography>} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/demo1">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={<Typography>Demo 1</Typography>} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/demo2">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={<Typography>Demo 2</Typography>} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Drawer open={open} onClose={toggleDrawer}>
      {DrawerList}
    </Drawer>
  );
};

export default LeftNav;
