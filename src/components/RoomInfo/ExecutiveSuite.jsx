"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    Bath,
    BedDouble,
    BellRing,
    CalendarCheck2,
    CalendarDays,
    Camera,
    Check,
    CheckCircle2,
    ChevronRight,
    CigaretteOff,
    Clock3,
    Globe,
    Grid2X2,
    Headphones,
    KeyRound,
    LockKeyhole,
    MapPin,
    MessageCircle,
    Moon,
    PawPrint,
    Phone,
    PlaneLanding,
    Share2,
    ShieldCheck,
    ShowerHead,
    Sparkles,
    Star,
    Sofa,
    Square,
    Users,
    Wifi,
    X,
    Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const SUITE_IMAGES = {
    bedroom:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDKs--7JBleIIek06Mfw9MHSXpixiQPMyUeCbEhwAFb7ejK6lo2-fIm0dM6S7oJ1Fbf-bG44EQc1eP7U_ETlh_739bhUm-IyhePY5Sgt8fHWruUeaFITz_K3zxzNtzHBBQIHrzc56eyKCuQcSs_cq2bRbV6kv8thnz6mmmAqS5_zNetEpGJKblJiNogKaEdr0jdZb6tVbIll3t0y09hE185fTsLoRJEfyhSXIMeZeYs0tNSf52u7IYFIg",
    salon:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCKWlsa1V6N64jYlqSkScDh77GLGrLnSiKWJYa9QtY0k8GMJ8akmHRTvTAfD_6aeyX2iZm4_YuvueNGNPw2_wnTbTqXVrfCXESGF9mLO7bDRBzl7WTL-44Yc1OsrBEdeFSohWfPhL5NjTmKyGulV6YrIw0Kvm0_3XudGeRheCEk21JbnIwt7Nmn515JLEw-rIL0lYd54IHz3995VRMWGXFuRKpyJf918QhHgK9FNJxEJ9Xc-dVLwkMetw",
    bathroom:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB-A2HCDdI5L5ffp2kx9kQJJMhRBPE1rH89PlOz_IZMT2JWx_ICieCQMv3kivP5H_PGO_BWzMGTS806dyvzJHpCSGEUXIY2wt2V6_UBNey_WiXZtt-CmpZJHPnyktYiPvfyliNn35bctBzAr4q1qUZKg37tQWPd2lMHE1liocCdWRLDafcBsByZhlaMn8ntx80WqYuA75tMrSW4U9AvbQUjM1vbUX6i9N6KpSanYuAmdyfcbIRIjSTPVg",
};

const RATE_PACKAGES = [
    {
        id: "flexible",
        title: "Room Only",
        price: 38000,
        badge: null,
        subtitle: "Free cancellation up to 48 hours before arrival",
        taxTotal: 44840,
        features: [
            "Executive Suite with king-size bed",
            "Free high-speed Wi-Fi",
            "Daily housekeeping",
            "Free cancellation up to 48 hours before arrival",
        ],
    },
    {
        id: "signature",
        title: "Stay with Breakfast",
        price: 42000,
        badge: "Most Popular",
        subtitle: "Breakfast included for 2 guests",
        taxTotal: 49560,
        tag: "Breakfast Included",
        features: [
            "Executive Suite with king-size bed",
            "Daily breakfast for 2 guests",
            "Free high-speed Wi-Fi",
            "Flexible cancellation up to 48 hours before arrival",
            "Late check-out subject to availability",
        ],
    },
    {
        id: "wellness",
        title: "Stay & Wellness",
        price: 49500,
        badge: null,
        subtitle: "Breakfast + wellness benefits",
        taxTotal: 58410,
        tag: "Extra Benefits",
        features: [
            "Everything included in Stay with Breakfast",
            "Ayurvedic wellness session for 2 guests",
            "Access to selected wellness facilities",
            "Free high-speed Wi-Fi",
            "Flexible cancellation policy",
        ],
    },
];

const HIGHLIGHTS = [
    {
        icon: Moon,
        title: "Comfortable Bedroom",
        text: "A spacious bedroom with a comfortable king-size bed, soft bedding, and a peaceful atmosphere.",
    },
    {
        icon: Sofa,
        title: "Separate Living Area",
        text: "A separate sitting area where you can relax, spend time with family, or have a small meeting.",
    },
    {
        icon: Bath,
        title: "Spacious Bathroom",
        text: "A clean and spacious bathroom with a bathtub, rain shower, and quality bathroom essentials.",
    },
];

const ARCHITECTURE_ITEMS = [
    {
        icon: KeyRound,
        title: "Bedroom & Wardrobe",
        text: "A comfortable bedroom with a king-size bed, wardrobe, dressing mirror, safe, and useful storage space.",
    },
    {
        icon: Sofa,
        title: "Living & Dining Area",
        text: "A separate living area with a comfortable sofa and dining space, suitable for relaxing or spending time with family.",
    },
    {
        icon: ShowerHead,
        title: "Spacious Bathroom",
        text: "A well-maintained bathroom with a bathtub, rain shower, wash basin, and modern fittings.",
    },
    {
        icon: Square,
        title: "Work Desk",
        text: "A dedicated work desk with comfortable seating, charging points, and reliable Wi-Fi for work or business needs.",
    },
];

