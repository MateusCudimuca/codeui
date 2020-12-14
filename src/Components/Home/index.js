import React from 'react';
import {Link} from 'react-router-dom';
import ImgBanner from "../../assets/img-banner.png";
import ImgBannerp from "../../assets/img-banner-2.png";
import ImgBannerr from "../../assets/img-bannerr.png";
import{
        FaJsSquare,FaCss3,
        FaReact,FaChevronRight,FaChevronCircleDown} from "react-icons/fa";

import './style.css';
import Header from "../Header";
import Footer from "../Footer";
const Home = () =>(

  <>
  <Header/>
<main className="main">
  <div className="container">
   <div className="stack">
   <header className="headerconst">
      <h2 className="title">
      Tecnologia
      </h2>
      <p className="description">
        Lorem ipsum dolor sit, amet consectetur adipisicing.
      </p>
    </header>
   <div className="row">
      <div className="col-md-4">
        <div className="card">
          <FaJsSquare size="32" color="#bc89ff"></FaJsSquare>
            <h2 className="title">JavaScript</h2>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, tempore.
              </p>
          </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <FaReact size="32" color="#bc89ff"></FaReact>
            <h2 className="title">REACT</h2>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur  elit.adipisicing Veritatis, tempore.
              </p>
          </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <FaCss3 size="32" color="#bc89ff"></FaCss3>
            <h2 className="title">CSS3</h2>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, tempore.
              </p>
          </div>
      </div>
    </div>
   </div>

    <section className="profile">
    <div className="row">
    <div className="col-md-6">
      <img src={ImgBanner} alt="abtração sobre ui" className="move"/>
     </div>
     <div className="col-md-6">
        
      <h1 className="title">About Code ui</h1>
     <p className="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo necessitatibus
      esse at qui distinctio eligendi quaerat quibusdam ut id dicta ullam, magni
      deleniti. Earum dicta error quos, ipsam exercitationem voluptatem.
     </p>
     <Link to="/" className="buttonborder">Projecto
     <FaChevronRight size="18"></FaChevronRight>
     </Link>
     </div>
    </div>
    </section>

    <section className="contentform">

    <header className="headerconst">
      <h2 className="title">
      news letter
      </h2>
      <p className="description">
        Deixa o seu email para receber novidades, <br/> a sua opnião sobre nosso.
      </p>
    </header>
      <form action="" className="form">
        <input type="email" placeholder="exemplo@exemplo.com" className="txtemail"/>
        <textarea name="mensagem" id="" cols="30" rows="10" className="txtmensagem" placeholder="Digite a sua mensagem"></textarea>
        <button type="submit" className="buttonborder">Enviar <FaChevronCircleDown size="18"/></button>
      </form>
      <img src={ImgBannerp} alt="bg" className="imgbannerp"/>
    </section>


    <section className="contentdesign">
   <div className="row">
   <div className="col-md-6">
      <img src={ImgBannerr} alt="bgc" className="imgbannerr hue"/>

     </div>
     <div className="col-md-6">
     <h2 className="title">COMO SE TORNAR UI DESIGN</h2>
      <p className="description">
   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, vitae
    atque aut sequi eaque itaque consequatur quidem neque voluptas libero hic
     sint eos recusandae rem. Deleniti aspernatur veniam reprehenderit fugit?
      </p>

     </div>
    
   </div>
    </section>
  
  </div>
</main>
<Footer/>
</>
   
);
export default Home;