import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MainComponent from '../components/shared/MainComponent';
import { useRouter  } from 'next/dist/client/router';


const Home:React.FC = () => {
  const router = useRouter();
  
  return (
    <MainComponent>
      <button  onClick={() => router.push('/Auth/Login')}>Login</button>
    </MainComponent>
  )
}

export default Home;