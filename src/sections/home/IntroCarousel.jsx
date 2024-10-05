import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Box } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { GlobalStaticState } from '../../state/GlobalStaticState';


function IntroCarousel() {
    const { items } = GlobalStaticState.introCarousel;

    return (
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
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
                        sx={{ width: '100%', height: '50vh', objectFit: 'contain' }}
                    />
                ))}
            </Carousel>
        </Box>
    );
}

export default IntroCarousel;