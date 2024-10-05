import React from 'react';
import IntroCarousel from '../sections/home/IntroCarousel';
import Products from '../sections/home/Products';
import WhoAreWe from '../sections/home/WhoAreWe';
import Contact from '../sections/home/Contact';


function HomePage() {
  return (
    <div>
      <IntroCarousel />
      <WhoAreWe />
      <Products />
      {/* <Clients /> */}
      <Contact />
    </div>
  );
}

export default HomePage;
