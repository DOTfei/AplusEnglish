import React from 'react';
import './Contact.css';
import whatsappIcon from '../assets/whatsapp-icon.png';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Contact Us | 联系我们</h2>
                <p className="section-subtitle">Ready to start? Get in touch with us today! | 准备好开始了吗？今天就联系我们！</p>

                <div className="contact-container">
                    {/* Location & Info */}
                    <div className="contact-info-wrapper">

                        <div className="info-item">
                            <h3>Call Us | 致电我们</h3>
                            <p>019-419 8123</p>
                            <p>019-719 8823</p>
                        </div>

                        <div className="info-item">
                            <h3>Email Us | 电邮联系</h3>
                            <p>aplusenglish.marketing@gmail.com</p>
                        </div>

                        <div className="info-item">
                            <h3>Chat with Us | 在线咨询</h3>
                            <a
                                href="https://wa.me/60194198123"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-whatsapp"
                            >
                                <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon-img" />
                                WhatsApp Us Now | WhatsApp 联系我们
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
