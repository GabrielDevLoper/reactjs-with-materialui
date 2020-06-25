import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#373B53",
    height: "100vh",
  },

  listItemsAndIcons: {
    display: "flex",
    alignItems: "center",
    fontSize: 17,
  },

  listItems: {
    color: "#969CBA",
    "&:hover": {
      color: "white",
    },
  },

  listIcon: {
    color: "white",
    backgroundColor: "transparent",
    border: "2px solid #969CBA",
    "&:hover": {
      backgroundColor: "white",
      color: "#6F52ED",
    },
  },
}));

export default useStyles;
