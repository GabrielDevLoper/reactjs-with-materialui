import { makeStyles } from "@material-ui/core/styles";

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
  paper1: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),
    height: "151px",
  },
  paper2: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),
    height: "375px",
  },

  paper3: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),
    height: "375px",
  },
}));

export default useStyles;
