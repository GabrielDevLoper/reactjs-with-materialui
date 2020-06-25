import React, { useState, useEffect, useRef, useContext } from "react";
import {
  Box,
  Grid,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  TablePagination,
  IconButton,
  Button,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

import Header from "../../components/Header";
import Main from "../../components/Main";
import Modal from "../../components/Modal";

import useStyles from "./style";
import { StyledTableCell, StyledTableRow } from "./style";
import { Delete, Edit } from "@material-ui/icons";

import api from "../../services/api";

import { Form } from "@unform/web";
import Input from "../../components/Input";

import { ModalContext } from "../../contexts/modal";

import Add from "../../assets/add.svg";

function Clients(props) {
  const classes = useStyles();
  const formRef = useRef(null);
  const [clients, setClients] = useState([]);
  const [page, setPage] = useState(1);

  const { handleClose } = useContext(ModalContext);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    async function loadClients() {
      const response = await api.get(`/clients?page=${page}`);

      setClients(response.data);
    }

    loadClients();
  }, [page]);

  function handleAddClient(data) {
    console.log(data);
  }

  return (
    <Box component="div" className={classes.root}>
      <Header title="Clientes" />
      <Main>
        {/* conteudo do centro do site */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {/* Conteudo da pagina */}
            <Box className={classes.paper}>
              <Modal btnTitle="Cadastrar novo cliente" Icon={Add}>
                <Box component="div">
                  <Form
                    ref={formRef}
                    onSubmit={handleAddClient}
                    className={classes.form}
                    noValidate
                  >
                    <Box component="div" className={classes.inputGroup}>
                      <Input
                        variant="filled"
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
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        id="cpf"
                        label="CPF"
                        name="cpf"
                        autoComplete="text"
                        autoFocus
                        className={classes.input}
                      />
                    </Box>
                    <Box component="div" className={classes.inputGroup}>
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
                        className={classes.input}
                      />
                      <Input
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        id="contact"
                        label="Contato"
                        name="contact"
                        autoComplete="text"
                        autoFocus
                        className={classes.input}
                      />
                    </Box>

                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Salvar
                    </Button>
                    <Button
                      type="reset"
                      variant="contained"
                      color="secondary"
                      className={classes.submit}
                      onClick={handleClose}
                    >
                      Cancelar
                    </Button>
                  </Form>
                </Box>
              </Modal>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              {/* Conteudo da pagina */}
              <TableContainer component={Paper}>
                <Table
                  className={classes.table}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Nome</StyledTableCell>
                      <StyledTableCell align="right">CPF</StyledTableCell>
                      <StyledTableCell align="right">E-mail</StyledTableCell>
                      <StyledTableCell align="right">Contato</StyledTableCell>
                      <StyledTableCell align="right">Excluir</StyledTableCell>
                      <StyledTableCell align="right">Alterar</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {clients.map((client) => (
                      <StyledTableRow key={client.id}>
                        <StyledTableCell component="th" scope="row">
                          {client.name_client}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {client.cpf}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {client.email}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {client.contact}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          <IconButton>
                            <Delete />
                          </IconButton>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          <IconButton>
                            <Edit />
                          </IconButton>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Pagination
                count={clients.length}
                variant="outlined"
                color="secondary"
                page={page}
                onChange={handleChange}
              />
            </Paper>
          </Grid>
        </Grid>
      </Main>
    </Box>
  );
}

export default Clients;
