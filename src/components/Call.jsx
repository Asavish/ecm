import { Box, Card, CardContent, IconButton, Typography, useTheme } from "@mui/material";
import { GlobalStaticState } from "../state/GlobalStaticState";
import PhoneIcon from '@mui/icons-material/Phone';
import SectionTitle from "./SectionTitle";

export default function Call() {
  const theme = useTheme();
    const phoneNumber = GlobalStaticState.contact.phone; 
    const handleCallClick = (phone) => {
        const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Redirect to the calling application
      window.location.href = `tel:${phone}`;
    } else {
      // Optionally show an alert or do nothing
      alert("Not a mobile device; no action taken.");
      // alert("This feature is available on mobile devices only.");
    }
      };

    return (
        <Card sx={{ mb : 10,marginRight: 2,
          justifyContent: 'center', 
          padding: '0', 
          margin: '0' }}>
        <CardContent>
      <SectionTitle text=" Call Us"/>
    <Box
    sx={{ 
      display: 'flex', 
      flexDirection: 'column'
    }}
    >
        {
        phoneNumber.map((phone) => (
            <IconButton
            key={phone.id}
            variant="contained" color="primary" 
            onClick={()=>handleCallClick(phone)}
            sx={{
                backgroundColor: 'transparent', // Remove default background color
                '&:hover': {
                backgroundColor: 'transparent', // Ensure hover background is also transparent
                }
            }}
            >
                <PhoneIcon/>
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