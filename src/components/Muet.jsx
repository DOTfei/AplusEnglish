import { Link } from 'react-router-dom';
import './Programmes.css';

const Muet = () => {
    return (
        <div className="programmes-page">
            <section className="programmes-section">
                <div className="container">
                    <h2 className="section-title">MUET (Malaysian University English Test) | MUET 课程</h2>

                    <div className="cta-center" style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfR387buFFREjO0ueyNFqfpVL_NSkwKw29B61eJd1T6FPjKgw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '0.8rem 2rem', backgroundColor: 'var(--color-accent)', color: '#fff' }}>Secure Your Spot | 立即报名</a>
                    </div>

                    <div className="notice-box">
                        <h3>MUET: 马来西亚大学英语考试 | Your Gateway to Universities</h3>
                        <div className="notice-bilingual">
                            <div className="cn">
                                <p className="notice-text">这是马来西亚所有公立大学的必修课，也是许多私立院校和国际学府认可的英语能力证明。</p>
                            </div>
                            <div className="en">
                                <p className="notice-text">A compulsory requirement for all public Malaysian universities and a recognized proof of English proficiency for many private and international institutions.</p>
                            </div>
                        </div>
                    </div>

                    <div className="cta-center" style={{ display: 'flex', justifyContent: 'center', margin: '3rem 0' }}>
                        <Link to="/what-is-muet" className="btn btn-primary" style={{ padding: '1.2rem 2.5rem', fontSize: '1.2rem' }}>
                            What is MUET? | 什么是 MUET？
                        </Link>
                    </div>

                    <div className="prog-block muet-block" style={{ marginTop: '2rem', backgroundColor: 'var(--color-primary)', color: '#fff', border: 'none' }}>
                        <div className="prog-content">
                            <div className="pricing-section" style={{ marginTop: '0', padding: '2rem 0' }}>
                                <h3 className="sub-heading" style={{ fontSize: '2rem', borderLeft: 'none', paddingLeft: '0', textAlign: 'center', marginBottom: '3rem', color: '#fff' }}>MUET Class | MUET 课程</h3>

                                <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '600px', margin: '0 auto' }}>
                                    <div className="pricing-card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.2)', textAlign: 'center', color: '#fff' }}>
                                        <div className="card-header" style={{ marginBottom: '1.5rem' }}>
                                            <div className="price-tag" style={{ margin: '1rem 0' }}>
                                                <span style={{ fontSize: '2.2rem', fontWeight: 'bold', color: 'var(--color-accent)' }}>Course Schedule</span>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="package" style={{ marginBottom: '1.2rem' }}>
                                                <p style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>2 Lessons per Week</p>
                                                <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)' }}>每周 2 堂课</p>
                                            </div>
                                            <div className="divider" style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)', margin: '1.2rem 0' }}></div>
                                            <div className="package" style={{ marginBottom: '1.2rem' }}>
                                                <p style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>1.5 Hours per Class</p>
                                                <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)' }}>每堂课 1.5 小时</p>
                                            </div>
                                            <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#fff', borderRadius: '10px', fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                                                Trial Class Available | 提供试课
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="getting-started" style={{ marginTop: '4rem', backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '2.5rem', borderRadius: '15px', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#fff' }}>
                                    <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#fff', fontSize: '1.8rem' }}>Training Features | 课程特色</h3>
                                    <div className="gs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                                        <div className="gs-item" style={{ textAlign: 'center' }}>
                                            <h4 style={{ color: 'var(--color-accent)', marginBottom: '0.5rem', fontSize: '1.4rem' }}>Exam Strategies | 考试策略</h4>
                                            <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.9)' }}>Master the techniques for all 4 papers.</p>
                                            <p className="sm-cn" style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)' }}>掌握全部 4 份考卷的答题技巧。</p>
                                        </div>
                                        <div className="gs-item" style={{ textAlign: 'center' }}>
                                            <h4 style={{ color: 'var(--color-accent)', marginBottom: '0.5rem', fontSize: '1.4rem' }}>Mock Tests | 模拟考试</h4>
                                            <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.9)' }}>Intensive practice with real exam formats.</p>
                                            <p className="sm-cn" style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)' }}>针对真实考试格式进行强化练习。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cta-center" style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem', paddingBottom: '3rem' }}>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfR387buFFREjO0ueyNFqfpVL_NSkwKw29B61eJd1T6FPjKgw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '1rem 3rem', fontSize: '1.1rem', backgroundColor: 'var(--color-accent)', color: '#fff' }}>Secure Your Spot | 立即报名</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Muet;
