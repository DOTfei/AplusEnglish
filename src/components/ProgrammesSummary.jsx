import React from 'react';
import { Link } from 'react-router-dom';
import './Programmes.css';

const ProgrammesSummary = () => {
    return (
        <section id="programmes" className="programmes-section" style={{ paddingBottom: '3rem' }}>
            <div className="container">
                <h2 className="section-title">Our Programmes | 我们的课程</h2>


                <div className="levels-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {/* Secondary English Power-Up Class Card */}
                    <div className="level-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <h3 className="prog-heading" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Secondary English Power-Up Class | 中学英语强化班</h3>
                        <p>Build a solid foundation for SPM English and beyond! Bridge the gap between basic English and academic writing.</p>
                        <p className="sm-cn" style={{ marginTop: '0.5rem' }}>打好 SPM 英文基础，稳拿高分！助你从“普通英语”跨越到“高水平学术英语”。</p>
                        <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
                            <Link to="/secondary-intensive" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>View more</Link>
                        </div>
                    </div>

                    {/* Cambridge Card */}
                    <div className="level-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <h3 className="prog-heading" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Cambridge English | 剑桥英语</h3>
                        <p>
                            <strong>小学：</strong>英语启蒙与基础 (YLE)<br />
                            <strong>中学：</strong>对接国际大考 (IGCSE 衔接)<br />
                            <strong>大学/职场：</strong>达到母语专家水平 (CAE/CPE)
                        </p>
                        <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
                            <Link to="/cambridge" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>View more</Link>
                        </div>
                    </div>

                    {/* MUET Card */}
                    <div className="level-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <h3 className="prog-heading" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>MUET</h3>
                        <p>Essential preparation for university admission in Malaysia. Master Listening, Speaking, Reading, and Writing.</p>
                        <p className="sm-cn" style={{ marginTop: '0.5rem' }}>大学入学的必备测试。掌握听、说、读、写四大技能。</p>
                        <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
                            <Link to="/muet" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>View more</Link>
                        </div>
                    </div>

                    {/* Speaking Class Card */}
                    <div className="level-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <h3 className="prog-heading" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Speaking Class | 英语口语班</h3>
                        <p>Unlock your confidence and master public speaking. Perfect for SPM Oral Exam preparation.</p>
                        <p className="sm-cn" style={{ marginTop: '0.5rem' }}>建立自信，掌握演讲技巧。SPM 口试的最佳备战课程。</p>
                        <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
                            <Link to="/speaking" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>View more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgrammesSummary;
