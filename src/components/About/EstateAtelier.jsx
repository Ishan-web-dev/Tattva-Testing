"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BedDouble, Sparkles } from "lucide-react";

const HOSPITALITY_DETAILS_DATA = {
    eyebrow: "Chapter 04 • The Tattva Experience",

    title: "Thoughtfully Designed Rooms. Comfort Made Simple.",

    image: {
        src: "https://i.pinimg.com/1200x/58/b0/ea/58b0eaf599a54bf9cac11daca15494a5.jpg",
        alt: "Elegant and comfortable room at Tattva Udaipur",
    },

    imageMeta: {
        title: "Tattva Udaipur • Thoughtfully Designed Room",
        rating: "Comfort • Cleanliness • Warmth",
    },

    content: [
        "Every Tattva room is designed around the essentials of a comfortable stay — clean spaces, quality bedding, modern amenities, reliable Wi-Fi, and a peaceful environment where guests can relax after a day of exploring Rajasthan.",

        "From attentive housekeeping to warm service and a smooth check-in experience, every detail is thoughtfully managed to make your stay easy, comfortable, and welcoming.",
    ],

    actions: [
        {
            id: 1,
            label: "Explore Our Rooms",
            href: "/rooms",
            type: "primary",
            icon: ArrowRight,
        },
        {
            id: 2,
            label: "View Hotel Amenities",
            href: "/amenities",
            type: "secondary",
            icon: Sparkles,
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

const imageReveal = {
    hidden: {
        opacity: 0,
        scale: 1.06,
    },

    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1.1,
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

export default function HospitalityDetails() {
    const data = HOSPITALITY_DETAILS_DATA;

    return (
        <section className="w-full overflow-hidden bg-[#fcf9f3] py-20 lg:py-32">
            <div className="mx-auto max-w-[1360px] px-5 md:px-10 lg:px-[4.5rem]">

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10"
                >

                    {/* IMAGE COLUMN */}
                    <motion.div
                        variants={imageReveal}
                        className="flex flex-col lg:col-span-7"
                    >
                        <div className="group relative overflow-hidden rounded-lg bg-[#dcdad4] shadow-[0_12px_36px_rgba(27,30,27,0.07)]">

                            <motion.img
                                src={data.image.src}
                                alt={data.image.alt}
                                className="h-[460px] w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02] lg:h-[540px]"
                            />

                            {/* Image Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020402]/35 via-transparent to-transparent" />

                            {/* Floating Badge */}
                            <motion.div
                                variants={fadeUp}
                                className="absolute bottom-5 left-5 flex items-center gap-3 rounded-lg bg-white/90 px-4 py-3 backdrop-blur-sm"
                            >
                                <BedDouble
                                    size={17}
                                    strokeWidth={1.5}
                                    className="text-[#7d562d]"
                                />

                                <div className="flex flex-col">
                                    <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-[#7d562d]">
                                        Tattva Hotels
                                    </span>

                                    <span className="mt-0.5 font-serif text-[14px] text-[#020402]">
                                        Comfort prepared with care
                                    </span>
                                </div>
                            </motion.div>
                        </div>

                        {/* IMAGE METADATA */}
                        <motion.div
                            variants={fadeUp}
                            className="mt-4 flex flex-col gap-2 px-1 font-sans text-[13px] text-[#444844] sm:flex-row sm:items-center sm:justify-between"
                        >
                            <span>{data.imageMeta.title}</span>

                            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7d562d]">
                                {data.imageMeta.rating}
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* CONTENT COLUMN */}
                    <motion.div
                        variants={staggerContainer}
                        className="flex flex-col lg:col-span-5"
                    >

                        {/* EYEBROW */}
                        <motion.span
                            variants={fadeUp}
                            className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7d562d]"
                        >
                            {data.eyebrow}
                        </motion.span>

                        {/* HEADING */}
                        <motion.h2
                            variants={fadeUp}
                            className="font-serif text-[28px] font-normal leading-tight text-[#020402] md:text-[40px]"
                        >
                            {data.title}
                        </motion.h2>

                        {/* DESCRIPTION */}
                        <motion.div
                            variants={fadeUp}
                            className="mt-6 flex flex-col gap-4 font-sans text-[15px] font-light leading-6 text-[#444844]"
                        >
                            {data.content.map((paragraph, index) => (
                                <p key={index}>
                                    {paragraph}
                                </p>
                            ))}
                        </motion.div>

                        {/* SMALL HIGHLIGHTS */}
                        <motion.div
                            variants={fadeUp}
                            className="mt-7 grid grid-cols-2 gap-3 border-y border-[#dcdad4] py-5"
                        >
                            <div className="flex items-center gap-3">
                                <BedDouble
                                    size={18}
                                    strokeWidth={1.4}
                                    className="text-[#7d562d]"
                                />

                                <div>
                                    <span className="block font-serif text-[14px] text-[#020402]">
                                        Comfortable Rooms
                                    </span>

                                    <span className="font-sans text-[10px] text-[#777]">
                                        Designed for rest
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Sparkles
                                    size={18}
                                    strokeWidth={1.4}
                                    className="text-[#7d562d]"
                                />

                                <div>
                                    <span className="block font-serif text-[14px] text-[#020402]">
                                        Daily Care
                                    </span>

                                    <span className="font-sans text-[10px] text-[#777]">
                                        Clean & maintained
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        {/* ACTIONS */}
                        <motion.div
                            variants={fadeUp}
                            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
                        >
                            {data.actions.map((action) => {
                                const Icon = action.icon;

                                if (action.type === "primary") {
                                    return (
                                        <Link
                                            key={action.id}
                                            href={action.href}
                                            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#020402] px-6 py-3.5 font-sans text-[14px] font-medium text-white shadow-[0_2px_8px_rgba(2,4,2,0.12)] transition-all duration-300 hover:bg-[#7d562d]"
                                        >
                                            <span>{action.label}</span>

                                            <Icon
                                                size={18}
                                                strokeWidth={1.7}
                                                className="transition-transform duration-300 group-hover:translate-x-1"
                                            />
                                        </Link>
                                    );
                                }

                                return (
                                    <Link
                                        key={action.id}
                                        href={action.href}
                                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#ebe8e2] px-6 py-3.5 font-sans text-[14px] font-medium text-[#020402] transition-colors duration-300 hover:bg-[#e5e2dc]"
                                    >
                                        <Icon
                                            size={18}
                                            strokeWidth={1.7}
                                            className="text-[#7d562d]"
                                        />

                                        <span>{action.label}</span>
                                    </Link>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}