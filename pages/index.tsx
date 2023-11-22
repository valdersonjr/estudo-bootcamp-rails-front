import React from 'react';
import MainComponent from '../components/shared/MainComponent';
import { useRouter  } from 'next/dist/client/router';

import ProductInfo from '../components/shared/ProductInfo';


const Home:React.FC = () => {
  const router = useRouter();
  
  return (
    <MainComponent>
      {/* <button  onClick={() => router.push('/Auth/Login')}>Login</button> */}
      <h1>Home</h1>
      <ProductInfo />
      <ProductInfo type="highlighted" />
    </MainComponent>
  )
}

export default Home;