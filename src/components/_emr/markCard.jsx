'use client'

import React from 'react'
import { Bot, CreditCard, FileText, Calendar, Shield, HeartHandshake, UserCheck, LineChart } from 'lucide-react'

// --- Data for each tab ---
const tabsData = [
  {
    id: 'admin',
    buttonText: 'Streamline admin tasks',
    title: 'Streamline admin tasks',
    description: 'From scheduling and billing to documentation, our EHR software helps you manage the most time-consuming parts of your practice.',
    features: [
      { icon: <Bot size={20} />, text: 'AI-powered Note Taker' },
      { icon: <CreditCard size={20} />, text: 'Billing & payments' },
      { icon: <Shield size={20} />, text: 'Insurance' },
      { icon: <FileText size={20} />, text: 'Notes & documentation' },
      { icon: <Calendar size={20} />, text: 'Scheduling' },
    ],
    image: '/img/health/women-on-phone.png', 
  },
  {
    id: 'care',
    buttonText: 'Improve client care',
    title: 'Improve client care',
    description: 'Enhance patient outcomes with integrated tools for communication, telehealth, and personalized care plans that keep clients engaged.',
    features: [
      { icon: <HeartHandshake size={20} />, text: 'Patient Portal' },
      { icon: <UserCheck size={20} />, text: 'Telehealth Ready' },
      { icon: <Calendar size={20} />, text: 'Automated Reminders' },
      { icon: <Bot size={20} />, text: 'Personalized Plans' },
    ],
    image: '/img/health/doctor-with-patient.png',
  },
  {
    id: 'growth',
    buttonText: 'Manage & grow your practice',
    title: 'Manage & grow your practice',
    description: 'Gain valuable insights with our analytics dashboard, helping you optimize operations and identify new opportunities for growth.',
    features: [
      { icon: <LineChart size={20} />, text: 'Analytics Dashboard' },
      { icon: <CreditCard size={20} />, text: 'Financial Reporting' },
      { icon: <UserCheck size={20} />, text: 'Reputation Management' },
      { icon: <Bot size={20} />, text: 'Marketing Automation' },
    ],
    image: '/img/health/business-meeting.png',
  },
]

