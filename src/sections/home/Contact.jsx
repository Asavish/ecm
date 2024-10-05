import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import SectionTitle from '../../components/SectionTitle'; 

function Contact() {
    const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));

    return (
        <Box 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            justifyContent="center" 
            padding={2}
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