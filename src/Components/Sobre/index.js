import React from 'react';

import Header from "../Header";
import Footer from "../Footer";
import { FaReact,FaAngular,FaVuejs } from "react-icons/fa";
import Layout1 from "../../assets/layout-1.png";
import Layout2 from "../../assets/layout-2.png";
import './style.css';
// import { Container } from './styles';

const Sobre = () =>(

<>
<Header/>
<main className="main">

<div className="container">
<div className="project">
<header className="headerconst">
      <h2 className="title">
      projectos
      </h2>
      <p className="description">
        Alguns projectos feitos para clientes.
      </p>
    </header>
    <div className="row">
      <div className="col-md-6">
        <img src={Layout2} alt="Layout do projeto"/>

      </div>
      <div className="col-md-6">
          <div className="textcard">
            <h2 className="Ltitle">consectetur adipisicing</h2>
          <p className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus aut adipisci, enim corporis, quisquam rerum voluptas dolores laboriosam quidem quia maxime necessitatibus recusandae in nostrum nobis? Laudantium nemo quisquam quo.
          </p>
          <h3 className="Lsubtitle">Tecnologias usadas</h3>
          <ul>
            <li>html</li>
            <li>css</li>
            <li>bootstrap</li>
          </ul>
          </div>
      </div>
      </div> 
      <div className="row">
    
      <div className="col-md-6">
          <div className="textcard">
            <h2 className="Ltitle">consectetur adipisicing</h2>
          <p className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus aut adipisci, enim corporis, quisquam rerum voluptas dolores laboriosam quidem quia maxime necessitatibus recusandae in nostrum nobis? Laudantium nemo quisquam quo.
          </p>
          <h3 className="Lsubtitle">Tecnologias usadas</h3>
          <ul>
            <li>html</li>
            <li>css</li>
            <li>js</li>
          </ul>
          </div>
      </div>
      <div className="col-md-6">
        <img src={Layout1} alt="Layout do projeto"/>

      </div>
      </div>  
        </div>
</div>

</main>
<Footer/>
</>
);

export default Sobre