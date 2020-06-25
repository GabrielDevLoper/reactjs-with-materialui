import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import Header from "../../components/Header";
import Main from "../../components/Main";

import useStyles from "./style";

function Category() {
  const classes = useStyles();

  return (
    <>
      <Box component="div" className={classes.root}>
        <Header title="Categorias" />
        <Main>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                {/* Conteudo da pagina */}
                teste
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                {/* Conteudo da pagina */}
                teste
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                {/* Conteudo da pagina */}
                teste
              </Paper>
            </Grid>
          </Grid>
        </Main>
      </Box>
    </>
  );
}

export default Category;
