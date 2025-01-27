import React, { useEffect, useRef, useContext, useState } from 'react';
import "../css/Header.css"
import { motion } from 'framer-motion';
import { FaWhatsapp, FaAngleRight, FaFacebookF, FaInstagram, FaArrowDown } from "react-icons/fa";
import { HiBars3BottomLeft } from "react-icons/hi2";

import { Link, Element } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";

import planes from '../data/prices.json'

function Header() {
    // Estado para controlar la visibilidad del mobile menú
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Función para manejar el click en el botón del menú móvil
    const handleMobileNavClick = () => {
        const mobileNav = document.querySelector('#mobile-nav');
        const body = document.body;
        const overlay = document.querySelector('.overlay-active')
        if (mobileNav) {
            mobileNav.classList.toggle('active');
            body.classList.toggle('no-scroll');
            overlay.classList.toggle('active');
            setIsOpen(prevState => !prevState);
        }
    };

    // Funcion para abrir submenu de opciones de menu hamburguesa

    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const openSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen); // Cambia el estado para mostrar/ocultar el submenú
    };
    return (
        <>
            <header>
                <HiBars3BottomLeft onClick={handleMobileNavClick} className="hamburger-button" />
                <picture className='img-container'>
                    <a href="/">
                    <img src="/ss-banner.png" alt="" />
                    </a>
                </picture>
                {location.pathname !== "/" ?
                    <ul className='headerList'>
                        <a href="/">Inicio</a>
                    </ul> :
                    <ul className='headerList'>
                        <div className='header-planesList'>
                            <Link to='planes' smooth={true} duration={1500}>
                                Planes
                            </Link>
                            <FaArrowDown />
                            <ul className='planes-listNames'>
                                {planes.map((plan) => (
                                    <>
                                        <a href={`/planes/${plan.id}`} key={plan.id} style={{ color: "#000" }}>
                                            Plan {plan.nombre}
                                            <span>{plan.descripcion}</span>
                                        </a>
                                    </>
                                ))}
                            </ul>
                        </div>
                        <Link to='WhatWeOffer' smooth={true} duration={1500}>
                            Nosotros
                        </Link>
                        <Link to='Contact' smooth={true} duration={1500}>
                            Contacto
                        </Link>
                    </ul>
                }
                <a className='button-laptop-start' href='https://wa.me/543764746323?text=Hola!%20Me%20gustaría%20saber%20más%20sobre%20tus%20servicios' target='_blank'>
                    Empeza Ahora!
                </a>
            </header>
            <nav id="mobile-nav">
                <section className='container-mobile-nav'>

                    <section className='btn-and-img'>
                        <motion.div

                            animate={
                                isOpen ?
                                    {
                                        rotate: [0, -180],
                                    }
                                    : {}
                            }
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                                times: [0.5],

                            }}
                        >
                            <svg
                                onClick={handleMobileNavClick}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6 hamburger-button-close"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </motion.div>

                    </section>


                    <article className='listas-container'>
                        <ul className='list-idk-nav'>
                            <li>
                                <motion.div

                                    initial={{ opacity: 0, x: -100 }}
                                    animate={isOpen ? { opacity: 1, x: 0 } : {}} // Animación al entrar al viewport
                                    // whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                // style={{ width: "100%", height: "100%" }}
                                >

                                    <a className={`list-mobileNav-option ${location.pathname === "/" ? "active" : ""
                                        }`} href='/'>Inicio</a>
                                </motion.div>

                            </li>
                            <li>
                                <motion.div
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={isOpen ? { opacity: 1, x: 0 } : {}} // Animación al entrar al viewport
                                    // whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.9, ease: "easeInOut" }}
                                // style={{ width: "100%", height: "100%" }}
                                >

                                    <a className='list-mobileNav-option' onClick={openSubMenu} style={{display:"flex", alignItems:"center"}}>
                                        Planes
                                    <FaAngleRight className={`svg-flechita-nav-sub ${isSubMenuOpen ? "active" : ""}`} style={{fill:"#fff", height:"20px", width:"20px"}}/>
                                    </a>
                                        <div
                                            className="abrir-caja"
                                            style={{
                                                display: isSubMenuOpen ? "flex" : "none", // Controla la visibilidad
                                                flexDirection: "column", // Asegura que los elementos estén en columna
                                                gap: "1rem", // Espaciado entre opciones
                                                marginTop: "0.5rem",
                                             
                                            }}
                                            >
                                            <a style={{fontSize: "14px"}} href="/planes/startup">Plan Start-Up</a>
                                            <a style={{fontSize: "14px"}} href="/planes/elevate">Plan Elevate</a>
                                            <a style={{fontSize: "14px"}} href="/planes/proboost">Plan ProBoost</a>
                                        </div>
                                </motion.div>
                            </li>
                            {location.pathname === "/" &&
                                <>
                                    <li>
                                        <motion.div

                                            initial={{ opacity: 0, x: -100 }}
                                            animate={isOpen ? { opacity: 1, x: 0 } : {}} // Animación al entrar al viewport
                                            // whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.9, ease: "easeInOut" }}
                                        // style={{ width: "100%", height: "100%" }}
                                        >
                                            <Link className={`list-mobileNav-option ${location.pathname === "/nosotros" ? "active" : ""
                                                }`} onClick={handleMobileNavClick} to='WhatWeOffer' smooth={true} duration={1500}>
                                                Nosotros
                                            </Link>
                                        </motion.div>
                                    </li>
                                    <li>
                                        <motion.div
                                            initial={{ opacity: 0, x: -100 }}
                                            animate={isOpen ? { opacity: 1, x: 0 } : {}} // Animación al entrar al viewport
                                            // whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 1, ease: "easeInOut" }}
                                        // style={{ width: "100%", height: "100%" }}
                                        >
                                            {/* <a className={`list-mobileNav-option ${location.pathname === "/contacto" ? "active" : ""
                                        }`} href='/contacto'>Contacto</a> */}
                                            <Link className={`list-mobileNav-option ${location.pathname === "/contacto" ? "active" : ""
                                                }`} onClick={handleMobileNavClick} to='Contact' smooth={true} duration={1500}>
                                                Contacto
                                            </Link>
                                        </motion.div>
                                    </li>
                                </>
                            }
                        </ul>
                    </article>

                    <ul className='list-socials-nav'>
                        <motion.div

                            initial={{ opacity: 0, scale: 0 }}
                            animate={isOpen ? { opacity: 1, scale: 1 } : {}} // Animación al entrar al viewport
                            transition={{ duration: 1, ease: "easeInOut" }}
                        >
                            <li><a href="https://www.instagram.com">
                                <FaInstagram />
                            </a></li>
                        </motion.div>
                        <motion.div

                            initial={{ opacity: 0, scale: 0 }}
                            animate={isOpen ? { opacity: 1, scale: 1 } : {}} // Animación al entrar al viewport
                            transition={{ duration: .9, ease: "easeInOut" }}
                        >
                            <li><a href="https://wa.me/543764746323?text=👋%20¡Hola!%20Quisiera%20saber%20más%20sobre%20tus%20%20servicios.%20¿Me%20podes%20dar%20más%20información,%20por%20favor?%20💬✨">
                                <FaWhatsapp />
                            </a></li>
                        </motion.div>
                    </ul>
                </section>
            </nav >
        </>
    )
}

export default Header