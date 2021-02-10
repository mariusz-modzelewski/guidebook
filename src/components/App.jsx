import React from 'react';
import '../assets/css/main.css';
import Header from './Header'
import { ConnectedMain } from './Main'
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <ConnectedMain />
      </>
    </Router>
  );
}
export default App

