import React, { useEffect } from 'react';
import IntroCarousel from '../sections/home/IntroCarousel';
import Products from '../sections/home/Products';
import WhoAreWe from '../sections/home/WhoAreWe';
import Contact from '../sections/Contact';


function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <IntroCarousel />
      <WhoAreWe />
      <Products />
      {/* <Clients /> */}
    </div>
  );
}

export default HomePage;
