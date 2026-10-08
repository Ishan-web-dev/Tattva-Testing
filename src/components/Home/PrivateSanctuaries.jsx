"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    ArrowRight,
} from "lucide-react";

const SANCTUARY_DATA = {
    header: {
        eyebrow: "STAY WITH TATTVA",

        title: "Elegant Rooms & Suites",

        description:
            "Experience comfortable rooms and suites designed with refined interiors, modern amenities, and the warm hospitality of Rajasthan.",

        exploreLabel: "Explore Our Rooms",

        exploreHref: "/rooms",
    },

    filters: [
        {
            id: "all",
            label: "All Sanctuaries",
            count: 20,
        },
        {
            id: "suites",
            label: "Suites",
            count: 5,
        },
        {
            id: "rooms",
            label: "Rooms & Enclaves",
            count: 5,
        },
        {
            id: "penthouses",
            label: "Penthouses",
            count: 5,
        },
        {
            id: "villas",
            label: "Private Villas & Estates",
            count: 5,
        },
    ],

    sanctuaries: [
        {
            id: 1,
            category: "suites",
            image:
                "https://i.pinimg.com/736x/ac/91/58/ac915813a7f6e8cd51e9b56ab2a00dc3.jpg",
            title: "Executive Suite",
            price: "₹8,500",
        },

        {
            id: 2,
            category: "premium",
            image:
                "https://i.pinimg.com/736x/b8/fa/6c/b8fa6ce1f96d4c894a04c8ae20b2d136.jpg",
            title: "Premium King Room",
            price: "₹5,500",
        },

        {
            id: 3,
            category: "deluxe",
            image:
                "https://i.pinimg.com/1200x/0a/15/c6/0a15c68b6d7ab59b9e513432aac3f4d0.jpg",
            title: "Deluxe Room",
            price: "₹4,200",
        },

        {
            id: 4,
            category: "standard",
            image:
                "https://i.pinimg.com/1200x/a7/31/f0/a731f04211a660c5f603a8e77942cbd3.jpg",
            title: "Standard Room",
            price: "₹3,000",
        },

        {
            id: 5,
            category: "premium",
            image:
                "https://i.pinimg.com/736x/bf/23/fd/bf23fda6624a16398d55ff42c61e1653.jpg",
            title: "Premium Twin Room",
            price: "₹5,800",
        },

        {
            id: 6,
            category: "suites",
            image:
                "https://i.pinimg.com/736x/28/35/62/283562f33d8c66309609b0bd4ed48172.jpg",
            title: "Deluxe Suite",
            price: "₹7,500",
        },

        {
            id: 7,
            category: "deluxe",
            image:
                "https://i.pinimg.com/1200x/f3/1c/f8/f31cf88530f88da002f79a58306ae387.jpg",
            title: "Deluxe King Room",
            price: "₹4,500",
        },

        {
            id: 8,
            category: "standard",
            image:
                "https://i.pinimg.com/1200x/db/dc/43/dbdc43f80a7df04919bebd0002c5c486.jpg",
            title: "Standard Twin Room",
            price: "₹3,200",
        },

        {
            id: 9,
            category: "suites",
            image:
                "https://i.pinimg.com/1200x/84/e5/13/84e513eba7056086638817c4d740dd56.jpg",
            title: "Executive King Suite",
            price: "₹8,800",
        },

        {
            id: 10,
            category: "premium",
            image:
                "https://i.pinimg.com/736x/1c/80/0d/1c800d2d2684bcf001bcbb5d7ad52145.jpg",
            title: "Premium City View Room",
            price: "₹5,200",
        },

        {
            id: 11,
            category: "deluxe",
            image:
                "https://i.pinimg.com/1200x/55/67/dc/5567dcf79ea31eff6a9b4d8430214c27.jpg",
            title: "Deluxe Twin Room",
            price: "₹4,400",
        },

        {
            id: 12,
            category: "standard",
            image:
                "https://i.pinimg.com/736x/42/fc/9a/42fc9a8383520d0c0ef509074c493623.jpg",
            title: "Standard King Room",
            price: "₹3,100",
        },


    ],
};

