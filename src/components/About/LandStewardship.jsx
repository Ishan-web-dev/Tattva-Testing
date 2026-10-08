"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    BedDouble,
    Sparkles,
    ShieldCheck,
    Coffee,
} from "lucide-react";

const STAY_PHILOSOPHY_DATA = {
    chapter: "Chapter 02 • The Tattva Standard",

    title: "Thoughtful Hospitality, Inspired by Rajasthan.",

    description:
        "A comfortable stay comes from the details that matter. At Tattva Udaipur, welcoming service, comfortable rooms, clean spaces, and modern amenities come together to create a relaxed and memorable Rajasthan experience.",

    images: {
        primary: {
            src: "https://i.pinimg.com/736x/b4/0d/ea/b40dea48950c0c6d15e4e2bff7c85c5f.jpg",
            alt: "Comfortable and elegant room at Tattva Udaipur",
        },

        secondary: {
            src: "https://i.pinimg.com/1200x/6a/9f/0a/6a9f0a3f91e40dff649ee47ae3ec37de.jpg",
            alt: "Warm hospitality and comfortable hotel spaces at Tattva Udaipur",
        },
    },

    philosophy: [
        {
            id: 1,
            icon: BedDouble,
            label: "Comfort First",
            text: "Thoughtfully designed rooms offer a peaceful and comfortable space to rest after a day of exploring Rajasthan.",
        },
        {
            id: 2,
            icon: Sparkles,
            label: "Clean & Well Kept",
            text: "Clean rooms, fresh spaces, and regular housekeeping help make every stay comfortable and worry-free.",
        },
        {
            id: 3,
            icon: ShieldCheck,
            label: "Warm Hospitality",
            text: "Our team is focused on friendly, attentive service that makes your stay easy from check-in to check-out.",
        },
    ],

    quote: {
        text: "A memorable stay begins with comfort, warm hospitality, and a genuine connection to the place.",

        attribution: "The Tattva Hospitality Philosophy",
    },

    footer: {
        label: "The Tattva Standard",
        text: "Stay comfortably. Experience Rajasthan.",
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

const staggerContainer = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

export default function StayPhilosophy() {
    const data = STAY_PHILOSOPHY_DATA;

    return (
        <section className="w-full overflow-hidden bg-[#f6f3ed] py-24 lg:py-20">
            <div className="mx-auto max-w-[1360px] px-5 md:px-10 lg:px-[4.5rem]">

                {/* HEADER */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    className="mb-14 max-w-3xl md:mb-20"
                >
                    <motion.div
                        variants={fadeUp}
                        className="mb-6 flex items-center gap-3"
                    >
                        <span className="h-px w-8 bg-[#7d562d]" />

                        <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7d562d]">
                            {data.chapter}
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={fadeUp}
                        className="font-serif text-[35px] font-normal leading-[1.18] tracking-tight text-[#020402] sm:text-[40px] md:text-[50px] lg:text-[58px]"
                    >
                        {data.title}
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="mt-6 max-w-2xl font-sans text-[15px] font-light leading-7 text-[#444844] md:text-[17px]"
                    >
                        {data.description}
                    </motion.p>
                </motion.div>

                {/* VISUAL STORY */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}
                    className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10"
                >

                    {/* PRIMARY IMAGE */}
                    <motion.div
                        variants={fadeUp}
                        className="lg:col-span-7"
                    >
                        <div className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-[#dcdad4]">

                            <motion.img
                                src={data.images.primary.src}
                                alt={data.images.primary.alt}
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
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 1.2,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#020402]/60 via-transparent to-transparent" />

                            {/* IMAGE LABEL */}
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
                                }}
                                transition={{
                                    delay: 0.5,
                                    duration: 0.7,
                                }}
                                className="absolute bottom-5 left-5"
                            >
                                <div className="flex items-center gap-2 rounded-full bg-[#020402]/70 px-3 py-2 backdrop-blur-md">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#7d562d]" />

                                    <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-white">
                                        Comfortable Stays
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* SECONDARY CONTENT */}
                    <motion.div
                        variants={staggerContainer}
                        className="flex flex-col lg:col-span-5"
                    >

                        {/* SECONDARY IMAGE */}
                        <motion.div
                            variants={fadeUp}
                            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-[#dcdad4]"
                        >
                            <motion.img
                                src={data.images.secondary.src}
                                alt={data.images.secondary.alt}
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
                                }}
                                transition={{
                                    duration: 1.2,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#020402]/50 to-transparent" />

                            <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 backdrop-blur-sm">
                                <Coffee
                                    size={13}
                                    strokeWidth={1.4}
                                    className="text-[#7d562d]"
                                />

                                <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.14em] text-[#020402]">
                                    Thoughtful Hospitality
                                </span>
                            </div>
                        </motion.div>

                        {/* QUOTE */}
                        <motion.div
                            variants={fadeUp}
                            className="relative mt-8 border-l border-[#7d562d] pl-6 md:mt-10 md:pl-8"
                        >
                            <span className="font-serif text-[42px] leading-none text-[#7d562d]/40">
                                “
                            </span>

                            <blockquote className="-mt-2 font-serif text-[23px] font-normal leading-[1.35] text-[#020402] md:text-[28px]">
                                {data.quote.text}
                            </blockquote>

                            <div className="mt-4 flex items-center gap-3">
                                <span className="h-px w-6 bg-[#dcdad4]" />

                                <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-[#7d562d]">
                                    {data.quote.attribution}
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* HOSPITALITY PRINCIPLES */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    className="mt-16 border-t border-[#dcdad4] pt-10 md:mt-20 md:pt-12"
                >
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">

                        {data.philosophy.map((item) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.id}
                                    variants={fadeUp}
                                    className="group flex flex-col"
                                >
                                    <div className="mb-5 flex items-center justify-between">
                                        <Icon
                                            size={22}
                                            strokeWidth={1.3}
                                            className="text-[#7d562d] transition-transform duration-500 group-hover:-translate-y-1"
                                        />

                                        <span className="font-sans text-[9px] tracking-[0.18em] text-[#999]">
                                            0{item.id}
                                        </span>
                                    </div>

                                    <h3 className="font-serif text-[20px] text-[#020402]">
                                        {item.label}
                                    </h3>

                                    <p className="mt-2 max-w-sm font-sans text-[12px] font-light leading-6 text-[#444844]">
                                        {item.text}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* BOTTOM STATEMENT */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    className="mt-14 flex flex-col justify-between gap-6 border-t border-[#dcdad4] pt-6 sm:flex-row sm:items-center"
                >
                    <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-[#7d562d]">
                        {data.footer.label}
                    </span>

                    <div className="flex items-center gap-3">
                        <span className="font-serif text-[16px] italic text-[#444844]">
                            {data.footer.text}
                        </span>

                        <ArrowUpRight
                            size={16}
                            strokeWidth={1.4}
                            className="text-[#7d562d]"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}