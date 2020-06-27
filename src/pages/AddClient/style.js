import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
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

  submitSave: {
    backgroundColor: "#644ad4",
    margin: 10,
    "&:hover": {
      backgroundColor: "#6F52ED",
    },
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
