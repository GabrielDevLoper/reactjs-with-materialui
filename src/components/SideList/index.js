import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  IconButton,
  Button,
} from "@material-ui/core";

import GroupIcon from "@material-ui/icons/Group";
import AddShoppingCartRoundedIcon from "@material-ui/icons/AddShoppingCartRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import CategoryRoundedIcon from "@material-ui/icons/CategoryRounded";
import useStyles from "./style";

const menuItems = [
  {
    listIcon: <HomeRoundedIcon />,
    listText: "Home",
    listPath: "/home",
  },
  {
    listIcon: <GroupIcon />,
    listText: "Clientes",
    listPath: "/clients",
  },
  {
    listIcon: <AddShoppingCartRoundedIcon />,
    listText: "Produtos",
    listPath: "/products",
  },
  {
    listIcon: <CategoryRoundedIcon />,
    listText: "Categorias",
    listPath: "/category",
  },
];

function SideList() {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.root}>
      <List>
        {menuItems.map((item, key) => (
          <ListItem
            button
            className={classes.listItems}
            key={key}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon>
              <Avatar className={classes.listIcon}>{item.listIcon}</Avatar>
            </ListItemIcon>
            <ListItemText className={classes.listText}>
              {item.listText}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default SideList;
