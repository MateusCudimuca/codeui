import React from 'react';
import {Link} from 'react-router-dom';
import './style.css'
import ImgLiq2 from "../../assets/img-liq-2.png";
import{
        FaFacebook,
        FaGithub,FaGooglePlusG,FaLinkedinIn} from "react-icons/fa";

// import { Container } from './styles';
const Footer =() =>(
    <>
    <footer className="footer">  
  <div className="container">
        <h2 className="title">CODE UI</h2>
        <p className="des">
        Empresa de prestação de serviço, na area de <strong>UI DESIGN</strong> <br/>
        criando UI para todo tipo de trabalho.
        </p>

        <div className="socialmedia">
        
              <Link to="facebook.com/Mateusmmsc">
              
        <FaFacebook size="32" color="#bc98ff"/>
              </Link>
          
              <Link to="github-com/@MateusCudimuca">
              
        <FaGithub size="32" color="#bc98ff"/>
              </Link>
         
              <Link >
              
        <FaGooglePlusG size="32" color="#bc98ff"/>
              </Link>
           
              <Link to="linkedin.com/Mateusmmsc">
        <FaLinkedinIn size="32" color="#bc98ff"/>
              
              </Link>
          
       
    </div>
  </div>
  <img src={ImgLiq2} alt="" className="imgliq2 move rotate"/>
</footer>
    </>
)

export default Footer;