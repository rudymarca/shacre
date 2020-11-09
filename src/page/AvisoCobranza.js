import React, { useState} from 'react'
import { Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField } from '@material-ui/core'

const AvisoCobranza = () => {
  const initialStateValues = {
    medidor: '',
    periodo: '',
    consumo: '',
    importe: ''
  }
  const [values, setValues] = useState(initialStateValues)

  return (
    <>
      <h2>Aviso de Cobranza</h2>
      {/* <Box component="span" m={1}> */}
      <Paper style={{ padding: 20 }}>

        <Grid container spacing={3}>
          <Grid item xs={12}>

            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-outlined-label">Medidor</InputLabel>
              <Select
              
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              // value={age}
              // onChange={handleChange}
              label="Medidor"
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            </FormControl>

            {/* <TextField
              variant="outlined"
              label="Medidor"
              fullWidth
              autoComplete="off"
              name="codigo"
              // onChange={handleChange}
              // value={values.codigo}
            /> */}
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Periodo"
              fullWidth
              autoComplete="off"
              name="alias"
              // onChange={handleChange}
              // value={values.alias}
            />
          </Grid>
          <Grid item xs={12}>

            <TextField
              type="number"
              variant="outlined"
              label="Consumo Kwh"
              fullWidth
              autoComplete="off"
              name="alias"
            // onChange={handleChange}
            // value={values.alias}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="number"
              variant="outlined"
              label="Importe Bs"
              fullWidth
              autoComplete="off"
              name="alias"
            // onChange={handleChange}
            // value={values.alias}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              // onClick={onRegister}
            >Registrar</Button>
          </Grid>
        </Grid>

      </Paper>
    </>
  )
}

export default AvisoCobranza
