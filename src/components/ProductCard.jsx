import React from 'react';
import { Card, CardContent, Typography, Button, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function ProductCard({ title, description, image , application,specs,specificationImage}) {
    const theme = useTheme();
    const navigate = useNavigate();
    const handleClick = () => {
        const state = {
            imageUrl: image, // Replace with your image URL
            description: description,
            title : title,
            application : application,
            specs : specs,
            specificationImage: specificationImage
          };
        navigate("/products/product-details",{state});
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <img src={image} alt={title} style={{ width: '100%', height: 'auto' }} />
                <Typography variant="h6" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color={theme.palette.text.main}
                sx={{
                    flexGrow: 1,
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    WebkitLineClamp: 2, // Limit to 3 lines
                    textOverflow: 'ellipsis',
                  }}
                >
                    {description}
                </Typography>
                <Button size="small" variant="contained" sx={{ mt: 2 }} onClick={handleClick}>
                    Read More
                </Button>
            </CardContent>
        </Card>
    );
}

export default ProductCard;