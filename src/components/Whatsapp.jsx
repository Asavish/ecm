import { Box, Card, CardContent, IconButton, Typography, useTheme } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { GlobalStaticState } from "../state/GlobalStaticState";
import SectionTitle from "./SectionTitle";

export default function WhatsApp () {
    const theme = useTheme();
    const phoneNumber = GlobalStaticState.contact.phone; 
    const handleWhatsappClick = (phone) => {
        // Replace with the actual phone number (in international format)
        const message = 'Hello! This is a message';
        const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
      };

    return (
        <Card sx={{ marginRight: 2,
            justifyContent: 'center', 
            padding: '0', 
            margin: '0' 
            }}>
        <CardContent>
        
      <SectionTitle text=" Whatsapp"/>
        <Box
        sx={{ 
            display: 'flex', 
            flexDirection: 'column'
          }}
        >

        {
        phoneNumber.map((phone) => (
            <IconButton
            key={phone+"W"}
            variant="contained" color="primary" 
            onClick={()=>handleWhatsappClick(phone)}
            sx={{
                backgroundColor: 'transparent', // Remove default background color
                '&:hover': {
                backgroundColor: 'transparent', // Ensure hover background is also transparent
                }
            }}
            >
                <WhatsAppIcon/>
                <Typography variant = 'h6' color= {theme.palette.text.main} fontSize={'20px'}>
                    {phone}
                </Typography>
            </IconButton> 
        ))
      }
        </Box>
        </CardContent>
        </Card>
    );
}