// Entry Point for our Application. This file is needed for linking to App (containing all React Components) and to import any custom styling
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

serviceWorker.register();