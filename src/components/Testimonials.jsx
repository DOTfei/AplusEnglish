import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            quote: "The fun approach really helped my child improve! My son used to hate English, but now he looks forward to every class.",
            quoteCn: "有趣的教学方式真的帮助了我的孩子！我儿子以前很讨厌英语，但现在他期待每一堂课。",
            author: "Sarah L.",
            role: "Parent | 家长"
        },
        {
            id: 2,
            quote: "A+ English teachers are so patient and kind. I learned so much in just a few months.",
            quoteCn: "A+ English 的老师非常耐心和友善。在短短几个月内我学到了很多。",
            author: "Mr Chan",
            role: "Parent | 家长"
        },
        {
            id: 3,
            quote: "The online classes are very interactive. It doesn't feel like a boring lecture at all.",
            quoteCn: "线上课程互动性非常强，一点也不觉得枯燥乏味。",
            author: "Mrs. Wong",
            role: "Parent | 家长"
        }
    ];

    return (
        <section id="testimonials" className="testimonials-section">
            <div className="container">
                <h2 className="section-title">Review | 好评</h2>
                <div className="testimonials-grid">
                    {testimonials.map((item) => (
                        <div key={item.id} className="testimonial-card">
                            <div className="quote-icon">“</div>
                            <p className="quote-text">{item.quote}</p>
                            <hr style={{ margin: '1rem 0', opacity: 0.2 }} />
                            <p className="quote-text cn">{item.quoteCn}</p>
                            <div className="author-info">
                                <p className="author-name">{item.author}</p>
                                <p className="author-role">{item.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
