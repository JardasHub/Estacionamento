
import './App.css';
import { Link } from 'react-router-dom';
import React from 'react';
import img from './img/car.svg'; 
function App() {


  return (
   
    <>
      <header className='container-header'>
      <h1>Estacionamento</h1>
      </header>
      <div className='container'>
      <div className='container-menu'>
        <Link className='menu' to="/controle">
        <img src={img}  />
        <p>Controle de acesso</p>
        </Link>
        
        <Link className='menu' to="/gestao"></Link>
        
        <Link className='menu' to="/monitoramento"></Link>
      </div>
      </div>
      <footer className='container-footer'>
      <p>© 2023 Estacionamento. Todos os direitos reservados.</p>
      </footer>
    </>
    );
}

export default App;
