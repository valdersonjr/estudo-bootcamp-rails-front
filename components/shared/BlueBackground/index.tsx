import React from 'react';
import styles from '../../../styles/Background.module.css';

interface BlueBackgroundProps {
    children: React.ReactNode;
}

const BlueBackground: React.FC<BlueBackgroundProps> = ({ children }:BlueBackgroundProps) => {
    return (
        <div className={styles.main}>
            { children }
        </div>
    )
}

export default BlueBackground;