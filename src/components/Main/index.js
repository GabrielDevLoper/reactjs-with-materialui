import React from "react";
import { Box } from "@material-ui/core";
import { useSpring, animated } from "react-spring";

import useStyles from "./style";

function Main({ children }) {
  const classes = useStyles();

  const fade = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });

  return (
    <>
      <animated.div component="main" style={fade} className={classes.content}>
        <Box component="div" className={classes.toolbar} />
        {children}
      </animated.div>
    </>
  );
}

export default Main;
