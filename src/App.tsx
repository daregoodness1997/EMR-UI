import React from 'react';
import './App.css';
import Login from './pages/auth/login';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Login />
    </div>
  );
}

export default App;
