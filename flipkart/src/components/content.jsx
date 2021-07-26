/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './scripts/split'

import Products from './prducts.jsx'

function content() {
    return (
        <>
            <div className="container">
                <div className="swiper-container mySwiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><img src="https://rukminim1.flixcart.com/flap/9999/1000/image/b55dbd7719f1c101.jpg" alt="img" /></div>
                        <div className="swiper-slide"><img src="https://rukminim1.flixcart.com/flap/9999/1000/image/32f0aad33ca01c10.jpg" alt="img" /></div>
                        <div className="swiper-slide"><img src="https://rukminim1.flixcart.com/flap/9999/1000/image/eb18ca7d836b6d96.jpg" alt="img" /></div>
                        <div className="swiper-slide"><img src="https://rukminim1.flixcart.com/flap/9999/1000/image/75a15c3e19c3f7de.jpg" alt="img" /></div>
                    </div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-pagination"></div>
                </div>
                <div className="products">
                    <Products />
                </div>
                <div className="products">
                    <Products />
                </div>
                <div className="products">
                    <Products />
                </div>
                <div className="products">
                    <Products />
                </div>
            </div>
        </>
    )
}

export default content
