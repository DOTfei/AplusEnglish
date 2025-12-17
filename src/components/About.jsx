import React from 'react';
import './About.css';
import introVideo from '../assets/intro-video.mp4';
import studentCollage from '../assets/student-collage.jpg';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">

                {/* About Us */}
                <div className="about-block">
                    <h2 className="section-title">About Us | 关于我们</h2>

                    <div className="bilingual-content">
                        <div className="en">
                            <h3>We Teach Only One Subject — English. And We Do It Exceptionally Well.</h3>
                            <p>A+ English has been fully dedicated to teaching only English since our establishment in 2018, with a strong focus on the internationally recognised Cambridge English syllabus.</p>
                            <p>Unlike centres that teach many subjects, we specialise deeply in one area — ensuring quality, consistency, and real results.</p>
                            <p>We offer a complete English progression from young learners to advanced secondary levels, including:</p>
                            <ul className="about-list">
                                <li>-Cambridge YLE (Starters / Movers / Flyers)</li>
                                <li>-A2 Key (KET)</li>
                                <li>-B1 Preliminary (PET)</li>
                                <li>-B2 First (FCE)</li>
                                <li>-CAE (C1 Advanced)</li>
                                <li>-CPE (C2 Proficiency)</li>
                                <li>-MUET</li>
                                <li>-Speaking Class</li>
                            </ul>
                            <p>Since moving online in 2020, we have refined our teaching approach to deliver highly engaging, effective, and structured online lessons trusted by students and parents across Malaysia.</p>
                        </div>

                        <div className="cn">
                            <h3>我们只教一个科目——英语，而且我们做得非常专业。</h3>
                            <p>A+ English 自 2018 年创立以来，一直专注教授 英语，主打国际认可的 Cambridge 英语体系。</p>
                            <p>不同于同时教授多门科目的补习中心，我们深耕一个领域，确保教学品质稳定、效果显著、家长放心。</p>
                            <p>我们提供从小学到中学的完整衔接课程，包括：</p>
                            <ul className="about-list">
                                <li>-Cambridge YLE（Starters / Movers / Flyers）</li>
                                <li>-A2 Key（KET）</li>
                                <li>-B1 Preliminary（PET）</li>
                                <li>-B2 First（FCE）</li>
                                <li>-CAE（C1 Advanced）</li>
                                <li>-CPE（C2 Proficiency）</li>
                                <li>-MUET 大学英文</li>
                                <li>-Speaking Class（口语班）</li>
                            </ul>
                            <p>自 2020 年起转型线上教学，我们不断优化教学方式，让课程更具互动性、系统性与成效，深受全马学生与家长信赖。</p>
                        </div>
                    </div>
                </div>


                {/* Video Block */}
                <div className="about-block video-block">
                    <h2 className="section-title">See Us in Action | 观看教学实况</h2>
                    <h3 className="media-label">Video:</h3>
                    <div className="video-wrapper">
                        <video controls playsInline className="about-video">
                            <source src={introVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    {/* Student Collage */}
                    <div className="collage-wrapper">
                        <h3 className="media-label">Image:</h3>
                        <img src={studentCollage} alt="Students in online class" className="student-collage" />
                    </div>
                </div>

                {/* Our Teachers */}
                <div className="about-block teachers-block">
                    <h2 className="section-title">Our Teachers | 我们的教师团队</h2>

                    <div className="bilingual-content">
                        <div className="en">
                            <h3>Qualified, Experienced, Passionate</h3>
                            <p>Every teacher at A+ English comes with:</p>
                            <ul className="check-list">
                                <li>✔ More than 5 years of teaching experience</li>
                                <li>✔ TESL qualifications</li>
                                <li>✔ Teaching backgrounds in national schools, Chinese private schools, and international schools</li>
                                <li>✔ Proven ability to guide students of all levels — from weak learners to high achievers</li>
                            </ul>
                            <p>Our team understands how to build strong foundations in vocabulary, grammar, speaking, reading, and listening — the essential skills students need to succeed academically and in real life.</p>
                        </div>

                        <div className="cn">
                            <h3>专业、资深、充满热忱</h3>
                            <p>A+ English 的每位老师都具备：</p>
                            <ul className="check-list">
                                <li>✔ 超过 5 年教学经验</li>
                                <li>✔ TESL 英语教学专业资格</li>
                                <li>✔ 任教于 国民学校、华文私校及国际学校 的背景</li>
                                <li>✔ 擅长指导不同程度的学生——从基础较弱到高水平学习者</li>
                            </ul>
                            <p>我们深知如何帮助学生扎实掌握词汇、语法、听说读写等核心能力，让孩子在学校与未来都能自信使用英语。</p>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="about-block reasons-block">
                    <h2 className="section-title">Why Parents Choose A+ English | 家长为何选择 A+ English？</h2>

                    <div className="reasons-grid">
                        <div className="reason-card">
                            <div className="reason-number">1</div>
                            <div className="reason-content">
                                <h4>English-Only Specialist Centre</h4>
                                <p>We invest all resources into one subject, resulting in a stronger curriculum, better teachers, and better learning outcomes.</p>
                                <hr />
                                <h4>专注英语的专业中心</h4>
                                <p>我们把所有资源投入在英语一个科目，因此课程更系统、老师更专业、学习成效更突出。</p>
                            </div>
                        </div>

                        <div className="reason-card">
                            <div className="reason-number">2</div>
                            <div className="reason-content">
                                <h4>Strong Cambridge Track Record</h4>
                                <p>With over 7 years of experience, we have helped students progress confidently from YLE to CAE.</p>
                                <hr />
                                <h4>Cambridge 教学经验扎实</h4>
                                <p>超过 7 年教学经验，成功协助学生从 YLE 一路提升至 CAE 水平。</p>
                            </div>
                        </div>

                        <div className="reason-card">
                            <div className="reason-number">3</div>
                            <div className="reason-content">
                                <h4>Effective Online Learning Since 2020</h4>
                                <p>Our five years of refined online teaching ensure lessons are interactive, structured, and easy to follow.</p>
                                <hr />
                                <h4>2020 年起打造成熟线上教学体系</h4>
                                <p>五年线上教学经验，让课堂互动性强、结构清晰、学生容易跟上。</p>
                            </div>
                        </div>

                        <div className="reason-card">
                            <div className="reason-number">4</div>
                            <div className="reason-content">
                                <h4>Visible Improvement Within 6 Months</h4>
                                <p>Parents consistently see growth in: Vocabulary, Speaking confidence, Reading fluency, Listening comprehension, Overall communication skills.</p>
                                <hr />
                                <h4>6 个月内看得见的明显进步</h4>
                                <p>家长普遍反馈孩子在以下方面显著提升：词汇量, 口语表达自信, 阅读流利度, 听力理解, 全面沟通能力。</p>
                            </div>
                        </div>

                        <div className="reason-card">
                            <div className="reason-number">5</div>
                            <div className="reason-content">
                                <h4>International Standard Progression</h4>
                                <p>The Cambridge pathway gives students a clear roadmap that builds skills step by step according to global benchmarks.</p>
                                <hr />
                                <h4>国际标准的学习路径</h4>
                                <p>Cambridge 英语提供清晰的学习路线图，让学生按全球标准循序渐进地提升语言能力。</p>
                            </div>
                        </div>

                        <div className="reason-card">
                            <div className="reason-number">6</div>
                            <div className="reason-content">
                                <h4>MUET Preparation for Secondary & Pre-University Students</h4>
                                <p>We offer structured MUET programmes designed to strengthen academic English, test-taking strategies, and real-world communication skills.</p>
                                <hr />
                                <h4>MUET 中学及大学先修班强化课程</h4>
                                <p>我们提供系统化的 MUET 课程，强化学生的学术英语能力、考试技巧，并提升实际沟通能力，为升学做好准备。</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </section >
    );
};

export default About;
