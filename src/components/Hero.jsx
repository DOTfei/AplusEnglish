import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-headline">
                        Learn English the Fun Way! <br />
                        <span className="cn-text">快乐趣学英语！</span>
                    </h1>
                    <p className="hero-subheadline">
                        Programmes for Primary and High School Students. <br />
                        <span className="cn-text">专为中小学生量身打造的英语课程。</span>
                    </p>
                    <p className="hero-social-proof">
                        Trusted by 2,000+ Learners Since 2020. <br />
                        <span className="cn-text">自 2020 年起深受 2,000+ 名学生信赖。</span>
                    </p>

                </div>
                {/* Optional: Add a hero image here if available, or use a background image */}
            </div>
        </section>
    );
};

export default Hero;
