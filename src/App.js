import React from 'react';
// importando Styles
import "./styles/app.scss";
// Importando componentes
import Nav from "./components/Nav";
import Search from "./components/Search";
//Animation
import { AnimatePresence } from "framer-motion"

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Search />
    </div>
  );
}

export default App;
