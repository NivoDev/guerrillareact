import React from 'react';
import ReactDOM from 'react-dom';
import emailjs from 'emailjs-com';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components'
import * as theme from './theme'

// Public key (user_…) from EmailJS Account — set REACT_APP_EMAILJS_USER_ID in Netlify env for production builds.
const emailJsUserId = process.env.REACT_APP_EMAILJS_USER_ID;
if (emailJsUserId) {
  emailjs.init(emailJsUserId);
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
     <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

