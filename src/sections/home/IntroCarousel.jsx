import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Box } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { GlobalStaticState } from '../../state/GlobalStaticState';


function IntroCarousel() {
    const { items } = GlobalStaticState.introCarousel;

    return (
        <Box sx={{ width: '100%', overflow: 'hidden' ,marginBottom : 10, height : 'auto'}}>
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                dynamicHeight={false}
            >
                {items.map((item, index) => (
                    <Box
                        key={index}
                        component="img"
                        src={item.image}
                        alt={item.alt}
                        // sx={{ width: '100%', objectFit: 'cover' ,maxHeight: '50vh'}}
                        sx={{
                            width: '100%', // Make width 100% to fit the parent
                            height: 'auto', // Allow height to adjust automatically
                            maxHeight: '80vh', // Set a max height
                            objectFit: 'contain', // Maintain aspect ratio while showing the full image
                        }}
                    />
                ))}
            </Carousel>
        </Box>
    );
}

export default IntroCarousel;