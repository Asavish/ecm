import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Email from "../components/Email";
import WhatsApp from "../components/Whatsapp";
import Call from "../components/Call";

export default function ContactUs() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return(
      <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center', 
        justifyContent: 'space-around', 
        width: { xs: '90%' ,md : 1200}, // Responsive widths
        height: { xs: 'auto', md: 400 }, // Auto height for small screens
        margin: '0' ,
        gap: 2
      }}
      >
      
        
        <WhatsApp/>
        <Call/>
        <Email/>
        
        
      </Box>
    );
}