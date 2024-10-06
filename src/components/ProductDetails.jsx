import { Box, Breadcrumbs, Card, CardMedia, createTheme, Typography, useTheme } from '@mui/material';
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SectionContent from './SectionContent';

export default function ProductDetails() {

    const location = useLocation();
    const { imageUrl, description,title,application,specs,specicicationImage } = location.state || {};
    const theme = useTheme();
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    

    return (
        <Box sx={{ width: '100%' , mx: 'auto',maxWidth: 1200,mb : 10}}>
        <Breadcrumbs aria-label="breadcrumb" separator=">" sx={{ padding: 2 , color: theme.palette.accent.main ,display: 'flex', justifyContent: 'flex-end'}}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Home
        </Link>
        <Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>
          Products
        </Link>
        <Typography color={theme.palette.primary.main}>{title}</Typography>
        </Breadcrumbs>
        <Box bgcolor={theme.palette.background.primary} height = {'10vh'} alignContent={'center'} marginBottom={10}>
        <Typography color={theme.palette.text.default} textAlign={'center'} fontWeight={'bold'} fontSize={'25px'}>{title}</Typography>
        </Box>
        
        <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="auto"
        >
            <Card sx={{ maxWidth: '80%', width: '100%' , boxShadow :'none'}}>
                <CardMedia
                    component="img"
                    alt="Descriptive Alt Text"
                    sx={{ height: '80vh', objectFit: 'contain' }}
                    image={imageUrl}
                />
            </Card>
            
        </Box>
        
            <SectionContent title = 'Description' description = {description}/>
            <SectionContent title = 'Application' description = {application}/>
            <SectionContent title = 'Specs' description = {specs}/>
            <SectionContent title = 'Specification' imageUrl={specicicationImage}/>
        </Box>
    );
}