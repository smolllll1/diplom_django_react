import React from "react";

import logo from '../../img/logo-footer.svg';
import './footer.css';

const Footer = () => {

    return (
        <footer>
            <nav>
                <div>
                    <img src={logo} alt="logo" width={100} />
                </div>
                <div>
                    <h3>The Basics</h3>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>
                <div>
                    <h3>Get Involved</h3>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
                <div>
                    <h3>Community</h3>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul>
                </div>
                <div>
                    <h3>Legal</h3>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </nav>
        </footer>
    )
}

export default Footer;