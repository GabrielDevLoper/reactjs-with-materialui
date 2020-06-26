import { makeStyles, withStyles, fade } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const lilas = "#7159c1";
const white = "#fff";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",

    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    display: "flex",

    marginTop: theme.spacing(10),
    padding: theme.spacing(2),
    flexGrow: 1,
  },
  paper: {
    // display: "flex",
    padding: theme.spacing(2),
    // justifyContent: "flex-end",
    color: theme.palette.text.secondary,
  },
  paper2: {
    display: "flex",
    padding: theme.spacing(2),
    justifyContent: "space-between",
    color: theme.palette.text.secondary,
  },

  table: {
    minWidth: 650,
  },

  submit: {
    margin: 10,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },

  inputGroup: {
    display: "flex",
  },
  input: {
    margin: 5,
  },

  btnGroup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },

  search: {
    display: "flex",
    alignItems: "center",
    color: "black",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(white, 0.4),
    "&:hover": {
      backgroundColor: fade(white, 0.6),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },

  success: {
    fontWeight: "bold",
    borderRadius: 20,
    fontSize: 20,
  },
}));

export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default useStyles;
