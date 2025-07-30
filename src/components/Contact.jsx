// components/ContactSection.jsx

import React from "react";
import Link from "next/link"; // Import Next.js Link
// Assuming your Button component is in './Button'

const ContactSection = () => {
  return (
    <>
      <div
        className="row g-o main-heading ready-bring text-center px-5"
        data-aos="fade-up"
      >
        <h1>
          Ready to bring your <span> ideas to</span> Life? <br />
          We are <span> Here to help</span>{" "}
        </h1>
      </div>

      <div className="row g-o pb-5  justify-content-center" data-aos="fade-up">
        <div className="footer-custom-input-wrapper wrapper-2 ">
          <Link href="/contact" passHref>
            <button
              style={{ backgroundColor: "#ff9800" }}
              className="footer-custom-arrow-btn-btn"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              CONTACT US
              <span className="span-inside-btn">
                <svg
                  style={{ width: "15px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="white"
                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                  />
                </svg>
              </span>{" "}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
