import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import SectionTitle from '../components/SectionTitle'; 

function Contact() {
    const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const theme = useTheme();
    return (
        <Box 
            // display="flex" 
            // flexDirection="column" 
            // alignItems="center" 
            // justifyContent="center" 
            sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center', 
              justifyContent: 'space-around', 
              width: { xs: '90%' ,md : 1200}, // Responsive widths
              height: { xs: 'auto', md: 400 }, // Auto height for small screens
              margin: '0' ,
              gap: 2,
              backgroundColor: theme.palette.background.main,
              color : theme.palette.text.default,
              padding:2,
              marginTop : 10
            }}
        >
            <Box marginBottom={2}> 
              <SectionTitle text="Contact Us" />
            </Box>
            <Box 
                display="flex" 
                flexDirection={isSmallScreen ? "column" : "row"} 
                justifyContent="space-between" 
                width="100%"
            >
              <Box width={isSmallScreen ? "100%" : "40%"} marginBottom={isSmallScreen ? 2 : 0}>
                <img src={`${process.env.PUBLIC_URL}/js_logo.png`} alt="contact" width={"60%"} />
              </Box>
              <Box width={isSmallScreen ? "100%" : "25%"} marginBottom={isSmallScreen ? 2 : 0}>
                <Typography variant="h6">Address</Typography>
                <Typography>123 Main Street</Typography>
                <Typography>City, State, ZIP</Typography>
                <Typography>Country</Typography>
              </Box>
              <Box width={isSmallScreen ? "100%" : "25%"}>
                <Typography variant="h6">Contact Details</Typography>
                <Typography>Phone: (123) 456-7890</Typography>
                <Typography>Email: contact@example.com</Typography>
                <Typography>WhatsApp: +1234567890</Typography>
                <Typography>Follow us on:</Typography>
                <Typography>Facebook | Twitter | Instagram</Typography>
              </Box>
            </Box>
        </Box>
    );
}

export default Contact;