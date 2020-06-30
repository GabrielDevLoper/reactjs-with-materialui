import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

//Lib de notificações
import { toast } from "react-toastify";

//Estilos costumizados
import useStyles from "./style";

//Componentes do material-ui
import {
  Box,
  Typography,
  Button,
  Paper,
  IconButton,
  Grid,
} from "@material-ui/core";

//Biblioteca unform
import { Form } from "@unform/web";
import Input from "../../../components/Input";

//Comunicação com a api
import api from "../../../services/api";

//Icones
import { Save, ArrowBack } from "@material-ui/icons";

//Componentes criados
import Main from "../../../components/Main";
import Header from "../../../components/Header";

toast.configure();

function EditClient(props) {
  const id = props.match.params.client;

  const classes = useStyles();
  const formRef = useRef(null);
  const history = useHistory();

  const [selectClient, setSelectClient] = useState([]);

  async function handleUpdate(data) {
    const { id, name_client, email, cpf, contact } = data;
    await api.put(`/clients/${id}`, {
      name_client,
      email,
      cpf,
      contact,
    });
  }

  useEffect(() => {
    async function loadClient() {
      const client = await api.get(`/clients/${id}`);

      setSelectClient(client.data);
    }
    loadClient();
  }, [id]);

  const handleToBack = () => {
    history.push("/clients");
  };

  return (
    <Box component="div" className={classes.root}>
      <Header title="Editar clientes" />
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
                <Typography variant="h4">Editar cliente</Typography>
                <Form
                  ref={formRef}
                  onSubmit={handleUpdate}
                  className={classes.form}
                  noValidate
                  key={selectClient.id}
                >
                  <Box component="div" className={classes.inputGroup}>
                    <Input
                      id="id"
                      name="id"
                      defaultValue={selectClient.id}
                      style={{ display: "none" }}
                    />
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
                      defaultValue={selectClient.name_client}
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
                      defaultValue={selectClient.cpf}
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
                      defaultValue={selectClient.email}
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
                      defaultValue={selectClient.contact}
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

export default EditClient;
