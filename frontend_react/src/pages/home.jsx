import React, { useContext } from "react";
import { motion as m } from "framer-motion";
import { HomeRandom } from "../components/home-random";
import {SliderHomePage} from "../components/slider-home";
import { AuthenticationData } from "../components/data/authentication-data";

const Home = () => {
    const { responseLogout } = useContext(AuthenticationData);
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-100">
            {responseLogout ?
                <div className="w-100 text-white text-center py-4"
                    style={{ backgroundColor: 'rgb(1, 180, 228)' }}
                >
                    <h2>Logged Out!</h2>
                    <h4>You have been successfully logged out</h4>
                </div>
                :
                null
            }
            <HomeRandom />
            <SliderHomePage />
        </m.div>
    )
}

export {Home};