import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import './firebase'
import { SnackbarProvider } from 'notistack';


ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider
      autoHideDuration={2000}
      // transitionDuration={{
      //   enter: 50, exit: 1
      // }}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}>
      <App />
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);