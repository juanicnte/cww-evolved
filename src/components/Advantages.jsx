import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { MdOutlinePhonelinkSetup } from "react-icons/md";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { LuSmilePlus } from "react-icons/lu";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

function Advantages() {
    return (
        <>
            <section className='ventajas-container'>
                <h3 className='ventajas-title'>Qué vamos a <span className='yellow-dec'>conseguir</span></h3>
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
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <article className='slider-article'>
                            <FaGoogle></FaGoogle>
                            <h4>SEO</h4>
                            <p>Vas a tener más visibilidad en Google, tus páginas estarán en el primer lugar de búsqueda</p>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article className='slider-article'>
                            <MdOutlinePhonelinkSetup/>
                            <h4>Web Responsive</h4>
                            <p>Vas a tener un sitio web profesional adapatado a todos los dispositivos moviles</p>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article className='slider-article'>
                            <FaScrewdriverWrench/>
                            <h4>Asesoramiento</h4>
                            <p>Tenés asesoramiento uno a uno con los diseñadores de tu página web</p>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article className='slider-article'>
                            <LuSmilePlus/>
                            <h4>Simpleza</h4>
                            <p>Es simple. Los clientes buscan, te encuentran, te contactan y vendés</p>
                        </article>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    )
}

export default Advantages