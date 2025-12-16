import React from 'react';
import './Programmes.css';

const Programmes = () => {
    return (
        <section id="programmes" className="programmes-section">
            <div className="container">
                <h2 className="section-title">Our Programmes | 我们的课程</h2>
                <p className="section-subtitle">Comprehensive English education for all levels. | 涵盖各阶程度的全面性英语教育。</p>

                {/* Part 1: Cambridge English Program */}
                <div className="prog-block cambridge-block">
                    <h3 className="prog-heading">Part 1: Cambridge English Program | 剑桥英语课程</h3>

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

                {/* Part 2: MUET */}
                <div className="prog-block muet-block">
                    <h3 className="prog-heading">Part 2: MUET (Malaysian University English Test) | MUET 课程</h3>

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
                                    <li>马来西亚理科大学 (USM)</li>
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

                {/* Part 3: Speaking Class */}
                <div className="prog-block speaking-block">
                    <h3 className="prog-heading">Part 3: Confident Speaking & SPM Oral Masterclass | 英语口语与自信特训班</h3>

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
                </div>

            </div>
        </section>
    );
};

export default Programmes;
