import React from 'react';
import withAuthAdmin from '../../components/withAuthAdmin';

const Home: React.FC = () => {
    return (
        <h1>
            Parabéns, você acessou o painel!
        </h1>
    )
}

export default withAuthAdmin(Home);