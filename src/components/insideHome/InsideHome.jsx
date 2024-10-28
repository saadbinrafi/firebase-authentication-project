import React, { useContext } from 'react';
import { homeContext } from '../Home/Home';

const InsideHome = () => {
    const homeData = useContext(homeContext)
    console.log(homeData)
    return (
        <div>
            inside Home
        </div>
    );
};

export default InsideHome;