import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <section className="privacy">
      <div className="privacy__container">

        <div className="privacy__header">
          <p className="privacy__eyebrow">Privacy</p>
          <h1 className="privacy__title">
            Your data matters. We treat it with care and respect.
          </h1>
          <p className="privacy__intro">
            At Lowercase Group, we respect your privacy. This policy explains how
            we collect, use, and protect your information when you interact with us.
          </p>
        </div>

        <div className="privacy__section">
          <h2>Information We Collect</h2>
          <p>
            We may collect personal information you provide such as your name,
            email, phone number, company details, or enquiry data.
          </p>
          <p>
            We may also automatically collect technical data like IP address,
            device type, browser, and usage patterns via cookies or analytics tools.
          </p>
        </div>

        <div className="privacy__section">
          <h2>How We Use Information</h2>
          <ul>
            <li>Respond and communicate with you</li>
            <li>Improve services and website experience</li>
            <li>Manage projects, communications, and opportunities</li>
            <li>Send updates (if opted in)</li>
            <li>Ensure security and compliance</li>
          </ul>
        </div>

        <div className="privacy__section">
          <h2>Sharing Information</h2>
          <p>We do not sell your personal data.</p>
          <p>
            We may share information with trusted partners or authorities where
            necessary to operate, comply with laws, or protect our interests.
          </p>
        </div>

        <div className="privacy__section">
          <h2>Cookies & Analytics</h2>
          <p>
            We use cookies and analytics to improve functionality and understand usage.
          </p>
          <p>
            You can control cookies through your browser settings.
          </p>
        </div>

        <div className="privacy__section">
          <h2>Data Protection</h2>
          <p>
            We take reasonable steps to secure your data, though no system is fully secure.
          </p>
        </div>

        <div className="privacy__section">
          <h2>Third-Party Services</h2>
          <p>
            We are not responsible for privacy practices of external websites or services.
          </p>
        </div>

        <div className="privacy__section">
          <h2>Your Rights</h2>
          <p>
            You may request access, correction, or deletion of your personal data.
          </p>
        </div>

        <div className="privacy__section">
          <h2>Changes</h2>
          <p>
            This policy may be updated. Changes will appear on this page.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PrivacyPolicy;