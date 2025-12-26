import React from 'react';
import './Programmes.css';

const Speaking = () => {
    return (
        <div className="programmes-page">
            <section className="programmes-section">
                <div className="container">
                    <h2 className="section-title">Confident Speaking & SPM Oral Masterclass | 英语口语与自信特训班</h2>
                    <div className="prog-block speaking-block" style={{ marginTop: '2rem' }}>
                        <div className="prog-content">
                            <div className="bilingual-content">
                                <div className="en">
                                    <h4 className="sub-heading">Transform from Shy to Fearless</h4>
                                    <p>Is fear holding you back? Stop memorizing and start speaking! We provide a high-energy environment where you will break through your comfort zone, master public speaking, and ace your SPM Oral Exam with total confidence.</p>
                                </div>
                                <div className="cn">
                                    <h4 className="sub-heading">拒绝“哑巴英语”，自信展现自我！</h4>
                                    <p>还在因为害羞而不敢开口吗？别再死记硬背了！我们提供充满活力的实战环境，助您突破舒适圈，掌握演讲技巧，并以绝对的自信攻克 SPM 口试。</p>
                                </div>
                            </div>

                            <div className="benefits-grid">
                                <div className="benefit-box" style={{ gridColumn: '1 / -1' }}>
                                    <h4 className="sub-heading">Program Highlights | 课程亮点</h4>
                                    <div className="bilingual-content" style={{ marginBottom: 0 }}>
                                        <div className="en">
                                            <ul className="prog-list">
                                                <li><strong>Unlock Your Confidence:</strong> Eliminate stage fright and speak clearly in front of anyone.</li>
                                                <li><strong>Ace the SPM Oral:</strong> Targeted training on exam topics and critical thinking to ensure high scores.</li>
                                                <li><strong>Real-World Fluency:</strong> Master the art of debate, improvisation, and persuasive speaking.</li>
                                            </ul>
                                        </div>
                                        <div className="cn">
                                            <ul className="prog-list">
                                                <li><strong>建立强大自信：</strong> 彻底消除怯场心理，在任何人面前都能清晰表达。</li>
                                                <li><strong>SPM 口试冲刺：</strong> 针对热门考题与思维训练，确保您在口试中脱颖而出。</li>
                                                <li><strong>实战流利英语：</strong> 掌握辩论、即兴演讲及说服他人的沟通艺术。</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cta-center" style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdM3I8R7U66GPOKsLFc2aBy1j38V5Hh9Bc5fR9gzDvctPmN-w/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Secure Your Spot | 立即报名</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Speaking;
