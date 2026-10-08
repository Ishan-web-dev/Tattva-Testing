"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    ChevronRight,
    Clock3,
    ConciergeBell,
    BedDouble,
    BookOpen,
    CarFront,
    Flame,
    Luggage,
    PlaneLanding,
    ShieldCheck,
    Sparkles,
    Shirt,
    Coffee,
    Wifi,
    Wine,
} from "lucide-react";
import Link from 'next/link';

/* =========================================================
   AMENITIES DATA
========================================================= */

const AMENITIES_DATA = {
    intro: {
        eyebrow: "Hotel Amenities & Guest Comfort",

        title: (
            <>
                Rooted in Rajasthan.
                <br />
                Designed for Comfort.
            </>
        ),

        description:
            "At Tattva Udaipur, every amenity is selected to make your stay comfortable and convenient. From well-appointed rooms and everyday essentials to dining, parking and guest assistance, enjoy a relaxed hotel experience inspired by the warmth of Rajasthan.",

        register: "Tattva Udaipur Journal",

        edition: "Edition MMXXVI — Vol. I",

        location: "Udaipur • Ranakpur • Rajasthan, India",
    },

    categories: [
        {
            label: "All Amenities",
            href: "#amenities",
        },
        {
            label: "Relax & Leisure",
            href: "#hydrothermal",
        },
        {
            label: "Dining",
            href: "#culinary",
        },
        {
            label: "Arrival & Mobility",
            href: "#mobility",
        },
        {
            label: "In-Room Comforts",
            href: "#sanctuaries",
        },
    ],

    hydrothermal: {
        chapter: "Chapter 01 / Relax & Leisure",

        title: "A Peaceful Space to Slow Down",

        description:
            "After a day of exploring Udaipur, Ranakpur or the Aravalli landscapes, return to a calm and comfortable environment. Tattva offers simple spaces and thoughtful amenities that give you time to relax and enjoy your stay at your own pace.",

        specs: [
            {
                title: "Relaxed Stay",
                value: "Comfort & Calm",
                description:
                    "Comfortable spaces designed to help you unwind after sightseeing, travel or a busy day.",
            },
            {
                title: "Leisure Time",
                value: "Slow & Easy",
                description:
                    "Take a break, enjoy your surroundings and experience a quieter side of your Rajasthan journey.",
            },
        ],

        features: [
            "Comfortable spaces for relaxing after a day of travel",
            "Peaceful surroundings for quiet personal time",
            "Thoughtful amenities designed for a comfortable stay",
        ],

        images: [
            {
                src: "https://i.pinimg.com/736x/bf/c7/b2/bfc7b211ac8f06dfa86c7366d53b3f8d.jpg",
                alt: "Relaxing hotel space at Tattva Udaipur",
                label: "Relaxation Space",
                description: "A peaceful space to rest and unwind",
            },
            {
                src: "https://i.pinimg.com/736x/7a/f2/55/7af255e93c170fa4b9cf1b5b479e8e45.jpg",
                alt: "Comfortable leisure space at Tattva Udaipur",
                label: "Leisure Corner",
                description: "A comfortable setting for quiet moments",
            },
        ],
    },

    culinary: {
        chapter: "Chapter 02 / Dining & Flavours",

        title: "Good Food, Warm Hospitality",

        description:
            "Dining at Tattva brings together comforting Indian flavours, fresh ingredients and the warm hospitality of Rajasthan. From a relaxed breakfast to an enjoyable evening meal, every dining moment is designed to feel simple and welcoming.",

        features: [
            {
                icon: Wine,
                title: "Comfortable Dining",
                description:
                    "Enjoy a relaxed dining experience with a selection of Indian favourites and thoughtfully prepared dishes.",
            },
            {
                icon: Flame,
                title: "Rajasthan Inspired",
                description:
                    "Experience familiar Indian flavours with regional touches inspired by the food and culture of Rajasthan.",
            },
        ],

        images: [
            {
                src: "https://i.pinimg.com/736x/33/c5/a2/33c5a25bc1a8cd7e20e2cdcdb2a8701d.jpg",
                alt: "Dining area at Tattva Udaipur",
                label: "The Dining Space",
            },
            {
                src: "https://i.pinimg.com/1200x/48/29/1a/48291aa0592fb16259c00d48a444e8e6.jpg",
                alt: "Breakfast at Tattva Udaipur",
                label: "Morning Breakfast",
                title: "Start Your Day Well",
                description:
                    "Enjoy a relaxed breakfast with Indian favourites, fresh selections and beverages to begin your day.",
            },
        ],
    },

    mobility: {
        chapter: "Chapter 03 / Arrival & Hospitality",

        title: "An Easy Arrival, From Start to Stay",

        description:
            "Your Tattva experience begins when you arrive. With convenient parking, guest assistance and travel support, our team helps make your arrival and stay comfortable whether you are travelling by car, visiting from another city or exploring Rajasthan.",

        features: [
            {
                icon: PlaneLanding,
                title: "Airport Assistance",
                description:
                    "Travel and transfer assistance from Maharana Pratap Airport can be coordinated based on your requirements.",
            },
            {
                icon: CarFront,
                title: "Parking",
                description:
                    "Convenient parking assistance for guests arriving by private vehicle.",
            },
            {
                icon: Sparkles,
                title: "Local Travel Assistance",
                description:
                    "Get assistance with local travel and planning visits around Udaipur, Ranakpur and nearby destinations.",
            },
            {
                icon: Luggage,
                title: "Luggage Assistance",
                description:
                    "Our team is available to assist with your luggage during arrival and departure.",
            },
        ],

        images: [
            {
                src: "https://i.pinimg.com/236x/34/86/a3/3486a36a652eb57ca5f821c99f7e0191.jpg",
                alt: "Hotel entrance and guest arrival at Tattva Udaipur",
                label: "Guest Arrival",
                description: "A warm and comfortable welcome",
            },
            {
                src: "https://i.pinimg.com/736x/93/62/92/936292060e0ac465a56809c9cd47186a.jpg",
                alt: "Hotel reception and lobby at Tattva Udaipur",
                label: "Reception",
                description: "A welcoming space for guests",
            },
        ],
    },

    quietLuxuries: [
        {
            number: "01",
            icon: BedDouble,
            title: "Comfortable Sleep",
            description:
                "Comfortable bedding, quality linens and thoughtfully prepared rooms designed for a peaceful night's rest.",
            tags: ["Quality Bedding", "Fresh Linens"],
        },

        {
            number: "02",
            icon: BookOpen,
            title: "Quiet Moments",
            description:
                "Take some time to relax in the comfort of your room, enjoy a cup of tea or simply slow down after a busy day.",
            tags: ["Relaxation", "Quiet Space"],
        },

        {
            number: "03",
            icon: Coffee,
            title: "Tea & Refreshments",
            description:
                "Enjoy simple refreshments and everyday comforts during your stay, whether you are starting your morning or taking an evening break.",
            tags: ["Tea & Coffee", "In-Room Comfort"],
        },

        {
            number: "04",
            icon: ConciergeBell,
            title: "Guest Assistance",
            description:
                "Our hospitality team is available to help with local information, travel assistance, dining and other stay-related requests.",
            tags: ["Guest Support", "Local Assistance"],
        },

        {
            number: "05",
            icon: Wifi,
            title: "Connected Stay",
            description:
                "Stay connected with reliable Wi-Fi and essential modern amenities throughout your visit.",
            tags: ["Wi-Fi", "Modern Amenities"],
        },

        {
            number: "06",
            icon: Shirt,
            title: "Laundry & Garment Care",
            description:
                "Convenient laundry and garment-care services help make longer stays easier and more comfortable.",
            tags: ["Laundry Service", "Garment Care"],
        },
    ],

    schedule: [
        {
            title: "Guest Assistance",
            time: "Available During Your Stay",
            note: "Support for stay-related requests",
        },

        {
            title: "Breakfast",
            time: "As Per Hotel Schedule",
            note: "Indian & continental selections",
        },

        {
            title: "Dining",
            time: "As Per Hotel Schedule",
            note: "Comfortable dining experience",
        },

        {
            title: "Check-in",
            time: "02:00 PM",
            note: "Standard check-in time",
        },

        {
            title: "Check-out",
            time: "12:00 PM",
            note: "Standard check-out time",
        },
    ],
};

