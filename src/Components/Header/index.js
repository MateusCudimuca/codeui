import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';


// import { Container } from './styles';

const Header=()=>(

    <>
    
<header className="header">
  
  <div className="container"> 

    <nav className="navmenu">

      <ul className="navlist">
        
        <li className="listitem">
        
          <Link to="/" className="navlink active">Inicio</Link>
        
        </li>
        
        <li className="listitem">
        
          <Link to="/Sobre" className="navlink">Sobre</Link>
        
        </li>

        <li className="listitem">
        
          <Link to="/" className="navlink">Contacto</Link>
        
        </li>
      
      </ul>
    
    </nav>
  
  </div>

</header>

<section className="name">
  
  <h1 className="title move scale">CODE UI</h1>
</section>
</>
);

export default Header