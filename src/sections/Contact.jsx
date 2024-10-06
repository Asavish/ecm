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
              backgroundColor: theme.palette.background.secondary,
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
              <Box width={isSmallScreen ? "100%" : "40%"} marginBottom={isSmallScreen ? 2 : 0}
              display="flex" 
              flexDirection={isSmallScreen ? "column" : "row"} 
              justifyContent={isSmallScreen ? "center" : "space-between" }
              alignItems='center'
              >
                <img src={`${process.env.PUBLIC_URL}/js_logo.png`} alt="contact" width={"60%"} />
              </Box>
              <Box width={isSmallScreen ? "100%" : "70%"} marginBottom={isSmallScreen ? 2 : 0}>
                
                <Typography>
                M/S - JAIN SHOTS INDUSTRIES<br/>
                Floor No.: KHASRA NO.232<br/>
                Building No.: UGF-03 PLOT NO.B-17<br/>
                Street: RAIL VIHAR LONI<br/>
                Landmark: Sri Shiv Shakti Sai Mandir<br/>
                City: Ghaziabad<br/>
                District: Ghaziabad<br/>
                State: Uttar Pradesh<br/>
                PIN Code: 201102
                </Typography>
              </Box>
              <Box width={isSmallScreen ? "100%" : "65%"}>
                <Typography variant="h6">Contact Details</Typography>
                <Typography>Phone: 7737878060</Typography>
                <Typography>Email: jainshotsindustries@gmail.com</Typography>
                <Typography>WhatsApp: 7737878060</Typography>
              </Box>
            </Box>
        </Box>
    );
}

export default Contact;