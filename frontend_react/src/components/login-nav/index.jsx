import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountMenu from "./avatar/index";
import SearchIcon from '@mui/icons-material/Search';
import { AuthenticationData } from "../data/authentication-data";

import './login-nav.css'

const LoginNav = () => {

    const {
        onHandlerLogout,
        responseLogout,
        responseLogin,
    } = useContext(AuthenticationData);

    return (
        <Stack direction="row" spacing={2}>
            {!responseLogin && !responseLogout ?
                <Link to={'registration'}>
                    <Button type="button" id="registration-btn">Registration</Button>
                </Link>
                :
                null
            }
            {responseLogin ?
            <Link to={`events/${responseLogin?.username}`}>
                <IconButton
                    size="large"
                    aria-label="show 0 new notifications">
                    <Badge badgeContent={0} color="error">
                        <NotificationsIcon className="bell" />
                    </Badge>
                </IconButton>
                </Link>
                :
null
            }
{
    responseLogin ?
        <AccountMenu
            responseLogin={responseLogin}
            onHandlerLogout={onHandlerLogout}
        />
        :
        null
}
{
    !responseLogin ?
    <Link to={'login'}>
        <Button type="button">
            Login
        </Button>
    </Link>
    :
    <div className="me-5 px-2"></div>
}
<Link to={"search"}>
    <IconButton size="large"
        aria-label="search"
        style={{ color: "white" }}>
        <SearchIcon />
    </IconButton>
</Link>
        </Stack >
    )
}

export default LoginNav;