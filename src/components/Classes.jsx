import React from 'react';
import './Classes.css';

const Classes = () => {
    return (
        <section id="classes" className="pricing-section">
            <div className="container">
                <h2 className="section-title">Classes | 课程配套</h2>
                <p className="section-subtitle">Effective packages for every learner. | 适合每位学习者的有效配套。</p>

                <div className="pricing-grid">
                    {/* Cambridge Primary */}
                    <div className="pricing-card">
                        <div className="card-header">
                            <h3>Cambridge Primary Level <br /><span style={{ fontSize: '0.8em' }}>剑桥小学课程</span></h3>
                            <p className="level-info">Pre-starter to Flyer</p>
                        </div>
                        <div className="card-body">
                            <div className="package">
                                <h4>Package A</h4>
                                <p className="details">1 Hour per Week</p>
                                <p className="details sm-cn">每周 1 小时</p>
                            </div>
                            <div className="divider"></div>
                            <div className="package">
                                <h4>Package B</h4>
                                <p className="details">2 Hours per Week</p>
                                <p className="details sm-cn">每周 2 小时</p>
                            </div>
                        </div>
                    </div>

                    {/* Cambridge Secondary */}
                    <div className="pricing-card featured">
                        <div className="card-header">
                            <h3>Cambridge Secondary Level <br /><span style={{ fontSize: '0.8em' }}>剑桥中学课程</span></h3>
                            <p className="level-info">A2 Key – B2 First</p>
                        </div>
                        <div className="card-body">
                            <div className="package">
                                <h4>Standard Package</h4>
                                <p className="details">1.5 Hours per Week</p>
                                <p className="details sm-cn">每周 1.5 小时</p>
                            </div>
                        </div>
                    </div>

                    {/* Upcoming Courses */}
                    <div className="pricing-card">
                        <div className="card-header">
                            <h3>Upcoming Courses <br /><span style={{ fontSize: '0.8em' }}>(Opening Soon)</span></h3>
                        </div>
                        <div className="card-body">
                            <div className="package" style={{ display: 'inline-block', textAlign: 'left' }}>
                                <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>MUET Preparation</p>
                                <div className="divider" style={{ margin: '0.5rem 0' }}></div>
                                <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>CAE (C1 Advanced)</p>
                                <div className="divider" style={{ margin: '0.5rem 0' }}></div>
                                <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>CPE (C2 Proficiency)</p>
                                <div className="divider" style={{ margin: '0.5rem 0' }}></div>
                                <p style={{ fontWeight: 'bold' }}>Speaking Class</p>
                            </div>
                        </div>
                    </div>

                    {/* Private Classes */}
                    <div className="pricing-card pricing-card-wide">
                        <div className="card-header">
                            <h3>Private 1-on-1 Classes <br /><span style={{ fontSize: '0.8em' }}>1 对 1 私人课程</span></h3>
                            <p className="level-info">Personalized Attention | 个性化指导</p>
                        </div>
                        <div className="card-body">
                            <div className="package">
                                <h4>Junior Level | 小学/初级</h4>
                            </div>
                            <div className="divider"></div>
                            <div className="package">
                                <h4>Senior Level | 中学/高级</h4>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Getting Started */}
                <div className="getting-started">
                    <h3>Getting Started (Test & Trial) | 开始您的旅程（测试与试课）</h3>
                    <div className="gs-grid">
                        <div className="gs-item">
                            <h4>Placement Test | 分级测试</h4>
                            <p>(30 minutes, includes a report)</p>
                            <p className="sm-cn">(30 分钟，包含报告)</p>
                            <p style={{ fontSize: '0.9em', color: '#666', marginTop: '0.5rem', fontStyle: 'italic' }}>
                                * For Cambridge Only
                                <br />
                                仅限剑桥课程
                            </p>
                        </div>
                        <div className="gs-item">
                            <h4>Trial Class | 体验课</h4>
                            <p>Available per session</p>
                            <p className="sm-cn">可单次付费体验</p>

                        </div>
                    </div>

                    <div className="cta-center" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfaGcplKHxYEXqINu1teICF6C69kC0LGCQpUFGiLBwQXHlIPA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Now (Cambridge)</a>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfR387buFFREjO0ueyNFqfpVL_NSkwKw29B61eJd1T6FPjKgw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Now (MUET)</a>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdM3I8R7U66GPOKsLFc2aBy1j38V5Hh9Bc5fR9gzDvctPmN-w/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Now (Speaking Class)</a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Classes;
