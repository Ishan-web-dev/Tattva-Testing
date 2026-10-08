"use client";

import React, { useEffect, useState } from "react";
import {
    FiArrowUpRight,
    FiCheckCircle,
    FiChevronRight,
    FiClock,
    FiDelete,
    FiLock,
    FiMail,
    FiMenu,
    FiPhone,
    FiShield,
    FiX,
} from "react-icons/fi";
import {
    MdOutlineDeleteSweep,
    MdOutlineSensorDoor,
    MdVerifiedUser,
} from "react-icons/md";

/* =========================================================
   PAGE DATA
========================================================= */

const PAGE_DATA = {
    eyebrow: "Legal & Discretion Protocols",
    edition: "Edition MMXXV",
    documentRef: "Document REF: TT-SEC-09",

    title:
        "Sanctuary of Secrecy: Our Commitment to Guest Privacy & Discretion.",

    description:
        "At Tattva Hotels, discretion is an architectural pillar of hospitality. How we safeguard guest identities, sensory preferences, and reservation records with quiet, sovereign precision.",

    metadata: {
        effective: "Effective: October 2025",
        version: "Version 4.2 (Editorial Revision)",
        custodian: "Custodian: Office of the General Counsel",
        status: "Vault Enforced",
    },

    contact: {
        email: "privacy@tattvahotels.com",
    },

    accentCard: {
        image:
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
        eyebrow: "Sanctuary Seal",
        title: "Unhurried Sanctuary, Absolute Seclusion.",
        description:
            "Physical architectural sightlines engineered in harmony with digital compartmentalization.",
    },
};

/* =========================================================
   TABLE OF CONTENTS
========================================================= */

const TOC_ITEMS = [
    {
        id: "section-01",
        number: "01",
        title: "Principles of Discretion",
        reference: "§ 1.1",
    },
    {
        id: "section-02",
        number: "02",
        title: "Information Curated",
        reference: "§ 2.4",
    },
    {
        id: "section-03",
        number: "03",
        title: "Circadian & Health Security",
        reference: "§ 3.2",
    },
    {
        id: "section-04",
        number: "04",
        title: "Ephemeral Vaults & Biometrics",
        reference: "§ 4.0",
    },
    {
        id: "section-05",
        number: "05",
        title: "Financial & Manifest Protection",
        reference: "§ 5.3",
    },
    {
        id: "section-06",
        number: "06",
        title: "Third-Party Nondisclosure",
        reference: "§ 6.1",
    },
    {
        id: "section-07",
        number: "07",
        title: "Sovereign Erasure & Rights",
        reference: "§ 7.5",
    },
];

/* =========================================================
   INFORMATION TIERS
========================================================= */

const INFORMATION_TIERS = [
    {
        eyebrow: "Tier I • Identity Minimums",
        title: "Sovereign Identification",
        description:
            "Legal names, encrypted passport identifiers, and nationality as required under regional maritime or civil statutes. Securely isolated in our offline Vault Enclave.",
    },
    {
        eyebrow: "Tier II • Experiential Tuning",
        title: "Botanical & Dietary Registers",
        description:
            "Personalized culinary restrictions, tea infusions, aromatherapy selections, and room temperature requirements. Ephemeral profiles associated exclusively with your stay duration.",
    },
];

/* =========================================================
   DIGITAL VAULT FEATURES
========================================================= */

const VAULT_FEATURES = [
    {
        code: "01 / 72h",
        title: "Wi-Fi Session Purge",
        description:
            "Guest connection tokens and hardware MAC associations are destroyed 72 hours post-checkout.",
    },
    {
        code: "02 / 256-Bit",
        title: "In-Suite Keycards",
        description:
            "RFID access cards are cryptographically overwritten between each individual stay.",
    },
    {
        code: "03 / Zero Log",
        title: "Network Neutrality",
        description:
            "No packet inspection, domain recording, or bandwidth inspection across guest connections.",
    },
];

/* =========================================================
   FINANCIAL PROTECTION
========================================================= */

