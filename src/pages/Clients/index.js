import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";

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
import { Delete, Edit, Search, Save, Visibility } from "@material-ui/icons";
import Add from "../../assets/add.svg";

import Header from "../../components/Header";
import Main from "../../components/Main";

import useStyles, { StyledTableCell, StyledTableRow } from "./style";

import api from "../../services/api";
import { confirmAlert } from "react-confirm-alert";

import { ClientContext } from "../../contexts/clients";

toast.configure();
function Clients() {
  const classes = useStyles();
  const history = useHistory();

  const {
    clients,
    page,
    setPage,
    countClients,
    setClients,
    setCountClients,
  } = useContext(ClientContext);

  const [search, setSearch] = useState("");
  const [filteredClient, setFilteredClient] = useState([]);

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

  useEffect(() => {
    api.get(`/clients?page=${page}`).then((response) => {
      setCountClients(Number(response.headers["x-total-count"]));
      setClients(response.data);
    });
  }, [page, countClients]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage + 1);
  };

  async function HandleDeleteClient(id) {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className={classes.confirmDelete}>
            <h1>Você tem certeza?</h1>
            <p>Deseja excluir este cliente?</p>
            <div className={classes.btnGroup}>
              <Button
                variant="contained"
                className={classes.btnYes}
                color="primary"
                onClick={onClose}
              >
                Não
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className={classes.btnYes}
                onClick={async () => {
                  await api.delete(`/clients/${id}`);
                  setClients(clients.filter((client) => client.id !== id));
                  toast.info(`✔️ Excluído com sucesso`, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                  });
                  onClose();
                }}
              >
                Sim, exclua-o!
              </Button>
            </div>
          </div>
        );
      },
    });
  }

  function handleToAddClient() {
    history.push("/add-client");
  }

  async function handleToEditClient(id) {
    history.push(`/edit-client/${id}`);
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
              <button
                className={classes.btn}
                type="button"
                onClick={handleToAddClient}
              >
                <img src={Add} alt="" />
                Cadastrar novo cliente
              </button>
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
                      <StyledTableCell align="right">Ações</StyledTableCell>
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
                          <IconButton
                            onClick={() => HandleDeleteClient(client.id)}
                          >
                            <Delete color="secondary" />
                          </IconButton>
                          <IconButton
                            onClick={() => handleToEditClient(client.id)}
                          >
                            <Edit className={classes.iconEdit} />
                          </IconButton>
                          <IconButton>
                            <Visibility color="primary" />
                          </IconButton>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Typography component="h1" variant="h6">
                Page: {page}
              </Typography>
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
