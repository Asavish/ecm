import { Card, CardMedia, Paper, Typography, useTheme } from "@mui/material";

export default function SectionContent ({title,description,imageUrl = '',textColor,bodyColor}) {

    const theme = useTheme();

    return (<>
        <Typography variant="h4" color={textColor} 
            sx={
                {
                padding:2,
                marginBottom : '10px'
                }
            }
            >
            {title}
            </Typography>
                {description ? (  // Check if description is non-empty
                <Typography variant="body1" color={bodyColor} 
                sx={
                    {
                        padding:2,
                    }
                }
                >{ console.log(description)}
                    {description}
                </Typography>
            ) : (
                <Card sx={{ maxWidth: '95%', width: '100%' , boxShadow :'none',padding:'0px 0px 2% 2%',
                    marginBottom : '10px'}}>
                <CardMedia
                    component="img"
                    alt="Descriptive Alt Text"
                    sx={{width:'90%', objectFit: 'cover' }}
                    image={imageUrl}
                />
            </Card>
            )}

    </>);
}