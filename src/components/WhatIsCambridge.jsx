import React from 'react';
import { Link } from 'react-router-dom';
import './Programmes.css';

const WhatIsCambridge = () => {
    return (
        <div className="programmes-page">
            <section className="programmes-section">
                <div className="container">
                    <h2 className="section-title">What is Cambridge English? | 什么是剑桥英语？</h2>

                    <div className="prog-block cambridge-block" style={{ marginTop: '2rem' }}>
                        <div className="prog-content">
                            <div className="bilingual-content">
                                <div className="en">
                                    <h4 className="sub-heading">Overview</h4>
                                    <p>Cambridge English is a globally recognized program designed to help students excel in reading, writing, speaking, and listening. With a structured approach, students gain not only language skills but also confidence, critical thinking, and practical communication abilities.</p>
                                </div>
                                <div className="cn">
                                    <h4 className="sub-heading">课程简介</h4>
                                    <p>剑桥英语是全球公认的课程，旨在帮助学生在读、写、说、听方面表现优异。透过系统化的教学，学生不仅能掌握语言技能，还能提升自信、培养批判性思维及实际沟通能力。</p>
                                </div>
                            </div>

                            <div className="bilingual-content">
                                <div className="en">
                                    <h4 className="sub-heading">Global Recognition</h4>
                                    <p>Our students prepare for Cambridge English Qualifications, which are accepted by over 25,000 organizations worldwide as proof of English ability. This includes top-tier institutions such as:</p>
                                    <ul style={{ marginTop: '0.5rem', paddingLeft: '1.2rem' }}>
                                        <li>University of Oxford (UK)</li>
                                        <li>Harvard University (USA)</li>
                                        <li>University of Sydney (Australia)</li>
                                        <li>University of Malaya (Malaysia)</li>
                                    </ul>
                                </div>
                                <div className="cn">
                                    <h4 className="sub-heading">全球认可</h4>
                                    <p>我们的课程协助学生备考剑桥英语资格认证，该证书获全球超过 25,000 家机构认可，作为英语能力的权威证明。其中包括顶尖学府，例如：</p>
                                    <ul style={{ marginTop: '0.5rem', paddingLeft: '1.2rem' }}>
                                        <li>牛津大学（英国）</li>
                                        <li>哈佛大学（美国）</li>
                                        <li>悉尼大学（澳大利亚）</li>
                                        <li>马来亚大学（马来西亚）</li>
                                    </ul>
                                </div>
                            </div>

                            <h4 className="sub-heading">Our Levels (The Pathway to Fluency) | 我们的级别（通往流利英语之路）</h4>
                            <div className="levels-grid">
                                <div className="level-card">
                                    <h5>Pre-Starters (Pre A1)</h5>
                                    <p>Introduces young learners to English in an engaging and enjoyable way.</p>
                                    <hr style={{ margin: '0.5rem 0', opacity: 0.3 }} />
                                    <p>以生动有趣的方式引导幼龄学习者接触英语。</p>
                                </div>
                                <div className="level-card">
                                    <h5>Movers (A1)</h5>
                                    <p>Builds foundational skills and confidence in everyday English.</p>
                                    <hr style={{ margin: '0.5rem 0', opacity: 0.3 }} />
                                    <p>建立基础技能，培养日常英语自信。</p>
                                </div>
                                <div className="level-card">
                                    <h5>Flyers (A2)</h5>
                                    <p>Strengthens practical communication and comprehension.</p>
                                    <hr style={{ margin: '0.5rem 0', opacity: 0.3 }} />
                                    <p>强化实际沟通与其理解能力。</p>
                                </div>
                                <div className="level-card">
                                    <h5>KET (A2 Key)</h5>
                                    <p>Prepares students for basic real-life English use.</p>
                                    <hr style={{ margin: '0.5rem 0', opacity: 0.3 }} />
                                    <p>为基本的日常生活英语应用做准备。</p>
                                </div>
                                <div className="level-card">
                                    <h5>PET (B1 Preliminary)</h5>
                                    <p>Develops intermediate skills for school and daily life.</p>
                                    <hr style={{ margin: '0.5rem 0', opacity: 0.3 }} />
                                    <p>培养应对学校与日常生活的进阶技能。</p>
                                </div>
                                <div className="level-card">
                                    <h5>FCE (B2 First)</h5>
                                    <p>Achieves upper-intermediate fluency and accuracy.</p>
                                    <hr style={{ margin: '0.5rem 0', opacity: 0.3 }} />
                                    <p>达到中高级流利度与精准度。</p>
                                </div>
                                <div className="level-card">
                                    <h5>CAE (C1 Advanced)</h5>
                                    <p>Masters advanced English for academic and professional success.</p>
                                    <hr style={{ margin: '0.5rem 0', opacity: 0.3 }} />
                                    <p>掌握高级英语，助攻学术与职业成就。</p>
                                </div>
                                <div className="level-card">
                                    <h5>CPE (C2 Proficiency)</h5>
                                    <p>Demonstrates mastery of English at the highest level for complex academic and professional use.</p>
                                    <hr style={{ margin: '0.5rem 0', opacity: 0.3 }} />
                                    <p>展示对英语最高水平的掌握，能够应对复杂的学术与专业需求。</p>
                                </div>
                            </div>

                            <div className="benefits-grid">
                                <div className="benefit-box">
                                    <h4 className="sub-heading">Why Cambridge is Important | 为什么选择剑桥英语？</h4>
                                    <ul className="prog-list">
                                        <li><strong>Globally Recognized Certificate:</strong> Accepted by schools, universities, and employers worldwide.</li>
                                        <li><strong>全球公认证书：</strong> 获全球学校、大学及雇主广泛认可。</li>
                                        <li><strong>Proof of English Skills:</strong> Validates effective communication for academic and professional settings.</li>
                                        <li><strong>英语能力证明：</strong> 验证学术与职场所需的有效沟通能力。</li>
                                        <li><strong>Boosts Opportunities:</strong> Improves school placement, scholarship eligibility, and career prospects.</li>
                                        <li><strong>提升机会：</strong> 增加名校入学、奖学金申请及就业优势。</li>
                                        <li><strong>Confidence & Achievement:</strong> Provides a sense of accomplishment and motivation for further learning.</li>
                                        <li><strong>自信与成就感：</strong> 带来学习成就感，激发持续学习动力。</li>
                                    </ul>
                                </div>
                                <div className="benefit-box">
                                    <h4 className="sub-heading">Why Choose Our Cambridge Program? | 为什么选择我们的课程？</h4>
                                    <ul className="prog-list">
                                        <li><strong>Structured Learning:</strong> Lessons follow a carefully designed progression.</li>
                                        <li><strong>系统化学习：</strong> 课程设计循序渐进。</li>
                                        <li><strong>Engaging & Interactive:</strong> Practical, enjoyable lessons tailored to student needs.</li>
                                        <li><strong>互动有趣：</strong> 实用且生动的课程，专为学生需求量身定制。</li>
                                        <li><strong>Real-Life Skills:</strong> Students gain confidence to use English in the real world, not just exams.</li>
                                        <li><strong>实际运用能力：</strong> 学生将自信掌握现实生活中的英语，而不仅是为了考试。</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cta-center" style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem', gap: '1rem' }}>
                        <Link to="/cambridge" className="btn btn-secondary">Back to Program</Link>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfaGcplKHxYEXqINu1teICF6C69kC0LGCQpUFGiLBwQXHlIPA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Now (Cambridge)</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhatIsCambridge;
