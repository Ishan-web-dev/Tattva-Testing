"use client";

import React, { useState } from "react";

import {
    FiCheckCircle,
    FiClock,
    FiUsers,
    FiArrowRight,
    FiX,
} from "react-icons/fi";

import {
    MdRestaurant,
    MdLocationOn,
    MdWineBar,
    MdTimer,
    MdHiking,
    MdSpa,
    MdVolumeOff,
    MdLockOpen,
    MdHistoryEdu,
    MdVerified,
} from "react-icons/md";


// ============================================================
// FILTER DATA
// ============================================================

const FILTERS = [
    {
        id: "all",
        label: "All Immersions",
        count: 5,
    },
    {
        id: "sky",
        label: "Sky & Adventure",
    },
    {
        id: "epicurean",
        label: "Epicurean & Harvest",
    },
    {
        id: "nature",
        label: "Nature & Wilderness",
    },
    {
        id: "heritage",
        label: "Heritage & Sightseeing",
    },
    {
        id: "thermal",
        label: "Restorative Rituals",
    },
];


// ============================================================
// EXPERIENCE DATA
// ============================================================

const EXPERIENCES = [
    {
        id: 1,
        category: "nature",

        chapter: "Chapter 01 · Nature & Forest",
        badge: "Close to Nature",

        title: "Peaceful Forest Walks Around Tattva",

        image:
            "/Media/t5.jpg",

        imageAlt: "Forest surroundings near Tattva Udaipur",

        meta: [
            {
                icon: FiClock,
                text: "Morning & Evening",
            },
            {
                icon: FiClock,
                text: "1–2 Hours",
            },
            {
                icon: FiUsers,
                text: "Easy Experience",
            },
        ],

        description:
            "Take a peaceful walk through the natural surroundings of Tattva and enjoy the quiet beauty of the forest and Aravalli landscape. A simple way to slow down, breathe fresh air, and enjoy nature.",

        footerLabel: "Experience",
        footerValue: "Nature & Relaxation",

        buttonLabel: "Explore Nature",

        bookingTitle: "Peaceful Forest Walks",

        bookingCategory: "Nature & Outdoors",

        imageFirst: true,
    },

    {
        id: 2,
        category: "culture",

        chapter: "Chapter 02 · Culture & Heritage",
        badge: "Rajasthan Experience",

        title: "Discover Udaipur's Culture & Heritage",

        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBdz5d7Xi_t7Z2jcuNvqdIki4uT5Lj-On9p54_5BjsuV3iDe_ysw1qfeiDrc5k33jCz8tdu_6yVHAocWgJh4A3G4t1hp0CPWavr0bFnh4YYJ-AzIi_E9EGToopuVvhnC_eptB8dzTA_GcTof99PpkX1tHzW_Gjv41_3gdNdHcRaatYhJTU3lxEfCM7hj1Ws1KfN_WKWzhBiL19p-FTuqBMUG2yH35gRHujz5qwWCDQl4lnQec23ikHztg",

        imageAlt: "Udaipur Rajasthan heritage experience",

        meta: [
            {
                icon: FiClock,
                text: "Half or Full Day",
            },
            {
                icon: MdRestaurant,
                text: "Local Food & Culture",
            },
            {
                icon: MdLocationOn,
                text: "Udaipur",
            },
        ],

        description:
            "Explore the timeless character of Udaipur through its lakes, palaces, old streets, local markets, food, and rich Rajasthani culture. Discover the city at a relaxed pace and experience its unique charm.",

        footerLabel: "Explore",
        footerValue: "Udaipur City",

        buttonLabel: "Explore Udaipur",

        bookingTitle: "Udaipur Culture & Heritage",

        bookingCategory: "Culture & Heritage",

        imageFirst: false,
    },
    {
        id: 3,
        category: "adventure",

        chapter: "Chapter 03 · Aravalli & Outdoors",
        badge: "Outdoor Experience",

        title: "Explore the Aravalli Landscape",

        image:
            "/Media/t9.jpg",

        imageAlt: "Aravalli landscape near Udaipur",

        meta: [
            {
                icon: FiClock,
                text: "Morning & Evening",
            },
            {
                icon: MdTimer,
                text: "2–3 Hours",
            },
            {
                icon: MdHiking,
                text: "Outdoor Activity",
            },
        ],

        description:
            "Experience the natural beauty of the Aravalli hills through scenic drives, peaceful walks, and outdoor exploration. Enjoy open landscapes, fresh air, and beautiful views away from the busy city.",

        footerLabel: "Experience",
        footerValue: "Outdoor Exploration",

        buttonLabel: "Explore Outdoors",

        bookingTitle: "Aravalli Outdoor Experience",

        bookingCategory: "Nature & Adventure",

        imageFirst: true,
    },
    {
        id: 4,
        category: "heritage",

        chapter: "Chapter 04 · Ranakpur & Heritage",
        badge: "Day Trip",

        title: "Visit the Heritage of Ranakpur",

        image:
            "/Media/t9.jpg",

        imageAlt: "Ranakpur Jain Temple Rajasthan",

        meta: [
            {
                icon: FiClock,
                text: "Day Experience",
            },
            {
                icon: MdHistoryEdu,
                text: "Heritage & Culture",
            },
            {
                icon: MdLocationOn,
                text: "Ranakpur",
            },
        ],

        description:
            "Take a journey to Ranakpur and discover its famous Jain temples, beautiful stone architecture, peaceful surroundings, and rich cultural heritage. A memorable experience for history and architecture lovers.",

        footerLabel: "Explore",
        footerValue: "Ranakpur Heritage",

        buttonLabel: "Discover Ranakpur",

        bookingTitle: "Ranakpur Heritage Experience",

        bookingCategory: "Heritage & Sightseeing",

        imageFirst: false,
    },
    {
        id: 5,
        category: "relaxation",

        chapter: "Chapter 05 · Slow & Relaxed",
        badge: "Take It Slow",

        title: "Slow Down & Enjoy the Peace",

        image:
            "/Media/t1.jpg",

        imageAlt: "Peaceful relaxing space at Tattva Udaipur",

        meta: [
            {
                icon: FiClock,
                text: "Anytime",
            },
            {
                icon: MdSpa,
                text: "Relax & Unwind",
            },
            {
                icon: MdVolumeOff,
                text: "Peaceful Surroundings",
            },
        ],

        description:
            "Sometimes the best experience is doing nothing at all. Spend a quiet morning, enjoy the peaceful surroundings, take a break from sightseeing, and simply enjoy the slower side of your Rajasthan stay.",

        footerLabel: "Experience",
        footerValue: "Relax & Unwind",

        buttonLabel: "Enjoy Your Stay",

        bookingTitle: "Slow & Relaxed Stay",

        bookingCategory: "Relaxation",

        imageFirst: true,
    },
];


