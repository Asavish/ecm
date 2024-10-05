import React from 'react';
import { Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SectionTitle from '../../components/SectionTitle';
import { GlobalStaticState } from '../../state/GlobalStaticState';


function Clients() {
  const { items } = GlobalStaticState.clients;

  return (
    <Box sx={{ width: '100vw', overflow: 'hidden', padding: '20px 0' }}>
        <SectionTitle text="Our Clients" />
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
        showThumbs={false}
        showStatus={false}
        dynamicHeight={false}
        centerMode={true}
        showIndicators={false}
        centerSlidePercentage={40}
      >
        {items.map((logo, index) => (
          <Box
            key={index}
            component="img"
            src={logo.image}
            alt={logo.alt}
            sx={{ maxWidth: '150px', margin: '0 auto' }}
          />
        ))}
      </Carousel>
    </Box>
  );
}

export default Clients;