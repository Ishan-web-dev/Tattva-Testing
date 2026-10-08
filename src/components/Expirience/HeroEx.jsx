"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, BookOpen } from "lucide-react";
import Link from "next/link";

const HERO_DATA = {
    badge: "Tattva Udaipur · Nature, Culture & Local Experiences",

    title: "Discover Rajasthan: Nature, Culture & Experiences",

    description:
    "Explore the surrounding forest, Aravalli landscape, and rich culture of Rajasthan. Discover Udaipur, Ranakpur, local places, or simply enjoy nature.",
    backgroundImage:
        "Media/t6.jpg",

    stats: [
        {
            label: "Surroundings",
            title: "Forest Retreat",
            description: "Peaceful natural surroundings",
        },
        {
            label: "Location",
            title: "Udaipur • Ranakpur",
            description: "Explore Rajasthan at your own pace",
        },
        {
            label: "Experiences",
            title: "Nature & Culture",
            description: "Discover local places and traditions",
        },
        {
            label: "Stay",
            title: "Peace & Comfort",
            description: "A relaxed escape close to nature",
        },
    ],
};

export default function HeroEx({
    onDownloadExperience,
}) {
    const [isLoading, setIsLoading] = useState(true);
    const [typedTitle, setTypedTitle] = useState("");

    const handleDownload = () => {
        if (onDownloadExperience) {
            onDownloadExperience();
        }
    };

    /* =====================================================
       LOADING ANIMATION
    ====================================================== */

    useEffect(() => {
        const loaderTimer = setTimeout(() => {
            setIsLoading(false);
        }, 1400);

        return () => clearTimeout(loaderTimer);
    }, []);

    /* =====================================================
       TYPING ANIMATION
    ====================================================== */

    useEffect(() => {
        if (isLoading) return;

        let index = 0;

        const typingTimer = setInterval(() => {
            setTypedTitle(HERO_DATA.title.slice(0, index + 1));
            index++;

            if (index >= HERO_DATA.title.length) {
                clearInterval(typingTimer);
            }
        }, 45);

        return () => clearInterval(typingTimer);
    }, [isLoading]);

    return (
        <section className="relative w-full overflow-hidden bg-[#1b1e1b] text-white">

            {/* =====================================================
                LOADING SCREEN
            ====================================================== */}

            {/* <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{
                            opacity: 0,
                            transition: {
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            },
                        }}
                        className="fixed inset-0 z-[999] flex items-center justify-center bg-[#1b1e1b]"
                    >
                        <div className="flex flex-col items-center">

                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{
                                    scale: 1,
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="font-serif text-4xl tracking-wide text-[#fcf9f3]"
                            >
                                TATTVA
                            </motion.div>

                            <motion.div
                                initial={{ width: 0, opacity: 0 }}
                                animate={{
                                    width: 90,
                                    opacity: 1,
                                }}
                                transition={{
                                    delay: 0.3,
                                    duration: 0.7,
                                    ease: "easeOut",
                                }}
                                className="mt-4 h-px bg-[#ffdcbd]"
                            />

                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    delay: 0.6,
                                    duration: 0.6,
                                }}
                                className="mt-4 font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ffdcbd]"
                            >
                                Udaipur
                            </motion.span>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence> */}

            <div className="relative flex min-h-[82vh] flex-col justify-end lg:min-h-[88vh]">

                {/* =====================================================
                    BACKGROUND IMAGE
                ====================================================== */}

                <div
                    className="absolute inset-0 scale-105 bg-cover bg-center opacity-60 transition-transform duration-1000 ease-out"
                    style={{
                        backgroundImage: `url("${HERO_DATA.backgroundImage}")`,
                    }}
                />

                {/* =====================================================
                    GRADIENT OVERLAYS
                ====================================================== */}

                {/* <div className="absolute inset-0 bg-gradient-to-t from-[#020402] via-[#020402]/60 to-transparent" /> */}

                {/* <div className="absolute inset-0 bg-gradient-to-r from-[#020402]/80 via-transparent to-[#020402]/40" /> */}

                {/* =====================================================
                    HERO CONTENT
                ====================================================== */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                        isLoading
                            ? {
                                  opacity: 0,
                                  y: 30,
                              }
                            : {
                                  opacity: 1,
                                  y: 0,
                              }
                    }
                    transition={{
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative z-10 mx-auto w-full max-w-[1360px] px-5 pb-12 pt-32 md:px-10 lg:px-[4.5rem]"
                >
                    <div className="max-w-4xl space-y-4">

                        {/* Badge */}

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={
                                isLoading
                                    ? {
                                          opacity: 0,
                                          y: 15,
                                      }
                                    : {
                                          opacity: 1,
                                          y: 0,
                                      }
                            }
                            transition={{
                                duration: 0.7,
                                delay: 0.1,
                            }}
                            className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[#ffdcbd] backdrop-blur-md"
                        >
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ffdcbd]" />

                            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em]">
                                {HERO_DATA.badge}
                            </span>
                        </motion.div>

                        {/* Heading */}

                        <h1 className="font-serif text-4xl font-normal leading-[1.1] tracking-tight text-[#fcf9f3] sm:text-5xl lg:text-[56px] lg:leading-[64px]">
                            {typedTitle}

                            {!isLoading &&
                                typedTitle.length < HERO_DATA.title.length && (
                                    <motion.span
                                        animate={{ opacity: [1, 0, 1] }}
                                        transition={{
                                            duration: 0.8,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="ml-1 inline-block text-[#ffdcbd]"
                                    >
                                        |
                                    </motion.span>
                                )}
                        </h1>

                        {/* Description */}

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={
                                isLoading
                                    ? {
                                          opacity: 0,
                                          y: 15,
                                      }
                                    : {
                                          opacity: 1,
                                          y: 0,
                                      }
                            }
                            transition={{
                                duration: 0.8,
                                delay: 0.5,
                            }}
                            className="max-w-2xl font-sans text-base leading-7 text-[#ebe8e2]/90 sm:text-lg"
                        >
                            {HERO_DATA.description}
                        </motion.p>

                        {/* =================================================
                            CTA BUTTONS
                        ================================================== */}

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={
                                isLoading
                                    ? {
                                          opacity: 0,
                                          y: 15,
                                      }
                                    : {
                                          opacity: 1,
                                          y: 0,
                                      }
                            }
                            transition={{
                                duration: 0.8,
                                delay: 0.7,
                            }}
                            className="flex flex-wrap items-center gap-2 pt-4 sm:gap-4"
                        >

                            {/* Explore */}

                            <Link
                                href="#chapters-catalogue"
                                className="inline-flex items-center gap-1.5 rounded-lg bg-transparent/20 px-7 py-3 font-sans text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-[#8f6638] hover:shadow-lg"
                            >
                                <span>Explore Immersion Chapters</span>

                                <ArrowDown
                                    size={18}
                                    strokeWidth={1.8}
                                />
                            </Link>

                            {/* Download / Monograph */}

                            {/* <button
                                type="button"
                                onClick={handleDownload}
                                className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-7 py-3 font-sans text-sm font-medium text-[#fcf9f3] backdrop-blur-md transition-colors duration-200 hover:bg-white/20"
                            >
                                <BookOpen
                                    size={18}
                                    strokeWidth={1.8}
                                />

                                <span>
                                    Download Experience Monograph (PDF)
                                </span>
                            </button> */}

                        </motion.div>
                    </div>

                    {/* =====================================================
                        METRIC STRIP
                    ====================================================== */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                            isLoading
                                ? {
                                      opacity: 0,
                                      y: 20,
                                  }
                                : {
                                      opacity: 1,
                                      y: 0,
                                  }
                        }
                        transition={{
                            duration: 0.9,
                            delay: 0.9,
                        }}
                        className="mt-12 grid grid-cols-2 gap-6 rounded-xl bg-white/5 p-4 pt-6 backdrop-blur-sm md:grid-cols-4"
                    >
                        {HERO_DATA.stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="space-y-1"
                            >
                                {/* Label */}

                                <span className="block font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-[#ffdcbd]">
                                    {stat.label}
                                </span>

                                {/* Title */}

                                <p className="font-serif text-xl font-normal leading-7 text-[#fcf9f3]">
                                    {stat.title}
                                </p>

                                {/* Description */}

                                <span className="block font-sans text-[13px] leading-5 text-[#ebe8e2]/70">
                                    {stat.description}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}