// ============================================================
// COMPONENT
// ============================================================

export default function ExperienceChapters({
    onBookExperience,
}) {
    const [activeFilter, setActiveFilter] = useState("all");

    const [selectedExperience, setSelectedExperience] =
        useState(null);

    const filteredExperiences =
        activeFilter === "all"
            ? EXPERIENCES
            : EXPERIENCES.filter(
                (experience) =>
                    experience.category === activeFilter
            );


    // ========================================================
    // BOOKING HANDLER
    // ========================================================

    const handleBooking = (experience) => {
        if (onBookExperience) {
            onBookExperience({
                title: experience.bookingTitle,
                category: experience.bookingCategory,
            });

            return;
        }

        setSelectedExperience(experience);
    };


    return (
        <>
            {/* =====================================================
                FILTER + EXPERIENCE SECTION
            ====================================================== */}

            <section
                id="chapters-catalogue"
                className="w-full bg-[#fcf9f3]"
            >

                {/* =================================================
                    FILTER BAR
                ================================================== */}

                <div className="sticky top-17 z-30 w-full border-y border-[#e5e1d8] bg-[#fcf9f3]">

                    <div className="mx-auto w-full max-w-[1360px] px-5 py-4 md:px-10 lg:px-[4.5rem]">

                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                            {/* Filter Pills */}
                            <div className="flex flex-wrap items-center gap-2">

                                {FILTERS.map((filter) => {

                                    const isActive =
                                        activeFilter === filter.id;

                                    return (
                                        <button
                                            key={filter.id}
                                            type="button"
                                            onClick={() =>
                                                setActiveFilter(filter.id)
                                            }
                                            className={`
                                inline-flex
                                items-center
                                gap-1.5
                                rounded-full
                                border
                                px-4
                                py-2.5
                                font-sans
                                text-sm
                                font-medium
                                transition-all
                                duration-200
                                ${isActive
                                                    ? "border-[#1b1e1b] bg-[#1b1e1b] text-white shadow-sm"
                                                    : "border-[#ddd8cf] bg-transparent text-[#444844] hover:border-[#1b1e1b] hover:bg-[#f3f0e9] hover:text-[#1b1e1b]"
                                                }
                            `}
                                        >

                                            <span>
                                                {filter.label}
                                            </span>

                                            {filter.count && (
                                                <span
                                                    className={`
                                        text-xs
                                        ${isActive
                                                            ? "text-white/65"
                                                            : "text-[#7d562d]"
                                                        }
                                    `}
                                                >
                                                    {filter.count}
                                                </span>
                                            )}

                                        </button>
                                    );
                                })}

                            </div>


                            {/* Resident Badge */}
                            <div className="flex items-center gap-2 border-l border-[#ddd8cf] pl-4 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7d562d] lg:shrink-0">

                                <MdVerified
                                    size={16}
                                    className="shrink-0"
                                />

                                <span>
                                    Curated for In-House Residents
                                </span>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =================================================
                    EXPERIENCE CARDS
                ================================================== */}

                <div className="w-full py-16 md:py-20 lg:py-24">

                    <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-8 px-5 md:px-10 lg:px-[4.5rem]">

                        {filteredExperiences.map(
                            (experience) => {

                                return (
                                    <article
                                        key={experience.id}
                                        className="
                                            group
                                            grid
                                            grid-cols-1
                                            items-center
                                            gap-8
                                            rounded-xl
                                            bg-white
                                            p-5
                                            shadow-sm
                                            transition-shadow
                                            duration-300
                                            hover:shadow-md
                                            md:p-7
                                            lg:grid-cols-12
                                            lg:gap-10
                                        "
                                    >

                                        {/* =================================
                                            IMAGE
                                        ================================== */}

                                        <div
                                            className={`
                                                overflow-hidden
                                                rounded-lg
                                                bg-[#f0eee8]
                                                aspect-[16/10]
                                                lg:col-span-7
                                                ${experience.imageFirst
                                                    ? "lg:order-1"
                                                    : "lg:order-2"
                                                }
                                            `}
                                        >

                                            <img
                                                src={
                                                    experience.image
                                                }
                                                alt={
                                                    experience.imageAlt
                                                }
                                                className="
                                                    h-full
                                                    w-full
                                                    object-cover
                                                    transition-transform
                                                    duration-700
                                                    ease-out
                                                    group-hover:scale-105
                                                "
                                            />

                                        </div>


                                        {/* =================================
                                            CONTENT
                                        ================================== */}

                                        <div
                                            className={`
                                                flex
                                                h-full
                                                flex-col
                                                justify-between
                                                gap-8
                                                py-1
                                                lg:col-span-5
                                                ${experience.imageFirst
                                                    ? "lg:order-2"
                                                    : "lg:order-1"
                                                }
                                            `}
                                        >

                                            <div className="space-y-3">

                                                {/* Chapter + Badge */}

                                                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                                                    <span className="
                                                        font-sans
                                                        text-[11px]
                                                        font-semibold
                                                        uppercase
                                                        tracking-[0.16em]
                                                        text-[#7d562d]
                                                    ">
                                                        {experience.chapter}
                                                    </span>


                                                    <span className="
                                                        inline-flex
                                                        w-fit
                                                        items-center
                                                        gap-1
                                                        rounded
                                                        bg-[#ffdcbd]/40
                                                        px-2
                                                        py-1
                                                        font-sans
                                                        text-[10px]
                                                        font-semibold
                                                        uppercase
                                                        tracking-[0.1em]
                                                        text-[#7a532a]
                                                    ">
                                                        {experience.badge}
                                                    </span>

                                                </div>


                                                {/* Title */}

                                                <h3 className="
                                                    font-serif
                                                    text-2xl
                                                    font-normal
                                                    leading-tight
                                                    tracking-tight
                                                    text-[#1c1c18]
                                                    md:text-3xl
                                                ">
                                                    {experience.title}
                                                </h3>


                                                {/* Metadata */}

                                                <div className="
                                                    flex
                                                    flex-wrap
                                                    items-center
                                                    gap-x-5
                                                    gap-y-2
                                                    pt-1
                                                    font-sans
                                                    text-sm
                                                    text-[#444844]
                                                ">

                                                    {experience.meta.map(
                                                        (item, index) => {

                                                            const Icon =
                                                                item.icon;

                                                            return (
                                                                <span
                                                                    key={index}
                                                                    className="
                                                                        flex
                                                                        items-center
                                                                        gap-1.5
                                                                    "
                                                                >

                                                                    <Icon
                                                                        size={16}
                                                                        className="shrink-0"
                                                                    />

                                                                    <span>
                                                                        {item.text}
                                                                    </span>

                                                                </span>
                                                            );
                                                        }
                                                    )}

                                                </div>


                                                {/* Description */}

                                                <p className="
                                                    pt-1
                                                    font-sans
                                                    text-sm
                                                    leading-relaxed
                                                    text-[#444844]
                                                    md:text-[15px]
                                                ">
                                                    {experience.description}
                                                </p>

                                            </div>


                                            {/* =================================
                                                FOOTER / CTA
                                            ================================== */}

                                            <div className="
                                                flex
                                                flex-col
                                                gap-5
                                                border-t
                                                border-[#e5e2dc]
                                                pt-5
                                                sm:flex-row
                                                sm:items-end
                                                sm:justify-between
                                            ">

                                                <div>

                                                    <span className="
                                                        block
                                                        font-sans
                                                        text-[10px]
                                                        font-semibold
                                                        uppercase
                                                        tracking-[0.12em]
                                                        text-[#444844]
                                                    ">
                                                        {experience.footerLabel}
                                                    </span>

                                                    <span className="
                                                        mt-1
                                                        block
                                                        font-serif
                                                        text-xl
                                                        text-[#1c1c18]
                                                    ">
                                                        {experience.footerValue}
                                                    </span>

                                                </div>


                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleBooking(
                                                            experience
                                                        )
                                                    }
                                                    className="
                                                        inline-flex
                                                        shrink-0
                                                        items-center
                                                        justify-center
                                                        gap-2
                                                        rounded-lg
                                                        bg-[#1b1e1b]
                                                        px-5
                                                        py-3
                                                        font-sans
                                                        text-sm
                                                        font-semibold
                                                        text-white
                                                        transition-all
                                                        duration-200
                                                        hover:bg-[#7d562d]
                                                        hover:shadow-lg
                                                    "
                                                >

                                                    <span>
                                                        {
                                                            experience.buttonLabel
                                                        }
                                                    </span>

                                                    <FiArrowRight
                                                        size={16}
                                                    />

                                                </button>

                                            </div>

                                        </div>

                                    </article>
                                );
                            }
                        )}


                        {/* =================================================
                            EMPTY STATE
                        ================================================== */}

                        {filteredExperiences.length === 0 && (
                            <div className="
                                flex
                                min-h-[300px]
                                items-center
                                justify-center
                                rounded-xl
                                bg-white
                                text-center
                            ">

                                <div>

                                    <FiCheckCircle
                                        className="mx-auto mb-3 text-[#7d562d]"
                                        size={28}
                                    />

                                    <p className="
                                        font-serif
                                        text-2xl
                                        text-[#1c1c18]
                                    ">
                                        No experiences found
                                    </p>

                                </div>

                            </div>
                        )}

                    </div>

                </div>

            </section>


            {/* =====================================================
                BOOKING MODAL
            ====================================================== */}

            {selectedExperience && (
                <div
                    className="
                        fixed
                        inset-0
                        z-[100]
                        flex
                        items-center
                        justify-center
                        bg-black/60
                        p-5
                        backdrop-blur-sm
                    "
                    onClick={() =>
                        setSelectedExperience(null)
                    }
                >

                    <div
                        className="
                            w-full
                            max-w-lg
                            rounded-xl
                            bg-[#fcf9f3]
                            p-6
                            shadow-2xl
                            md:p-8
                        "
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >

                        {/* Modal Header */}

                        <div className="flex items-start justify-between gap-5">

                            <div>

                                <span className="
                                    font-sans
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.16em]
                                    text-[#7d562d]
                                ">
                                    Experience Concierge
                                </span>

                                <h3 className="
                                    mt-2
                                    font-serif
                                    text-2xl
                                    leading-tight
                                    text-[#1c1c18]
                                    md:text-3xl
                                ">
                                    {
                                        selectedExperience.bookingTitle
                                    }
                                </h3>

                            </div>


                            <button
                                type="button"
                                onClick={() =>
                                    setSelectedExperience(null)
                                }
                                className="
                                    flex
                                    h-9
                                    w-9
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#f0eee8]
                                    text-[#444844]
                                    transition-colors
                                    hover:bg-[#e5e2dc]
                                    hover:text-[#1c1c18]
                                "
                                aria-label="Close booking modal"
                            >
                                <FiX size={18} />
                            </button>

                        </div>


                        {/* Category */}

                        <div className="
                            mt-6
                            rounded-lg
                            bg-[#f0eee8]
                            p-4
                        ">

                            <span className="
                                block
                                font-sans
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.12em]
                                text-[#444844]
                            ">
                                Experience Category
                            </span>

                            <span className="
                                mt-1
                                block
                                font-serif
                                text-lg
                                text-[#1c1c18]
                            ">
                                {
                                    selectedExperience.bookingCategory
                                }
                            </span>

                        </div>


                        {/* Modal Text */}

                        <p className="
                            mt-5
                            font-sans
                            text-sm
                            leading-relaxed
                            text-[#444844]
                        ">
                            Our concierge team will arrange this
                            experience according to your preferred
                            date, timing, and requirements.
                        </p>


                        {/* Actions */}

                        <div className="
                            mt-7
                            flex
                            flex-col
                            gap-3
                            sm:flex-row
                        ">

                            <button
                                type="button"
                                onClick={() =>
                                    setSelectedExperience(null)
                                }
                                className="
                                    flex-1
                                    rounded-lg
                                    border
                                    border-[#d8d5ce]
                                    px-5
                                    py-3
                                    font-sans
                                    text-sm
                                    font-semibold
                                    text-[#444844]
                                    transition-colors
                                    hover:bg-[#f0eee8]
                                "
                            >
                                Close
                            </button>


                            <button
                                type="button"
                                onClick={() => {
                                    if (onBookExperience) {
                                        onBookExperience({
                                            title:
                                                selectedExperience.bookingTitle,
                                            category:
                                                selectedExperience.bookingCategory,
                                        });
                                    }

                                    setSelectedExperience(null);
                                }}
                                className="
                                    flex-1
                                    rounded-lg
                                    bg-[#1b1e1b]
                                    px-5
                                    py-3
                                    font-sans
                                    text-sm
                                    font-semibold
                                    text-white
                                    transition-colors
                                    hover:bg-[#7d562d]
                                "
                            >
                                Contact Concierge
                            </button>

                        </div>

                    </div>

                </div>
            )}
        </>
    );
}