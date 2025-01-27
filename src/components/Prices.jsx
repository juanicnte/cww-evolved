import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import pricesData from '../data/prices.json'

import { useNavigate } from "react-router-dom";

function Prices() {
    const navigate = useNavigate()
    return (
        <>
            <section className='prices-container'>
                <article className='prices-titles'>
                    <h2 className='yellow-dec'>Tabla de precios</h2>
                    <h3>Planes pensados para vos</h3>
                    <p>Contamos con diferentes planes para desarrollar una web, estos son los más elegidos por nuestros clientes.</p>
                </article>

                <article className='prices-cards'>
                    {pricesData.map((price, index) => (
                        <div key={index} className='card-container'>
                            <div className='titles-card'>
                                <span className='yellow-dec'>{price.nombre}</span>
                                <h2>
                                    {price.precio}
                                    <span>único pago</span>
                                </h2>
                                <p>{price.descripcion}</p>
                            </div>
                            <ul className='details-card-list'>
                                {price.ventajas.map((ventaja, i) => (
                                    <li key={`ventaja-${i}`}>
                                        <FaCheck fill='rgb(34 197 94)' />
                                        {ventaja}
                                    </li>
                                ))}
                                {price.desventajas.map((desventaja, i) => (
                                    <li key={`desventaja-${i}`}>
                                        <IoClose fill='rgb(239 68 68)' />
                                        {desventaja}
                                    </li>
                                ))}
                            </ul>
                            <a href={`/planes/${price.id}`} key={price.id}>Plan {price.nombre}</a>
                        </div>
                    ))}
                </article>
            </section>

        </>
    )
}

export default Prices