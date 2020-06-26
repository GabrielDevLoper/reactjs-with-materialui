import React from "react";

import useStyles from "./style";

import Header from "../../components/Header";

import { Box, Grid, Paper } from "@material-ui/core";

import Main from "../../components/Main";

export default function Home() {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.root}>
      <Header title="DashBoard" />
      <Main>
        {/* conteudo do centro do site */}
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper className={classes.paper1}></Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper1}></Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper1}></Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper1}></Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper2}></Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper3}></Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper3}></Paper>
          </Grid>
        </Grid>
      </Main>
    </Box>
  );
}
