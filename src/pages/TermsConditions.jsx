import React from "react";
import "./TermsConditions.css";

const TermsConditions = () => {
  return (
    <section className="legal">
      <div className="legal__container">

        <div className="legal__header">
          <p className="legal__eyebrow">Terms</p>
          <h1 className="legal__title">
            Terms of use for accessing and interacting with this website.
          </h1>
          <p className="legal__intro">
            By accessing or using this website, you agree to these Terms. If you
            do not agree, please do not use this website.
          </p>
        </div>

        <Section title="About This Website">
          <p>
            This website operates as a platform presenting brands, ventures,
            services, and opportunities associated with Lowercase Group.
          </p>
          <p>
            References to third parties do not imply ownership or control unless
            explicitly stated.
          </p>
        </Section>

        <Section title="Use of This Website">
          <ul>
            <li>Comply with all applicable laws</li>
            <li>Respect rights of others</li>
            <li>Do not interfere with security or functionality</li>
            <li>Do not introduce malicious code</li>
            <li>No unauthorised access attempts</li>
            <li>No misuse of content or data</li>
          </ul>
          <p>
            We may restrict or terminate access if misuse is suspected.
          </p>
        </Section>

        <Section title="Content and Information">
          <p>
            Content is provided for general informational and commercial purposes only.
          </p>
          <p>
            We do not guarantee accuracy, completeness, or suitability.
          </p>
          <p>
            Nothing constitutes legal, financial, or professional advice.
          </p>
        </Section>

        <Section title="No Offer or Commitment">
          <ul>
            <li>No offer to sell or supply</li>
            <li>No binding proposal</li>
            <li>No guarantee of partnership or availability</li>
          </ul>
          <p>
            Any engagement is subject to separate agreement.
          </p>
        </Section>

        <Section title="Third-Party Services">
          <p>
            Third-party brands and services are independent and not controlled by us.
          </p>
          <p>
            We are not responsible for their content, conduct, or performance.
          </p>
        </Section>

        <Section title="Intellectual Property">
          <p>
            All content, design, and materials are owned or licensed by Lowercase Group.
          </p>
          <ul>
            <li>No copying or reproduction</li>
            <li>No redistribution or modification</li>
            <li>No commercial use without permission</li>
          </ul>
        </Section>

        <Section title="User Submissions">
          <p>
            Submissions are reviewed at our discretion with no obligation to act.
          </p>
          <p>
            Do not submit confidential information without agreement.
          </p>
        </Section>

        <Section title="Availability">
          <p>
            We may modify, suspend, or remove parts of the website at any time.
          </p>
          <p>
            We do not guarantee uninterrupted or error-free access.
          </p>
        </Section>

        <Section title="Limitation of Liability">
          <p>
            We are not liable for any loss arising from use of this website,
            including indirect or consequential damages.
          </p>
        </Section>

        <Section title="Indemnity">
          <p>
            You agree to indemnify Lowercase Group against claims arising from misuse,
            breaches, or unlawful activity.
          </p>
        </Section>

        <Section title="Privacy">
          <p>
            Your use of this website is also subject to our Privacy Policy.
          </p>
        </Section>

        <Section title="Governing Law">
          <p>
            These Terms are governed by the laws of England and Wales.
          </p>
        </Section>

      </div>
    </section>
  );
};

const Section = ({ title, children }) => (
  <div className="legal__section">
    <h2>{title}</h2>
    {children}
  </div>
);

export default TermsConditions;