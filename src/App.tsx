import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import GlobalStyle from './styles/global'

import { UserProvider } from "./contexts/user";

const App: React.FC = () => (
  <UserProvider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </UserProvider>
)

export default App;
