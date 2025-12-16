import React, { useEffect } from 'react';
import './TermsConditions.css';

const TermsConditions = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="terms-section">
            <div className="container terms-container">
                <h1 className="terms-title">Terms and Conditions</h1>
                <p className="terms-intro">
                    Welcome to A+ English. By accessing our website, visiting our center, or enrolling in our programmes, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully.
                </p>

                <div className="terms-content">
                    <div className="terms-block">
                        <h2>1. General Provisions</h2>
                        <p>These terms apply to all parents, guardians, students, and visitors ("you") who engage with our services. "Services" refers to our English tuition classes, workshops, educational materials, and website use.</p>
                    </div>

                    <div className="terms-block">
                        <h2>2. Registration and Enrollment</h2>
                        <ul>
                            <li><strong>Accuracy of Information:</strong> To enroll a student, you must provide accurate, current, and complete information via our registration forms.</li>
                            <li><strong>Placement:</strong> We reserve the right to assess the student’s proficiency level to ensure they are placed in the most appropriate class.</li>
                            <li><strong>Confirmation:</strong> Enrollment is only confirmed upon the completion of the registration process and receipt of the initial payment.</li>
                        </ul>
                    </div>

                    <div className="terms-block">
                        <h2>3. Fees and Payments</h2>
                        <ul>
                            <li><strong>Payment Terms:</strong> Tuition fees and any applicable material fees are payable as specified in the invoice or fee schedule provided to you upon enrollment.</li>
                            <li><strong>Payment Methods:</strong> We accept payment via the methods indicated on your invoice (e.g., bank transfer, cash, DuitNow, or e-wallet).</li>
                            <li><strong>Changes to Fees:</strong> A+ English reserves the right to review and adjust fees. Parents/guardians will be notified in writing of any fee changes prior to the commencement of the new billing cycle.</li>
                            <li><strong>Late Payments:</strong> We reserve the right to suspend a student’s attendance or release of materials if fees remain unpaid past the due date stated on the invoice.</li>
                            <li><strong>Refunds:</strong> All fees paid are generally non-refundable and non-transferable unless otherwise determined by the management of A+ English on a strict case-by-case basis.</li>
                        </ul>
                    </div>

                    <div className="terms-block">
                        <h2>4. Attendance and Make-up Classes</h2>
                        <ul>
                            <li><strong>Regular Attendance:</strong> Consistent attendance is vital for the student's academic progress.</li>
                            <li><strong>Absence Notification:</strong> Please inform the administration at least 24 hours in advance (or as soon as possible in emergencies) if a student will be absent.</li>
                            <li><strong>Make-up Classes:</strong> Make-up classes are subject to availability and schedule compatibility. We do not guarantee a replacement class for every absence. Make-up classes must generally be utilized within the same month or term as the absence.</li>
                            <li><strong>Public Holidays:</strong> Classes falling on gazetted public holidays may be suspended. Replacement classes for public holidays are at the discretion of the management.</li>
                        </ul>
                    </div>

                    <div className="terms-block">
                        <h2>5. Intellectual Property</h2>
                        <ul>
                            <li>All educational materials provided by A+ English, including worksheets, notes, slides, and our brand logo, are the intellectual property of A+ English.</li>
                            <li>Materials are provided for the personal use of the enrolled student only.</li>
                            <li>You may not copy, distribute, sell, or share our materials with third parties without our written permission.</li>
                        </ul>
                    </div>

                    <div className="terms-block">
                        <h2>6. Student Conduct & Safety</h2>
                        <ul>
                            <li><strong>Behavior:</strong> Students are expected to behave respectfully towards teachers, staff, and peers.</li>
                            <li><strong>Discipline:</strong> We reserve the right to suspend or expel any student who exhibits disruptive behavior, bullying, or harassment, or who poses a safety risk to others. In such cases of expulsion, fee refunds are at the sole discretion of the management.</li>
                            <li><strong>Health:</strong> Please do not send students to class if they are unwell or suffering from a contagious illness.</li>
                        </ul>
                    </div>

                    <div className="terms-block">
                        <h2>7. Limitation of Liability</h2>
                        <p>While A+ English is dedicated to "Transforming Life through Learning" and providing high-quality education, we do not guarantee specific exam results or grades. Academic success is a collaborative effort involving the student’s diligence, attendance, and completion of assigned work.</p>
                        <p>To the fullest extent permitted by law, A+ English shall not be liable for any indirect, incidental, or consequential damages arising out of the use of our services.</p>
                    </div>

                    <div className="terms-block">
                        <h2>8. Changes to Terms</h2>
                        <p>We reserve the right to modify these Terms & Conditions at any time. Changes will be effective immediately upon posting on this website or notification via official communication channels. Your continued use of our services constitutes acceptance of the updated terms.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TermsConditions;
