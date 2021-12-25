import React from 'react';
import {Dialog, Grid} from '@mui/material';
import './AuthDialog.css';

interface IAuthDialogProps {
  open: boolean;
}

const AuthDialog = ({
  open
}: IAuthDialogProps) => {

  return (
    <Dialog
      open={open}
    >
      <Grid>
        
      </Grid>
    </Dialog>
  )
}
export default AuthDialog;