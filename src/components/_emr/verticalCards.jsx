'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { GridPattern } from '@/components/ui/grid-pattern'
import { cn } from '@/lib/utils'

// --- Data for the cards ---
const cardData = [
    {
        image: '/img/health/dashboard.png',
        title: 'Rated best independent practice solution',
        description:
            'Customers rated Woltrio the best overall solution for independent physician practices for the second straight year.',
        linkText: 'See why they love Woltrio',
    },
    {
        image: '/img/health/dashboard.png',
        title: 'Users see 2–6% increase in collections',
        description:
            'Practices that switch to Woltrio often see up to a 6% increase in collections and a similar decrease in overhead costs.',
        linkText: 'Learn more',
    },
    {
        image: '/img/health/slider (1).png',
        title: 'Built for specialty needs',
        description:
            'Woltrio works the way clinicians think with specialty-specific workflows and more complete patient charts.',
        linkText: 'Explore the specialties we serve',
    },

]

// --- The Main Component ---
export default function PracticeBenefitsSection() {
    const sectionRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    })

    const totalCards = cardData.length

    // FIX: The vertical scroll distance should be (totalCards - 1) * 100vh.
    // This ensures the animation stops when the last card is in view.
    const y = useTransform(
        scrollYProgress,
        [0, 1],
        ['0vh', `-${(totalCards - 1) * 100}vh`]
    )

    // Opacity for heading - fades out towards the end of the scroll
    const headingOpacity = useTransform(
        scrollYProgress,
        [0, 0.85, 1],
        [1, 1, 0]
    )

    // Vertical position for heading - moves up at the end
    const headingY = useTransform(
        scrollYProgress,
        [0, 0.85, 1],
        [0, 0, -100]
    )

    // The track needs to be tall enough for each card to have scroll time.
    const trackHeight = `${totalCards * 100}vh`

    return (
        <section
            ref={sectionRef}
            className="!relative !h-[200vh] !text-white"
            style={{ height: trackHeight }}
        >

            <div className="!sticky !top-0 !flex !h-screen !items-center !overflow-hidden">
                <div className="container !mx-auto !px-4">
                    <div className="!grid !items-center !gap-12 lg:!grid-cols-2">

                        {/* Left Column: Title (remains sticky) */}
                        <motion.div
                            className="lg:!col-span-1"
                            style={{
                                opacity: headingOpacity,
                                y: headingY,
                            }}
                        >
                            <GridPattern
                                squares={[
                                    [4, 4],
                                    [5, 1],
                                    [8, 2],
                                    [5, 3],
                                    [5, 5],
                                    [10, 10],
                                    [12, 15],
                                    [15, 10],
                                    [10, 15],
                                    [15, 10],
                                    [10, 15],
                                    [15, 10],
                                ]}
                                className={cn(
                                    "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
                                )}
                            />
                            <h2 className="!mb-4 !text-5xl !font-bold !text-white">
                                See why thousands of practices choose Woltrio®
                            </h2>
                            <p className="!text-xl !text-gray-400">
                                By reducing daily inefficiencies and claim complexity, Woltrio helps
                                alleviate staff burnout and frees you to focus on patients.
                            </p>
                        </motion.div>

                        {/* Right Column: Scrolling Cards */}
                        <div className="lg:!col-span-1">
                            {/* This container moves vertically based on scroll progress */}
                            <motion.div style={{ y }} className="!relative">
                                {cardData.map((card, idx) => (
                                    <div
                                        key={idx}
                                        className="!flex !h-screen !items-center !justify-center !p-4"
                                    >
                                        <div className="!max-w-md !py-10 !overflow-hidden !rounded-lg !bg-gray-900/40 shadow-md">
                                            <img
                                                src={card.image}
                                                className="!h-48 !w-full  !object-cover"
                                                alt={card.title}
                                            />
                                            <div className="!p-6">
                                                <h5 className="!mb-3 !text-2xl !text-white !font-semibold">{card.title}</h5>
                                                <p className="!mb-4 !text-gray-400">
                                                    {card.description}
                                                </p>
                                                <a
                                                    href="#"
                                                    className="!inline-flex !items-center !font-semibold !text-orange-500 hover:!text-orange-400"
                                                >
                                                    {card.linkText}
                                                    <span className="!ml-2">→</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}