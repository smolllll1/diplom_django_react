import React from "react";
import { Link } from "react-router-dom";
import SearchNav from "../search-nav";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LoginNav from "../login-nav";
import logo from '../../svg/logo.svg';
import './header.css'

const Header = () => {

    //button More
    const onHandlerMore = () => {
        console.log('isMore')
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}>
                    <img src={logo} alt="logo" width={100} />
                </Link>
                <Stack className="button-nav" direction="row" spacing={2}>
                    <Link to={"/movies"} replace>
                        <Button type="button">Movies</Button>
                    </Link>
                    <Link to={"/people"}>
                        <Button type="button" className="people">People</Button>
                    </Link>
                    <Button
                        onClick={(() => { onHandlerMore() })}
                    >
                        More
                    </Button>
                </Stack>
                <SearchNav />
                <LoginNav />
            </div>
        </nav>
    )
}

export default Header;