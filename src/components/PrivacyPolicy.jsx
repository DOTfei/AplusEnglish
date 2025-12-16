import React, { useEffect } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="privacy-section">
            <div className="container privacy-container">
                <h1 className="privacy-title">Privacy Policy</h1>
                <p className="privacy-intro">
                    At A+ English ("we," "us," or "our"), we are committed to protecting the privacy of our students, parents, and website visitors. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or enroll in our online programmes.
                </p>

                <div className="privacy-content">
                    <div className="privacy-block">
                        <h2>1. Information We Collect</h2>
                        <p>We collect information to provide better educational services. This includes:</p>
                        <ul>
                            <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and mailing address of parents/guardians and students.</li>
                            <li><strong>Student Information:</strong> Date of birth, current school, academic history, and learning requirements.</li>
                            <li><strong>Online Learning Data:</strong> Recordings, screenshots, and logs of student activity and participation during online sessions (e.g., via Google Classroom).</li>
                            <li><strong>Payment Information:</strong> Billing details and transaction history (Note: We do not store credit card details directly; these are processed by secure third-party payment gateways).</li>
                            <li><strong>Technical Data:</strong> IP address, browser type, and cookies when you visit our website.</li>
                        </ul>
                    </div>

                    <div className="privacy-block">
                        <h2>2. How We Use Your Information</h2>
                        <p>We use your data for the following purposes:</p>
                        <ul>
                            <li><strong>Enrollment:</strong> To process student registration and placement in appropriate English programmes.</li>
                            <li><strong>Communication:</strong> To send updates regarding class schedules, student progress reports, and fee reminders.</li>
                            <li><strong>Improvement:</strong> To analyze website usage and improve our curriculum and services.</li>
                            <li><strong>Marketing:</strong> To send newsletters or promotions about new courses (only with your consent).</li>
                        </ul>
                    </div>

                    <div className="privacy-block">
                        <h2>3. Online Recordings and Media Policy</h2>
                        <p>As our programmes are conducted entirely online, we may capture digital records of student participation and achievement.</p>
                        <p>By enrolling at A+ English, you give consent for us to use:</p>
                        <ul>
                            <li>Video recordings, screenshots, and webcam feeds taken during online classes or virtual events;</li>
                            <li>Student work and participation logs derived from Google Classroom or our online learning platforms; and</li>
                            <li>Student photos and academic achievements (such as the awarding of a certificate) for the purpose of publicly congratulating the student on our platforms;</li>
                        </ul>
                        <p>for use in our advertising and marketing materials (including but not limited to social media, our website, digital advertisements, and brochures).</p>
                        <p>If you do not wish for your child's image, work, or achievements to appear in marketing materials, please submit a written request to <a href="mailto:aplusenglish.marketing@gmail.com">aplusenglish.marketing@gmail.com</a>.</p>
                    </div>

                    <div className="privacy-block">
                        <h2>4. Data Security</h2>
                        <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no transmission over the internet is completely secure, and we cannot guarantee absolute security.</p>
                    </div>

                    <div className="privacy-block">
                        <h2>5. Third-Party Sharing</h2>
                        <p>We do not sell your personal data. We may share data with trusted third-party service providers (e.g., email platforms, payment processors) solely for the purpose of operating our business.</p>
                    </div>

                    <div className="privacy-block">
                        <h2>6. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access the personal data we hold about you.</li>
                            <li>Request corrections to inaccurate data.</li>
                            <li>Request the deletion of your data (subject to legal or administrative retention requirements).</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
