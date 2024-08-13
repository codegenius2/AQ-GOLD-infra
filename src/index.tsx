import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Amplify} from 'aws-amplify';
import config from './aws-exports';

Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
