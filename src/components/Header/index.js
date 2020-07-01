import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  ChevronRight,
  ChevronLeft,
  Menu as Menus,
  ExitToApp,
  AccountBox,
} from "@material-ui/icons";

import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  Drawer,
  Divider,
  Avatar,
  MenuItem,
  Menu,
  Button,
  ButtonBase,
} from "@material-ui/core";

import AuthContext from "../../contexts/auth";

import clsx from "clsx";

import { useTheme } from "@material-ui/core/styles";
import useStyle from "./style";

import SideList from "../SideList";

import avatar from "../../assets/avatar.svg";
import arrow from "../../assets/arrowBottom.svg";
import logo from "../../assets/logo.svg";

function Header({ title = "Manager" }) {
  const classes = useStyle();
  const theme = useTheme();
  const history = useHistory();

  const { user, signOut, userName } = useContext(AuthContext);

  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setMenu(event.currentTarget);
  };

  function handleToUsers() {
    history.push("/users");
  }

  function handleToLogin() {
    signOut();
    history.push("/");
  }

  return (
    <>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <Menus />
          </IconButton>
          <Box className={classes.title} component="div">
            <Typography component="h1" variant="h6" noWrap>
              {title}
            </Typography>
          </Box>
          <Box component="div">
            <Box component="div" className={classes.infoUser}>
              <Typography
                component="span"
                style={{ color: "black", marginRight: 20 }}
              >
                {userName}
              </Typography>
              <Avatar src={avatar} />
              <img
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                src={arrow}
                alt=""
                className={classes.imgAvatar}
              />
            </Box>

            <Menu
              id="simple-menu"
              anchorEl={menu}
              keepMounted
              open={Boolean(menu)}
              onClick={() => setMenu(null)}
            >
              <MenuItem onClick={handleToUsers}>
                <AccountBox className={classes.icon} />
                Minha Conta
              </MenuItem>
              <MenuItem onClick={handleToLogin}>
                <ExitToApp className={classes.icon} />
                Sair
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <img src={logo} alt="" />
          <IconButton className={classes.iconArrow} onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </div>

        {user ? <SideList /> : null}
      </Drawer>
    </>
  );
}

export default Header;
