import { makeStyles } from "@material-ui/core";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#FFFFFF",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  menuButton: {
    "&:hover": {
      backgroundColor: "#6F52ED",
      color: "white",
    },
    marginRight: 36,
    transition: "500ms",
    color: "black",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,

    backgroundColor: "#6F52ED",
  },

  title: {
    color: "black",

    flexGrow: 1,
  },

  icon: {
    marginRight: 10,
  },

  iconHeader: {
    color: "black",
    fontSize: 40,
  },

  infoUser: {
    display: "flex",
    alignItems: "center",
  },

  imgAvatar: {
    margin: 20,
    cursor: "pointer",
  },

  iconArrow: {
    color: "white",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  },
}));

export default useStyles;
