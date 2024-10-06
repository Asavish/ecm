import { Box, Breadcrumbs, Card, CardMedia, createTheme, Typography, useTheme } from '@mui/material';
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function ProductDetails() {

    const location = useLocation();
    const { imageUrl, description,title } = location.state || {};
    const theme = useTheme();
   

    return (
        <Box sx={{ width: '100%' , mx: 'auto',maxWidth: 1200,px: 2,mb : 10}}>
        <Breadcrumbs aria-label="breadcrumb" separator=">" sx={{ padding: 2 , color: theme.palette.accent.main ,display: 'flex', justifyContent: 'flex-end'}}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Home
        </Link>
        <Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>
          Products
        </Link>
        <Typography color={theme.palette.primary.main}>{title}</Typography>
        </Breadcrumbs>
        <Box bgcolor={theme.palette.background.primary} height = {'10vh'} alignContent={'center'}>
        <Typography color={theme.palette.text.default} textAlign={'center'} fontWeight={'bold'} fontSize={'25px'}>{title}</Typography>
        </Box>
        
        <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 64px)"
        >
            <Card sx={{ maxWidth: '80%', width: '100%' }}>
                <CardMedia
                    component="img"
                    alt="Descriptive Alt Text"
                    sx={{ height: '80vh', objectFit: 'cover' }}
                    image={imageUrl}
                />
            </Card>
            
        </Box>
        <h1>Description</h1>
            <Typography variant="body1" color={theme.palette.accent.main} >
                    {description}
            </Typography>
        </Box>
    );
}