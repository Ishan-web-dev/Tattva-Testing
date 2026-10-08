"use client";

import React from "react";
import { motion } from "framer-motion";

const ABOUT_HERO_DATA = {
    eyebrow: "Our Story • Inspired by Rajasthan",

    title: {
        firstLine: "A Stay Rooted in",
        secondLine: "Rajasthan & Warmth.",
    },

    description:
        "Tattva Udaipur brings together the timeless charm of Rajasthan with modern comfort and warm hospitality. From thoughtfully designed rooms to welcoming spaces, every detail is created to make your stay relaxed, comfortable, and memorable.",

    image: {
        src: "/Media/t9.jpg",
        alt: "Tattva Udaipur hotel and Rajasthan inspired hospitality",
    },

    metadata: {
        experience: {
            label: "Hospitality",
            value: "Warm & Personal",
        },

        location: {
            label: "Udaipur • Ranakpur",
            description:
                "A comfortable Rajasthan stay for guests exploring Udaipur, Ranakpur, the Aravalli landscapes, and the rich culture of the region.",
        },

        rooms: {
            label: "ROOMS",
            value: "Comfort First",
        },

        service: {
            label: "SERVICE",
            value: "Guest Focused",
        },

        experience: {
            label: "EXPERIENCE",
            value: "Rajasthan Inspired",
        },
    },
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
        scale: 1.08,
    },

    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1.2,
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

export default function AboutHero() {
    const data = ABOUT_HERO_DATA;

    return (
        <section className="relative w-full overflow-hidden mt-20">
            <div className="mx-auto max-w-[1360px] px-5 pb-16 pt-10 md:px-10 lg:px-[4.5rem]">

                {/* ================= EYEBROW + HEADING ================= */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    className="flex max-w-4xl flex-col"
                >

                    {/* Eyebrow */}
                    <motion.div
                        variants={fadeUp}
                        className="mb-6 flex items-center gap-3"
                    >
                        <span className="h-px w-8 bg-[#7d562d]" />

                        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7d562d]">
                            {data.eyebrow}
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        variants={fadeUp}
                        className="font-serif text-[36px] font-normal leading-[1.2] tracking-tight text-[#020402] sm:text-[40px] md:text-[48px] lg:text-[56px] lg:leading-[1.14]"
                    >
                        {data.title.firstLine}
                        <br className="hidden sm:inline" />
                        <span className="sm:inline">
                            {" "}
                            {data.title.secondLine}
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={fadeUp}
                        className="mt-6 max-w-2xl font-sans text-[15px] font-light leading-7 text-[#444844] md:text-[18px]"
                    >
                        {data.description}
                    </motion.p>
                </motion.div>

                {/* ================= HERO IMAGE ================= */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    variants={imageReveal}
                    className="group relative mt-12 overflow-hidden rounded-[10px] shadow-[0_16px_40px_-12px_rgba(27,30,27,0.08)]"
                >

                    {/* Image */}
                    <motion.div
                        className="h-[520px] w-full bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-[1.02] md:h-[460px]"
                        style={{
                            backgroundImage: `url("${data.image.src}")`,
                        }}
                        role="img"
                        aria-label={data.image.alt}
                    />

                    {/* Ambient Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020402]/80 via-[#020402]/20 to-transparent" />

                    {/* ================= IMAGE METADATA ================= */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        className="absolute bottom-0 left-0 flex w-full flex-col justify-between gap-6 p-6 text-white md:flex-row md:items-end md:p-10"
                    >

                        {/* Location / Story */}
                        <motion.div
                            variants={fadeUp}
                            className="flex max-w-md flex-col gap-1"
                        >
                            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[#ffdcbd]">
                                {data.metadata.experience.label}{" "}
                                {data.metadata.experience.value}
                            </span>

                            <span className="font-serif text-[18px] tracking-wide">
                                {data.metadata.location.label}
                            </span>

                            <p className="mt-1 font-sans text-[13px] font-light leading-5 text-white/80">
                                {data.metadata.location.description}
                            </p>
                        </motion.div>

                        {/* ================= HOTEL DETAILS ================= */}
                        <motion.div
                            variants={fadeUp}
                            className="grid grid-cols-2 gap-x-6 gap-y-4 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70 sm:flex sm:items-center sm:gap-8 sm:tracking-widest"
                        >

                            {/* ROOMS */}
                            <div>
                                <span className="mb-1 block text-[10px] text-[#ffdcbd]">
                                    {data.metadata.rooms.label}
                                </span>

                                <span>
                                    {data.metadata.rooms.value}
                                </span>
                            </div>

                            <div className="hidden h-6 w-px bg-white/20 sm:block" />

                            {/* SERVICE */}
                            <div>
                                <span className="mb-1 block text-[10px] text-[#ffdcbd]">
                                    {data.metadata.service.label}
                                </span>

                                <span>
                                    {data.metadata.service.value}
                                </span>
                            </div>

                            <div className="hidden h-6 w-px bg-white/20 sm:block" />

                            {/* EXPERIENCE */}
                            <div>
                                <span className="mb-1 block text-[10px] text-[#ffdcbd]">
                                    {data.metadata.experience.label}
                                </span>

                                <span>
                                    {data.metadata.experience.value}
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}