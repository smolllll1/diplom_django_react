import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LoginNav from "../login-nav";
import MoreMenuButton from "../more-menu";
import logo from '../../svg/logo.svg';

import './header.css'

const Header = () => {

    return (
        <header className="w-100">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>
                        <img src={logo} alt="logo" width={100} />
                    </Link>
                    <Stack className="button-nav" direction="row" spacing={2}>
                        <Link to={"pop_movies"} replace>
                            <Button type="button">Movies</Button>
                        </Link>
                        <Link to={"pop_people"}>
                            <Button type="button" className="people">People</Button>
                        </Link>
                        <MoreMenuButton />
                    </Stack>
                    <LoginNav />
                </div>
            </nav>
        </header>
    )
}

export default Header;