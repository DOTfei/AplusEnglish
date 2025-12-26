import React from 'react';
import { Link } from 'react-router-dom';
import './Programmes.css';

const WhatIsMuet = () => {
    return (
        <div className="programmes-page">
            <section className="programmes-section">
                <div className="container">
                    <h2 className="section-title">What is MUET? | 什么是 MUET？</h2>

                    <div className="prog-block muet-info-block" style={{ marginTop: '2rem' }}>
                        <div className="prog-content">
                            <div className="bilingual-content">
                                <div className="en">
                                    <h4 className="sub-heading">Overview</h4>
                                    <p>The Malaysian University English Test (MUET) is a nationally recognized proficiency test assessing listening, speaking, reading, and writing. It is essential for students pursuing higher education in Malaysia or seeking opportunities requiring strong English skills.</p>
                                </div>
                                <div className="cn">
                                    <h4 className="sub-heading">课程简介</h4>
                                    <p>MUET（马来西亚大学英语测试）是国家认可的英语能力测试，评估听、说、读、写四项技能。这是学生在马来西亚升学或寻求高英语要求职位的必要资格。</p>
                                </div>
                            </div>

                            <div className="bilingual-content">
                                <div className="en">
                                    <h4 className="sub-heading">Your Key to Public & Private Universities</h4>
                                    <p>Did you know? You don't always need IELTS to enter a top private university. Our MUET preparation ensures you meet the strict English requirements for graduation from public universities and admission into elite private institutions.</p>
                                    <p style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>Our students target:</p>
                                    <ul style={{ marginTop: '0.5rem', paddingLeft: '1.2rem' }}>
                                        <li>University of Malaya (UM)</li>
                                        <li>Taylor's University</li>
                                        <li>Universiti Sains Malaysia (USM)</li>
                                        <li>National University of Singapore (NUS)</li>
                                    </ul>
                                </div>
                                <div className="cn">
                                    <h4 className="sub-heading">通往公私立大学的钥匙</h4>
                                    <p>您知道吗？进入顶尖私立大学并不一定需要雅思（IELTS）。我们的 MUET 备考课程能确保您达到公立大学毕业的严格英语门槛，并符合精英私立院校的入学要求。</p>
                                    <p style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>我们学生的目标院校包括：</p>
                                    <ul style={{ marginTop: '0.5rem', paddingLeft: '1.2rem' }}>
                                        <li>马来亚大学 (UM)</li>
                                        <li>泰莱大学 (Taylor's University)</li>
                                        <li>马来亚理科大学 (USM)</li>
                                        <li>新加坡国立大学 (NUS)</li>
                                    </ul>
                                </div>
                            </div>

                            <h4 className="sub-heading">MUET Grading Bands | MUET 等级说明</h4>
                            <div className="levels-grid">
                                <div className="level-card muet-card">
                                    <h5>Band 6 (Highly Proficient)</h5>
                                    <p>Excellent command of English for advanced academic and professional environments.</p>
                                    <hr style={{ margin: '0.5rem 0', opacity: 0.3 }} />
                                    <p>精通英语，适应高级学术与专业环境。</p>
                                </div>
                                <div className="level-card muet-card">
                                    <h5>Band 5 (Proficient)</h5>
                                    <p>Strong English skills suitable for tertiary education.</p>
                                    <hr style={{ margin: '0.5rem 0', opacity: 0.3 }} />
                                    <p>英语能力强，适合高等教育要求。</p>
                                </div>
                                <div className="level-card muet-card">
                                    <h5>Band 4 (Competent)</h5>
                                    <p>Effective English for academic and everyday use.</p>
                                    <hr style={{ margin: '0.5rem 0', opacity: 0.3 }} />
                                    <p>能有效运用英语于学术及日常交流。</p>
                                </div>
                                <div className="level-card muet-card">
                                    <h5>Band 3 (Intermediate)</h5>
                                    <p>Adequate for routine academic and social communication.</p>
                                    <hr style={{ margin: '0.5rem 0', opacity: 0.3 }} />
                                    <p>足以应付一般学术及社交沟通。</p>
                                </div>
                                <div className="level-card muet-card">
                                    <h5>Band 2 (Elementary)</h5>
                                    <p>Can handle simple English in familiar contexts.</p>
                                    <hr style={{ margin: '0.5rem 0', opacity: 0.3 }} />
                                    <p>能在熟悉语境下使用简单英语。</p>
                                </div>
                                <div className="level-card muet-card">
                                    <h5>Band 1 (Beginner)</h5>
                                    <p>Basic understanding of English with limited communication ability.</p>
                                    <hr style={{ margin: '0.5rem 0', opacity: 0.3 }} />
                                    <p>仅具备基础英语理解能力，沟通受限。</p>
                                </div>
                            </div>

                            <div className="benefits-grid">
                                <div className="benefit-box">
                                    <h4 className="sub-heading">Why MUET is Important | 为什么 MUET 很重要？</h4>
                                    <ul className="prog-list">
                                        <li><strong>University Entry Requirement:</strong> Compulsory for admission to many Malaysian universities (especially public).</li>
                                        <li><strong>大学入学门槛：</strong> 马来西亚多数大学（尤其是公立大学）的入学必修条件。</li>

                                        <li><strong>Proof of Proficiency:</strong> Demonstrates confidence in English communication.</li>
                                        <li><strong>能力证明：</strong> 展现英语沟通的自信与实力。</li>

                                        <li><strong>Career Advantage:</strong> High bands improve scholarship eligibility and job prospects.</li>
                                        <li><strong>职场优势：</strong> 高级别成绩有助于申请奖学金及提升就业前景。</li>
                                    </ul>
                                </div>
                                <div className="benefit-box">
                                    <h4 className="sub-heading">Why Choose Our MUET Preparation? | 为什么选择我们的 MUET 备考班？</h4>
                                    <ul className="prog-list">
                                        <li><strong>Exam-Focused Strategies:</strong> Training specifically targets listening, speaking, reading, and writing to maximize scores.</li>
                                        <li><strong>考试导向策略：</strong> 针对听、说、读、写进行专项训练，最大化提升分数。</li>

                                        <li><strong>Experienced Tutors:</strong> Guidance from teachers familiar with the current MUET format.</li>
                                        <li><strong>资深导师指导：</strong> 由熟悉最新 MUET 格式的老师亲自授课。</li>

                                        <li><strong>Structured Learning:</strong> Lessons are tailored to bridge the gap between your current level and your target band.</li>
                                        <li><strong>系统化教学：</strong> 量身定制课程，协助你跨越当前水平，通过目标等级。</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cta-center" style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem', gap: '1rem' }}>
                        <Link to="/muet" className="btn btn-secondary">Back to Program</Link>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfR387buFFREjO0ueyNFqfpVL_NSkwKw29B61eJd1T6FPjKgw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Secure Your Spot | 立即报名</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhatIsMuet;
