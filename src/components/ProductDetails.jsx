import { Box, Breadcrumbs, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function ProductDetails() {

    const location = useLocation();
    const { imageUrl, description,title } = location.state || {};

    return (
        <Box>
        <Breadcrumbs aria-label="breadcrumb" separator=">" sx={{ padding: 2 }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Home
        </Link>
        <Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>
          Products
        </Link>
        <Typography color="text.primary">{title}</Typography>
      </Breadcrumbs>
        <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 64px)"
        >
            <Card sx={{ maxWidth: '70%', width: '70%' }}>
                <CardMedia
                    component="img"
                    alt="Descriptive Alt Text"
                    sx={{ height: '50vh', objectFit: 'cover' }}
                    image={imageUrl}
                />
            </Card>
            <Typography variant="body1" color="text.primary" sx={{ marginTop: 2, textAlign: 'center' }}>
                    {description}
            </Typography>
        </Box>
        </Box>
    );
}