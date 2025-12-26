import React from 'react';
import './Programmes.css';

const SecondaryIntensive = () => {
    return (
        <div className="programmes-page">
            <section className="programmes-section">
                <div className="container">
                    <h2 className="section-title">Secondary English Intensive Class | 中学英语提分强化班</h2>

                    {/* Blue Themed Intensive Block */}
                    <div className="prog-block intensive-block" style={{ marginTop: '2rem', backgroundColor: 'var(--color-primary)', color: '#fff', border: 'none' }}>
                        <div className="prog-content">
                            {/* Main Heading & Intro */}
                            <div className="bilingual-content" style={{ marginBottom: '3rem' }}>
                                <div className="en">
                                    <h3 style={{ color: 'var(--color-accent)', fontSize: '1.8rem', marginBottom: '1.5rem', lineHeight: '1.3' }}>
                                        Focus on Scores, Not Socializing.
                                    </h3>
                                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255, 255, 255, 0.9)' }}>
                                        At A+ English, we believe real progress happens in moments of deep focus. This class is designed for students who prefer a calm, quiet, and highly efficient learning environment. We strip away the unnecessary social noise to focus 100% on mastering the English language and aceing exams.
                                    </p>
                                </div>
                                <div className="cn">
                                    <h3 style={{ color: 'var(--color-accent)', fontSize: '2rem', marginBottom: '1.5rem', lineHeight: '1.3' }}>
                                        专注分数，拒绝社交压力。
                                    </h3>
                                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255, 255, 255, 0.9)' }}>
                                        在 A+ English，我们深信真正的进步源于深度的专注。本课程专为倾向于安静、高效学习的学生量身定制，剔除非必要社交压力，100% 集中于核心考点。
                                    </p>
                                </div>
                            </div>

                            {/* Key Features */}
                            <div className="benefits-grid" style={{ marginBottom: '3rem' }}>
                                <div className="benefit-box" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)', color: '#fff' }}>
                                    <h4 className="sub-heading" style={{ color: 'var(--color-accent)', borderLeftColor: 'var(--color-accent)' }}>Zero-Pressure Learning</h4>
                                    <p>No forced mic/camera. Learn in your own "invisible" mode.</p>
                                    <p style={{ marginTop: '10px', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem', borderTop: '1px dashed rgba(255, 255, 255, 0.2)', paddingTop: '10px' }}>
                                        <strong>零压力学习：</strong>无需开麦/露脸，在“隐身”模式中逆袭。
                                    </p>
                                </div>
                                <div className="benefit-box" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)', color: '#fff' }}>
                                    <h4 className="sub-heading" style={{ color: 'var(--color-accent)', borderLeftColor: 'var(--color-accent)' }}>Exam-Oriented</h4>
                                    <p>Intensive grammar drills and answering techniques.</p>
                                    <p style={{ marginTop: '10px', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem', borderTop: '1px dashed rgba(255, 255, 255, 0.2)', paddingTop: '10px' }}>
                                        <strong>提分导向：</strong>密集的语法训练与解题技巧。
                                    </p>
                                </div>
                                <div className="benefit-box" style={{ gridColumn: '1 / -1', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)', color: '#fff' }}>
                                    <h4 className="sub-heading" style={{ color: 'var(--color-accent)', borderLeftColor: 'var(--color-accent)' }}>Ultimate Affordability</h4>
                                    <p>High-quality guidance at a budget-friendly price.</p>
                                    <p style={{ marginTop: '10px', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem', borderTop: '1px dashed rgba(255, 255, 255, 0.2)', paddingTop: '10px' }}>
                                        <strong>极致性价比：</strong>以亲民的价格获取顶尖的教育资源。
                                    </p>
                                </div>
                            </div>

                            {/* Closing Quote */}
                            <div style={{
                                textAlign: 'center',
                                padding: '3rem 1rem',
                                background: 'rgba(255, 255, 255, 0.1)',
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                                borderRadius: '15px',
                                marginBottom: '2rem',
                                borderLeft: '5px solid var(--color-accent)',
                                boxShadow: 'inset 0 0 20px rgba(0,0,0,0.1)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                borderLeftWidth: '5px'
                            }}>
                                <h3 style={{ fontStyle: 'italic', color: '#fff', marginBottom: '0.5rem', fontSize: '1.8rem' }}>
                                    "Quietly Improving, Loudly Winning."
                                </h3>
                                <p style={{ fontSize: '1.3rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: '500' }}>
                                    在安静中进步，用成绩发声。
                                </p>
                            </div>

                            <div className="cta-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '3rem', paddingBottom: '2rem' }}>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfkOVLku3YIjPkr1AqhqZ9z4ZBRF8F1-J076kFbD4G9SZDFDA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem', backgroundColor: 'var(--color-accent)', color: '#fff' }}>
                                    Secure Your Spot Now | 立即报名
                                </a>
                                <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)' }}>Join the class where results speak louder than words.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SecondaryIntensive;
