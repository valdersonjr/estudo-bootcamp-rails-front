import React from 'react';
import Header from '../Header/StorefrontHeader';
import Footer from '../Footer/StorefrontFooter';

interface MaincomponentProps {
    children: React.ReactNode;
}

const MainComponent: React.FC<MaincomponentProps> = ({ children }) => {
    return(
        <div className="d-flex flex-column sticky-footer-wrapper text-white">
            <Header />

            <div className='container flex-fill'>
                {children}
            </div>

            <Footer/>
        </div>
    )
}

export default MainComponent;