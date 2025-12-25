import React from 'react';
import './Programmes.css';

const SecondaryIntensive = () => {
    return (
        <div className="programmes-page">
            <section className="programmes-section">
                <div className="container">
                    <h2 className="section-title">Secondary English Power-Up Class | 中学英语强化班</h2>
                    <div className="prog-block intensive-block" style={{ marginTop: '2rem' }}>
                        <div className="prog-content">
                            <div className="bilingual-content">
                                <div className="en">
                                    <h4 className="sub-heading">Build a Solid Foundation for SPM English and Beyond!</h4>
                                    <p>We help students bridge the gap between basic English and high-scoring academic writing. Our curriculum is designed to transform ordinary language skills into sophisticated academic excellence.</p>
                                </div>
                                <div className="cn">
                                    <h4 className="sub-heading">打好 SPM 英文基础，稳拿高分！</h4>
                                    <p>我们专为中学生设计，助你从“普通英语”跨越到“高水平学术英语”。我们的课程旨在将普通的语言能力提升为卓越的学术水平。</p>
                                </div>
                            </div>

                            <div className="benefits-grid">
                                <div className="benefit-box" style={{ gridColumn: '1 / -1' }}>
                                    <h4 className="sub-heading">Program Highlights | 课程亮点</h4>
                                    <div className="bilingual-content" style={{ marginBottom: 0 }}>
                                        <div className="en">
                                            <ul className="prog-list">
                                                <li><strong>High-Scoring Essays:</strong> Master essay formats and stop writing "simple" sentences.</li>
                                                <li><strong>Grammar Mastery:</strong> Fix common mistakes and learn to use complex structures correctly.</li>
                                                <li><strong>Vocabulary Boost:</strong> Build a "smart" word bank to stand out in exams and communication.</li>
                                            </ul>
                                        </div>
                                        <div className="cn">
                                            <ul className="prog-list">
                                                <li><strong>作文拿分技巧：</strong> 掌握各类作文格式，拒绝流水账，写出高质量文章。</li>
                                                <li><strong>语法精准突破：</strong> 纠正低级错误，深层掌握考试必备的复杂语法。</li>
                                                <li><strong>词汇全面升级：</strong> 积累高级词汇，让你的表达在考试中脱颖而出。</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cta-center" style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfkOVLku3YIjPkr1AqhqZ9z4ZBRF8F1-J076kFbD4G9SZDFDA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Now</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SecondaryIntensive;