const AMENITIES = [
    {
        icon: Sparkles,
        title: "Quality Toiletries",
        text: "Good quality shampoo, soap, body wash, lotion, towels, and other basic bathroom essentials.",
    },
    {
        icon: PlaneLanding,
        title: "Airport Transfer",
        text: "Airport pickup and drop service can be arranged on request and at an additional charge.",
    },
    {
        icon: Moon,
        title: "Daily Housekeeping",
        text: "Daily room cleaning and housekeeping service to keep your stay comfortable and pleasant.",
    },
    {
        icon: Wifi,
        title: "High-Speed Wi-Fi",
        text: "Free Wi-Fi is available in the room and common areas for work, entertainment, and staying connected.",
    },
    {
        icon: BellRing,
        title: "Room Service",
        text: "Room service is available for food, drinks, and other basic guest requirements.",
    },
    {
        icon: Clock3,
        title: "24/7 Guest Assistance",
        text: "Our hotel team is available to help with your stay, requests, travel needs, and other assistance.",
    },
];

const POLICIES = [
    {
        icon: CalendarCheck2,
        title: "Check-in & Check-out",
        text: "Check-in starts at 2:00 PM and check-out is at 12:00 PM. Early check-in and late check-out are subject to availability.",
    },
    {
        icon: ShieldCheck,
        title: "Cancellation Policy",
        text: "Cancellation is allowed up to 48 hours before arrival. Cancellation charges may apply depending on the booking plan.",
    },
    {
        icon: CigaretteOff,
        title: "Non-Smoking Room",
        text: "Smoking is not allowed inside the room. Please use the designated smoking areas of the hotel.",
    },
    {
        icon: PawPrint,
        title: "Pet Policy",
        text: "Pets may be allowed depending on hotel rules and room availability. Please contact the hotel before booking.",
    },
];

const REVIEWS = [
    {
        quote: "The room was spacious, clean, and very comfortable.",
        text: "We stayed here with our family and had a very good experience. The room was clean, the staff was helpful, and the breakfast was good.",
        guest: "Rahul Sharma • Jaipur, India",
        date: "Stayed April 2026",
    },
    {
        quote: "A comfortable stay with good service.",
        text: "The Executive Suite was spacious and perfect for our family. The separate living area was very useful. The hotel staff was polite and helpful.",
        guest: "Priya Mehta • Delhi, India",
        date: "Stayed March 2026",
    },
];

const ALTERNATIVES = [
    {
        title: "Premium Room",
        price: 24000,
        meta: "42 m² • King Bed • 2 Guests",
        badge: "Popular Choice",
        feature: "Comfortable & Spacious",
        action: "View Room",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBvkpsOGr2YaWtLz59ogmT0m9zc5f1GGnyyox6mSZMseBajDx9IXQ7mpTpO9WTe6BETt-JLyc5oa2Ph34ekkxiJdttw7Xj5zDmNaYx-NFSvScor8L2jeWYZiRqzNDqlq3Db_QLevKQz_WZEccZkg_V3YuDf_Bh6ykvvaAhl-bTWlyjESyrbmalqXClqDU28lyWY129Bl1JXyH_no_C6qSDIIRERBmOujl6d3EtVsbxDiwTmYap6lfsjUw",
    },
    {
        title: "Deluxe Room",
        price: 17500,
        meta: "36 m² • Queen Bed • 2 Guests",
        badge: "Comfort Stay",
        feature: "Warm & Comfortable",
        action: "View Room",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDMbu3WHL9kklOMlsEyKZggaJAuY8K8m_30GsTihR0O3vxBVH4BHF9WS73ZZPCAz5ZO5ZYANImyS5Qu8IbQ_qKr34ongmjYlFLHE2Q-IjdgsU12n-k7gRuKT2S-ftyKPiZw9LYI0L34SjwLs5D0NRt96ZtQu_g3dzGiRimb1oQb4GNogFQ7-fpfg7n19iTmIn404Lxzc2goTDh_9bJi8NO7_gEFV0uU75lrFSzn2lbNVlVFsamlZFfuWA",
    },
    {
        title: "Standard Room",
        price: 12000,
        meta: "28 m² • Queen Bed • 2 Guests",
        badge: "Value Stay",
        feature: "Simple & Comfortable",
        action: "View Room",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBZC-nWyv1bGL-P-zggTgR_VK8IMiO3jPMLET0F63oYZoMkxrfgMZJfmVtRrvaPjGH30MyzFEyTJNreO8TnvNm1ij3A_JYOt0UVqZr4BNZ3ylAbugX0oKNZETqmXzfVVMhUjtM0XJ3btSvh_i0Fqh_art4ZsjFblhn-mZSBVCtkm5BD-O1ZY1p70E2CsyJD5IXeIFL_WwPYcYyZndCxhWi1REzbsRbBJmtymCCHU4axVkeum774ac9UTw",
    },
];

