import { Box, Breadcrumbs, Card, CardMedia, createTheme, Paper, Typography, useTheme } from '@mui/material';
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SectionContent from './SectionContent';
import SteelCutWireShots from './SteelCutWireSpecs';

export default function ProductDetails() {

    const location = useLocation();
    const { imageUrl, description,title,application,specs,specificationImage } = location.state || {};
    const theme = useTheme();
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    

    return (
        <Box sx={{ width: '100%' , mx: 'auto',maxWidth: 1200,mb : 10,margin : 5}}>
        <Breadcrumbs aria-label="breadcrumb" separator=">" sx={{ padding: 2 , color: theme.palette.accent.main ,display: 'flex', justifyContent: 'flex-end'}}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Home
        </Link>
        <Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>
          Products
        </Link>
        <Typography color={theme.palette.primary.main}>{title}</Typography>
        </Breadcrumbs>
        <Box bgcolor={theme.palette.background.primary} height = {'10vh'} alignContent={'center'} marginBottom={5}>
            <Typography color={theme.palette.text.default} textAlign={'center'} fontWeight={'bold'} fontSize={'25px'}>{title}</Typography>
        </Box>
        <Box margin={'10px'}>
        <Paper sx = {{marginBottom: 5 }}>
        <Box
        display="flex"
        flexDirection="column"
        sx = {{
            flexDirection : {
                xs : 'column',
                md : 'row'
            }}
        }
        justifyContent="center"
        alignItems="center"
        height="auto"
        >
            <Box sx = {{ display:'flex',justifyContent:'center' ,flex:1,margin:'2% 0 2% 0'}}>
            <Card sx={{ maxWidth: '80%', width: '100%' , boxShadow :'none', flex: 1}}>
                <CardMedia
                    component="img"
                    alt="Descriptive Alt Text"
                    sx={{ height: '40vh', objectFit: 'contain' }}
                    image={imageUrl}
                />
            </Card>
            </Box>
            <Box sx = {{flex:1}}>
            <SectionContent title = 'Description' description = {description}
            textColor = {theme.palette.text.secondary} 
            bodyColor = {theme.palette.text.main}/>
            </Box>
        </Box>
        </Paper>
            <Paper sx = {{marginBottom: 5 , backgroundColor : theme.palette.background.secondary}}>
            
                <SectionContent title = 'Application' description = {application} 
                textColor = {theme.palette.text.default} 
                bodyColor = {theme.palette.text.default}/>
            </Paper>
            <Paper sx = {{marginBottom: 5}}>
                <SectionContent title = 'Specs' description = {specs}
                textColor = {theme.palette.text.secondary} 
                bodyColor = {theme.palette.accent.main}/>
            </Paper>
            <Paper sx = {{marginBottom: 5}}>
               {title == 'Steel Cut Wire Shot' ?<SteelCutWireShots/>:
               <SectionContent title = 'Specification' imageUrl={specificationImage}
                textColor = {theme.palette.text.secondary} 
                bodyColor = {theme.palette.accent.main}/>}
                
            </Paper>
            
            </Box>
            
        </Box>
    );
}