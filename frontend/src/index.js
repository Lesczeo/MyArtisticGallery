import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Entrada from './components/Entrada/Entrada.js';
import Gallery from './components/Galeria/Gallery.js';
import ListaDeAtalhos from './components/ListaDeAtalhos/ListaDeAtalhos';

const root = ReactDOM.createRoot(document.getElementById('rootHome'));
root.render(
  <React.StrictMode>
    <div id="Masterpage">
      <ListaDeAtalhos/>
      <Entrada />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals