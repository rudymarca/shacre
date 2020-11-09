import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core'
import React from 'react'

const Confirm = ({titulo, subtitulo, onOk, onCancel}) => {
  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      // onEntering={handleEntering}
      aria-labelledby="confirmation-dialog-title"
      open={true}
      // {...other}
    >
      <DialogTitle id="confirmation-dialog-title">{titulo}</DialogTitle>
      <DialogContent dividers>
        Esta seguro de eliminar ?
        </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="primary">Cancel</Button>
        <Button onClick={onOk} color="primary">Ok</Button>
      </DialogActions>
    </Dialog>
  )
}

export default Confirm
