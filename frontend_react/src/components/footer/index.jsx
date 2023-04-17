import React from "react";

import logo from '../img/logo.svg';
import './footer.css';

const Footer = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#!">
                    <img src={logo} alt="logo" width={100} />
                </a>
            </div>
        </nav>

    )
}

export default Footer;