/* =========================================================
   HELPERS
========================================================= */

const formatMoney = (value) =>
    `₹${Number(value).toLocaleString("en-IN")}`;

const SectionLabel = ({ children }) => (
    <div className="flex items-center gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7d562d]">
            {children}
        </span>
        <div className="h-px flex-1 bg-[#e5e2dc]" />
    </div>
);

const Stars = ({ size = 16 }) => (
    <div className="flex items-center gap-0.5 text-[#7d562d]">
        {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} size={size} fill="currentColor" />
        ))}
    </div>
);

/* =========================================================
   COMPONENT
========================================================= */

export default function ExecutiveSuitePage() {
    const [selectedRate, setSelectedRate] = useState("signature");
    const [toastOpen, setToastOpen] = useState(false);
    const [toastTimer, setToastTimer] = useState(null);

    const activeRate = useMemo(
        () =>
            RATE_PACKAGES.find((item) => item.id === selectedRate) ||
            RATE_PACKAGES[1],
        [selectedRate]
    );

    const nights = 3;
    const subtotal = activeRate.price * nights;
    const taxes = Math.round(subtotal * 0.18); // Updated to 18% GST standard
    const total = subtotal + taxes;

    const handleShare = async () => {
        const shareData = {
            title: "UdayHotels — Royal Executive Suite",
            text: "Explore the Royal Executive Suite Sanctuary at UdayHotels.",
            url: window.location.href,
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch { }
            return;
        }

        try {
            await navigator.clipboard.writeText(window.location.href);
            window.alert("Suite link copied to clipboard.");
        } catch {
            window.alert("Copy the current page URL to share this suite.");
        }
    };

    const handleReserve = () => {
        if (toastTimer) window.clearTimeout(toastTimer);

        setToastOpen(true);

        const timer = window.setTimeout(() => {
            setToastOpen(false);
        }, 6000);

        setToastTimer(timer);
    };

    return (
        <main className="min-h-screen bg-[#fcf9f3] font-sans text-[#1c1c18] antialiased selection:bg-[#ffdcbd] selection:text-[#2c1600]">
            <div className="pt-20">
                {/* =================================================
                    BREADCRUMB / TOP META
                ================================================== */}
                <section className="bg-white/70 py-2 backdrop-blur-sm">
                    <div className="mx-auto flex max-w-[1360px] flex-wrap items-center justify-between gap-2 px-4 sm:px-5 md:px-10 lg:px-[4.5rem]">
                        <nav className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#444844]">
                            <Link href="/rooms" className="hover:text-[#020402]">
                                Accommodations
                            </Link>
                            <span className="text-[#c5c7c2]">/</span>
                            <Link href="/rooms" className="hover:text-[#020402]">
                                Suites
                            </Link>
                            <span className="text-[#c5c7c2]">/</span>
                            <span className="text-[#7d562d]">
                                Executive Suite
                            </span>
                        </nav>

                        <div className="flex items-center gap-2 text-[#444844]">
                            <button
                                type="button"
                                onClick={handleShare}
                                className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm hover:bg-[#f0eee8]"
                            >
                                <Share2 size={17} />
                                <span className="hidden sm:inline">
                                    Share Suite
                                </span>
                            </button>

                            <button
                                type="button"
                                className="inline-flex items-center gap-2 rounded-md bg-[#ebe8e2] px-3 py-1 text-sm hover:bg-[#e5e2dc]"
                            >
                                <Grid2X2 size={17} />
                                Virtual 360°
                            </button>
                        </div>
                    </div>
                </section>

                {/* =================================================
                    TITLE / METRICS
                ================================================== */}
                <section className="py-4 pb-2">
                    <div className="mx-auto max-w-[1360px] px-4 sm:px-5 md:px-10 lg:px-[4.5rem]">
                        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="rounded bg-[#ffdcbd] px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2c1600]">
                                        Executive Suite
                                    </span>

                                    <span className="flex items-center gap-1 text-[11px] uppercase tracking-[0.12em] text-[#444844]">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#7d562d]" />
                                        Spacious Suite
                                    </span>

                                    <span className="flex items-center gap-1 text-[11px] uppercase tracking-[0.12em] text-[#444844]">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#735c00]" />
                                        Comfortable Stay
                                    </span>
                                </div>

                                <h1 className="font-serif text-[32px] leading-tight tracking-tight text-[#020402] md:text-[40px]">
                                    The Executive Suite
                                </h1>

                                <p className="max-w-2xl text-[15px] leading-6 text-[#444844]">
                                    A spacious and comfortable suite with a king-size bed,
                                    separate living area, large windows, and a well-equipped
                                    bathroom. A good choice for families, couples, and guests
                                    who prefer extra space.
                                </p>
                            </div>

                            <div className="flex flex-wrap items-center gap-2 rounded-xl bg-[#f6f3ed] p-2">
                                {[
                                    [Square, "Room Size", "68 m² / 730 sq ft"],
                                    [BedDouble, "Bed", "1 King Bed"],
                                    [Users, "Guests", "Up to 3 Guests"],
                                    [Globe, "View", "Lake & Aravali View"],
                                ].map(([Icon, label, value], index) => (
                                    <React.Fragment key={label}>
                                        {index > 0 && (
                                            <div className="hidden h-8 w-px bg-[#c5c7c2]/50 sm:block" />
                                        )}
                                        <div className="flex items-center gap-2 px-2 py-1">
                                            <Icon
                                                size={20}
                                                className="text-[#7d562d]"
                                            />
                                            <div>
                                                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#444844]">
                                                    {label}
                                                </p>
                                                <p className="text-sm font-semibold text-[#1c1c18]">
                                                    {value}
                                                </p>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =================================================
                    HERO GALLERY
                ================================================== */}
                <section className="py-2">
                    <div className="mx-auto max-w-[1360px] px-4 sm:px-5 md:px-10 lg:px-[4.5rem]">
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                            <div
                                className="group relative h-[300px] overflow-hidden rounded-xl bg-[#ebe8e2] shadow-sm xs:h-[340px] sm:h-[460px] lg:col-span-8 lg:h-[560px]"
                                style={{
                                    backgroundImage: `url("${SUITE_IMAGES.bedroom}")`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                                    <div>
                                        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#ffdcbd]">
                                            Comfortable Bedroom
                                        </span>
                                        <p className="font-serif text-xl">
                                            King Bed & Large Windows
                                        </p>
                                    </div>
                                    <span className="hidden items-center gap-1 rounded bg-black/70 px-3 py-1 text-[11px] uppercase tracking-[0.12em] backdrop-blur-md sm:inline-flex">
                                        <Camera size={15} /> 1 of 15
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-6 lg:col-span-4">
                                <div
                                    className="group relative h-[240px] overflow-hidden rounded-xl bg-[#ebe8e2] sm:h-[220px] lg:h-[268px]"
                                    style={{
                                        backgroundImage: `url("${SUITE_IMAGES.salon}")`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#ffdcbd]">
                                            Living & Dining Area
                                        </span>
                                        <p className="font-serif text-lg">
                                            Comfortable Space to Relax
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="group relative h-[240px] overflow-hidden rounded-xl bg-[#ebe8e2] sm:h-[220px] lg:h-[268px]"
                                    style={{
                                        backgroundImage: `url("${SUITE_IMAGES.bathroom}")`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4 text-white">
                                        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#ffdcbd]">
                                            Spacious Bathroom
                                        </span>
                                        <p className="font-serif text-lg">
                                            Bathtub & Rain Shower
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-lg bg-white/90 px-3 py-2 text-sm text-[#1c1c18] shadow-sm backdrop-blur hover:bg-white"
                                    >
                                        <Grid2X2 size={17} />
                                        +12 More Photos
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =================================================
                    STICKY SECTION NAV
                ================================================== */}
                <div className="sticky top-20 z-30 bg-[#f6f3ed]/95 shadow-sm backdrop-blur-md">
                    <div className="mx-auto flex max-w-[1360px] items-center justify-between overflow-x-auto px-4 py-2 md:px-10 lg:px-[4.5rem] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        <div className="flex shrink-0 items-center gap-4 text-[13px] sm:gap-5 sm:text-sm">
                            {[
                                ["Overview", "#suite-overview"],
                                ["Architecture & Specs", "#suite-specs"],
                                ["Signature Inclusions", "#suite-amenities"],
                                ["Rates & Packages", "#suite-rates"],
                                ["Floorplan", "#suite-floorplan"],
                                ["Guest Reflections", "#suite-reviews"],
                            ].map(([label, href], index) => (
                                <a
                                    key={label}
                                    href={href}
                                    className={`whitespace-nowrap py-1 ${index === 0
                                        ? "border-b-2 border-[#7d562d] font-semibold text-[#020402]"
                                        : "text-[#444844] hover:text-[#020402]"
                                        }`}
                                >
                                    {label}
                                </a>
                            ))}
                        </div>

                        <div className="ml-6 hidden shrink-0 items-center gap-2 xl:flex">
                            <span className="font-serif text-xl font-semibold text-[#020402]">
                                {formatMoney(activeRate.price)}
                            </span>
                            <span className="text-sm text-[#444844]">
                                / night
                            </span>
                            <Link
                                href="#suite-rates"
                                className="ml-2 rounded-lg bg-[#020402] px-4 py-2 text-sm text-white hover:bg-[#7d562d]"
                            >
                                Select Suite
                            </Link>
                        </div>
                    </div>
                </div>

                {/* =================================================
                    MAIN CONTENT + BOOKING ENGINE
                ================================================== */}
                <section className="py-7 pb-24 md:pb-7">
                    <div className="mx-auto max-w-[1360px] px-4 sm:px-5 md:px-10 lg:px-[4.5rem]">
                        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
                            <div className="flex flex-col gap-12 lg:col-span-7 xl:col-span-8">
                                {/* OVERVIEW */}
                                <article
                                    id="suite-overview"
                                    className="scroll-mt-28"
                                >
                                    <SectionLabel>
                                        Sanctuary Overview
                                    </SectionLabel>

                                    <h2 className="mt-4 font-serif text-2xl leading-tight text-[#020402] md:text-[28px]">
                                        A Spacious Room for a Comfortable Stay
                                    </h2>

                                    <div className="mt-4 space-y-4 text-[18px] leading-7 text-[#444844]">
                                        <p>
                                            The Executive Suite is designed for guests who want more space
                                            and comfort during their stay. The suite has a comfortable
                                            king-size bed, a separate living area, dining space, work desk,
                                            and a spacious bathroom.
                                        </p>

                                        <p>
                                            Large windows bring in plenty of natural light and offer pleasant
                                            lake and Aravali views. Whether you are travelling with family,
                                            staying as a couple, or visiting for work, the suite gives you
                                            everything you need for a relaxing stay.
                                        </p>
                                    </div>

                                    <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
                                        {HIGHLIGHTS.map((item) => {
                                            const Icon = item.icon;
                                            return (
                                                <div
                                                    key={item.title}
                                                    className="rounded-xl bg-[#f6f3ed] p-4"
                                                >
                                                    <Icon
                                                        size={26}
                                                        className="text-[#7d562d]"
                                                    />
                                                    <h4 className="mt-2 text-sm font-semibold">
                                                        {item.title}
                                                    </h4>
                                                    <p className="mt-1 text-[13px] leading-5 text-[#444844]">
                                                        {item.text}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </article>

                                {/* ARCHITECTURE */}
                                <article
                                    id="suite-specs"
                                    className="scroll-mt-28"
                                >
                                    <SectionLabel>
                                        Room Layout & Facilities
                                    </SectionLabel>

                                    <h3 className="mt-4 font-serif text-2xl leading-tight text-[#020402] md:text-[28px]">
                                        Everything You Need in One Spacious Suite
                                    </h3>

                                    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                                        {ARCHITECTURE_ITEMS.map((item) => {
                                            const Icon = item.icon;
                                            return (
                                                <div
                                                    key={item.title}
                                                    className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
                                                >
                                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f0eee8] text-[#7d562d]">
                                                        <Icon size={20} />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm font-semibold">
                                                            {item.title}
                                                        </h4>
                                                        <p className="mt-1 text-[13px] leading-5 text-[#444844]">
                                                            {item.text}
                                                        </p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </article>

                                {/* AMENITIES */}
                                <article
                                    id="suite-amenities"
                                    className="scroll-mt-28"
                                >
                                    <SectionLabel>
                                        Room Facilities & Services
                                    </SectionLabel>

                                    <div className="mt-4 flex flex-col justify-between gap-2 md:flex-row md:items-end">
                                        <h3 className="font-serif text-2xl text-[#020402] md:text-[28px]">
                                            Everything You Need for a Comfortable Stay
                                        </h3>
                                        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7d562d]">
                                            Included With Your Stay
                                        </span>
                                    </div>

                                    <div className="mt-4 rounded-xl bg-white p-5 shadow-sm md:p-7">
                                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                            {AMENITIES.map((item) => {
                                                const Icon = item.icon;
                                                return (
                                                    <div
                                                        key={item.title}
                                                        className="flex items-start gap-3"
                                                    >
                                                        <Icon
                                                            size={22}
                                                            className="mt-0.5 shrink-0 text-[#7d562d]"
                                                        />
                                                        <div>
                                                            <h5 className="text-sm font-semibold">
                                                                {item.title}
                                                            </h5>
                                                            <p className="mt-1 text-[13px] leading-5 text-[#444844]">
                                                                {item.text}
                                                            </p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </article>

                                {/* RATES */}
                                <article
                                    id="suite-rates"
                                    className="scroll-mt-28"
                                >
                                    <SectionLabel>
                                        Room & Stay Options
                                    </SectionLabel>

                                    <h3 className="mt-4 font-serif text-2xl text-[#020402] md:text-[28px]">
                                        Choose the Best Stay Option
                                    </h3>
                                    <p className="mt-1 text-[13px] text-[#444844]">
                                        Choose the stay option that works best for you.
                                        The final price will depend on your selected dates and guests.
                                    </p>

                                    <div className="mt-4 space-y-3">
                                        {RATE_PACKAGES.map((rate) => (
                                            <label
                                                key={rate.id}
                                                className={`relative block cursor-pointer rounded-xl bg-white p-4 shadow-sm transition-all ${selectedRate === rate.id
                                                    ? "ring-1 ring-[#7d562d] shadow-md"
                                                    : "hover:shadow-md"
                                                    }`}
                                            >
                                                {rate.badge && (
                                                    <div className="absolute -top-3 right-4 rounded bg-[#7d562d] px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-white shadow-sm">
                                                        {rate.badge}
                                                    </div>
                                                )}

                                                <div className="flex items-start gap-3">
                                                    <input
                                                        type="radio"
                                                        name="rate_package"
                                                        value={rate.id}
                                                        checked={selectedRate === rate.id}
                                                        onChange={() => setSelectedRate(rate.id)}
                                                        className="mt-1 h-5 w-5 accent-[#7d562d]"
                                                    />

                                                    <div className="min-w-0 flex-1">
                                                        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                                                            <div>
                                                                <div className="flex flex-wrap items-center gap-2">
                                                                    <h4 className="font-serif text-lg font-medium text-[#020402]">
                                                                        {rate.title}
                                                                    </h4>
                                                                    {rate.tag && (
                                                                        <span className="rounded bg-[#ffdcbd] px-1.5 py-0.5 text-[10px] uppercase text-[#2c1600]">
                                                                            {rate.tag}
                                                                        </span>
                                                                    )}
                                                                </div>
                                                                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#735c00]">
                                                                    {rate.subtitle}
                                                                </span>
                                                            </div>

                                                            <div className="text-left sm:text-right">
                                                                <span className="font-serif text-xl font-semibold">
                                                                    {formatMoney(rate.price)}
                                                                </span>
                                                                <span className="ml-1 text-[13px] text-[#444844]">
                                                                    / night
                                                                </span>
                                                                <p className="text-[11px] text-[#444844]">
                                                                    Excl. taxes & fees ({formatMoney(rate.taxTotal)} net)
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <ul className="mt-2 space-y-1">
                                                            {rate.features.map((feature) => (
                                                                <li
                                                                    key={feature}
                                                                    className="flex items-start gap-1.5 text-[13px] leading-5 text-[#444844]"
                                                                >
                                                                    <Check
                                                                        size={16}
                                                                        className="mt-0.5 shrink-0 text-[#7d562d]"
                                                                    />
                                                                    {feature}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </article>

                                {/* POLICIES */}
                                <article>
                                    <SectionLabel>
                                        Sanctuary Guidelines & Policies
                                    </SectionLabel>

                                    <div className="mt-4 grid grid-cols-1 gap-4 rounded-xl bg-white p-5 shadow-sm md:grid-cols-2 md:p-7">
                                        {POLICIES.map((item) => {
                                            const Icon = item.icon;
                                            return (
                                                <div
                                                    key={item.title}
                                                    className="flex items-start gap-3"
                                                >
                                                    <Icon
                                                        size={22}
                                                        className="mt-0.5 shrink-0 text-[#7d562d]"
                                                    />
                                                    <div>
                                                        <h4 className="text-sm font-semibold">
                                                            {item.title}
                                                        </h4>
                                                        <p className="mt-1 text-[13px] leading-5 text-[#444844]">
                                                            {item.text}
                                                        </p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </article>

                                {/* REVIEWS */}
                                <article
                                    id="suite-reviews"
                                    className="scroll-mt-28"
                                >
                                    <SectionLabel>
                                        Verified Reflections
                                    </SectionLabel>

                                    <div className="mt-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                                        <div>
                                            <h3 className="font-serif text-2xl text-[#020402] md:text-[28px]">
                                                Guest Reflections on the Executive Suite
                                            </h3>
                                            <p className="text-[13px] text-[#444844]">
                                                Based on 148 verified resident evaluations
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-3 rounded-xl bg-[#ebe8e2] px-4 py-2">
                                            <Stars size={18} />
                                            <span className="font-serif text-xl font-semibold">
                                                4.9
                                            </span>
                                            <span className="text-[11px] uppercase tracking-[0.12em] text-[#444844]">
                                                / 5.0
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                                        {REVIEWS.map((review) => (
                                            <div
                                                key={review.guest}
                                                className="flex flex-col justify-between gap-5 rounded-xl bg-white p-5 shadow-sm md:p-7"
                                            >
                                                <div>
                                                    <Stars size={16} />
                                                    <p className="mt-2 font-serif text-lg italic leading-7 text-[#020402]">
                                                        “{review.quote}”
                                                    </p>
                                                    <p className="mt-2 text-[13px] leading-5 text-[#444844]">
                                                        {review.text}
                                                    </p>
                                                </div>

                                                <div className="flex flex-col justify-between gap-2 border-t border-[#e5e2dc] pt-3 text-[11px] uppercase tracking-[0.08em] text-[#444844] sm:flex-row">
                                                    <span>{review.guest}</span>
                                                    <span className="font-semibold text-[#7d562d]">
                                                        {review.date}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </article>
                            </div>

                            {/* =================================================
                                STICKY BOOKING ENGINE
                            ================================================== */}
                            <aside className="lg:col-span-5 lg:sticky lg:top-28 xl:col-span-4">
                                <div className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-xl md:p-7">
                                    <div className="flex items-center justify-between rounded-lg bg-[#ebe8e2] px-3 py-2">
                                        <div className="flex items-center gap-2 text-[#7d562d]">
                                            <ShieldCheck size={18} />
                                            <span className="text-[11px] font-semibold uppercase tracking-[0.12em]">
                                                Best Rate When You Book Direct
                                            </span>
                                        </div>
                                        <span className="hidden text-[10px] text-[#444844] sm:inline">
                                            No Extra Booking Charges
                                        </span>
                                    </div>

                                    <div className="flex items-baseline justify-between border-b border-[#e5e2dc] pb-3">
                                        <div>
                                            <span className="font-serif text-3xl font-bold tracking-tight">
                                                {formatMoney(activeRate.price)}
                                            </span>
                                            <span className="ml-1 text-[13px] text-[#444844]">
                                                / night
                                            </span>
                                        </div>

                                        <div className="text-right">
                                            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7d562d]">
                                                Included
                                            </span>
                                            <p className="text-[12px] text-[#444844]">
                                                Breakfast for 2 Guests
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 rounded-lg bg-[#ffdcbd]/50 px-3 py-2 text-[#2c1600]">
                                        <ArrowUpRight
                                            size={18}
                                            className="text-[#7d562d]"
                                        />
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.08em]">
                                            Direct Booking Benefit: Easy booking support
                                        </p>
                                    </div>

                                    <div>
                                        <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#444844]">
                                            Dates of Stay
                                        </label>

                                        <div className="grid grid-cols-2 gap-1 rounded-xl bg-[#f6f3ed] p-1">
                                            <div className="p-2">
                                                <span className="block text-[10px] uppercase text-[#444844]">
                                                    Check-in
                                                </span>
                                                <div className="mt-1 flex items-center gap-1 text-sm font-semibold">
                                                    <CalendarDays
                                                        size={16}
                                                        className="text-[#7d562d]"
                                                    />
                                                    21 May 2027
                                                </div>
                                            </div>

                                            <div className="border-l border-[#e5e2dc] p-2">
                                                <span className="block text-[10px] uppercase text-[#444844]">
                                                    Check-out
                                                </span>
                                                <div className="mt-1 flex items-center gap-1 text-sm font-semibold">
                                                    <CalendarDays
                                                        size={16}
                                                        className="text-[#7d562d]"
                                                    />
                                                    24 May 2027
                                                </div>
                                            </div>
                                        </div>

                                        <p className="mt-1 text-right text-[11px] font-medium text-[#7d562d]">
                                            3 Nights Stay Selected
                                        </p>
                                    </div>

                                    <div>
                                        <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#444844]">
                                            Occupancy
                                        </label>

                                        <div className="flex items-center justify-between rounded-xl bg-[#f6f3ed] p-3">
                                            <div className="flex items-center gap-2">
                                                <Users
                                                    size={20}
                                                    className="text-[#7d562d]"
                                                />
                                                <span className="text-sm font-semibold">
                                                    2 Adults, 0 Children
                                                </span>
                                            </div>

                                            <button
                                                type="button"
                                                className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7d562d] underline"
                                            >
                                                Edit
                                            </button>
                                        </div>
                                    </div>

                                    <div className="space-y-2 rounded-xl bg-[#f6f3ed]/70 p-4">
                                        <div className="flex justify-between gap-4 text-[13px] text-[#444844]">
                                            <span>
                                                {nights} Nights × {formatMoney(activeRate.price)}
                                            </span>
                                            <span className="font-medium text-[#1c1c18]">
                                                {formatMoney(subtotal)}
                                            </span>
                                        </div>

                                        <div className="flex justify-between gap-4 text-[13px] text-[#444844]">
                                            <span>Breakfast for 2 Guests</span>
                                            <span className="font-medium text-[#7d562d]">
                                                Included
                                            </span>
                                        </div>

                                        <div className="flex justify-between gap-4 text-[13px] text-[#444844]">
                                            <span>Taxes & GST (18%)</span>
                                            <span className="font-medium">
                                                {formatMoney(taxes)}
                                            </span>
                                        </div>

                                        <div className="h-px bg-[#e5e2dc]" />

                                        <div className="flex items-baseline justify-between">
                                            <span className="text-base font-bold">
                                                Estimated Total
                                            </span>
                                            <span className="font-serif text-2xl font-bold">
                                                {formatMoney(total)}
                                            </span>
                                        </div>

                                        <p className="text-right text-[10px] text-[#444844]">
                                            Includes all mandatory taxes & service gratuities
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <button
                                            type="button"
                                            onClick={handleReserve}
                                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#020402] px-4 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-md transition-colors hover:bg-[#7d562d]"
                                        >
                                            Reserve Suite — Instant Confirmation
                                            <ArrowRight size={18} />
                                        </button>

                                        <button
                                            type="button"
                                            className="w-full rounded-xl px-4 py-2.5 text-sm text-[#020402] transition-colors hover:bg-[#ebe8e2]"
                                        >
                                            Hold with 0% Deposit (Pay upon Arrival)
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2 border-t border-[#e5e2dc] pt-3 text-[11px] text-[#444844]">
                                        {[
                                            [LockKeyhole, "256-Bit SSL Checkout"],
                                            [CalendarCheck2, "Free 48h Cancellation"],
                                            [Zap, "Instant Confirmation"],
                                            [CheckCircle2, "No Booking Surcharges"],
                                        ].map(([Icon, text]) => (
                                            <div
                                                key={text}
                                                className="flex items-center gap-1.5"
                                            >
                                                <Icon
                                                    size={16}
                                                    className="text-[#7d562d]"
                                                />
                                                {text}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between rounded-xl bg-[#f0eee8] p-3">
                                        <div className="flex items-center gap-2">
                                            <Headphones
                                                size={20}
                                                className="text-[#7d562d]"
                                            />
                                            <div>
                                                <p className="text-sm font-semibold">
                                                    Need Bespoke Arrangements?
                                                </p>
                                                <p className="text-[10px] text-[#444844]">
                                                    Chauffeur, local experiences & dietary menus
                                                </p>
                                            </div>
                                        </div>

                                        <a
                                            href="https://wa.me/919876543210"
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label="WhatsApp Concierge"
                                            className="rounded-lg bg-[#e5e2dc] p-2 text-[#7d562d] transition-colors hover:bg-[#020402] hover:text-white"
                                        >
                                            <MessageCircle size={18} />
                                        </a>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>

                {/* =================================================
                    ALTERNATIVE ROOMS
                ================================================== */}
                <section className="mt-7 bg-[#f6f3ed] py-12">
                    <div className="mx-auto flex max-w-[1360px] flex-col gap-7 px-4 sm:px-5 md:px-10 lg:px-[4.5rem]">
                        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                            <div>
                                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7d562d]">
                                    Other Room Options
                                </span>

                                <h2 className="mt-1 font-serif text-3xl text-[#020402]">
                                    Explore Other Rooms
                                </h2>
                            </div>

                            <Link
                                href="/rooms"
                                className="flex items-center gap-1 text-sm font-semibold text-[#7d562d] underline underline-offset-4"
                            >
                                View All Rooms
                                <ArrowRight size={16} />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {ALTERNATIVES.map((room) => (
                                <div
                                    key={room.title}
                                    className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
                                >
                                    <div
                                        className="relative h-56 bg-[#ebe8e2]"
                                        style={{
                                            backgroundImage: `url("${room.image}")`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                    >
                                        <span className="absolute right-2 top-2 rounded bg-white/90 px-2 py-1 text-[10px] uppercase tracking-[0.08em] backdrop-blur">
                                            {room.badge}
                                        </span>
                                    </div>

                                    <div className="flex flex-1 flex-col justify-between gap-4 p-4">
                                        <div>
                                            <div className="flex items-baseline justify-between gap-3">
                                                <h3 className="font-serif text-lg font-semibold text-[#020402]">
                                                    {room.title}
                                                </h3>

                                                <span className="font-serif text-xl font-semibold">
                                                    {formatMoney(room.price)}
                                                </span>
                                            </div>

                                            <p className="mt-1 text-[11px] uppercase tracking-[0.08em] text-[#444844]">
                                                {room.meta}
                                            </p>

                                            <p className="mt-2 text-[13px] leading-5 text-[#444844]">
                                                A comfortable and well-maintained room with
                                                modern facilities, good space, and everything
                                                you need for a pleasant stay.
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between border-t border-[#e5e2dc] pt-3">
                                            <span className="text-[11px] text-[#735c00]">
                                                {room.feature}
                                            </span>

                                            <Link
                                                href="/rooms"
                                                className="flex items-center gap-1 text-sm font-semibold text-[#7d562d]"
                                            >
                                                {room.action}
                                                <ChevronRight size={16} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* =====================================================
                MOBILE BOTTOM BAR
            ====================================================== */}
            <aside className="fixed inset-x-0 bottom-0 z-40 pb-[env(safe-area-inset-bottom)] bg-white/95 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] backdrop-blur-md md:hidden">
                <div className="flex items-center gap-2">
                    <Link
                        href="tel:+919876543210"
                        aria-label="Call Concierge"
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#ebe8e2]"
                    >
                        <Phone size={20} />
                    </Link>

                    <Link
                        href="https://wa.me/919876543210"
                        aria-label="WhatsApp Concierge"
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#ebe8e2]"
                    >
                        <MessageCircle size={20} />
                    </Link>

                    <Link
                        href="#suite-rates"
                        className="flex h-12 flex-1 items-center justify-center rounded-lg bg-[#020402] text-sm font-semibold uppercase tracking-[0.08em] text-white"
                    >
                        Book Now
                    </Link>
                </div>
            </aside>

            {/* =====================================================
                BOOKING TOAST
            ====================================================== */}
            <div
                className={`fixed bottom-8 right-5 z-[80] max-w-sm rounded-xl bg-[#020402] p-4 text-white shadow-2xl transition-all duration-300 md:right-8 ${toastOpen
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-4 opacity-0"
                    }`}
            >
                <div className="flex items-start gap-3">
                    <CheckCircle2
                        size={24}
                        className="shrink-0 text-[#ffe088]"
                    />

                    <div className="flex-1">
                        <h4 className="text-sm font-bold">
                            Suite Provisionally Held
                        </h4>
                        <p className="mt-1 text-[13px] leading-5 text-[#e5e2dc]">
                            Executive Suite reserved for May 21 – 24, 2027.
                            Redirecting to concierge guest details...
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={() => setToastOpen(false)}
                        className="text-[#e5e2dc] hover:text-white"
                    >
                        <X size={18} />
                    </button>
                </div>
            </div>
        </main>
    );
}