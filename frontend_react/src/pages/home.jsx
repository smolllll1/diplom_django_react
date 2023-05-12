import React, { useContext } from "react";
import {HomeRandom} from "../components/home-random";
// import IndividualIntervalsExample from "../components/slider";
import { AuthenticationData } from "../components/data/authentication-data";

const Home = () => {
    const { responseLogout } = useContext(AuthenticationData);
    return (
        <div className="w-100 vh-100">
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
            {/* <IndividualIntervalsExample /> */}
        </div>
    )
}

export default Home;