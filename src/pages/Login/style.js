import { makeStyles } from "@material-ui/core/styles";
// import Input from "../../components/Input";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    // backgroundColor: "black",
  },

  paper: {
    // marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    color: "red",
  },
}));

export default useStyles;
