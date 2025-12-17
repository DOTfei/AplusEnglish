import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import About from './About';
import Programmes from './Programmes';
import Classes from './Classes';
import Testimonials from './Testimonials';
import Contact from './Contact';
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
            <About />
            <SectionDivider />
            <Programmes />
            <SectionDivider />
            <Classes />
            <SectionDivider />
            <Testimonials />
            <SectionDivider />
            <Contact />
        </main>
    );
};

export default Home;
