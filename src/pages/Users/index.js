import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import Header from "../../components/Header";
import useStyles from "./style";
import Main from "../../components/Main";

function Clients() {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.root}>
      <Header title="Usuários" />
      <Main>
        {/* conteudo do centro do site */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              {/* Conteudo da pagina */}
              ola
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              {/* Conteudo da pagina */}ola
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              {/* Conteudo da pagina */}
              ola
            </Paper>
          </Grid>
        </Grid>
      </Main>
    </Box>
  );
}

export default Clients;
