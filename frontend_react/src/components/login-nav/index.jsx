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
        formikLogin,
        success,
        hideButtonRegistration,
        hideButtonLogin,
        onHandlerLogout,
        responseLogin,
    } = useContext(AuthenticationData);

    return (
        <Stack direction="row" spacing={2}>
            {success === false
                && hideButtonRegistration === false
                && hideButtonLogin === false
                ?
                <Link to={'registration'}>
                    <Button type="button" id="registration-btn">Registration</Button>
                </Link>
                :
                null
            }
            {hideButtonLogin === true ?
                <IconButton
                    size="large"
                    aria-label="show 0 new notifications">
                    <Badge badgeContent={0} color="error">
                        <NotificationsIcon className="bell" />
                    </Badge>
                </IconButton>
                :
                null
            }
            {hideButtonLogin === true ?
                <AccountMenu
                    formikLogin={formikLogin}
                    responseLogin={responseLogin}
                    onHandlerLogout={onHandlerLogout}
                />
                :
                null
            }
            {hideButtonLogin === false ?
                <Link to={'login'}>
                    <Button type="button">Login</Button>
                </Link>
                :
                <div className="me-5 px-2"></div>
            }
            <Link to={"search"}>
                <IconButton size="large"
                    aria-label="search"
                    style={{ color: "white" }}
                >
                    <SearchIcon />
                </IconButton>
            </Link>
        </Stack>
    )
}

export default LoginNav;