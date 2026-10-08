"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import {
    FiArrowRight,
    FiArrowUpRight,
    FiCalendar,
    FiCheckCircle,
    FiClock,
    FiDownload,
    FiExternalLink,
    FiFileText,
    FiHeadphones,
    FiLock,
    FiMail,
    FiMenu,
    FiMoon,
    FiPhone,
    FiShield,
    FiSun,
    FiUser,
    FiVolumeX,
    FiX,
} from "react-icons/fi";

import {
    MdOutlineNoPhotography,
    MdOutlineSpatialAudioOff,
} from "react-icons/md";

/* =========================================================
   PAGE DATA
========================================================= */

const PAGE_DATA = {
    intro: {
        eyebrow: "Tattva Udaipur • Terms & Conditions",
        title:
            "The Tattva Way: Terms of Stay, Hospitality & Heritage Etiquette.",
        description:
            "These terms define the shared understanding between Tattva Udaipur and our guests, ensuring a peaceful stay, thoughtful hospitality, and respectful care for the heritage, people, and surroundings that make Udaipur unique.",
        metadata: [
            {
                id: 1,
                icon: FiFileText,
                label: "Tattva Udaipur • Rajasthan, India",
            },
            {
                id: 2,
                icon: FiClock,
                label: "Last Revised: September 2026",
            },
            {
                id: 3,
                icon: FiCheckCircle,
                label: "Ref: TAT-UDA-2026-TC",
            },
        ],
    },

    heroCard: {
        image:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
        eyebrow: "The Tattva Guest Charter",
        quote:
            '"A memorable stay begins with respect — for the place, the people, and the experience."',
    },

    acoustic: {
        title: "A Quiet Stay",
        value: "24",
        unit: "hrs of considered hospitality",
        icon: FiVolumeX,
        description:
            "From peaceful mornings to restful evenings, Tattva Udaipur is designed to offer a calm retreat from the pace of everyday life.",
        linkText: "Explore Our Guest Charter",
    },

    sections: [
        {
            id: "section-01",
            number: "01",
            clause: "Stay Clause 01",
            title: "Reservations, Confirmation & Payment",
            paragraphs: [
                "All reservations at Tattva Udaipur are subject to availability and are confirmed upon receipt of the applicable advance payment or payment guarantee specified at the time of booking.",
                "Rates are quoted in Indian Rupees (INR) and may vary depending on room category, dates, occupancy, seasonal demand, packages, and applicable offers. Taxes and statutory charges are applied as required under Indian law.",
            ],
            notice: {
                icon: FiLock,
                title: "Payment & Security",
                text: "For your convenience, payments may be completed through approved online payment methods, cards, UPI, bank transfers, or other methods made available by the hotel. Any incidental charges during your stay may be settled at check-out.",
            },
        },

        {
            id: "section-02",
            number: "02",
            clause: "Stay Clause 02",
            title: "Cancellation, Rescheduling & No-Show Policy",
            paragraphs: [
                "We understand that travel plans can change. Cancellation and modification terms depend on the rate plan and booking conditions selected at the time of reservation. Guests are encouraged to review the applicable policy before confirming their stay.",
            ],
            schedule: [
                {
                    label: "Flexible Booking",
                    title: "Advance Notice",
                    description:
                        "Cancellations or changes made within the permitted period may qualify for a refund or adjustment, subject to the specific rate conditions.",
                },
                {
                    label: "Late Cancellation",
                    title: "Applicable Charges",
                    description:
                        "Cancellations made after the permitted period may attract a cancellation fee as specified in the confirmed booking.",
                },
                {
                    label: "No-Show",
                    title: "Booking Conditions Apply",
                    description:
                        "Failure to arrive without prior communication may result in applicable charges according to the confirmed reservation policy.",
                },
            ],
            note:
                "*In exceptional circumstances, including government restrictions, significant travel disruptions, or other events beyond reasonable control, the hotel may review requests for date changes on a case-by-case basis.",
        },

        {
            id: "section-03",
            number: "03",
            clause: "Stay Clause 03",
            title: "Peaceful Stay & Considerate Guest Conduct",
            paragraphs: [
                "Tattva Udaipur is intended to be a calm and welcoming retreat where guests can relax, reconnect, and enjoy the character of Rajasthan. We kindly request that all guests respect the comfort and privacy of other residents throughout the property.",
            ],
            charter: {
                eyebrow: "The Tattva Guest Charter",
                title: "A Shared Commitment to Comfort & Privacy",
                quote:
                    '"Every guest deserves a peaceful stay. We therefore ask all residents to maintain considerate noise levels, respect private spaces, and follow hotel guidelines across rooms, restaurants, gardens, and shared areas."',
                features: [
                    "Respectful noise levels",
                    "Privacy across shared spaces",
                    "Responsible photography & filming",
                ],
            },
            afterText:
                "Guests are welcome to enjoy personal devices throughout the property. In restaurants, wellness areas, and other quiet spaces, we kindly request that phones and other devices are kept at a considerate volume.",
        },

        {
            id: "section-04",
            number: "04",
            clause: "Stay Clause 04",
            title: "Room Care, Hotel Property & Guest Services",
            paragraphs: [
                "Our rooms and suites are prepared with carefully selected furnishings, linens, amenities, and decorative elements inspired by the character of Rajasthan. Guests are requested to treat all hotel property with care during their stay.",
                "Our team is available to assist with housekeeping, laundry, room service, luggage handling, transportation arrangements, and other guest requirements. Any accidental damage will be assessed fairly based on the nature and extent of the damage.",
            ],
        },

        {
            id: "section-05",
            number: "05",
            clause: "Stay Clause 05",
            title: "Check-in, Check-out & Arrival Experience",
            timing: [
                {
                    icon: FiSun,
                    label: "Check-in",
                    title: "From 14:00 Hours",
                    description:
                        "Guests may check in from 14:00 onwards. Early check-in may be requested in advance and is subject to room availability. Our team will be happy to assist with luggage and arrival arrangements.",
                },
                {
                    icon: FiMoon,
                    label: "Check-out",
                    title: "Until 12:00 Noon",
                    description:
                        "Check-out is until 12:00 noon. Late check-out may be available on request, subject to availability and applicable charges. Our team can also assist with luggage storage and onward travel arrangements.",
                },
            ],
        },

        {
            id: "section-06",
            number: "06",
            clause: "Stay Clause 06",
            title: "Children, Families & Pets",
            paragraphs: [
                "Tattva Udaipur welcomes families and guests of different ages, with room suitability and occupancy limits determined by the selected room category. Children staying at the hotel must be accompanied and supervised by a responsible adult at all times.",
                "Pet policies may vary by room category and booking conditions. Guests travelling with pets are requested to contact the hotel before arrival so that suitable arrangements can be confirmed. Assistance animals will be accommodated in accordance with applicable regulations.",
            ],
        },

        {
            id: "section-07",
            number: "07",
            clause: "Stay Clause 07",
            title: "Guest Safety, Liability & Respect for the Property",
            paragraphs: [
                "For the safety and comfort of everyone, guests are requested to follow hotel safety instructions, use designated access routes, and exercise appropriate care around balconies, stairways, pools, gardens, and other property facilities.",
                "Tattva Udaipur is not responsible for loss, damage, or injury resulting from a guest's failure to follow reasonable safety instructions or from unattended personal belongings. Guests are encouraged to use the hotel's designated safe-deposit facilities where available.",
            ],
        },
    ],

    contact: {
        title: "Guest Relations & Assistance",
        description:
            "For questions regarding reservations, cancellations, special arrangements, corporate stays, or any aspect of your visit to Tattva Udaipur, our guest relations team is available to assist.",
        email: "reservations@tattvahotels.com",
    },

    download: {
        title: "Tattva Udaipur Guest Terms",
        description:
            "Review or download the complete terms and conditions governing reservations, payments, cancellations, guest conduct, hotel facilities, and your stay at Tattva Udaipur.",
    },
};

