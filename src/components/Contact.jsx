import React, { useRef, useState } from 'react';
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { Spinner, Center } from '@chakra-ui/react'
import CustomToast from './CuastomToast';

import emailjs from 'emailjs-com';

import '../css/Contact.css'

function Contact() {
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true); // Activamos el estado de carga

        emailjs.sendForm(
            'service_lrlx5x9',
            'template_fe4147t',
            form.current,
            'aHosem01UCZ6JLpSY'
        )
            .then((result) => {
                console.log(result.text);
                setMessageSent(true);
                form.current.reset();
                setIsLoading(false);
                setTimeout(() => setMessageSent(false), 3000);
            }, (error) => {
                console.log(error.text);
                setIsLoading(false);
            });
    };
    return (
        <>
            <h2 id="contact"
                className='contact-title'
            >
                ¿Te quedó alguna duda?
            </h2>        <section className='contact-mainContainer'>
                <article className='contact-itemLeft'>
                    <h3>Ponete en contacto con Nosotros</h3>
                    <h4>Completá el formulario y enviá tu consulta</h4>
                    <p>
                        <CiMail strokeWidth={"1"}></CiMail>
                        centenowebworks@gmail.com
                    </p>
                    <p>
                        <FiPhone></FiPhone>
                        +54 9 376 4746323
                    </p>
                    <img src="/Ilustration.webp" alt="" />
                </article>
                <article className='contact-itemRight'>
                    <form ref={form} onSubmit={sendEmail} className='contactForm-form'>
                        <div className='contactForm-input-container'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <input type="text" name="user_name" placeholder='Nombre' required />
                        </div>
                        <div className='contactForm-input-container'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <input type="email" name="user_email" placeholder='Email' required />
                        </div>
                        <select name="service" required>
                            <option value="" disabled selected>Selecciona un servicio</option>
                            <option value="diseño_web">Diseño Web</option>
                            <option value="community_manager">Community Manager</option>
                            <option value="seo">SEO</option>
                            <option value="marketing_digital">Marketing Digital</option>
                        </select>
                        <div className='contactForm-input-container'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <input type="tel" name="user_phone" placeholder='Teléfono' required />
                        </div>
                        <div className='contactForm-input-container'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                            </svg>
                            <textarea name="message" placeholder='Mensaje' required></textarea>
                        </div>
                        {!isLoading ? (
                            <div className='contactForm-input-container-submit'>


                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                <input type="submit" value="Enviar" style={{cursor: "pointer"}} />

                            </div>
                        ) : (
                            <Center h="full">
                                <Spinner color="rgb(254 240 138)" borderWidth="4px" />
                            </Center>
                        )}
                    </form>
                    {messageSent && (
                        <CustomToast
                            id="contactform-id"
                            title="Formulario enviado."
                            description="Nos contactaremos contigo lo antes posible."
                            status="success"
                            duration={5000}
                            position= "top-right"
                        />
                    )}
                </article>
            </section>
        </>
    )
}

export default Contact