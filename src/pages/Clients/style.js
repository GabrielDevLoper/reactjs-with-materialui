import { makeStyles, withStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

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
    display: "flex",
    padding: theme.spacing(2),
    justifyContent: "flex-end",
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
    marginTop: theme.spacing(1),
  },

  inputGroup: {
    display: "flex",
  },
  input: {
    margin: 5,
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
