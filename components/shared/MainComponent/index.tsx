import React from 'react';
import StoreFrontHeader from '../Header/StorefrontHeader';

interface MaincomponentProps {
    children: React.ReactNode;
}

const MainComponent: React.FC<MaincomponentProps> = ({ children }) => {
    return(
        <div className="d-flex flex-column sticky-footer-wrapper">
            <StoreFrontHeader />
            
            <div className='container flex-fill'>
                {children}
            </div>
        </div>
    )
}

export default MainComponent;