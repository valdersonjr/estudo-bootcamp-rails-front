import React from 'react';
import MainComponent from '../components/shared/MainComponent';

import HightlightedProducts from '../components/Storefront/HighlightedProducts';


const Home:React.FC = () => {  
  return (
    <MainComponent>
      <h1>Home</h1>
      <HightlightedProducts title='promo' />
      <HightlightedProducts title='Em destaque'/>
    </MainComponent>
  )
}

export default Home;