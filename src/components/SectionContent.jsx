import { Card, CardMedia, Typography, useTheme } from "@mui/material";

export default function SectionContent ({title,description,imageUrl = ''}) {

    const theme = useTheme();

    return (<>
        <Typography variant="h3" color={theme.palette.text.secondary} 
            sx={
                {
                padding:2,
                marginBottom : 10
                }
            }
            >
            {title}
            </Typography>
            

                {description ? (  // Check if description is non-empty
                <Typography variant="body1" color={theme.palette.accent.main} 
                sx={
                    {
                        padding:2,
                    }
                }
                >
                    {description}
                </Typography>
            ) : (
                <Card sx={{ maxWidth: '80%', width: '100%' , boxShadow :'none'}}>
                <CardMedia
                    component="img"
                    alt="Descriptive Alt Text"
                    sx={{ height: '80vh', objectFit: 'contain' }}
                    image={imageUrl}
                />
            </Card>
            )}
    </>);
}