/* =========================================================
   SIDEBAR
========================================================= */

function LegalSidebar({ activeSection, onNavigate }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleNavigation = (id) => {
        onNavigate(id);
        setMobileOpen(false);
    };

    return (
        <aside className="lg:col-span-4">
            {/* Mobile Index Button */}
            <div className="lg:hidden mb-5">
                <button
                    type="button"
                    onClick={() => setMobileOpen((prev) => !prev)}
                    className="w-full flex items-center justify-between rounded-xl bg-[#f0eee8] px-4 py-3 text-left"
                >
                    <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#757873]">
                        Sections of Covenant
                    </span>

                    {mobileOpen ? (
                        <FiX className="text-[#7d562d]" />
                    ) : (
                        <FiMenu className="text-[#7d562d]" />
                    )}
                </button>

                {mobileOpen && (
                    <div className="mt-2 rounded-xl bg-[#f0eee8] p-3">
                        <SidebarLinks
                            activeSection={activeSection}
                            onNavigate={handleNavigation}
                        />
                    </div>
                )}
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:block sticky top-28 rounded-xl bg-[#f0eee8] p-5">
                <div className="flex items-center justify-between pb-2">
                    <h2 className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#757873]">
                        Sections of Covenant
                    </h2>

                    <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold text-[#7d562d]">
                        01 — 07
                    </span>
                </div>

                <SidebarLinks
                    activeSection={activeSection}
                    onNavigate={onNavigate}
                />

                <div className="mt-5 rounded-lg bg-[#ebe8e2] p-4">
                    <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7d562d]">
                        {PAGE_DATA.contact.title}
                    </span>

                    <p className="mt-2 font-['Plus_Jakarta_Sans'] text-[13px] leading-5 text-[#444844]">
                        {PAGE_DATA.contact.description}
                    </p>

                    <a
                        href={`mailto:${PAGE_DATA.contact.email}`}
                        className="mt-2 inline-flex items-center gap-1 font-['Plus_Jakarta_Sans'] text-[14px] font-medium text-[#1c1c18] transition-colors hover:text-[#7d562d]"
                    >
                        {PAGE_DATA.contact.email}
                        <FiArrowUpRight size={14} />
                    </a>
                </div>
            </div>
        </aside>
    );
}

/* =========================================================
   SIDEBAR LINKS
========================================================= */

function SidebarLinks({ activeSection, onNavigate }) {
    return (
        <nav className="flex flex-col gap-1" id="legal-index-nav">
            {PAGE_DATA.sections.map((section) => {
                const isActive = activeSection === section.id;

                return (
                    <button
                        key={section.id}
                        type="button"
                        onClick={() => onNavigate(section.id)}
                        className={`group flex w-full items-center justify-between rounded px-2 py-2 text-left transition-all ${isActive
                            ? "bg-[#e5e2dc] text-[#1c1c18]"
                            : "text-[#444844] hover:bg-[#e5e2dc] hover:text-[#1c1c18]"
                            }`}
                    >
                        <span className="font-['Plus_Jakarta_Sans'] text-[13px] leading-5">
                            {section.number}. {section.title}
                        </span>

                        <FiArrowRight
                            size={14}
                            className={`shrink-0 transition-all ${isActive
                                ? "translate-x-0 opacity-100 text-[#7d562d]"
                                : "translate-x-[-4px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                                }`}
                        />
                    </button>
                );
            })}
        </nav>
    );
}

/* =========================================================
   SECTION HEADER
========================================================= */

function SectionHeader({ section }) {
    return (
        <div className="flex items-center gap-3">
            <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7d562d]">
                {section.clause}
            </span>

            <span className="h-px flex-1 bg-[#c5c7c2]" />
        </div>
    );
}

