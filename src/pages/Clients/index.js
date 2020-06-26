import React, { useState, useEffect, useRef, useContext } from "react";
import { toast } from "react-toastify";
import Pagination from "@material-ui/lab/Pagination";

import {
  Box,
  Grid,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TablePagination,
  IconButton,
  Button,
  InputBase,
  Typography,
} from "@material-ui/core";

import Header from "../../components/Header";
import Main from "../../components/Main";
import Modal from "../../components/Modal";

import useStyles from "./style";
import { StyledTableCell, StyledTableRow } from "./style";
import { Delete, Edit, Search } from "@material-ui/icons";

import api from "../../services/api";

import { Form } from "@unform/web";
import Input from "../../components/Input";

import { ModalContext } from "../../contexts/modal";

import Add from "../../assets/add.svg";

toast.configure();
function Clients() {
  const classes = useStyles();
  const formRef = useRef(null);
  const { handleClose } = useContext(ModalContext);

  const [clients, setClients] = useState([]);
  const [page, setPage] = useState(1);
  const [countClients, setCountClients] = useState(0);
  const [search, setSearch] = useState("");
  const [filteredClient, setFilteredClient] = useState([]);

  useEffect(() => {
    async function loadClients() {
      const response = await api.get(`/clients?page=${page}`);
      setCountClients(Number(response.headers["x-total-count"]));
      setClients(response.data);
    }

    loadClients();
  }, [page]);

  useEffect(() => {
    setFilteredClient(
      clients.filter((client) => {
        return (
          client.name_client.toLowerCase().includes(search.toLowerCase()) ||
          client.cpf.toLowerCase().includes(search.toLowerCase())
        );
      })
    );
  }, [search, clients]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage + 1);
  };

  async function handleAddClient(data, { reset }) {
    await api.post("/clients", data);
    toast.success(`✔️ Cadastrado com sucesso`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      className: classes.success,
    });
    reset();
  }

  function handleDelete(id) {
    api.delete(`/clients/${id}`);
  }

  return (
    <Box component="div" className={classes.root}>
      <Header title="Clientes" />
      <Main>
        {/* conteudo do centro do site */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {/* Conteudo da pagina */}
            <Box className={classes.paper2}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <Search />
                </div>
                <InputBase
                  placeholder="Search…"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
              <Modal btnTitle="Cadastrar novo cliente" Icon={Add}>
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
                        mask="999.999.999-99"
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
                        mask="(99)99999-9999"
                      />
                    </Box>

                    <Box component="div" className={classes.btnGroup}>
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
                    </Box>
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
                    {filteredClient.map((client, index) => (
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
                          <IconButton onClick={() => handleDelete(client.id)}>
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

              <Typography>Page: {page}</Typography>

              <TablePagination
                rowsPerPageOptions={[5]}
                component="div"
                count={countClients}
                page={page - 1}
                onChangePage={handleChangePage}
                rowsPerPage={5}
              />
            </Paper>
          </Grid>
        </Grid>
      </Main>
    </Box>
  );
}

export default Clients;
