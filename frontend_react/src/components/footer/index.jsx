import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { AuthenticationData } from "../data/authentication-data";
import logo from '../../svg/logo-footer.svg';

import './footer.css';

const Footer = () => {

    const { responseLogin } = useContext(AuthenticationData);

    return (
        <footer className="d-flex row w-100">
            <nav className="d-flex justify-content-around w-100 text-white flex-wrap py-4">
                <div>
                    <img src={logo} alt="logo" width={100} />
                    {responseLogin ?
                        <Link to={`users/account/${responseLogin?.username}`}
                            style={{ textDecoration: 'none' }}>
                            <div
                                style={{ color: 'rgb(1, 180, 228)' }}
                                className="w-100 bg-white rounded justify-content-center mt-4 d-flex align-items-center fw-bold">
                                Hi
                                <p className="ms-1 my-0 p-0">
                                    {responseLogin?.username}
                                </p>
                                !
                            </div>
                        </Link>
                        :
                        <Link to="registration"
                            style={{ textDecoration: 'none' }}>
                            <div
                                style={{ color: 'rgb(1, 180, 228)' }}
                                className="w-100 bg-white rounded justify-content-center mt-4 d-flex align-items-center fw-bold">
                                <p className="ms-1 my-0 p-0">
                                    JOIN THE COMMUNITY
                                </p>
                            </div>
                        </Link>
                    }
                </div>
                <div>
                    <h3>The Basics</h3>
                    <ul className="p-0 list-unstyled">
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Support</li>
                        <li>API</li>
                        <li>Service</li>
                    </ul>
                </div>
                <div>
                    <h3>Get Involved</h3>
                    <ul className="p-0 list-unstyled">
                        <li>Link</li>
                        <li>Link</li>
                        <li>Link</li>
                    </ul>
                </div>
                <div>
                    <h3>Community</h3>
                    <ul className="p-0 list-unstyled">
                        <li>Guidelines</li>
                        <li>Discussions</li>
                        <li>Leaderboard</li>
                        <li>Twitter</li>
                    </ul>
                </div>
                <div>
                    <h3>Legal</h3>
                    <ul className="p-0 list-unstyled">
                        <li>Terms of Use</li>
                        <li>API Terms of Use</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </nav>
            <section>Build 2023 (april)</section>
        </footer>
    )
}

export default Footer;