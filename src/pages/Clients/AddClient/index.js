import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

//Importando components
import Main from "../../../components/Main";
import Header from "../../../components/Header";

// Lib de notificações
import { toast } from "react-toastify";

//Estilos personalisados
import useStyles from "./style";

//Estilos do material ui
import {
  Box,
  Typography,
  Button,
  Paper,
  Grid,
  IconButton,
} from "@material-ui/core";
import { Save, ArrowBack } from "@material-ui/icons";

import { Form } from "@unform/web";
import Input from "../../../components/Input";

// Comunicação com a API
import api from "../../../services/api";

toast.configure();

function AddClient() {
  const classes = useStyles();
  const formRef = useRef(null);
  const history = useHistory();

  async function handleAddClient(data, { reset }) {
    await api.post("/clients", data);
    toast.success(`✔️ Cadastrado com sucesso`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      className: classes.success,
    });
    reset();
  }

  const handleToBack = () => {
    history.push("/clients");
  };

  return (
    <Box component="div" className={classes.root}>
      <Header title="Cadastrando Cliente" />
      <Main>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box component="div">
              <IconButton button onClick={handleToBack}>
                <ArrowBack className={classes.IconBack} />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={3}></Grid>

          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Box component="div">
                <Typography variant="h4">Cadastrar Cliente</Typography>
                <Form
                  ref={formRef}
                  onSubmit={handleAddClient}
                  className={classes.form}
                  noValidate
                >
                  <Box component="div" className={classes.inputGroup}>
                    <Input
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="name_client"
                      label="Nome"
                      name="name_client"
                      autoComplete="text"
                      autoFocus
                      className={classes.input}
                    />
                    <Input
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="cpf"
                      label="CPF"
                      name="cpf"
                      autoComplete="text"
                      autoFocus
                      className={classes.input}
                      mask="999.999.999-99"
                    />
                  </Box>
                  <Box component="div" className={classes.inputGroup}>
                    <Input
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      className={classes.input}
                    />
                    <Input
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="contact"
                      label="Contato"
                      name="contact"
                      autoComplete="text"
                      autoFocus
                      className={classes.input}
                      mask="(99)99999-9999"
                    />
                  </Box>

                  <Box component="div" className={classes.btnGroup}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.submitSave}
                      startIcon={<Save />}
                    >
                      Salvar
                    </Button>
                  </Box>
                </Form>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Main>
    </Box>
  );
}

export default AddClient;
