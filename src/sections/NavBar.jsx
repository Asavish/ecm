
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function NavBar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };

    const menuItems = [
        { text: 'Home', path: '/' },
        { text: 'Products', path: '/products' },
        { text: 'Solutions', path: '/solutions' },
        { text: 'About Us', path: '/about' },
        { text: 'Contact Us', path: '/contact' },
    ];

    return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.secondary.main, width: '100%' }}>
        <Toolbar>
        <img 
            src={`${process.env.PUBLIC_URL}/js_logo.png`} 
            alt="Company Logo" 
            style={{ height: '50px', marginRight: 'auto' }} 
        />
        {isMobile ? (
            <>
            <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {menuItems.map((item, index) => (
                <MenuItem
                    key={index}
                    component={Link}
                    to={item.path}
                    onClick={handleClose}
                >
                    {item.text}
                </MenuItem>
                ))}
            </Menu>
            </>
        ) : (
            <div>
            {menuItems.map((item, index) => (
                <Typography
                key={index}
                variant="button"
                component={Link}
                to={item.path}
                style={{ margin: '0 10px', color: 'inherit', textDecoration: 'none' }}
                >
                {item.text}
                </Typography>
            ))}
            </div>
        )}
        </Toolbar>
    </AppBar>
    );
}

export default NavBar;