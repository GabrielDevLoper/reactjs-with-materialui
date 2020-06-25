import React from "react";

import useStyles from "./style";

import Header from "../../components/Header";

import { Box, Grid, Paper } from "@material-ui/core";
import {
  LineChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Line,
  YAxis,
  AreaChart,
  Area,
  ReferenceLine,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import Main from "../../components/Main";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Home() {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.root}>
      <Header title="DashBoard" />
      <Main>
        {/* conteudo do centro do site */}
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper className={classes.paper1}>xs=12</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper1}>xs=12</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper1}>xs=12</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper1}>xs=12</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper2}>xs=12</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper3}>xs=12</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper3}>xs=12</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper3}>xs=12</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper3}>xs=12</Paper>
          </Grid>
        </Grid>
      </Main>
    </Box>
  );
}
