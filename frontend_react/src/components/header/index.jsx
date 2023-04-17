import React from "react";
import SearchHeader from "./search";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Login from "./login";

import logo from '../img/logo.svg';
import './header.css'

const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#!">
                    <img src={logo} alt="logo" width={100} />
                </a>
                <Stack className="button-nav" direction="row" spacing={2}>
                    <Button href="#text-buttons">Movies</Button>
                    <Button href="#text-buttons">People</Button>
                    <Button href="#text-buttons">More</Button>
                </Stack>
                <SearchHeader />
                <Login />
            </div>
        </nav>
    )
}

export default Header;