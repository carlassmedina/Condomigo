import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from './components/home/homePage';
import ListClients from'../src/components/list/listClient'
import Login from '../src/components/login/login'
import Recibos from '../src/components/recibos/recibos'



function App() {
  return (
    <Router>
      <Routes>
        
        <Route path='/HomePage' element={<HomePage/>}/>
        <Route path='/listaDeClientes' element={<ListClients />}/>
        <Route path='/listaDeClientes' element={<ListClients />}/>
        <Route path='/listaderecibos' element={<Recibos/>}/>
      <Route path="/" element={<Login/>} />
      </Routes>
    </Router>

  );
}

export default App;