/* =========================================================
   STANDARD ARTICLE
========================================================= */

function StandardArticle({ section }) {
    return (
        <article
            id={section.id}
            className="scroll-mt-28 space-y-4"
        >
            <SectionHeader section={section} />

            <h2 className="font-['Playfair_Display'] text-[28px] leading-9 font-medium tracking-normal text-[#1c1c18] md:text-[32px] md:leading-[40px]">
                {section.title}
            </h2>

            <div className="space-y-4 font-['Plus_Jakarta_Sans'] text-[15px] leading-6 text-[#444844]">
                {section.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

            {section.notice && (
                <div className="mt-4 flex items-start gap-3 rounded-lg bg-[#f6f3ed] p-4">
                    <section.notice.icon
                        size={22}
                        className="mt-0.5 shrink-0 text-[#7d562d]"
                    />

                    <div>
                        <span className="font-['Plus_Jakarta_Sans'] text-[14px] font-semibold text-[#1c1c18]">
                            {section.notice.title}
                        </span>

                        <p className="mt-1 font-['Plus_Jakarta_Sans'] text-[13px] leading-5 text-[#444844]">
                            {section.notice.text}
                        </p>
                    </div>
                </div>
            )}
        </article>
    );
}

/* =========================================================
   CANCELLATION ARTICLE
========================================================= */

function CancellationArticle({ section }) {
    return (
        <article
            id={section.id}
            className="scroll-mt-28 space-y-4"
        >
            <SectionHeader section={section} />

            <h2 className="font-['Playfair_Display'] text-[28px] leading-9 font-medium text-[#1c1c18] md:text-[32px] md:leading-10">
                {section.title}
            </h2>

            <div className="space-y-4 font-['Plus_Jakarta_Sans'] text-[15px] leading-6 text-[#444844]">
                {section.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

            <div className="grid grid-cols-1 gap-2 pt-1 md:grid-cols-3">
                {section.schedule.map((item) => (
                    <div
                        key={item.label}
                        className="rounded-lg bg-[#f0eee8] p-4"
                    >
                        <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7d562d]">
                            {item.label}
                        </span>

                        <p className="mt-2 font-['Playfair_Display'] text-[18px] leading-7 text-[#1c1c18]">
                            {item.title}
                        </p>

                        <p className="mt-1 font-['Plus_Jakarta_Sans'] text-[13px] leading-5 text-[#444844]">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

            <p className="pt-1 font-['Plus_Jakarta_Sans'] text-[13px] italic leading-5 text-[#757873]">
                {section.note}
            </p>
        </article>
    );
}

/* =========================================================
   ACOUSTIC CHARTER ARTICLE
========================================================= */

function AcousticArticle({ section }) {
    return (
        <article
            id={section.id}
            className="scroll-mt-28 space-y-5"
        >
            <SectionHeader section={section} />

            <h2 className="font-['Playfair_Display'] text-[28px] leading-9 font-medium text-[#1c1c18] md:text-[32px] md:leading-10">
                {section.title}
            </h2>

            <p className="font-['Plus_Jakarta_Sans'] text-[15px] leading-6 text-[#444844]">
                {section.paragraphs[0]}
            </p>

            <div
                id="charter"
                className="relative overflow-hidden rounded-xl bg-[#020402] p-6 text-white shadow-md md:p-7"
            >
                <div className="relative z-10 space-y-4">
                    <div className="flex items-center gap-2">
                        <MdOutlineNoPhotography
                            size={21}
                            className="text-[#f0bd8a]"
                        />

                        <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f0bd8a]">
                            {section.charter.eyebrow}
                        </span>
                    </div>

                    <h3 className="font-['Playfair_Display'] text-[22px] leading-[30px] font-medium text-white">
                        {section.charter.title}
                    </h3>

                    <p className="font-['Plus_Jakarta_Sans'] text-[15px] leading-6 text-[#ebe8e2]">
                        {section.charter.quote}
                    </p>

                    <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
                        {section.charter.features.map((feature) => (
                            <span
                                key={feature}
                                className="flex items-center gap-2 font-['Plus_Jakarta_Sans'] text-[13px] text-[#f6f3ed]"
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-[#f0bd8a]" />
                                {feature}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="pointer-events-none absolute -bottom-10 -right-8 opacity-10">
                    <MdOutlineSpatialAudioOff size={200} />
                </div>
            </div>

            <div className="font-['Plus_Jakarta_Sans'] text-[15px] leading-6 text-[#444844]">
                <p>{section.afterText}</p>
            </div>
        </article>
    );
}

/* =========================================================
   TIMING ARTICLE
========================================================= */

function TimingArticle({ section }) {
    return (
        <article
            id={section.id}
            className="scroll-mt-28 space-y-4"
        >
            <SectionHeader section={section} />

            <h2 className="font-['Playfair_Display'] text-[28px] leading-9 font-medium text-[#1c1c18] md:text-[32px] md:leading-10">
                {section.title}
            </h2>

            <div className="grid grid-cols-1 gap-4 py-1 md:grid-cols-2">
                {section.timing.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.label}
                            className="space-y-2 rounded-lg bg-[#f6f3ed] p-5"
                        >
                            <div className="flex items-center gap-2 text-[#7d562d]">
                                <Icon size={18} />

                                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold uppercase tracking-[0.12em]">
                                    {item.label}
                                </span>
                            </div>

                            <p className="font-['Playfair_Display'] text-[22px] leading-8 text-[#1c1c18]">
                                {item.title}
                            </p>

                            <p className="font-['Plus_Jakarta_Sans'] text-[13px] leading-5 text-[#444844]">
                                {item.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </article>
    );
}

/* =========================================================
   ARTICLE RENDERER
========================================================= */

function LegalArticle({ section }) {
    switch (section.id) {
        case "section-02":
            return <CancellationArticle section={section} />;

        case "section-03":
            return <AcousticArticle section={section} />;

        case "section-05":
            return <TimingArticle section={section} />;

        default:
            return <StandardArticle section={section} />;
    }
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function TermsOfHospitalitySection() {
    const [activeSection, setActiveSection] = useState("section-01");

    /* ---------------------------------------------------------
       Scroll to Section
    --------------------------------------------------------- */

    const scrollToSection = (id) => {
        const element = document.getElementById(id);

        if (!element) return;

        const headerOffset = 105;

        const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;

        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });

        window.history.replaceState(null, "", `#${id}`);
    };

    /* ---------------------------------------------------------
       Active Section Observer
    --------------------------------------------------------- */

    useEffect(() => {
        const sections = PAGE_DATA.sections
            .map((section) => document.getElementById(section.id))
            .filter(Boolean);

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top -
                            b.boundingClientRect.top
                    );

                if (visibleEntries.length) {
                    setActiveSection(visibleEntries[0].target.id);
                }
            },
            {
                rootMargin: "-120px 0px -55% 0px",
                threshold: [0, 0.15, 0.3],
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    /* ---------------------------------------------------------
       Handle Initial Hash
    --------------------------------------------------------- */

    useEffect(() => {
        const hash = window.location.hash.replace("#", "");

        if (!hash) return;

        const timer = setTimeout(() => {
            const element = document.getElementById(hash);

            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });

                setActiveSection(hash);
            }
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    /* ---------------------------------------------------------
       Current Section
    --------------------------------------------------------- */

    const currentSection = useMemo(
        () =>
            PAGE_DATA.sections.find(
                (section) => section.id === activeSection
            ),
        [activeSection]
    );

    return (
        <main className="min-h-screen w-full bg-[#fcf9f3] text-[#1c1c18] antialiased selection:bg-[#ffcb98] selection:text-[#7a532a]">
            {/* =================================================
                TOP INTRO
            ================================================= */}

            <section className="mx-auto w-full max-w-[1360px] px-5 pb-10 pt-8 md:px-10 md:pt-12 lg:px-[72px]">
                <div className="max-w-4xl">
                    {/* Eyebrow */}
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#7d562d]" />

                        <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold uppercase tracking-[0.25em] text-[#7d562d]">
                            {PAGE_DATA.intro.eyebrow}
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="mt-4 font-['Playfair_Display'] text-[36px] leading-[44px] font-normal tracking-tight text-[#1c1c18] md:text-[48px] md:leading-[56px] lg:text-[56px] lg:leading-[64px]">
                        {PAGE_DATA.intro.title}
                    </h1>

                    {/* Description */}
                    <p className="mt-5 max-w-3xl font-['Plus_Jakarta_Sans'] text-[16px] leading-7 text-[#444844] md:text-[18px] md:leading-7">
                        {PAGE_DATA.intro.description}
                    </p>

                    {/* Metadata */}
                    <div className="mt-5 flex flex-wrap items-center gap-x-7 gap-y-2">
                        {PAGE_DATA.intro.metadata.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.id}
                                    className="flex items-center gap-2"
                                >
                                    <Icon
                                        size={16}
                                        className="shrink-0 text-[#7d562d]"
                                    />

                                    <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#757873]">
                                        {item.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* =================================================
                    IMAGE + ACOUSTIC CARD
                ================================================= */}

                <div className="mt-8 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
                    {/* Image */}
                    <div className="group relative h-64 overflow-hidden rounded-xl shadow-sm md:h-80 lg:col-span-8">
                        <img
                            src={PAGE_DATA.heroCard.image}
                            alt="Serene luxury hotel courtyard"
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#020402]/80 via-[#020402]/30 to-transparent p-5 md:p-7">
                            <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f0bd8a]">
                                {PAGE_DATA.heroCard.eyebrow}
                            </span>

                            <p className="mt-1 font-['Playfair_Display'] text-[18px] italic leading-7 text-white">
                                {PAGE_DATA.heroCard.quote}
                            </p>
                        </div>
                    </div>

                    {/* Acoustic */}
                    <div className="flex flex-col justify-between rounded-xl bg-[#f0eee8] p-6 shadow-sm lg:col-span-4">
                        <div>
                            <div className="flex items-center justify-between">
                                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7d562d]">
                                    {PAGE_DATA.acoustic.title}
                                </span>

                                <PAGE_DATA.acoustic.icon
                                    size={20}
                                    className="text-[#7d562d]"
                                />
                            </div>

                            <div className="mt-2 flex items-baseline gap-2">
                                <span className="font-['Playfair_Display'] text-[40px] leading-[48px] text-[#1c1c18]">
                                    {PAGE_DATA.acoustic.value}
                                </span>

                                <span className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#444844]">
                                    {PAGE_DATA.acoustic.unit}
                                </span>
                            </div>

                            <p className="mt-1 font-['Plus_Jakarta_Sans'] text-[13px] leading-5 text-[#444844]">
                                {PAGE_DATA.acoustic.description}
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => scrollToSection("section-03")}
                            className="mt-5 inline-flex w-fit items-center gap-2 font-['Plus_Jakarta_Sans'] text-[14px] font-medium text-[#7d562d] transition-colors hover:text-[#1c1c18]"
                        >
                            <span>{PAGE_DATA.acoustic.linkText}</span>
                            <FiArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </section>

            {/* =================================================
                MAIN LEGAL CONTENT
            ================================================= */}

            <section className="mx-auto w-full max-w-[1360px] px-5 py-10 md:px-10 md:py-16 lg:px-[72px]">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
                    {/* Sidebar */}
                    <LegalSidebar
                        activeSection={activeSection}
                        onNavigate={scrollToSection}
                    />

                    {/* Articles */}
                    <div className="flex flex-col gap-16 lg:col-span-8 lg:gap-20">
                        {PAGE_DATA.sections.map((section) => (
                            <LegalArticle
                                key={section.id}
                                section={section}
                            />
                        ))}

                        {/* =================================================
                            DOCUMENTATION FOOTER CARD
                        ================================================= */}

                        <div className="rounded-xl bg-[#f0eee8] p-5 shadow-sm md:p-7">
                            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                                <div>
                                    <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7d562d]">
                                        Formal Documentation
                                    </span>

                                    <h3 className="mt-1 font-['Playfair_Display'] text-[22px] leading-[30px] text-[#1c1c18]">
                                        {PAGE_DATA.download.title}
                                    </h3>

                                    <p className="mt-1 max-w-lg font-['Plus_Jakarta_Sans'] text-[13px] leading-5 text-[#444844]">
                                        {PAGE_DATA.download.description}
                                    </p>
                                </div>

                                <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                                    <a
                                        href="/documents/tattva-terms-of-hospitality.pdf"
                                        download
                                        className="inline-flex items-center justify-center gap-2 rounded bg-[#020402] px-4 py-3 font-['Plus_Jakarta_Sans'] text-[14px] font-medium text-white transition-colors duration-200 hover:bg-[#7d562d]"
                                    >
                                        <FiDownload size={18} />

                                        <span>
                                            Full Terms of Hospitality
                                        </span>
                                    </a>

                                    <a
                                        href="mailto:concierge@tattvahotels.com"
                                        className="inline-flex items-center justify-center gap-2 rounded bg-[#e5e2dc] px-4 py-3 font-['Plus_Jakarta_Sans'] text-[14px] font-medium text-[#1c1c18] transition-colors duration-200 hover:bg-[#dcdad4]"
                                    >
                                        <FiHeadphones size={18} />

                                        <span>Inquire with Concierge</span>
                                    </a>
                                </div>
                            </div>

                            <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-[#c5c7c2]/30 pt-4 text-center md:flex-row md:text-left">
                                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#757873]">
                                    Codex Authenticity Seal:
                                    MD5-99824-TATTVA
                                </span>

                                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#757873]">
                                    Attested by Sanctuary Board of Arbiters
                                    • 2025
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =================================================
                FLOATING SECTION INDICATOR
            ================================================= */}

            {currentSection && (
                <div className="pointer-events-none fixed bottom-5 right-5 z-40 hidden rounded-full bg-[#020402] px-4 py-2 shadow-lg lg:block">
                    <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-semibold uppercase tracking-[0.15em] text-[#f0bd8a]">
                        Clause {currentSection.number}
                    </span>
                </div>
            )}
        </main>
    );
}