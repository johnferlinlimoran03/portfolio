// src/components/Header.js
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Box,
  IconButton,
  AppBar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import BuildIcon from '@mui/icons-material/Build';
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: "About", icon: <InfoIcon />, path: "/" },
    { text: "Experience", icon: <WorkIcon />, path: "/experience" },
    { text: "Skills", icon: <BuildIcon />, path: "/skills" },
    { text: "Contact", icon: <ContactMailIcon />, path: "/contact" },
  ];

  const drawerContent = (
    <Box sx={{ backgroundColor: "#1976d2", height: "100%", color: "white" }}>
      <Toolbar>
        <Typography variant="h7" noWrap>
          John Ferlin G. Limoran
        </Typography>
      </Toolbar>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            onClick={() => isMobile && setMobileOpen(false)} // Close drawer on mobile click
            sx={{
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}
          >
            <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Top AppBar with hamburger for mobile */}
      {isMobile && (
        <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h7" noWrap>
               John Ferlin G. Limoran
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      {/* Drawer: permanent for desktop, temporary for mobile */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#1976d2",
            color: "white",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Header;
