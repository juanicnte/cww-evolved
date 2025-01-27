import React from 'react'

function WhatWeOffer() {
    return (
        <>
            <section className='WhatWeOffer-mainContainer'>
                <article className='WhatWeOffer-title'>
                    <span className='yellow-dec'>Consigue tu web rápido</span>
                    <h2>Todo lo que ofrecemos al desarrollar una web</h2>
                </article>
                <div className='WhatWeOffer-item-container'>
                    <article className='WhatWeOffer-item'>
                        <h3 className='yellow-dec'>Rendimiento y velocidad de tu web</h3>
                        <p>Usamos las ultimas tecnologias para el desarrollo de software, lo que nos permite tener una velocidad muy rapida en el renderizado de la web</p>
                        <img style={{ width: "16rem" }} src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png" alt="" />
                    </article>
                    <article className='WhatWeOffer-item'>
                        <h3 className='yellow-dec'>Adaptacion a celular</h3>
                        <p>Tu pagina web estara adaptada a todos los dispositivos moviles</p>
                        <img style={{ width: "15rem", height: "23rem", objectFit: "cover" }} src="https://oprik-sofware.vercel.app/movileImg.jpg" alt="" />
                    </article>
                    <article className='WhatWeOffer-item'>
                        <h3 className='yellow-dec'>Codigo poderoso y mantenible</h3>
                        <p>Si en algun momento tenes ganas de modificar tu web, se puede hacer sin problemas ya que contamos con codigo mantenible y organizado</p>
                        <div className='imgCode-container'>
                            <div className='selectCode'>
                                {/* border-bottom: 2px solid #ebebeb59;
    border-right: 1px solid #ebebeb30; */}
                                <span style={{ borderBottom: "2px solid #ebebeb59", borderRight: "1px solid #ebebeb30" }}>Example.jsx</span>
                                <span style={{ opacity: ".5" }}>App.jsx</span>
                            </div>
                            <img style={{ width: "16rem", margin: "0" }} src="/carbon-phone.jpg" alt="" />
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}

export default WhatWeOffer