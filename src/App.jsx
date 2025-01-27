import { useEffect, useState } from 'react';
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Planes from './components/PlanesDetail'

import { FaAnglesUp } from "react-icons/fa6";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";


const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 50); // Mostrar después de 100px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`scrollToTop ${showButton ? 'visible' : ''}`}>
      {/* <a href="https://wa.me/543764746323?text=👋%20¡Hola!%20Quisiera%20saber%20más%20sobre%20tus%20%20servicios.%20¿Me%20podes%20dar%20más%20información,%20por%20favor?%20💬✨" target='_blank' className="contact-header">
        <FaWhatsapp />
      </a> */}
      <FaAnglesUp onClick={scrollToTop} />
    </div>
  );
};


function App() {
  return (
    <>
      <Router>
        <Header></Header>
          <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planes/:id" element={<Planes />} />
        </Routes>
          </main>
        <div
          style={{
            backgroundImage:
              'radial-gradient(ellipse 80% 80% at 50% -20%,rgba(120,119,198,.3),hsla(0,0%,100%,0))',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '30rem',
            zIndex: "-1000",
          }}
        />
        <div className='overlay-active'></div>
        <Footer></Footer>
        <ScrollToTopButton />
      </Router>
    </>
  )
}

export default App
