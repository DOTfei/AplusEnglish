import React from 'react';
import Hero from './Hero';
import About from './About';
import Programmes from './Programmes';
import Classes from './Classes';
import Testimonials from './Testimonials';
import Contact from './Contact';
import SectionDivider from './SectionDivider';

const Home = () => {
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