export default function IntuitiveToolsSection() {
  return (
    <>
      <style jsx global>{`
        /* --- Base & Helpers --- */
        .container {
          width: 100% !important;
          margin-left: auto !important;
          margin-right: auto !important;
          padding-left: 1rem !important;
          padding-right: 1rem !important;
        }
        @media (min-width: 640px) { .container { max-width: 640px !important; } }
        @media (min-width: 768px) { .container { max-width: 768px !important; } }
        @media (min-width: 1024px) { .container { max-width: 1024px !important; } }
        @media (min-width: 1280px) { .container { max-width: 1280px !important; } }
        
        /* --- Section Styling --- */
        .intuitive-tools-section {
          padding-top: 4rem !important;
          padding-bottom: 4rem !important;
          color: #fff !important;
          text-align: center !important;
        }
        @media (min-width: 768px) {
          .intuitive-tools-section {
            padding-top: 5rem !important;
            padding-bottom: 5rem !important;
          }
        }
        .main-title {
          font-size: 2.25rem !important;
          line-height: 2.5rem !important;
          margin-bottom: 1rem !important;
          font-weight: 500 !important;
        }
        @media (min-width: 768px) {
          .main-title {
            font-size: 3rem !important;
            line-height: 1 !important;
          }
        }

        /* --- Tab Navigation --- */
        .tabs-nav {
          display: inline-flex !important;
          flex-wrap: wrap !important;
          justify-content: center !important;
          padding: 0.5rem !important;
          border-radius: 9999px !important;
          margin-bottom: 3rem !important;
          background-color: rgba(255, 255, 255, 0.1) !important;
          backdrop-filter: blur(4px) !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1) !important;
        }
        .tab-label {
          cursor: pointer !important;
          border-radius: 9999px !important;
          padding: 0.5rem 0.75rem !important;
          font-weight: 500 !important;
          color: #fff !important;
          transition: color 0.3s, background-color 0.3s !important;
        }
        .tab-label:hover {
          background-color: rgba(255, 255, 255, 0.1) !important;
        }
        @media (min-width: 640px) {
          .tab-label {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
        }
        
        /* --- Tab Content --- */
        .tab-pane {
          display: none !important;
          grid-template-columns: 1fr !important;
          align-items: center !important;
          gap: 3rem !important;
        }
        @media (min-width: 1024px) {
          .tab-pane {
            grid-template-columns: repeat(12, minmax(0, 1fr)) !important;
            gap: 5rem !important;
          }
        }
        
        /* Left Column: Text Content */
        .text-content {
          text-align: left !important;
        }
        @media (min-width: 1024px) {
          .text-content {
            grid-column: span 5 !important;
          }
        }
        .content-title {
          font-size: 1.875rem !important;
          line-height: 2.25rem !important;
          font-weight: 700 !important;
          margin-bottom: 0.75rem !important;
        }
        @media (min-width: 768px) {
          .content-title {
            font-size: 2.25rem !important;
            line-height: 2.5rem !important;
          }
        }
        .content-description {
          font-size: 1.125rem !important;
          line-height: 1.75rem !important;
          color: #e5e7eb !important;
          margin-bottom: 1.5rem !important;
        }
        .features-grid {
          display: grid !important;
          grid-template-columns: 1fr !important;
          gap: 0.75rem 1.5rem !important;
          margin-bottom: 2rem !important;
        }
        @media (min-width: 640px) {
          .features-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        .feature-item {
          display: flex !important;
          align-items: center !important;
          font-size: 1.125rem !important;
          font-weight: 600 !important;
        }
        .feature-icon {
          margin-right: 0.75rem !important;
          color: #f97316 !important; /* orange-500 */
          flex-shrink: 0 !important;
        }
        .feature-text {
          border-bottom: 2px solid transparent !important;
          transition: border-color 0.2s ease-in-out !important;
        }
        .feature-item:hover .feature-text {
          border-color: #fb923c !important; /* orange-400 */
        }
        .cta-button {
          background-color: #f97316 !important; /* orange-500 */
          color: #fff !important;
          font-weight: 600 !important;
          padding: 0.75rem 1.5rem !important;
          border-radius: 9999px !important;
          border: none !important;
          cursor: pointer !important;
          transition: background-color 0.2s !important;
        }
        .cta-button:hover {
          background-color: #ea580c !important; /* orange-600 */
        }

        /* Right Column: Image Content */
        .image-content {
          position: relative !important;
        }
        @media (min-width: 1024px) {
          .image-content {
            grid-column: span 7 !important;
          }
        }
        .content-image {
          width: 100% !important;
          height: auto !important;
          border-radius: 0.75rem !important;
          box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25) !important;
        }
        
        /* Popup Element */
        .info-popup {
          position: absolute !important;
          top: 1rem !important;
          right: 1rem !important;
          padding: 0.5rem 0.75rem !important;
          border-radius: 9999px !important;
          background-color: #fff !important;
          color: #1f2937 !important;
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) !important;
        }
        @media (min-width: 1024px) {
          .info-popup {
            top: 15% !important;
            right: -5% !important;
          }
        }
        .info-popup-header { display: flex !important; align-items: center !important; }
        .info-popup-title { font-weight: 700 !important; font-size: 0.75rem !important; line-height: 1rem !important; white-space: nowrap !important; }
        .info-popup-close { margin-left: 1rem !important; color: #9ca3af !important; }
        .info-popup-close:hover { color: #4b5563 !important; }
        .info-popup-body { display: flex !important; align-items: center !important; margin-top: 0.25rem !important; }
        .info-popup-icon { margin-right: 0.5rem !important; }
        .info-popup-text { font-weight: 500 !important; font-size: 0.75rem !important; line-height: 1rem !important; white-space: nowrap !important; color: #9a3412 !important; }
        @media (min-width: 640px) {
          .info-popup-title, .info-popup-text { font-size: 0.875rem !important; line-height: 1.25rem !important; }
        }

        /* --- Core Tab Logic & Animation --- */
        .tab-radio {
          display: none !important;
        }
        #tab-radio-admin:checked ~ .intuitive-tools-section .pane-for-admin,
        #tab-radio-care:checked ~ .intuitive-tools-section .pane-for-care,
        #tab-radio-growth:checked ~ .intuitive-tools-section .pane-for-growth {
          display: grid !important;
        }

        /* Active Tab Label Styling */
        #tab-radio-admin:checked ~ .intuitive-tools-section .label-for-admin,
        #tab-radio-care:checked ~ .intuitive-tools-section .label-for-care,
        #tab-radio-growth:checked ~ .intuitive-tools-section .label-for-growth {
          background-color: #ffedd5 !important; /* orange-100 */
          color: #9a3412 !important; /* orange-800 */
          font-weight: 600 !important;
        }

        /* Keyframes */
        @keyframes content-fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes image-fade-in {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes popup-fade-in {
          from { opacity: 0; transform: translateY(-20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        /* Animation Application */
        .animated-text { animation: content-fade-in 0.4s ease-out forwards !important; }
        .animated-image { animation: image-fade-in 0.4s ease-out forwards !important; }
        .animated-popup { animation: popup-fade-in 0.3s 0.2s ease-out forwards !important; opacity: 0 !important; }
      `}</style>

      <div className="css-tabs-wrapper">
        <input type="radio" name="intuitive-tools-tabs" id="tab-radio-admin" className="tab-radio" defaultChecked />
        <input type="radio" name="intuitive-tools-tabs" id="tab-radio-care" className="tab-radio" />
        <input type="radio" name="intuitive-tools-tabs" id="tab-radio-growth" className="tab-radio" />

        <section className="intuitive-tools-section">
          <div className="container">
            <h2 className="main-title !text-white">Intuitive tools to help you thrive</h2>
            <div className="tabs-nav">
              {tabsData.map((tab) => (
                <label key={tab.id} htmlFor={`tab-radio-${tab.id}`} className={`tab-label  label-for-${tab.id}`}>
                  {tab.buttonText}
                </label>
              ))}
            </div>

            <div className="py-8">
              {tabsData.map((content) => (
                <div key={content.id} className={`tab-pane pane-for-${content.id}`}>
                  <div className="text-content animated-text">
                    <h3 className="content-title !text-white">{content.title}</h3>
                    <p className="content-description">{content.description}</p>
                    <div className="features-grid">
                      {content.features.map((feature) => (
                        <div key={feature.text} className="feature-item">
                          {React.cloneElement(feature.icon, { className: "feature-icon" })}
                          <span className="feature-text">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                    <button className="cta-button">Explore all features</button>
                  </div>
                  
                  <div className="image-content animated-image">
                    <img src={content.image} alt={content.title} className="content-image" />
                    {content.id === 'admin' && (
                      <div className="info-popup animated-popup">
                        <div className="info-popup-header">
                          <strong className="info-popup-title">Availability block</strong>
                          <button type="button" className="info-popup-close" aria-label="Close">
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
                          </button>
                        </div>
                        <div className="info-popup-body">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f39c12" className="info-popup-icon" viewBox="0 0 16 16">
                            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                            <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.5A5.002 5.002 0 0 0 8 3zM3.5 12A5.002 5.002 0 0 0 8 13c1.552 0 2.94-.707 3.857-1.818a.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.5A5.002 5.002 0 0 0 8 13z"/>
                          </svg>
                          <small className="info-popup-text">Every week on Tue, Thu</small>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}