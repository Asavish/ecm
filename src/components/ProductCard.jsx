import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';


function ProductCard({ title, description, image }) {
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
                <Button size="small" variant="contained" sx={{ mt: 2 }}>
                    Read More
                </Button>
            </CardContent>
        </Card>
    );
}

export default ProductCard;