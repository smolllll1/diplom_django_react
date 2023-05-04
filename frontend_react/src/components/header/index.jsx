import React from "react";
import { Link } from "react-router-dom";
import SearchNav from "../search-nav";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LoginNav from "../login-nav";
import axios from "../../api/axios";
import logo from '../../svg/logo.svg';
import './header.css'

const Header = () => {

    const onHandlerMore = () => {

        console.log('isMore')
        axios.get("http://127.0.0.1:8000/test/")
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
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
                        UpdataBackend
                    </Button>
                </Stack>
                <SearchNav />
                <LoginNav />
            </div>
        </nav>
    )
}

export default Header;