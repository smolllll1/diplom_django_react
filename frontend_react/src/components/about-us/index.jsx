import React from 'react';
import { motion as m } from "framer-motion";

import "./about-us.css";

const AboutUs = () => {
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <section className='w-100 m-0 d-flex row top-about justify-content-center align-items-center'
                style={{ height: "70vh" }}
            >
                <div className='w-75 d-flex row px-0 mx-0 position-relative'>
                    <p className='text-white fst-italic text-center fw-bold position-absolute'
                    style={{ zIndex:"0", fontSize:"10vw", bottom:"130px" }}
                    >Hi there,</p>
                    <img src="https://www.themoviedb.org/assets/2/v4/marketing/deadpool-06f2a06d7a418ec887300397b6861383bf1e3b72f604ddd5f75bce170e81dce9.png"
                        width="100%" height="" alt='deadpool'
                        style={{ zIndex:"1" }}
                        ></img>
                </div>
            </section>
        </m.div>
    );
}

export default AboutUs;