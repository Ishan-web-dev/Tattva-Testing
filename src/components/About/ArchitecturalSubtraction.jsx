"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    BedDouble,
    Sparkles,
    Wind,
    ArrowRight,
} from "lucide-react";

const ARCHITECTURAL_SUBTRACTION_DATA = {
    chapter: "Chapter 01 • The Tattva Experience",

    title: "A Stay Designed Around Comfort, Character & Calm.",

    description:
        "At Tattva Udaipur, every stay is designed to feel comfortable, welcoming, and relaxed. Thoughtfully designed rooms, warm hospitality, modern amenities, and the timeless character of Rajasthan come together to create an easy and memorable stay.",

    image: {
        src: "https://i.pinimg.com/736x/d7/fa/01/d7fa01f7a2b30304fe79465a522c4f61.jpg",
        alt: "Comfortable and elegant room at Tattva Udaipur",
    },

    metrics: [
        {
            id: 1,
            value: "24/7",
            title: "Guest Assistance",
            description:
                "Our team is available to make your stay comfortable from arrival to departure.",
            icon: Sparkles,
        },
        {
            id: 2,
            value: "100%",
            title: "Comfort Focused",
            description:
                "Clean, well-maintained rooms designed for a peaceful and relaxing stay.",
            icon: Sparkles,
        },
        {
            id: 3,
            value: "Wi-Fi",
            title: "Modern Convenience",
            description:
                "Stay connected with essential amenities for both leisure and business travel.",
            icon: Wind,
        },
    ],


};

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 35,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

export default function ArchitecturalSubtraction() {
    const data = ARCHITECTURAL_SUBTRACTION_DATA;

    return (
        <section className="w-full overflow-hidden bg-[#fcf9f3] py-24 lg:py-36">
            <div className="mx-auto max-w-[1360px] px-5 md:px-10 lg:px-[4.5rem]">

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16"
                >

                    {/* IMAGE */}
                    <motion.div
                        variants={fadeUp}
                        className="lg:col-span-6"
                    >
                        <div className="group relative overflow-hidden rounded-xl bg-[#dcdad4] shadow-[0_16px_40px_-12px_rgba(27,30,27,0.08)]">

                            {/* Image */}
                            <motion.img
                                src={data.image.src}
                                alt={data.image.alt}
                                initial={{
                                    scale: 1.08,
                                    opacity: 0,
                                }}
                                whileInView={{
                                    scale: 1,
                                    opacity: 1,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.3,
                                }}
                                transition={{
                                    duration: 1.2,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="h-[420px] w-full object-cover md:h-[540px]"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020402]/40 via-transparent to-transparent" />

                            {/* Floating Label */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.4,
                                }}
                                transition={{
                                    delay: 0.5,
                                    duration: 0.7,
                                }}
                                className="absolute bottom-5 left-5 flex items-center gap-3 rounded-lg bg-white/90 px-4 py-3 backdrop-blur-sm"
                            >
                                <BedDouble
                                    size={17}
                                    strokeWidth={1.5}
                                    className="text-[#7d562d]"
                                />

                                <div className="flex flex-col">
                                    <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-[#7d562d]">
                                        UdayHotels
                                    </span>

                                    <span className="mt-0.5 font-serif text-[14px] text-[#020402]">
                                        Designed for comfortable stays
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* CONTENT */}
                    <motion.div
                        variants={staggerContainer}
                        className="flex flex-col lg:col-span-6 lg:pl-6"
                    >

                        {/* Chapter */}
                        <motion.div
                            variants={fadeUp}
                            className="mb-6 flex items-center gap-3"
                        >
                            <span className="h-px w-8 bg-[#7d562d]" />

                            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7d562d]">
                                {data.chapter}
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            variants={fadeUp}
                            className="max-w-xl font-serif text-[34px] font-normal leading-[1.18] tracking-tight text-[#020402] md:text-[44px] lg:text-[50px]"
                        >
                            {data.title}
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            variants={fadeUp}
                            className="mt-7 max-w-xl font-sans text-[15px] font-light leading-6 text-[#444844] md:text-[17px]"
                        >
                            {data.description}
                        </motion.p>

                        {/* METRICS */}
                        <motion.div
                            variants={fadeUp}
                            className="mt-10 grid grid-cols-1 gap-6 border-y border-[#dcdad4] py-7 sm:grid-cols-3"
                        >
                            {data.metrics.map((metric) => {
                                const Icon = metric.icon;

                                return (
                                    <motion.div
                                        key={metric.id}
                                        variants={fadeUp}
                                        className="flex flex-col"
                                    >
                                        <div className="mb-4 flex items-center justify-between">
                                            <span className="font-serif text-[32px] font-normal text-[#020402]">
                                                {metric.value}
                                            </span>

                                            <Icon
                                                size={19}
                                                strokeWidth={1.4}
                                                className="text-[#7d562d]"
                                            />
                                        </div>

                                        <span className="font-serif text-[15px] text-[#020402]">
                                            {metric.title}
                                        </span>

                                        <p className="mt-1 font-sans text-[11px] leading-5 text-[#444844]">
                                            {metric.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>




                        {/* CTA */}
                        <motion.div
                            variants={fadeUp}
                            className="mt-7"
                        >
                            <button
                                type="button"
                                className="group inline-flex items-center gap-3 font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-[#020402] transition-colors duration-300 hover:text-[#7d562d]"
                            >
                                <span>Explore Our Rooms</span>

                                <ArrowRight
                                    size={16}
                                    strokeWidth={1.4}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}