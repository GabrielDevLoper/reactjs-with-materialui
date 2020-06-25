import React from "react";
import { Box } from "@material-ui/core";
import Header from "../../components/Header";
import Main from "../../components/Main";
import useStyles from "./style";

function Products() {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.root}>
      <Header title="Produtos" />
      <Main>
        <h1>Produtos </h1>
      </Main>
    </Box>
  );
}

export default Products;
