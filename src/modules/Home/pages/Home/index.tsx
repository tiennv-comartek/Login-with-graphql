import { setTitle } from '@helpers/dom';
import React, { useEffect } from 'react';
import Home from './components/Home/Home_page';

function HomePage() {
  useEffect(() => {
    setTitle('Home');
  }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default HomePage;
