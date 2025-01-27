import React from 'react'
import planes from '../data/prices.json'
import { useParams } from "react-router-dom";
import "../css/plansDetails.css"
import { FaCheck } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { useMediaQuery } from "react-responsive";
import { motion } from 'framer-motion';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';


function PlanesDetail() {
    const { id } = useParams(); // Obtiene el parámetro dinámico `id` de la URL
    const plan = planes.find((p) => p.id === id); // Busca el plan correspondiente
    const isDesktop = useMediaQuery({ minWidth: 1024 });

    if (!plan) {
        return <h2>Plan no encontrado</h2>;
    }

    return (
        <>
            {!isDesktop ? (
                <>
                    <article className='plansDetails-title&desc'>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className='plan-title'>Plan <span className='yellow-dec'>{plan.nombre}</span></h1>
                            <p className='plan-detail'>{plan.detail}</p>
                        </motion.div>
                    </article>
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <article className='prices-cards'>
                            <div className='card-container'>
                                <div className='titles-card'>
                                    <span className='yellow-dec'>{plan.nombre}</span>
                                    <h2>
                                        {plan.precio}
                                        <span>único pago</span>
                                    </h2>
                                    <p>{plan.descripcion}</p>
                                </div>
                                <ul className='details-card-list'>
                                    {plan.ventajas.map((ventaja, i) => (
                                        <li key={`ventaja-${i}`}>
                                            <FaCheck fill='rgb(34 197 94)' />
                                            {ventaja}
                                        </li>
                                    ))}
                                    {plan.desventajas.map((desventaja, i) => (
                                        <li key={`desventaja-${i}`}>
                                            <IoClose fill='rgb(239 68 68)' />
                                            {desventaja}
                                        </li>
                                    ))}
                                </ul>
                                <a href={`https://wa.me/543764746323?text=Hola!%20👋%20Me%20gustaría%20contratar%20el%20plan%20*${plan.nombre}*.%0A%0A✨%20¿Podrías%20darme%20más%20información%20por%20favor?%20☺️👨‍💻%0A%0A🌐%20¡Gracias!`}
                                    key={plan.id}>Contratar Plan {plan.nombre}</a>
                            </div>
                        </article>
                    </motion.div>
                    <section className='used-technologies'>

                        <motion.div
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3>Tecnologías que se usarán</h3>
                            <ul className='list-technologies'>
                                {plan.technologies.map((tech, i) => (

                                    <li key={`tech-${i}`}>
                                        <img src={`/${tech.image}`} alt={`Logo de ${tech.name}`} />
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </section>
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <section className='technologies-swiper'>
                            <Swiper
                                pagination={{
                                    dynamicBullets: true,
                                }}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay, Pagination]}
                                spaceBetween={50}
                                slidesPerView={1}
                                grabCursor={true}
                            >
                                {plan.technologies.map((tech, i) => (
                                    <SwiperSlide key={`tech-${i}`}>
                                        <article className='slider-articleTech'>
                                            <img src={`/${tech.image}`} alt={`Logo de ${tech.name}`} />
                                            <h4>{tech.name}</h4>
                                            <p>{tech.description}</p>
                                        </article>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </section>
                    </motion.div>
                </>
            ) : (
                <>
                    <section className='desktop-plansDetailContainer' style={{ display: "flex" }}>
                        <article className='plansDetails-title&desc' style={{ width: "50%" }}>
                            <h1 className='plan-title'>Plan <span className='yellow-dec'>{plan.nombre}</span></h1>
                            <p className='plan-detail'>{plan.detail}</p>
                            <section className='used-technologies' style={{ marginTop: "6rem" }}>
                                <h3>Tecnologías que se usarán</h3>
                                <ul className='list-technologies'>
                                    {plan.technologies.map((tech, i) => (
                                        <li key={`tech-${i}`}>
                                            <img src={`/${tech.image}`} alt={`Logo de ${tech.name}`} />
                                        </li>
                                    ))}
                                </ul>
                            </section>
                            <section className='technologies-swiper'>
                                <Swiper
                                    pagination={{
                                        dynamicBullets: true,
                                    }}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay, Pagination]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    grabCursor={true}
                                >
                                    {plan.technologies.map((tech, i) => (
                                        <SwiperSlide key={`tech-${i}`}>
                                            <article className='slider-articleTech'>
                                                <img src={`/${tech.image}`} alt={`Logo de ${tech.name}`} />
                                                <h4>{tech.name}</h4>
                                                <p>{tech.description}</p>
                                            </article>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </section>
                        </article>
                        <article className='prices-cards'>
                            <div className='card-container'>
                                <div className='titles-card'>
                                    <span className='yellow-dec'>{plan.nombre}</span>
                                    <h2>
                                        {plan.precio}
                                        <span>único pago</span>
                                    </h2>
                                    <p>{plan.descripcion}</p>
                                </div>
                                <ul className='details-card-list'>
                                    {plan.ventajas.map((ventaja, i) => (
                                        <li key={`ventaja-${i}`}>
                                            <FaCheck fill='rgb(34 197 94)' />
                                            {ventaja}
                                        </li>
                                    ))}
                                    {plan.desventajas.map((desventaja, i) => (
                                        <li key={`desventaja-${i}`}>
                                            <IoClose fill='rgb(239 68 68)' />
                                            {desventaja}
                                        </li>
                                    ))}
                                </ul>
                                <a href={`https://wa.me/543764746323?text=Hola!%20👋%20Me%20gustaría%20contratar%20el%20plan%20*${plan.nombre}*.%0A%0A✨%20¿Podrías%20darme%20más%20información%20por%20favor?%20☺️👨‍💻%0A%0A🌐%20¡Gracias!`}
                                    key={plan.id}>Contratar Plan {plan.nombre}</a>
                            </div>
                        </article>
                    </section>
                </>
            )}
        </>
    );
}

export default PlanesDetail