const FINANCIAL_FEATURES = [
    {
        title: "Bespoke Invoicing Desks",
        description:
            "Discrete folio naming conventions for diplomatic delegations and family offices requiring cloaked accounting entities.",
    },
    {
        title: "PCI-DSS Tokenization",
        description:
            "We never retain unencrypted card numbers or cardholder security codes upon reservation settlement.",
    },
    {
        title: "Signed NDA Binding",
        description:
            "Dedicated estate butlers, security liaisons, and personal chefs sign binding non-disclosure covenants prior to service.",
    },
];

/* =========================================================
   ARTICLE DATA
========================================================= */

const ARTICLE_META = [
    {
        id: "section-01",
        article: "Article 01",
        category: "Foundational Creed",
        title: "Principles of Discretion",
    },
    {
        id: "section-02",
        article: "Article 02",
        category: "Data Architecture",
        title: "Information Collected & Curated",
    },
    {
        id: "section-03",
        article: "Article 03",
        category: "Restorative Environments",
        title: "Circadian & Health Preference Security",
    },
    {
        id: "section-04",
        article: "Article 04",
        category: "Ephemeral Systems",
        title: "Ephemeral Digital Vaults & Biometrics",
    },
    {
        id: "section-05",
        article: "Article 05",
        category: "Aviation & Treasury",
        title: "Financial Encryption & Sovereign Discretion",
    },
    {
        id: "section-06",
        article: "Article 06",
        category: "Sanctuary Boundaries",
        title: "Third-Party Nondisclosure & External Demands",
    },
    {
        id: "section-07",
        article: "Article 07",
        category: "Sovereignty",
        title: "Guest Rights & Vault Erasure",
    },
];

/* =========================================================
   ARTICLE HEADER
========================================================= */

function ArticleHeader({ article, category, title }) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7d562d]">
                    {article}
                </span>

                <span className="h-px w-8 bg-[#c5c7c2]" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#757873]">
                    {category}
                </span>
            </div>

            <h2 className="font-['Playfair_Display'] text-[28px] font-normal leading-[36px] tracking-normal text-[#1c1c18] md:text-[32px]">
                {title}
            </h2>
        </div>
    );
}

/* =========================================================
   PRIVACY PAGE
========================================================= */

