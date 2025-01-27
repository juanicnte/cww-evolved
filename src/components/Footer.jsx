import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "../css/Footer.css"
function Footer() {
    return (
        <>
            <footer>
                <div className='footer-main-content'>
                    <section className='footer-title'>
                        <img src="/ss-banner.png" alt="" />
                        <p>Teléfono: +54 9 376 4746323</p>
                        <p>Email: centenowebworks@gmail.com</p>
                    </section>

                    <section className='footer-info'>
                        <ul>
                            <li className='opacity-listTitle'>Inicio</li>
                            <li>Acerca de nosotros</li>
                            <li>Nos diferenciamos</li>
                        </ul>
                        <ul>
                            <li className='opacity-listTitle'>Clientes</li>
                            <li>Quiero ser cliente</li>
                        </ul>
                        <ul>
                            <li className='opacity-listTitle'>Planes de desarrollo</li>
                            <li>Personal</li>
                            <li>Emprendimiento</li>
                            <li>Personalizado</li>
                        </ul>
                    </section>
                </div>
                <section className='footer-copy'>
                    <p>@2025 Simplicity Software. derechos reservados.</p>
                    <ul className='footer-socialsList'>
                        <li>
                            <FaInstagram></FaInstagram>
                        </li>
                        <li>
                            <a href="https://wa.me/543764746323?text=👋%20¡Hola!%20Quisiera%20saber%20más%20sobre%20tus%20%20servicios.%20¿Me%20podes%20dar%20más%20información,%20por%20favor?%20💬✨"
                                style={{
                                    color: "#fff",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                            <FaWhatsapp></FaWhatsapp>
                            </a>
                        </li>
                    </ul>
                </section>
            </footer>
        </>
    )
}

export default Footer