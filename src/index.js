import { AuthProvider } from '@propelauth/react';
import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';

// import {ReactDOM} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider authUrl={process.env.REACT_APP_AUTH_URL}>
	      <App/>
    </AuthProvider>
  </React.StrictMode>
);
