import tiktokIcon from '../assets/tiktok-icon.png';
import facebookIcon from '../assets/facebook-icon.png';
import instagramIcon from '../assets/instagram-icon.png';

import youtubeIcon from '../assets/youtube-icon.png';
import xhsIcon from '../assets/xhs-icon.png';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">

                <div className="footer-top">


                    <div className="footer-legal">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="https://docs.google.com/document/d/1pWbMz7mdLBiPMF876jijg9-zDoBNC59WjvO1Cvjt_EM/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Privacy Policy (隐私政策)</a></li>
                            <li><a href="https://docs.google.com/document/d/1vWudQHe4hrdLFy33RC46Vshwm_Vd8MGARvWjF7g_9q4/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Terms & Conditions (条款与细则)</a></li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            {/* Placeholders for icons */}
                            <a href="https://www.facebook.com/aplusenglish.marketing" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <img src={facebookIcon} alt="Facebook" className="social-icon-img" />
                            </a>
                            <a href="https://www.instagram.com/aplusenglishedu/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <img src={instagramIcon} alt="Instagram" className="social-icon-img" />
                            </a>
                            <a href="https://www.tiktok.com/@aplusenglishedu" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <img src={tiktokIcon} alt="TikTok" className="social-icon-img" />
                            </a>
                            <a href="https://www.youtube.com/channel/UCd-84JxelbzL65X6hAAFw7g" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <img src={youtubeIcon} alt="YouTube" className="social-icon-img" />
                            </a>
                            <a href="https://www.xiaohongshu.com/user/profile/663307a80000000003033898?xsec_token=YBOziwwv1OqVSvVByLE0lh7mkpKhmSeau4-wYe48gq8J8%3D&xsec_source=app_share&shareRedId=ODw1MzM8RUE2NzUyOTgwNjY2OTo3PT9B&apptime=1765447376&share_id=06f8f808eac64c299eb43588d7814043&share_channel=copy_link&appuid=663307a80000000003033898&xhsshare=CopyLink" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <img src={xhsIcon} alt="Xiaohongshu" className="social-icon-img" />
                            </a>
                        </div>
                    </div>
                </div>



                <div className="footer-bottom">
                    <p>&copy; 2018–{new Date().getFullYear()} A+ English. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