export default function PrivateSanctuaries() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSanctuaries =
        activeCategory === "all"
            ? SANCTUARY_DATA.sanctuaries
            : SANCTUARY_DATA.sanctuaries.filter(
                (item) => item.category === activeCategory
            );

    return (
        <section className="w-full bg-[#fcf9f3] py-14 sm:py-16 md:py-20 lg:py-28">
            <div className="mx-auto max-w-[1360px] px-4 sm:px-6 md:px-10 lg:px-[4.5rem]">

                {/* ================= HEADER ================= */}
                <div className="flex flex-col gap-6 pb-8 md:flex-row md:items-end md:justify-between">
                    <div className="flex max-w-xl flex-col gap-2">
                        <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-[#7d562d] sm:text-[11px]">
                            {SANCTUARY_DATA.header.eyebrow}
                        </span>

                        <h2 className="font-serif text-[28px] font-normal leading-9 tracking-tight text-[#020402] sm:text-[32px] md:text-[40px] md:leading-[48px]">
                            {SANCTUARY_DATA.header.title}
                        </h2>

                        <p className="font-sans text-[14px] leading-6 text-[#444844] sm:text-[15px]">
                            {SANCTUARY_DATA.header.description}
                        </p>
                    </div>

                    <Link
                        href={SANCTUARY_DATA.header.exploreHref}
                        className="group inline-flex items-center gap-2 self-start font-sans text-sm font-medium text-[#020402] underline decoration-[#7d562d]/40 underline-offset-8 transition-colors hover:text-[#7d562d] hover:decoration-[#7d562d] md:self-auto"
                    >
                        {SANCTUARY_DATA.header.exploreLabel}

                        <ArrowRight
                            size={16}
                            strokeWidth={1.5}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>

                {/* ================= FILTERS ================= */}
                <div className="flex gap-2 overflow-x-auto pb-8 pt-2 scrollbar-hide md:flex-wrap md:overflow-visible md:gap-3">
                    {SANCTUARY_DATA.filters.map((filter) => {
                        const isActive = activeCategory === filter.id;

                        return (
                            <button
                                key={filter.id}
                                type="button"
                                onClick={() =>
                                    setActiveCategory(filter.id)
                                }
                                className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 font-sans text-xs font-medium transition-all duration-300 sm:px-5 sm:text-sm ${isActive
                                    ? "bg-[#020402] text-white shadow-sm"
                                    : "bg-[#f0eee8] text-[#444844] hover:bg-[#e5e2dc] hover:text-[#020402]"
                                    }`}
                            >
                                <span>{filter.label}</span>

                                <span
                                    className={`rounded-full px-2 py-0.5 text-[10px] sm:text-[11px] ${isActive
                                        ? "bg-white/20 text-white"
                                        : "bg-[#e5e2dc] text-[#444844]"
                                        }`}
                                >
                                    {filter.count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* ================= SANCTUARY GRID ================= */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredSanctuaries.map((sanctuary) => (
                        <Link
                            key={sanctuary.id}
                            href={`/rooms/${sanctuary.id}`}
                            className="group relative block"
                        >
                            {/* IMAGE */}
                            <div className="relative overflow-hidden rounded-[24px] sm:rounded-[30px] lg:rounded-[34px]">
                                <div className="aspect-[4/5] overflow-hidden">
                                    <img
                                        src={sanctuary.image}
                                        alt={sanctuary.title}
                                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                </div>

                                {/* IMAGE OVERLAY */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70" />

                                {/* CATEGORY */}
                                <div className="absolute left-3 top-3 sm:left-5 sm:top-5">
                                    <span className="rounded-full bg-white/90 px-2.5 py-1.5 font-sans text-[7px] font-semibold uppercase tracking-[0.12em] text-[#020402] backdrop-blur-sm sm:px-4 sm:py-2 sm:text-[9px] sm:tracking-[0.16em]">
                                        {sanctuary.category}
                                    </span>
                                </div>

                                {/* IMAGE NUMBER */}
                                <span className="absolute right-3 top-3 font-serif text-xs text-white/90 sm:right-5 sm:top-5 sm:text-sm">
                                    {String(sanctuary.id).padStart(2, "0")}
                                </span>
                            </div>

                            {/* FLOATING CONTENT CARD */}
                            <div className="relative z-10 -mt-10 mx-2 rounded-[20px] bg-[#fcf9f3] p-3.5 shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:-translate-y-2 sm:-mt-14 sm:mx-3 sm:rounded-[24px] sm:p-4 lg:-mt-16 lg:mx-4 lg:rounded-[26px] lg:p-5">

                                {/* META */}
                                <div className="mb-2 flex items-center justify-between sm:mb-3">
                                    <span className="truncate pr-2 font-sans text-[7px] uppercase tracking-[0.12em] text-[#8b8b85] sm:text-[9px] sm:tracking-[0.16em]">
                                        {sanctuary.location || "Tattva Hotel"}
                                    </span>

                                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#7d562d]" />
                                </div>

                                {/* TITLE */}
                                <h3 className="line-clamp-2 pr-1 font-serif text-[16px] leading-[1.15] text-[#020402] transition-colors duration-300 group-hover:text-[#7d562d] sm:pr-4 sm:text-[20px] lg:text-[23px]">
                                    {sanctuary.title}
                                </h3>

                                {/* BOTTOM */}
                                <div className="mt-3 flex items-center justify-between border-t border-[#e5e1d9] pt-3 sm:mt-4 sm:pt-4 lg:mt-5">
                                    <div>
                                        <p className="font-sans text-[7px] uppercase tracking-[0.12em] text-[#999] sm:text-[8px] sm:tracking-[0.14em]">
                                            From
                                        </p>

                                        <p className="mt-1 font-sans text-[11px] font-medium text-[#020402] sm:text-[13px]">
                                            {sanctuary.price}
                                            <span className="ml-1 text-[7px] font-normal text-[#999] sm:text-[9px]">
                                                / night
                                            </span>
                                        </p>
                                    </div>s

                                    {/* ROUND ARROW */}
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d8d3ca] text-[#020402] transition-all duration-300 group-hover:border-[#7d562d] group-hover:bg-[#7d562d] group-hover:text-white sm:h-9 sm:w-9">


                                        <ArrowRight
                                            size={14}
                                            strokeWidth={1.5}
                                            className="transition-transform duration-300 group-hover:translate-x-0.5 sm:h-[15px] sm:w-[15px]"
                                        />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}