export default function PrivacyPolicyPage() {
    const [activeSection, setActiveSection] = useState("section-01");
    const [modalOpen, setModalOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    /* =====================================================
       ACTIVE SECTION OBSERVER
    ===================================================== */

    useEffect(() => {
        const sections = TOC_ITEMS.map((item) =>
            document.getElementById(item.id)
        ).filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top - b.boundingClientRect.top
                    );

                if (visibleEntries.length > 0) {
                    setActiveSection(visibleEntries[0].target.id);
                }
            },
            {
                threshold: 0.2,
                rootMargin: "-100px 0px -55% 0px",
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    const handleScrollToSection = (id) => {
        const element = document.getElementById(id);

        if (!element) return;

        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        setActiveSection(id);
    };

    /* =====================================================
       MODAL
    ===================================================== */

    const openPurgeModal = () => {
        setSubmitted(false);
        setModalOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closePurgeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = "";
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setSubmitted(true);

        setTimeout(() => {
            closePurgeModal();
        }, 3500);
    };

    return (
        <main className="min-h-screen w-full bg-[#fcf9f3] font-['Plus_Jakarta_Sans'] text-[#1c1c18] selection:bg-[#ffcb98] selection:text-[#7a532a]">
            {/* =====================================================
                MAIN CONTENT
            ===================================================== */}

            <div className="relative w-full overflow-hidden">
                <div className="mx-auto w-full max-w-[1360px] px-5 md:px-10 lg:px-[72px]">
                    {/* =================================================
                        EDITORIAL HEADER
                    ================================================= */}

                    <section className="pt-10 pb-8 md:pt-14 lg:pt-16">
                        <div className="max-w-4xl space-y-5">
                            {/* Eyebrow */}
                            <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em]">
                                <span className="text-[#7d562d]">
                                    {PAGE_DATA.eyebrow}
                                </span>

                                <span className="opacity-40">•</span>

                                <span className="text-[#757873]">
                                    {PAGE_DATA.edition}
                                </span>

                                <span className="opacity-40">•</span>

                                <span className="text-[#757873]">
                                    {PAGE_DATA.documentRef}
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="max-w-3xl text-[34px] font-normal leading-[43px] tracking-[-0.015em] text-[#1c1c18] md:text-[46px] md:leading-[56px] lg:text-[52px] lg:leading-[51px]">
                                {PAGE_DATA.title}
                            </h1>

                            {/* Description */}
                            <p className="max-w-2xl font-['Plus_Jakarta_Sans'] text-[16px] leading-7 text-[#444844] md:text-[18px] md:leading-7">
                                {PAGE_DATA.description}
                            </p>

                            {/* Metadata */}
                            <div className="pt-2">
                                <div className="flex flex-col gap-4 rounded-md bg-[#f6f3ed] p-4 md:flex-row md:flex-wrap md:items-center md:justify-between md:p-5">
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] leading-5 text-[#444844]">
                                        <div className="flex items-center gap-2">
                                            <MdVerifiedUser className="text-[17px] text-[#7d562d]" />
                                            <span>
                                                {PAGE_DATA.metadata.effective}
                                            </span>
                                        </div>

                                        <span className="hidden text-[#c5c7c2] sm:inline">
                                            •
                                        </span>

                                        <span>
                                            {PAGE_DATA.metadata.version}
                                        </span>

                                        <span className="hidden text-[#c5c7c2] sm:inline">
                                            •
                                        </span>

                                        <span>
                                            {PAGE_DATA.metadata.custodian}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className="h-2 w-2 animate-pulse rounded-full bg-[#7d562d]" />

                                        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1c1c18]">
                                            {PAGE_DATA.metadata.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* =================================================
                        MAIN GRID
                    ================================================= */}

                    <div className="grid grid-cols-1 gap-8 pb-16 lg:grid-cols-12 lg:gap-10 lg:pb-24">
                        {/* =================================================
                            SIDEBAR
                        ================================================= */}

                        <aside className="lg:col-span-4">
                            <div className="space-y-5 lg:sticky lg:top-8">
                                {/* TOC */}
                                <div className="rounded-md bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.035)] md:p-6">
                                    <div className="flex items-center justify-between border-b border-[#e5e2dc] pb-3">
                                        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#757873]">
                                            Codex Contents
                                        </span>

                                        <span className="font-mono text-[10px] font-semibold text-[#7d562d]">
                                            07 Articles
                                        </span>
                                    </div>

                                    <nav className="space-y-1 pt-3">
                                        {TOC_ITEMS.map((item) => {
                                            const isActive =
                                                activeSection === item.id;

                                            return (
                                                <button
                                                    key={item.id}
                                                    type="button"
                                                    onClick={() =>
                                                        handleScrollToSection(
                                                            item.id
                                                        )
                                                    }
                                                    className={`group flex w-full items-baseline justify-between gap-4 rounded-sm py-2 text-left transition-all duration-200 ${isActive
                                                        ? "text-[#7d562d]"
                                                        : "text-[#444844] hover:text-[#1c1c18]"
                                                        }`}
                                                >
                                                    <span
                                                        className={`text-[13px] leading-5 transition-colors ${isActive
                                                            ? "font-medium text-[#7d562d]"
                                                            : "text-[#444844]"
                                                            }`}
                                                    >
                                                        {item.number}.{" "}
                                                        {item.title}
                                                    </span>

                                                    <span
                                                        className={`shrink-0 font-mono text-[9px] transition-opacity ${isActive
                                                            ? "opacity-100"
                                                            : "opacity-60 group-hover:opacity-100"
                                                            }`}
                                                    >
                                                        {item.reference}
                                                    </span>
                                                </button>
                                            );
                                        })}
                                    </nav>

                                    {/* Privacy Contact */}
                                    <div className="mt-5 rounded-sm bg-[#f6f3ed] p-3">
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#757873]">
                                            Immediate Dispatch
                                        </p>

                                        <p className="mt-1 text-[13px] leading-5 text-[#1c1c18]">
                                            Direct encryption assistance
                                            available via our Concierge Key
                                            Custodian.
                                        </p>

                                        <a
                                            href={`mailto:${PAGE_DATA.contact.email}`}
                                            className="mt-2 flex items-center gap-1 text-[13px] font-medium text-[#7d562d] transition-colors hover:text-[#1c1c18]"
                                        >
                                            {PAGE_DATA.contact.email}
                                            <FiArrowUpRight className="text-[13px]" />
                                        </a>
                                    </div>
                                </div>

                                {/* Accent Image */}
                                <div className="hidden overflow-hidden rounded-md bg-[#ebe8e2] shadow-[0_2px_12px_rgba(0,0,0,0.035)] lg:block">
                                    <img
                                        src={PAGE_DATA.accentCard.image}
                                        alt="Quiet luxury hotel interior"
                                        className="h-44 w-full object-cover"
                                    />

                                    <div className="bg-[#f6f3ed] p-5">
                                        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7d562d]">
                                            {
                                                PAGE_DATA.accentCard
                                                    .eyebrow
                                            }
                                        </span>

                                        <h3 className="mt-1 font-['Playfair_Display'] text-[19px] leading-7 text-[#1c1c18]">
                                            {PAGE_DATA.accentCard.title}
                                        </h3>

                                        <p className="mt-1 text-[13px] leading-5 text-[#444844]">
                                            {
                                                PAGE_DATA.accentCard
                                                    .description
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* =================================================
                            ARTICLE CONTENT
                        ================================================= */}

                        <div className="space-y-16 lg:col-span-8 lg:space-y-20">
                            {/* =================================================
                                SECTION 01
                            ================================================= */}

                            <section
                                id="section-01"
                                className="scroll-mt-8 space-y-5"
                            >
                                <ArticleHeader {...ARTICLE_META[0]} />

                                <p className="text-[15px] leading-7 text-[#444844] md:text-[16px]">
                                    In an era of ubiquitous surveillance and
                                    commodified analytics, Tattva Hotels
                                    operates under an inverse canon: privacy is
                                    not an audit checkbox, but an indispensable
                                    component of luxurious ease. True
                                    relaxation requires cognitive
                                    serenity—knowing that your patterns,
                                    companion identities, and restorative
                                    practices remain held in strict
                                    confidence.
                                </p>

                                <div className="space-y-2 rounded-md bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.035)] md:p-6">
                                    <div className="flex items-center gap-2 text-[#7d562d]">
                                        <FiShield className="text-[20px]" />

                                        <span className="text-[10px] font-semibold uppercase tracking-[0.15em]">
                                            The Discretion Guarantee
                                        </span>
                                    </div>

                                    <p className="font-['Playfair_Display'] text-[18px] italic leading-7 text-[#1c1c18] md:text-[20px]">
                                        “We do not trade, monetize, lease, or
                                        aggregate guest dossiers. No
                                        third-party ad pixels or profiling
                                        beacons reside on our sovereign
                                        reservation channels.”
                                    </p>

                                    <p className="pt-1 text-[13px] leading-5 text-[#444844]">
                                        Every reservation record is governed by
                                        strict end-to-end compartmentalization,
                                        accessible solely by designated
                                        custodians assigned to your arrival
                                        itinerary.
                                    </p>
                                </div>
                            </section>

                            {/* =================================================
                                SECTION 02
                            ================================================= */}

                            <section
                                id="section-02"
                                className="scroll-mt-8 space-y-5"
                            >
                                <ArticleHeader {...ARTICLE_META[1]} />

                                <p className="text-[15px] leading-7 text-[#444844] md:text-[16px]">
                                    We curate only the minimal data points
                                    required to orchestrate an immaculate
                                    sojourn. This intake is categorized through
                                    two clear tiers:
                                </p>

                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    {INFORMATION_TIERS.map((item) => (
                                        <div
                                            key={item.title}
                                            className="space-y-2 rounded-md bg-[#f6f3ed] p-5"
                                        >
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#7d562d]">
                                                {item.eyebrow}
                                            </span>

                                            <h3 className="font-['Playfair_Display'] text-[18px] leading-7 text-[#1c1c18]">
                                                {item.title}
                                            </h3>

                                            <p className="text-[13px] leading-5 text-[#444844]">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* =================================================
                                SECTION 03
                            ================================================= */}

                            <section
                                id="section-03"
                                className="scroll-mt-8 space-y-5"
                            >
                                <ArticleHeader {...ARTICLE_META[2]} />

                                <p className="text-[15px] leading-7 text-[#444844] md:text-[16px]">
                                    Our residences feature autonomous,
                                    localized environmental management
                                    systems. Automated dimming sequences,
                                    blackout drapery schedules, and customized
                                    acoustic soundscapes operate on
                                    self-contained in-room processors that do
                                    not stream sensory logs to centralized
                                    networks.
                                </p>

                                <div className="flex flex-col gap-5 rounded-md bg-[#f0eee8] p-5 md:flex-row md:items-center md:justify-between md:p-6">
                                    <div className="space-y-2">
                                        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#757873]">
                                            In-Suite Sensor Protocol
                                        </span>

                                        <h3 className="font-['Playfair_Display'] text-[20px] leading-7 text-[#1c1c18]">
                                            Zero Audio/Visual Recording Devices
                                        </h3>

                                        <p className="max-w-2xl text-[13px] leading-5 text-[#444844]">
                                            Suites utilize thermal threshold
                                            switches solely for energy balance
                                            during unoccupied cycles. No
                                            biometric microphones or cameras
                                            are installed across our private
                                            villas.
                                        </p>
                                    </div>

                                    <div className="shrink-0 rounded-sm bg-white p-3 text-center shadow-sm">
                                        <MdOutlineSensorDoor className="mx-auto text-[28px] text-[#7d562d]" />

                                        <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#757873]">
                                            Airgapped Suite
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* =================================================
                                SECTION 04
                            ================================================= */}

                            <section
                                id="section-04"
                                className="scroll-mt-8 space-y-5"
                            >
                                <ArticleHeader {...ARTICLE_META[3]} />

                                <p className="text-[15px] leading-7 text-[#444844] md:text-[16px]">
                                    When contactless check-in or encrypted
                                    digital key access is requested via
                                    personal mobile hardware, biological data
                                    such as Face ID or fingerprint validation
                                    remains isolated strictly within your
                                    personal device enclaves. Tattva Hotels
                                    does not receive, store, or transmit your
                                    biometric keys.
                                </p>

                                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                                    {VAULT_FEATURES.map((item) => (
                                        <div
                                            key={item.title}
                                            className="space-y-2 rounded-md bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.035)]"
                                        >
                                            <span className="font-mono text-sm font-semibold text-[#7d562d]">
                                                {item.code}
                                            </span>

                                            <h4 className="font-['Playfair_Display'] text-[18px] leading-6 text-[#1c1c18]">
                                                {item.title}
                                            </h4>

                                            <p className="text-[13px] leading-5 text-[#444844]">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* =================================================
                                SECTION 05
                            ================================================= */}

                            <section
                                id="section-05"
                                className="scroll-mt-8 space-y-5"
                            >
                                <ArticleHeader {...ARTICLE_META[4]} />

                                <p className="text-[15px] leading-7 text-[#444844] md:text-[16px]">
                                    For travelers arriving via private aviation
                                    charters, yachts, or designated heliport
                                    transfers, passenger manifests and tail
                                    numbers are classified under
                                    diplomatic-grade confidentiality tiers.
                                    Manifest documentation is shredded
                                    physically and deleted digitally once
                                    landing clearances are fulfilled.
                                </p>

                                <ul className="space-y-4">
                                    {FINANCIAL_FEATURES.map((item) => (
                                        <li
                                            key={item.title}
                                            className="flex items-start gap-3 text-[15px] leading-6 text-[#444844]"
                                        >
                                            <FiCheckCircle className="mt-1 shrink-0 text-[18px] text-[#7d562d]" />

                                            <span>
                                                <strong className="font-medium text-[#1c1c18]">
                                                    {item.title}:
                                                </strong>{" "}
                                                {item.description}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* =================================================
                                SECTION 06
                            ================================================= */}

                            <section
                                id="section-06"
                                className="scroll-mt-8 space-y-5"
                            >
                                <ArticleHeader {...ARTICLE_META[5]} />

                                <p className="text-[15px] leading-7 text-[#444844] md:text-[16px]">
                                    Tattva Hotels operates under an
                                    uncompromising policy concerning external
                                    curiosity. Our staff is legally contracted
                                    never to confirm or deny the presence of
                                    any guest on our properties to press,
                                    paparazzi, or unauthorized inquiries.
                                </p>

                                <p className="text-[15px] leading-7 text-[#444844] md:text-[16px]">
                                    In the event of civil subpoena or law
                                    enforcement inquiries, our General Counsel
                                    conducts rigorous jurisdictional reviews to
                                    verify statutory compliance, providing only
                                    the narrowest legally compulsory data and
                                    notifying the guest where permitted by law.
                                </p>
                            </section>

                            {/* =================================================
                                SECTION 07
                            ================================================= */}

                            <section
                                id="section-07"
                                className="scroll-mt-8 space-y-5"
                            >
                                <ArticleHeader {...ARTICLE_META[6]} />

                                <p className="text-[15px] leading-7 text-[#444844] md:text-[16px]">
                                    Regardless of your citizenship jurisdiction
                                    (GDPR, CCPA/CPRA, or Swiss FADP), we extend
                                    universal rights of rectification, digital
                                    extraction, and immediate vault erasure to
                                    every guest. You maintain total sovereign
                                    ownership over your residential footprint.
                                </p>

                                <div className="flex flex-col gap-4 rounded-md bg-[#f6f3ed] p-5 md:flex-row md:items-center md:p-6">
                                    <MdOutlineDeleteSweep className="shrink-0 text-[34px] text-[#7d562d]" />

                                    <div className="space-y-1">
                                        <h4 className="font-['Playfair_Display'] text-[19px] leading-7 text-[#1c1c18]">
                                            Right to Complete Obscurity
                                        </h4>

                                        <p className="text-[13px] leading-5 text-[#444844]">
                                            Following settlement, submit a
                                            single-touch request to expunge all
                                            preference logs, dietary notes,
                                            and arrival correspondence
                                            permanently from our property
                                            management vaults.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* =================================================
                                CUSTODIAN ACTION CARD
                            ================================================= */}

                            <section className="relative overflow-hidden rounded-md bg-[#020402] p-6 text-white shadow-xl md:p-8 lg:p-10">
                                <div className="pointer-events-none absolute -bottom-12 -right-8 opacity-[0.035]">
                                    <FiLock className="text-[240px]" />
                                </div>

                                <div className="relative z-10 space-y-5">
                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f0bd8a]">
                                            Custodian Atelier
                                        </span>

                                        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#838682]">
                                            Secure PGP Protocol
                                        </span>
                                    </div>

                                    <h3 className="max-w-2xl font-['Playfair_Display'] text-[27px] font-normal leading-9 md:text-[32px]">
                                        Office of the Data Custodian & General
                                        Counsel
                                    </h3>

                                    <p className="max-w-xl text-[14px] leading-6 text-[#c5c7c2]">
                                        Should you require dedicated
                                        nondisclosure documentation,
                                        customized protocol execution for
                                        high-profile delegations, or an
                                        immediate data purge of your previous
                                        stays:
                                    </p>

                                    <div className="rounded bg-[#1b1e1b] p-3 font-mono text-[10px] tracking-wider text-[#e1e3de]">
                                        <span className="mb-1 block text-[9px] uppercase text-[#757873]">
                                            PGP Key Fingerprint
                                            (4096R/0x88F7B012)
                                        </span>

                                        <span className="break-all">
                                            9D4B 2C67 F189 A331 46E2 • B071
                                            582E E0C1 88F7 B012
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                                        <button
                                            type="button"
                                            onClick={openPurgeModal}
                                            className="inline-flex items-center justify-center gap-2 rounded bg-white px-4 py-3 text-sm font-medium text-[#1c1c18] transition-colors hover:bg-[#ffdcbd]"
                                        >
                                            <FiDelete className="text-[16px]" />
                                            Request Data Vault Purge
                                        </button>

                                        <a
                                            href="mailto:privacy@tattvahotels.com?subject=Privacy%20Counsel%20Inquiry%20-%20Tattva%20Hotels"
                                            className="inline-flex items-center justify-center gap-2 rounded px-4 py-3 text-sm font-medium text-white transition-colors hover:text-[#f0bd8a]"
                                        >
                                            <FiMail className="text-[16px]" />
                                            Direct Legal Despatch
                                        </a>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            {/* =========================================================
                PURGE MODAL
            ========================================================= */}

            {modalOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#31312d]/70 p-4 backdrop-blur-sm"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            closePurgeModal();
                        }
                    }}
                >
                    <div className="relative w-full max-w-lg rounded-md bg-white p-6 shadow-2xl md:p-8">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7d562d]">
                                Expunge Request
                            </span>

                            <button
                                type="button"
                                onClick={closePurgeModal}
                                className="text-[#757873] transition-colors hover:text-[#1c1c18]"
                                aria-label="Close modal"
                            >
                                <FiX className="text-[21px]" />
                            </button>
                        </div>

                        {!submitted ? (
                            <>
                                <h3 className="mt-4 font-['Playfair_Display'] text-[25px] leading-8 text-[#1c1c18]">
                                    Initiate Data Vault Purge
                                </h3>

                                <p className="mt-2 text-[13px] leading-5 text-[#444844]">
                                    To request complete erasure of your
                                    experiential stays, past preferences, and
                                    reservation records, enter your reservation
                                    confirmation code or primary email address
                                    below:
                                </p>

                                <form
                                    onSubmit={handleSubmit}
                                    className="mt-6 space-y-5"
                                >
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="folio-code"
                                            className="block text-[10px] font-semibold uppercase tracking-[0.13em] text-[#757873]"
                                        >
                                            Verified Correspondence / Folio
                                            Code
                                        </label>

                                        <input
                                            id="folio-code"
                                            type="text"
                                            required
                                            placeholder="e.g. folio@client.ch or TT-8829-RES"
                                            className="w-full rounded-sm bg-[#f6f3ed] px-4 py-3 text-sm text-[#1c1c18] outline-none transition-shadow placeholder:text-[#757873] focus:ring-1 focus:ring-[#7d562d]"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-[10px] font-semibold uppercase tracking-[0.13em] text-[#757873]">
                                            Authentication Clearance
                                        </label>

                                        <div className="flex items-start gap-3 rounded-sm bg-[#f6f3ed] p-3">
                                            <input
                                                id="consent-check"
                                                type="checkbox"
                                                required
                                                className="mt-1 accent-[#020402]"
                                            />

                                            <label
                                                htmlFor="consent-check"
                                                className="text-[13px] leading-5 text-[#444844]"
                                            >
                                                I authorize total irreversible
                                                deletion of my sensory & booking
                                                archives.
                                            </label>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end gap-2 pt-1">
                                        <button
                                            type="button"
                                            onClick={closePurgeModal}
                                            className="rounded px-4 py-3 text-sm font-medium text-[#444844] transition-colors hover:text-[#1c1c18]"
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            type="submit"
                                            className="rounded bg-[#020402] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#7d562d]"
                                        >
                                            Transmit Purge Command
                                        </button>
                                    </div>
                                </form>
                            </>
                        ) : (
                            <div className="py-8 text-center">
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f6f3ed]">
                                    <FiMail className="text-[25px] text-[#7d562d]" />
                                </div>

                                <h3 className="mt-5 font-['Playfair_Display'] text-[25px] leading-8 text-[#1c1c18]">
                                    Transmission Received
                                </h3>

                                <p className="mx-auto mt-2 max-w-sm text-[13px] leading-5 text-[#444844]">
                                    A cryptographically signed verification
                                    challenge has been dispatched to your
                                    designated channel.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </main>
    );
}