import React, { useEffect } from "react";
import Layouts from "../layouts/Layouts";
// Assuming Layouts component is defined elsewhere and handles basic page structure.
// For this example, we'll assume it doesn't rely on specific external CSS frameworks like Tailwind.

const PrivacyPolicy = () => {
  useEffect(() => {
    // Define the CSS as a string
    const css = `
        /* Privacy Policy Container */
        .privacy-policy-container {
          max-width: 768px; /* Equivalent to Tailwind's max-w-4xl (48rem) */
          margin-left: auto;
          margin-right: auto;
         margin-top:130px;    /* Equivalent to Tailwind's py-16 (4rem) */
          padding-bottom: 64px; /* Equivalent to Tailwind's py-16 (4rem) */
          padding-left: 24px;   /* Equivalent to Tailwind's px-6 (1.5rem) */
          padding-right: 24px;  /* Equivalent to Tailwind's px-6 (1.5rem) */
          color: #4A5568; /* A dark gray for general text, similar to text-gray-800 */
          font-family: Outfit, sans-serif /* Using Inter font as recommended */
        }

        /* Heading 1 (Privacy Policy Title) */
        .privacy-policy-title {
          font-size: 36px; /* Equivalent to Tailwind's text-4xl (2.25rem) */
          font-weight: 700; /* Equivalent to Tailwind's font-bold */
          margin-bottom: 32px; /* Equivalent to Tailwind's mb-8 (2rem) */
          text-align: center;
          color: #1A202C; /* A very dark gray, similar to text-gray-900 */
        }

        /* Paragraphs */
        .privacy-policy-paragraph {
          margin-bottom: 24px; /* Equivalent to Tailwind's mb-6 (1.5rem) */
        }

        /* Sub-headings (e.g., "1. Information We Collect") */
        .privacy-policy-section-title {
          font-size: 24px; /* Equivalent to Tailwind's text-2xl (1.5rem) */
          font-weight: 600; /* Equivalent to Tailwind's font-semibold */
          margin-top: 32px; /* Equivalent to Tailwind's mt-8 (2rem) */
          margin-bottom: 16px; /* Equivalent to Tailwind's mb-4 (1rem) */
        }

        /* List Items */
        .privacy-policy-list {
          list-style-type: disc;
          list-style-position: inside;
          margin-bottom: 24px; /* Equivalent to Tailwind's mb-6 */
        }

        .privacy-policy-list li {
          margin-bottom: 8px; /* Equivalent to Tailwind's space-y-2 (0.5rem) for list items */
        }

        /* Anchor Tag (Email link) */
        .privacy-policy-link {
          color: #2563EB; /* Equivalent to Tailwind's text-blue-600 */
          text-decoration: underline;
        }

        /* Responsive adjustments for smaller screens */
        @media (max-width: 768px) {
          .privacy-policy-title {
            font-size: 28px; /* Slightly smaller on small screens */
          }
          .privacy-policy-section-title {
            font-size: 20px; /* Slightly smaller on small screens */
          }
          .privacy-policy-container {
            padding-top: 32px;
            padding-bottom: 32px;
            padding-left: 16px;
            padding-right: 16px;
          }
        }
    `;

    // Create a style element
    const styleElement = document.createElement("style");
    styleElement.id = "privacy-policy-styles"; // Give it an ID for easy removal
    styleElement.textContent = css;

    // Append the style element to the document head
    document.head.appendChild(styleElement);

    // Cleanup function to remove the style element when the component unmounts
    return () => {
      const existingStyleElement = document.getElementById(
        "privacy-policy-styles"
      );
      if (existingStyleElement) {
        document.head.removeChild(existingStyleElement);
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount and unmount

  return (
    // The Layouts component is kept as it was in your original code.
    <Layouts>
      <div className="privacy-policy-container">
        <h1 className="privacy-policy-title">Privacy Policy</h1>

        <p className="privacy-policy-paragraph">
          At <strong>Woltrio</strong>, your privacy is important to us. This
          Privacy Policy outlines how we collect, use, and protect your personal
          information when you use our services.
        </p>

        <h2 className="privacy-policy-section-title">
          1. Information We Collect
        </h2>
        <ul className="privacy-policy-list">
          <li>
            Personal information like name, email address, and contact details.
          </li>
          <li>
            Usage data and analytics related to your interactions with our
            platform.
          </li>
          <li>
            Uploaded content including documents, links, or media you provide.
          </li>
        </ul>

        <h2 className="privacy-policy-section-title">
          2. How We Use Your Information
        </h2>
        <ul className="privacy-policy-list">
          <li>To provide and improve our services.</li>
          <li>
            To communicate with you regarding updates, support, or promotional
            content.
          </li>
          <li>
            To analyze platform usage for insights and performance improvements.
          </li>
        </ul>

        <h2 className="privacy-policy-section-title">
          3. Data Sharing & Third Parties
        </h2>
        <p className="privacy-policy-paragraph">
          We do not sell your data. Some services may involve trusted
          third-party tools (e.g., analytics providers) under strict
          confidentiality agreements.
        </p>

        <h2 className="privacy-policy-section-title">4. Security Measures</h2>
        <p className="privacy-policy-paragraph">
          We implement industry-standard security measures to safeguard your
          personal information. However, no system can be guaranteed to be 100%
          secure.
        </p>

        <h2 className="privacy-policy-section-title">5. Your Rights</h2>
        <ul className="privacy-policy-list">
          <li>You can request access to or deletion of your personal data.</li>
          <li>You may opt out of marketing communications at any time.</li>
        </ul>

        <h2 className="privacy-policy-section-title">
          6. Changes to this Policy
        </h2>
        <p className="privacy-policy-paragraph">
          We may update this Privacy Policy from time to time. Any significant
          changes will be communicated via email or platform notice.
        </p>

        <h2 className="privacy-policy-section-title">7. Contact Us</h2>
        <p className="privacy-policy-paragraph">
          If you have any questions or concerns about this policy, please
          contact us at{" "}
          <a href="mailto:support@woltrio.com" className="privacy-policy-link">
            info@woltrio.com
          </a>
          .
        </p>
      </div>
    </Layouts>
  );
};

export default PrivacyPolicy;
