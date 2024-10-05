import React from 'react';
import { Box, Typography } from '@mui/material';
import SectionTitle from '../../components/SectionTitle'; 

function Contact() {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Box> 
              <SectionTitle text="Contact Us" />
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="space-between" width="100%">
              <Box width="40%">
                <img src={`${process.env.PUBLIC_URL}/js_logo.png`} alt="contact" width={"100%"} />
              </Box>
              <Box width="25%">
                
              </Box>
              <Box width="25%">
                
              </Box>
            </Box>
        </Box>
    );
}

export default Contact;