/* =========================================================
   FRAMER MOTION VARIANTS
========================================================= */

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40,
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

const fadeUpSlow = {
    hidden: {
        opacity: 0,
        y: 55,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const fadeIn = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.9,
            ease: "easeOut",
        },
    },
};

const fadeLeft = {
    hidden: {
        opacity: 0,
        x: -45,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const fadeRight = {
    hidden: {
        opacity: 0,
        x: 45,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.08,
        },
    },
};

const cardReveal = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const imageReveal = {
    hidden: {
        opacity: 0,
        scale: 0.96,
        y: 25,
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const viewportConfig = {
    once: true,
    amount: 0.2,
};

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function SectionEyebrow({ children }) {
    return (
        <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#7d562d]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7d562d]">
                {children}
            </span>
        </div>
    );
}

function AmenityImage({ image, className = "" }) {
    return (
        <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className={`group relative overflow-hidden rounded-xl bg-[#ebe8e2] ${className}`}
        >
            <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-[#ffdcbd]">
                    {image.label}
                </span>

                {image.description && (
                    <p className="mt-1 text-sm text-white/90">
                        {image.description}
                    </p>
                )}
            </div>
        </motion.div>
    );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function AmenitiesSection() {
    const data = AMENITIES_DATA;

    return (
        <main
            id="amenities"
            className="w-full overflow-hidden bg-[#fcf9f3] text-[#1c1c18]"
        >
            {/* =================================================
                INTRO
            ================================================= */}

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                variants={staggerContainer}
                className="bg-[#fcf9f3] pb-12 sm:pb-16 lg:pb-20"
            >
                <div className="mx-auto max-w-[1360px] px-5 pt-16 sm:px-8 md:px-10 lg:px-[4.5rem] lg:pt-20">
                    <div className="mb-10 flex flex-col justify-between gap-8 md:flex-row md:items-end lg:mb-12">
                        <motion.div
                            variants={fadeUp}
                            className="max-w-2xl"
                        >
                            <SectionEyebrow>
                                {data.intro.eyebrow}
                            </SectionEyebrow>

                            <h1 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-[#1c1c18] sm:text-4xl lg:text-[40px] lg:leading-[48px]">
                                {data.intro.title}
                            </h1>

                            <p className="mt-5 max-w-2xl text-base leading-7 text-[#444844] sm:text-lg sm:leading-8">
                                {data.intro.description}
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            className="hidden text-right lg:block"
                        >
                            <span className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-[#757873]">
                                {data.intro.register}
                            </span>

                            <span className="mt-1 block text-sm text-[#444844]">
                                {data.intro.edition}
                            </span>

                            <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7d562d]">
                                {data.intro.location}
                            </span>
                        </motion.div>
                    </div>

                    {/* Anchor Navigation */}

                    <motion.div
                        variants={fadeUp}
                        className="flex w-full items-center overflow-x-auto rounded-lg bg-[#f6f3ed] p-2 scrollbar-hide"
                    >
                        <div className="flex min-w-max items-center gap-1">
                            {data.categories.map((category, index) => (
                                <Link
                                    key={category.label}
                                    href={category.href}
                                    className={`whitespace-nowrap rounded-md px-4 py-2.5 text-sm transition-all duration-300 ${index === 0
                                        ? "bg-[#1b1e1b] text-white"
                                        : "text-[#444844] hover:bg-white hover:text-[#1c1c18]"
                                        }`}
                                >
                                    {category.label}
                                </Link>
                            ))}
                        </div>

                        <div className="ml-auto hidden shrink-0 items-center gap-2 px-4 text-sm text-[#444844] xl:flex">
                            <Clock3
                                size={17}
                                strokeWidth={1.6}
                                className="text-[#7d562d]"
                            />

                            <span>Open Daily 06:00 — 22:30</span>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* =================================================
                WELLNESS
            ================================================= */}

            <section
                id="hydrothermal"
                className="scroll-mt-10 bg-[#f6f3ed] py-16 sm:py-20 lg:py-24"
            >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={staggerContainer}
                    className="mx-auto grid max-w-[1360px] grid-cols-1 items-center gap-10 px-5 sm:px-8 md:px-10 lg:grid-cols-12 lg:gap-14 lg:px-[4.5rem]"
                >
                    {/* Content */}

                    <motion.div
                        variants={fadeLeft}
                        className="order-2 space-y-6 lg:order-1 lg:col-span-5"
                    >
                        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#7d562d]">
                            {data.hydrothermal.chapter}
                        </span>

                        <h2 className="font-serif text-2xl leading-9 text-[#1c1c18] sm:text-3xl">
                            {data.hydrothermal.title}
                        </h2>

                        <p className="text-[15px] leading-7 text-[#444844]">
                            {data.hydrothermal.description}
                        </p>

                        <motion.div
                            variants={staggerContainer}
                            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
                        >
                            {data.hydrothermal.specs.map((spec) => (
                                <motion.div
                                    key={spec.title}
                                    variants={cardReveal}
                                    className="rounded-lg bg-[#fcf9f3] p-5"
                                >
                                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#757873]">
                                        {spec.title}
                                    </span>

                                    <h3 className="mt-2 font-serif text-lg text-[#1c1c18]">
                                        {spec.value}
                                    </h3>

                                    <p className="mt-1 text-sm leading-5 text-[#444844]">
                                        {spec.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.ul
                            variants={staggerContainer}
                            className="space-y-3 pt-1"
                        >
                            {data.hydrothermal.features.map((feature) => (
                                <motion.li
                                    key={feature}
                                    variants={cardReveal}
                                    className="flex items-start gap-2.5 text-sm leading-6 text-[#1c1c18]"
                                >
                                    <CheckCircle2
                                        size={18}
                                        className="mt-1 shrink-0 text-[#7d562d]"
                                        strokeWidth={1.7}
                                    />

                                    <span>{feature}</span>
                                </motion.li>
                            ))}
                        </motion.ul>

                        <a
                            href="#culinary"
                            className="group inline-flex items-center gap-2 pt-1 text-sm font-medium text-[#1c1c18] transition-colors hover:text-[#7d562d]"
                        >
                            <span>Explore More Amenities</span>

                            <ArrowRight
                                size={18}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </a>
                    </motion.div>

                    {/* Images */}

                    <motion.div
                        variants={fadeRight}
                        className="order-1 lg:order-2 lg:col-span-7"
                    >
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <AmenityImage
                                image={data.hydrothermal.images[0]}
                                className="h-[380px] md:h-[430px]"
                            />

                            <AmenityImage
                                image={data.hydrothermal.images[1]}
                                className="h-[380px] md:h-[430px] md:translate-y-8"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* =================================================
                CULINARY
            ================================================= */}

            <section
                id="culinary"
                className="scroll-mt-10 bg-[#fcf9f3] py-16 sm:py-20 lg:py-24"
            >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={staggerContainer}
                    className="mx-auto grid max-w-[1360px] grid-cols-1 items-center gap-10 px-5 sm:px-8 md:px-10 lg:grid-cols-12 lg:gap-14 lg:px-[4.5rem]"
                >
                    {/* Images */}

                    <motion.div
                        variants={fadeLeft}
                        className="lg:col-span-7"
                    >
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
                            <div className="md:col-span-7">
                                <AmenityImage
                                    image={data.culinary.images[0]}
                                    className="h-[380px] md:h-[460px]"
                                />
                            </div>

                            <div className="md:col-span-5 md:self-end">
                                <AmenityImage
                                    image={data.culinary.images[1]}
                                    className="h-[330px]"
                                />

                                <motion.div
                                    variants={fadeUp}
                                    className="bg-[#f6f3ed] p-5"
                                >
                                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#7d562d]">
                                        The Morning Table
                                    </span>

                                    <h3 className="mt-2 font-serif text-xl">
                                        A Gentle Start
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-[#444844]">
                                        Fresh breakfast favourites, seasonal
                                        fruits, traditional Indian flavours
                                        and freshly prepared beverages.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}

                    <motion.div
                        variants={fadeRight}
                        className="space-y-6 lg:col-span-5"
                    >
                        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#7d562d]">
                            {data.culinary.chapter}
                        </span>

                        <h2 className="font-serif text-2xl leading-9 sm:text-3xl">
                            {data.culinary.title}
                        </h2>

                        <p className="text-[15px] leading-7 text-[#444844]">
                            {data.culinary.description}
                        </p>

                        <motion.div
                            variants={staggerContainer}
                            className="space-y-3 pt-1"
                        >
                            {data.culinary.features.map((feature) => {
                                const Icon = feature.icon;

                                return (
                                    <motion.div
                                        key={feature.title}
                                        variants={cardReveal}
                                        className="flex items-start gap-4 rounded-lg bg-[#f6f3ed] p-5"
                                    >
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#7d562d]/10">
                                            <Icon
                                                size={19}
                                                strokeWidth={1.6}
                                                className="text-[#7d562d]"
                                            />
                                        </div>

                                        <div>
                                            <h3 className="text-sm font-semibold text-[#1c1c18]">
                                                {feature.title}
                                            </h3>

                                            <p className="mt-1 text-sm leading-6 text-[#444844]">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* <a
                            href="#mobility"
                            className="group inline-flex items-center gap-2 pt-1 text-sm font-medium transition-colors hover:text-[#7d562d]"
                        >
                            <span>Continue Through The Hotel</span>

                            <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </a> */}
                    </motion.div>
                </motion.div>
            </section>

            {/* =================================================
                MOBILITY
            ================================================= */}

            <section
                id="mobility"
                className="scroll-mt-10 bg-[#f6f3ed] py-16 sm:py-20 lg:py-24"
            >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={staggerContainer}
                    className="mx-auto grid max-w-[1360px] grid-cols-1 items-center gap-10 px-5 sm:px-8 md:px-10 lg:grid-cols-12 lg:gap-14 lg:px-[4.5rem]"
                >
                    {/* Content */}

                    <motion.div
                        variants={fadeLeft}
                        className="space-y-6 lg:col-span-5"
                    >
                        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#7d562d]">
                            {data.mobility.chapter}
                        </span>

                        <h2 className="font-serif text-2xl leading-9 sm:text-3xl">
                            {data.mobility.title}
                        </h2>

                        <p className="text-[15px] leading-7 text-[#444844]">
                            {data.mobility.description}
                        </p>

                        <motion.div
                            variants={staggerContainer}
                            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
                        >
                            {data.mobility.features.map((feature) => {
                                const Icon = feature.icon;

                                return (
                                    <motion.div
                                        key={feature.title}
                                        variants={cardReveal}
                                        whileHover={{
                                            y: -4,
                                            transition: {
                                                duration: 0.25,
                                            },
                                        }}
                                        className="rounded-lg bg-[#fcf9f3] p-5"
                                    >
                                        <Icon
                                            size={23}
                                            strokeWidth={1.5}
                                            className="text-[#7d562d]"
                                        />

                                        <h3 className="mt-3 text-sm font-semibold">
                                            {feature.title}
                                        </h3>

                                        <p className="mt-1 text-sm leading-5 text-[#444844]">
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>

                    {/* Images */}

                    <motion.div
                        variants={fadeRight}
                        className="lg:col-span-7"
                    >
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <AmenityImage
                                image={data.mobility.images[0]}
                                className="h-[380px] md:h-[430px]"
                            />

                            <AmenityImage
                                image={data.mobility.images[1]}
                                className="h-[380px] md:h-[430px] md:translate-y-8"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* =================================================
                QUIET LUXURIES
            ================================================= */}

            <section
                id="sanctuaries"
                className="scroll-mt-10 bg-[#fcf9f3] py-16 sm:py-20 lg:py-24"
            >
                <div className="mx-auto max-w-[1360px] px-5 sm:px-8 md:px-10 lg:px-[4.5rem]">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        variants={fadeUp}
                        className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end lg:mb-12"
                    >
                        <div className="max-w-xl">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#7d562d]">
                                Tactile Details & Provisions
                            </span>

                            <h2 className="mt-3 font-serif text-3xl leading-tight">
                                The Signature Quiet Luxuries
                            </h2>

                            <p className="mt-4 text-[15px] leading-7 text-[#444844]">
                                Subtle amenities designed into the fabric of
                                daily life at Tattva, included throughout your
                                stay.
                            </p>
                        </div>

                        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.13em] text-[#444844]">
                            <span className="h-2 w-2 rounded-full bg-[#cca830]" />
                            Complimentary for hotel guests
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
                    >
                        {data.quietLuxuries.map((item) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.number}
                                    variants={cardReveal}
                                    whileHover={{
                                        y: -6,
                                        transition: {
                                            duration: 0.25,
                                        },
                                    }}
                                    className="group rounded-xl bg-[#f6f3ed] p-6 transition-colors duration-300 hover:bg-[#f0eee8] lg:p-7"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="font-serif text-3xl text-[#7d562d]/70 transition-colors group-hover:text-[#7d562d]">
                                            {item.number}
                                        </span>

                                        <Icon
                                            size={24}
                                            strokeWidth={1.4}
                                            className="text-[#757873] transition-colors group-hover:text-[#7d562d]"
                                        />
                                    </div>

                                    <div className="mt-7">
                                        <h3 className="font-serif text-xl">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 text-[15px] leading-7 text-[#444844]">
                                            {item.description}
                                        </p>
                                    </div>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {item.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded bg-[#fcf9f3] px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#7d562d]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* =================================================
                OPERATING HOURS
            ================================================= */}

            <section className="bg-[#e5e2dc] py-10 sm:py-12">
                <div className="mx-auto max-w-[1360px] px-5 sm:px-8 md:px-10 lg:px-[4.5rem]">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        variants={fadeUp}
                        className="rounded-xl bg-[#fcf9f3] p-5 shadow-sm sm:p-7 lg:p-8"
                    >
                        <div className="mb-7 flex flex-col justify-between gap-4 border-b border-[#e5e2dc] pb-5 lg:flex-row lg:items-center">
                            <div>
                                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#7d562d]">
                                    Daily Hours
                                </span>

                                <h3 className="mt-2 font-serif text-xl sm:text-2xl">
                                    Today's Hotel Rhythm
                                </h3>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-[#444844]">
                                <span className="h-2 w-2 animate-pulse rounded-full bg-green-600" />
                                Guest Services Available
                            </div>
                        </div>

                        <motion.div
                            variants={staggerContainer}
                            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
                        >
                            {data.schedule.map((item) => (
                                <motion.div
                                    key={item.title}
                                    variants={cardReveal}
                                    whileHover={{
                                        y: -4,
                                        transition: {
                                            duration: 0.25,
                                        },
                                    }}
                                    className="rounded-lg bg-[#f6f3ed] p-5"
                                >
                                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#757873]">
                                        {item.title}
                                    </span>

                                    <p className="mt-2 font-serif text-xl text-[#1c1c18]">
                                        {item.time}
                                    </p>

                                    <p className="mt-1 text-sm text-[#7d562d]">
                                        {item.note}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* =================================================
                FINAL CTA
            ================================================= */}

            <section className="relative overflow-hidden bg-[#1b1e1b] py-16 text-white sm:py-20 lg:py-24">
                {/* Decorative grid */}

                <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
                    <div
                        className="h-full w-full"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                            backgroundSize: "80px 80px",
                        }}
                    />
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.25,
                    }}
                    variants={staggerContainer}
                    className="relative z-10 mx-auto grid max-w-[1360px] grid-cols-1 items-center gap-10 px-5 sm:px-8 md:px-10 lg:grid-cols-12 lg:gap-14 lg:px-[4.5rem]"
                >
                    <motion.div
                        variants={fadeLeft}
                        className="space-y-6 lg:col-span-8"
                    >
                        <div className="inline-flex items-center gap-2 rounded bg-white/10 px-3 py-1.5">
                            <ConciergeBell
                                size={17}
                                className="text-[#ffdcbd]"
                            />

                            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#ffdcbd]">
                                Guest Assistance
                            </span>
                        </div>

                        <h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl lg:text-[40px] lg:leading-[48px]">
                            Make Your Stay More Comfortable
                        </h2>

                        <p className="max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                            Our team is here to help you with your stay, dining,
                            local travel, airport transfers, and other arrangements.
                            Whether you are visiting Udaipur or exploring Ranakpur,
                            we are happy to assist you.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-1">
                            <Link
                                href="tel:+911418902300"
                                className="inline-flex items-center gap-2 rounded-lg bg-[#7d562d] px-5 py-3.5 text-sm font-medium text-white transition-all hover:bg-[#f0bd8a] hover:text-[#2c1600]"
                            >
                                Contact Our Team

                                <ArrowRight size={17} />
                            </Link>

                            <Link
                                href="/rooms"
                                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                            >
                                Explore Rooms

                                <ChevronRight size={17} />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeRight}
                        className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md lg:col-span-4"
                    >
                        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#ffdcbd]">
                            Guest Services
                        </span>

                        <h3 className="mt-2 font-serif text-xl">
                            Tattva Udaipur
                        </h3>

                        <p className="mt-1 text-sm text-white/60">
                            Udaipur • Ranakpur • Rajasthan
                        </p>

                        <div className="mt-6 space-y-3 text-sm text-white/70">
                            <div className="flex items-center gap-2">
                                <Clock3
                                    size={17}
                                    className="text-[#ffdcbd]"
                                />

                                Guest assistance during your stay
                            </div>

                            <div className="flex items-center gap-2">
                                <ShieldCheck
                                    size={17}
                                    className="text-[#ffdcbd]"
                                />

                                Friendly and helpful service
                            </div>
                        </div>

                        <p className="mt-6 border-t border-white/10 pt-5 font-serif text-sm italic text-white/50">
                            “A comfortable stay, warm hospitality, and a memorable Rajasthan experience.”
                        </p>
                    </motion.div>
                </motion.div>
            </section>
        </main>
    );
}