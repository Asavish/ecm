import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function ProductCard({ title, description, image }) {
    const navigate = useNavigate();
    const handleClick = () => {
        const state = {
            imageUrl: image, // Replace with your image URL
            description: description,
            title : title
          };
        navigate("/products/product-details",{state});
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <img src={image} alt={title} style={{ width: '100%', height: 'auto' }} />
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
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