import React, { useState, useEffect} from 'react'
import { Box, Button, Container, Grid, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Paper, Snackbar, TextField, Typography } from "@material-ui/core";
import { db } from './firebase';
import _ from 'lodash'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Confirm from './components/base/Confirm';
import { SnackbarProvider, useSnackbar } from 'notistack';
import AvisoCobranza from './page/AvisoCobranza';


function App() {
  const initialStateValues = {
    codigo: '',
    alias: '',
    descripcion: ''
  }

  const [confirmDelete, setConfirmDelete] = useState({ show: false, id:''})
  const [values, setValues] = useState(initialStateValues)
  const [medidores, setMedidores] = useState(initialStateValues)
  const [currentId, setCurrentId] = useState('')

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const getMedidores = async () => {
    db.collection('medidor').onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id})
      })
      setMedidores(docs);
    })
  }

  useEffect(() => {
    getMedidores()
  }, [])

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const onRegister = async () => {
    await db.collection('medidor').doc().set(values)
    setValues(initialStateValues);

    enqueueSnackbar('Nuevo Medidor', { variant: 'success'});
  }

  const onEdit = () => {
    // await db.collection('medidor').doc(currentId).update(values);
    enqueueSnackbar('Medidor modificado', { variant: 'success' });
  }

  const onDelete = async (id) => {
    
    await db.collection('medidor').doc(id).delete();
    setConfirmDelete({ ...confirmDelete, show: false })
    enqueueSnackbar('Medidor eliminado', { variant: 'error' });
  }

  return (
    <>

      <AvisoCobranza />



      <h2>Ingresar Medidor</h2>
    {/* <Box component="span" m={1}> */}
      <Paper style={{padding:20}}>
        
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField 
              variant="outlined" 
              label="Codigo Fijo" 
              fullWidth
              autoComplete="off"
              name="codigo" 
              onChange={handleChange}
              value={values.codigo}
              />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              variant="outlined" 
              label="Alias" 
              fullWidth
              autoComplete="off"
              name="alias" 
              onChange={handleChange}
              value={values.alias}
              />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              name="descripcion" 
              variant="outlined" 
              label="Descripcion" 
              fullWidth
              multiline
              rows={3}
              onChange={handleChange}
              value={values.descripcion}
              />
          </Grid>
          <Grid item xs={12}>
            <Button 
              fullWidth 
              variant="contained" 
              color="primary"
              onClick={onRegister}
              >Registrar</Button>
          </Grid>
        </Grid>

      </Paper>
        
    {/* </Box> */}
    {/* <Container style={{ backgroundColor: 'red', flexGrow: 1,}}>

      
      

    </Container> */}
    <h2>Listar</h2>
      <Paper style={{ padding: 0, marginTop:20 }}>
        <List component="nav" aria-label="main mailbox folders">
          {
            _.map(medidores, (medidor, key) => {
              return (
                <ListItem button key={key}>
                  <ListItemText 
                    primary={medidor.codigo} 
                    secondary={medidor.alias}
                    />
                  
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="edit" onClick={onEdit}>
                      <EditIcon />
                    </IconButton>

                    <IconButton 
                      edge="end" 
                      aria-label="delete" 
                      onClick={() => setConfirmDelete({ show: true, id: medidor.id})}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                  

                </ListItem>      
              )
            })
          }
        </List>
      </Paper>
      {
        confirmDelete.show &&
        <Confirm
          onCancel={() => setConfirmDelete({ ...confirmDelete, show: false})}
          onOk={() => onDelete(confirmDelete.id)}
          titulo="Eliminar"
        />
      }
    </>
  );
}

export default App;
