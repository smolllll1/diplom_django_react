import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function MoreMenuButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          color: "darkturquoise",
          textTransform: "capitalize",
          fontSize: "1rem",
          ':hover': {
            color: "seashell",
          },
        }}
      >
        More
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to={"about"}
          className="text-decoration-none text-secondary">
          <MenuItem onClick={handleClose}>About Us</MenuItem>
        </Link>
        <Link to={"contacts"}
          className="text-decoration-none text-secondary">
          <MenuItem onClick={handleClose}>Contact Us</MenuItem>
        </Link>
        <Link to={"updated"}
          className="text-decoration-none text-secondary">
          <MenuItem onClick={handleClose}>Support</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}