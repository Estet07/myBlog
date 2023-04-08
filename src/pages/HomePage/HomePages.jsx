import React from 'react';
import About from '../../components/About/About';
import Intro from '../../components/Intro/Intro';
import Subscribe from '../../components/Subscribe/Subscribe';

const HomePages = () => {
    return (
        <>
            <Intro />
            <About />
            <Subscribe />
        </>
    );
};

export default HomePages;