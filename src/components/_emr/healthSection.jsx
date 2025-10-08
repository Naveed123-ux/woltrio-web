'use client'

import React from "react";
import { motion } from "framer-motion";
import { IoMdContact } from "react-icons/io";
import {
    ScrollVelocityContainer,
    ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity"
// Data for the features, sourced from the provided PDF.
const featuresData = [
    {
        icon: <IoMdContact className="!h-8 !w-8 !text-[#fd7e14]" />,
        title: "Core EMR/EHR Modules",
        description: "Includes patient records, clinical documentation, prescription management, lab integration, imaging, and Al-assisted note-taking with voice dictation. [cite: 20]",
    },
    {
        icon: <IoMdContact className="!h-8 !w-8 !text-[#fd7e14]" />,
        title: "AI-Powered Automation",
        description: "AI automates coding, suggests treatment options, predicts appointment no-shows, and optimizes scheduling to reduce administrative workload. [cite: 21, 24, 36]",
    },
    {
        icon: <IoMdContact className="!h-8 !w-8 !text-[#fd7e14]" />,
        title: "Practice Management (PM)",
        description: "Handles scheduling, billing, staff management, and Revenue Cycle Management (RCM) with AI-automated insurance claim submissions. [cite: 23, 24]",
    },
    {
        icon: <IoMdContact className="!h-8 !w-8 !text-[#fd7e14]" />,
        title: "Patient Engagement Tools",
        description: "Features secure patient portals, telemedicine, AI-powered chatbots for triage, and mobile apps for appointment booking and reminders. [cite: 26]",
    },
    {
        icon: <IoMdContact className="!h-8 !w-8 !text-[#fd7e14]" />,
        title: "Analytics & Reporting",
        description: "Provides real-time dashboards and predictive analytics to identify trends in patient health, hospital performance, and resource usage. [cite: 28]",
    },
    {
        icon: <IoMdContact className="!h-8 !w-8 !text-[#fd7e14]" />,
        title: "Compliance & Security",
        description: "Ensures HIPAA & GDPR compliance with AI-driven security alerts, end-to-end encryption, and user access control for data integrity. [cite: 31]",
    },
    {
        icon: <IoMdContact className="!h-8 !w-8 !text-[#fd7e14]" />,
        title: "Seamless Integrations",
        description: "Supports HL7, FHIR, and API-based integrations with labs, pharmacies, diagnostic centers, and other health systems. [cite: 33]",
    },
    {
        icon: <IoMdContact className="!h-8 !w-8 !text-[#fd7e14]" />,
        title: "Voice-Enabled Documentation",
        description: "AI-assisted note-taking with voice dictation tools to enhance efficiency and reduce administrative workload. [cite: 20, 35, 36]",
    },
    {
        icon: <IoMdContact className="!h-8 !w-8 !text-[#fd7e14]" />,
        title: "Bundled Services",
        description: "Includes implementation support, staff training, system customization, workflow consulting, and 24/7 technical support. [cite: 38, 39]",
    },
];

// Framer Motion Variants for animations
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Animates children one after another
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 50 },
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};
const IMAGES_ROW_A = [
    "/img/health/slider (1).png",
    "/img/health/slider (2).png",

]
const IMAGES_ROW_B = [
    "/img/health/slider (3).png",
    "/img/health/slider (4).png",
]

function HealthSectionSticky() {
    return (
        // The height of this container defines the "scroll track" for the sticky section.
        // It needs to be taller than the viewport for the effect to be visible.
        <div className="!relative !h-[80vh]  !my-20 ">

            {/* Sticky container that stays on screen for 100vh of scroll */}
            <div className="!sticky !top-0 !h- !flex flex-col lg:flex-col  !items-center !gap-8 !py-10 !md:py-20 md:container">

                {/* Left Column: Content */}
                <motion.div
                    className="!w-full !lg:w-1/2   !h-full !flex !flex-row  !text-white md:!px-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is visible
                >
                    {/* Part 1: Non-Scrolling Title Section (This part remains fixed at the top of the column) */}
                    <motion.div className="!text-left  !mb-8" variants={itemVariants}>
                        <h3 className="!text-[#fd7e14] !text-xl !font-semibold !tracking-wider">
                            WOLTRIO EMR
                        </h3>
                        <h1 className="!text-white !text-4xl !md:text-5xl !font-bold !mt-2 !leading-tight">
                            The Future of Electronic Medical Records
                        </h1>
                        <p className="!max-w-xl !mt-4 !text-gray-300">
                            Our AI-powered EMR streamlines tasks, ensuring the right information is surfaced at the right time.
                        </p>
                    </motion.div>

                    {/* Part 2: SCROLLING Features Section */}
                    {/* `flex-1` makes it take available space, `overflow-y-auto` enables scrolling within this div */}
                    <div className="!flex-1  !hidden !overflow-y-auto !pr-4">
                        <motion.div
                            className="!grid !grid-cols-1 !md:grid-cols-2 !gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                        >
                            {featuresData.map((feature, i) => (
                                <motion.div key={i} variants={itemVariants}>
                                    <div className="!flex !items-center !gap-x-3">
                                        {feature.icon}
                                        <h2 className="!text-white !text-xl !font-bold">{feature.title}</h2>
                                    </div>
                                    <p className="!mt-2 !text-gray-300 !text-sm">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                    <motion.div
                        className=" !lg:flex max-md:hidden !w-full !lg:w-1/2 !h-full !justify-center !items-center"
                        variants={imageVariants}
                        initial=""
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.img
                            src={"/img/health/dashboard.png"} // Restored your original image path
                            alt="Woltrio EMR Interface"
                            className="!rounded-lg !shadow-2xl !shadow-[#fd7e14]/20 !max-h-[80%] !w-auto"
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        />
                    </motion.div>
                </motion.div>

                {/* Right Column: Sticky Image */}
                <div className="relative flex !w-full  flex-col items-center justify-center overflow-hidden py-8">
                    <ScrollVelocityContainer className="w-full">
                        <ScrollVelocityRow baseVelocity={6} direction={1} className="py-4">
                            {IMAGES_ROW_A.map((src, idx) => (
                                <img
                                    key={idx}
                                    src={`${src}`}
                                    alt="Unsplash sample"
                                    width={240}
                                    height={160}
                                    loading="lazy"
                                    decoding="async"
                                    className="mx-4 inline-block h-40 w-60 rounded-lg object-cover shadow-sm"
                                />
                            ))}
                        </ScrollVelocityRow>
                        <ScrollVelocityRow baseVelocity={6} direction={-1} className="py-4">
                            {IMAGES_ROW_B.map((src, idx) => (
                                <img
                                    key={idx}
                                    src={`${src}`}
                                    alt="Unsplash sample"
                                    width={240}
                                    height={160}
                                    loading="lazy"
                                    decoding="async"
                                    className="mx-4 inline-block h-40 w-60 rounded-lg object-cover shadow-sm"
                                />
                            ))}
                        </ScrollVelocityRow>
                    </ScrollVelocityContainer>
                    {/* <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div> */}
                    {/* <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div> */}
                </div>
            </div>
        </div>
    );
}

export default HealthSectionSticky;