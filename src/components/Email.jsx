import { Box, Card, CardContent, useTheme } from "@mui/material";
import { IconButton, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import { GlobalStaticState } from "../state/GlobalStaticState";
import SectionTitle from "./SectionTitle";


export default function Email () {
    const theme = useTheme();
    const email = GlobalStaticState.contact.emails;
    const handleEmailClick = (email) => {// Replace with the recipient's email
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
        window.open(gmailUrl, '_blank');
      };

    return (
        <Card sx={{  mb : 20,marginRight: 2,
            justifyContent: 'center', 
            padding: '0', 
            margin: '0', 
            }}>
        <CardContent>
        <SectionTitle text=" Email Us"/>
      
        <Box sx={{ display: 'flex',
            flexDirection: 'column'}}>
        
                    
            {email.map(item => (
                <IconButton 
                key={item} 
                 variant="contained" color="primary" 
                onClick={() => handleEmailClick(item)}
                sx={{
                backgroundColor: 'transparent', // Remove default background color
                '&:hover': {
                    backgroundColor: 'transparent', // Ensure hover background is also transparent
                }
                }}
                >
                <EmailIcon/> 
                <Typography variant = 'h6' color= {theme.palette.text.main} fontSize={'20px'}>
                    {item}
                </Typography>
                </IconButton>
            ))}
        </Box>
        </CardContent>
        </Card>
    );
}