import React from 'react';
import { Link } from 'react-router-dom';
import './Programmes.css';

const Cambridge = () => {
    return (
        <div className="programmes-page">
            <section className="programmes-section">
                <div className="container">
                    <h2 className="section-title">Cambridge English Program | 剑桥英语课程</h2>

                    <div className="cta-center" style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfaGcplKHxYEXqINu1teICF6C69kC0LGCQpUFGiLBwQXHlIPA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '0.8rem 2rem', backgroundColor: 'var(--color-accent)', color: '#fff' }}>Secure Your Spot | 立即报名</a>
                    </div>

                    <div className="notice-box">
                        <h3>程度重于年龄，无年龄限制 | Focus on Proficiency, Not Just Age</h3>
                        <div className="notice-bilingual">
                            <div className="cn">
                                <p className="notice-text">每个孩子都是独特的。我们根据实际能力而非出生年份，为孩子匹配最合适的等级。</p>
                            </div>
                            <div className="en">
                                <p className="notice-text">Every child learns differently. We match students to the right level based on their actual skills, not just their birth year.</p>
                            </div>
                        </div>
                    </div>

                    <div className="cta-center" style={{ display: 'flex', justifyContent: 'center', margin: '3rem 0' }}>
                        <Link to="/what-is-cambridge" className="btn btn-primary" style={{ padding: '1.2rem 2.5rem', fontSize: '1.2rem' }}>
                            What is Cambridge English? | 什么是剑桥英语？
                        </Link>
                    </div>

                    {/* Blue Themed Cambridge Block */}
                    <div className="prog-block cambridge-block" style={{ marginTop: '2rem', backgroundColor: 'var(--color-primary)', color: '#fff', border: 'none' }}>
                        <div className="prog-content">
                            <div className="pricing-section" style={{ marginTop: '0', padding: '2rem 0' }}>
                                <h3 className="sub-heading" style={{ fontSize: '2rem', borderLeft: 'none', paddingLeft: '0', textAlign: 'center', marginBottom: '3rem', color: '#fff' }}>Classes | 课程配套</h3>
                                <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>

                                    {/* Cambridge Primary */}
                                    <div className="pricing-card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', padding: '1.5rem', borderRadius: '15px', border: '1px solid rgba(255, 255, 255, 0.2)', textAlign: 'center', color: '#fff' }}>
                                        <div className="card-header" style={{ marginBottom: '1.2rem', textAlign: 'center' }}>
                                            <h4 style={{ color: '#fff', fontSize: '1.7rem', fontWeight: 'bold' }}>Cambridge Primary Level<br /><span style={{ fontSize: '0.85em', fontWeight: 'normal', color: 'rgba(255, 255, 255, 0.9)' }}>剑桥小学课程</span></h4>
                                            <p className="level-info" style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', marginTop: '0.5rem' }}>5 - 12 岁 (Year 1 - Year 6)</p>
                                        </div>
                                        <div className="card-body">
                                            <div className="package" style={{ marginBottom: '1.2rem' }}>
                                                <h5 style={{ fontWeight: 'bold', fontSize: '1.3rem', color: 'var(--color-accent)' }}>Package A</h5>
                                                <p className="details" style={{ fontSize: '1.2rem', fontWeight: '500' }}>1 Hour per Week</p>
                                                <p className="details sm-cn" style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)' }}>每周 1 小时</p>
                                            </div>
                                            <div className="divider" style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)', margin: '1.2rem 0' }}></div>
                                            <div className="package">
                                                <h5 style={{ fontWeight: 'bold', fontSize: '1.3rem', color: 'var(--color-accent)' }}>Package B</h5>
                                                <p className="details" style={{ fontSize: '1.2rem', fontWeight: '500' }}>2 Hours per Week</p>
                                                <p className="details sm-cn" style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)' }}>每周 2 小时</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Cambridge Secondary */}
                                    <div className="pricing-card featured" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', padding: '1.5rem', borderRadius: '15px', border: '1px solid rgba(255, 255, 255, 0.2)', textAlign: 'center', color: '#fff' }}>
                                        <div className="card-header" style={{ marginBottom: '1.2rem', textAlign: 'center' }}>
                                            <h4 style={{ color: '#fff', fontSize: '1.7rem', fontWeight: 'bold' }}>Cambridge Secondary Level<br /><span style={{ fontSize: '0.85em', fontWeight: 'normal', color: 'rgba(255, 255, 255, 0.9)' }}>剑桥中学课程</span></h4>
                                            <p className="level-info" style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', marginTop: '0.5rem' }}>13 - 18 岁 (Form 1 - Form 5)</p>
                                        </div>
                                        <div className="card-body">
                                            <div className="package">
                                                <h5 style={{ fontWeight: 'bold', fontSize: '1.3rem', color: 'var(--color-accent)' }}>Standard Package</h5>
                                                <p className="details" style={{ fontSize: '1.2rem', fontWeight: '500' }}>1.5 Hours per Week</p>
                                                <p className="details sm-cn" style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)' }}>每周 1.5 小时</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="getting-started" style={{ marginTop: '4rem', backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '2.5rem', borderRadius: '15px', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#fff' }}>
                                    <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: '#fff', fontSize: '1.8rem' }}>Getting Started (Test & Trial) | 开始您的旅程（测试与试课）</h3>
                                    <div className="gs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                                        <div className="gs-item" style={{ textAlign: 'center' }}>
                                            <h4 style={{ color: 'var(--color-accent)', marginBottom: '0.5rem', fontSize: '1.4rem' }}>Placement Test | 分级测试</h4>
                                            <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.9)' }}>(30 minutes, includes a report)</p>
                                            <p className="sm-cn" style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)' }}>(30 分钟，包含报告)</p>
                                        </div>
                                        <div className="gs-item" style={{ textAlign: 'center' }}>
                                            <h4 style={{ color: 'var(--color-accent)', marginBottom: '0.5rem', fontSize: '1.4rem' }}>Trial Class | 体验课</h4>
                                            <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.9)' }}>Risk-Free Trial: Fee fully refunded upon enrollment!</p>
                                            <p className="sm-cn" style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)' }}>零风险试课：报名即全额退还试课费！</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cta-center" style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem', paddingBottom: '3rem' }}>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfaGcplKHxYEXqINu1teICF6C69kC0LGCQpUFGiLBwQXHlIPA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '1rem 3rem', fontSize: '1.1rem', backgroundColor: 'var(--color-accent)', color: '#fff' }}>Secure Your Spot | 立即报名</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cambridge;
