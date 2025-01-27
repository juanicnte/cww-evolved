import React from 'react'
import "../css/Home.css"

import { CiGlobe } from "react-icons/ci";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { Link, Element } from "react-scroll";

import Advantages from './Advantages';
import Prices from './Prices';
import WhatWeOffer from './WhatWeOffer';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';
function Home() {
  return (
    <>
      {/* <Header></Header> */}
      <div className='home-container-laptop'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <section className='home-title-container'>
            <h1 className='yellow-dec'>Simplicity Software</h1>
            <h2>convertimos tus ideas en <span className='yellow-dec'>realidad</span></h2>
            <p>Desarrollamos <span className='yellow-dec'>Aplicaciones y paginas web</span> para empresas o emprendimientos, estamos enfocados en darle el mayor crecimiento a tu negocio en el menor tiempo posible, con soluciones de ventas , gestion, organizacion de tu stock y un <span className='yellow-dec'>panel de administracion</span> para modificar tus productos a tu gusto en pocos clicks.</p>
            <article className='home-button-action'>
              <button>
                <CiGlobe />
                <Link to="planes" smooth={true} duration={1500}>
                  Empezá tu web
                </Link>
              </button>
              <button>
                <LiaLaptopCodeSolid />
                <Link to="WhatWeOffer" smooth={true} duration={1500}>
                  Diferencia tu web
                </Link>
              </button>
            </article>
          </section>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className='code-images'>
            <img className='code-images-1' src="/code1.webp" alt="" />
            <img className='code-images-2' src="/code2.webp" alt="" />
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Advantages></Advantages>
      </motion.div>
      <Element name="planes">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Prices />
        </motion.div>
      </Element>
      <Element name="WhatWeOffer">
      <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
        <WhatWeOffer></WhatWeOffer>
        </motion.div>
      </Element>
      <Element name="Contact">
      <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        <Contact></Contact>
        </motion.div>
      </Element>
      {/* <Footer></Footer> */}
    </>
  )
}

export default Home