import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import ProgrammesSummary from './ProgrammesSummary';

import Testimonials from './Testimonials';
import SectionDivider from './SectionDivider';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.targetId) {
            const element = document.getElementById(location.state.targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <main>
            <Hero />
            <SectionDivider />
            <ProgrammesSummary />
            <SectionDivider />
            <Testimonials />
        </main>
    );
};

export default Home;
