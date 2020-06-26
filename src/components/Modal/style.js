import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
    width: 500,
    height: 300,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 20,
  },

  btn: {
    "&:hover": {
      backgroundColor: "#6F52ED",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: " #644ad4",
    color: "white",
    width: "225px",
    height: "50px",
    borderRadius: "5px",
    border: "none",
    fontSize: "14px",
    fontWeight: "bold",
    lineHeight: "17px",
    cursor: "pointer",
    outline: "none",
    transition: "400ms",
  },
}));

export default useStyles;
