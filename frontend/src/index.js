import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-f2t226hjxuu6ii4b.us.auth0.com"
    clientId="2OM53lzzB8ByLBrfen5Cp5rLy4IZ7maR"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    </Auth0Provider>
  
);