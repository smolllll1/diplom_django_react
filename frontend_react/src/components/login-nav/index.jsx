import React from "react";
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountMenu from "./avatar/index"

import './login-nav.css'

const LoginNav = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Link to={'/registration'}>
                <Button type="button" id="registration-btn">Registration</Button>
            </Link>
            <IconButton
                size="large"
                aria-label="show 7 new notifications">
                <Badge badgeContent={7} color="error">
                    <NotificationsIcon className="bell" />
                </Badge>
            </IconButton>
            {/* <Link to={'/users/account'}> */}
                {/* <Avatar variant='circular' sx={{ bgcolor: "#01D277" }}>V</Avatar> */}
                <AccountMenu />
            {/* </Link> */}
            <Link to={'/login'}>
                <Button type="button">Login</Button>
            </Link>
        </Stack>
    )
}

export default LoginNav;