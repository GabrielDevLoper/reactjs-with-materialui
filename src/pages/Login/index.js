import React, { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "@unform/web";
import Input from "../../components/Input";

import useStyles from "./style";

import {
  Box,
  Container,
  Avatar,
  Typography,
  FormControlLabel,
  Button,
  Checkbox,
  Grid,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import { AuthContext } from "../../contexts/auth";

export default function SignIn() {
  const classes = useStyles();
  const formRef = useRef(null);
  const history = useHistory();

  const { signIn } = useContext(AuthContext);

  async function handleLogin(data) {
    const flag = await signIn(data);
    if (flag === "error") {
      history.push("/login");
    } else {
      history.push("/");
    }
  }

  return (
    <Box className={classes.container}>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Logue-se
          </Typography>
          <Form
            ref={formRef}
            onSubmit={handleLogin}
            className={classes.form}
            noValidate
          >
            <Input
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Input
              variant="filled"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Entrar
            </Button>

            <Grid container>
              <Grid item xs>
                {/* <Link>Forgot password?</Link> */}
              </Grid>
              <Grid item>
                {/* <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link> */}
              </Grid>
            </Grid>
          </Form>
        </div>
        <Box mt={8}></Box>
      </Container>
    </Box>
  );
}
