import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-headline">
                        Master English with Confidence & Fun.
                    </h1>
                    <p className="hero-subheadline">
                        Trusted by 2,000+ students since 2020. Expert Cambridge & MUET coaching for primary and secondary students.
                    </p>
                    {/* Social proof or additional context if needed */}
                </div>
                <div className="hero-cta-group">
                    <Link to="/about" className="btn btn-primary hero-cta">
                        About Us | 关于我们
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
