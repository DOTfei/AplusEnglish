import React from 'react';
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
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfaGcplKHxYEXqINu1teICF6C69kC0LGCQpUFGiLBwQXHlIPA/viewform?usp=dialog" className="btn btn-primary hero-cta" target="_blank" rel="noopener noreferrer">
                        Book Now (Cambridge)
                    </a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfR387buFFREjO0ueyNFqfpVL_NSkwKw29B61eJd1T6FPjKgw/viewform?usp=dialog" className="btn btn-primary hero-cta" target="_blank" rel="noopener noreferrer">
                        Book Now (MUET)
                    </a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdM3I8R7U66GPOKsLFc2aBy1j38V5Hh9Bc5fR9gzDvctPmN-w/viewform?usp=dialog" className="btn btn-primary hero-cta" target="_blank" rel="noopener noreferrer">
                        Book Now (Speaking Class)
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
