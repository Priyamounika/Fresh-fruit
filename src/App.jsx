
import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Menus from './components/Menus/Menus';
import Banners from './components/Banners/Banners';
import Banner2 from './components/Banners/Banner2';
import Banner3 from './components/Banners/Banner3';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
    <main className='overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Menus/>
      <Banners/>
      <Banner2/>
      <Banner3/>
      <Footer/>
    </main>
    </>
    );
};

export default App;