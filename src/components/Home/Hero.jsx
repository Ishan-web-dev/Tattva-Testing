"use client";

import React, { useState } from "react";
import {
    CalendarDays,
    Users,
    ChevronDown,
    ArrowRight,
    LockKeyhole,
    Car,
} from "lucide-react";

const HERO_DATA = {
    location: "Udaipur • Ranakpur • Rajasthan",

    awards: [
        "Luxury Heritage Stay",
        "Authentic Rajasthan Hospitality",
    ],

    eyebrow: "The Art of Timeless Rajasthan",

    title: "A refined stay surrounded by the spirit of Rajasthan.",

    description:
        "Discover Tattva Udaipur, a peaceful retreat inspired by the timeless beauty of Rajasthan, where warm hospitality, elegant spaces, and the charm of the Aravalli landscape come together for a memorable stay.",

    booking: [
        {
            id: "arrival",
            type: "date",
            label: "Arrival",
            icon: CalendarDays,
            value: "2026-10-14",
            note: "Check-in from 14:00",
            grid: "lg:col-span-3",
        },
        {
            id: "departure",
            type: "date",
            label: "Departure",
            icon: CalendarDays,
            value: "2026-10-20",
            note: "Plan a Relaxed Rajasthan Stay",
            grid: "lg:col-span-3",
        },
        {
            id: "accommodation",
            type: "guests",
            label: "Guests",
            icon: Users,
            value: "2 Guests • Room",
            note: "Comfortable Stay in Udaipur",
            grid: "lg:col-span-3",
        },
    ],

    cta: {
        label: "Explore Rooms",
        href: "/rooms",
    },

    benefits: [
        {
            icon: LockKeyhole,
            text: "Best Available Rate Guaranteed",
        },
        {
            icon: Car,
            text: "Comfortable Travel Assistance Available",
        },
    ],

    coordinates: "Udaipur • Rajasthan, India",
};

export default function Hero() {
    const [arrival, setArrival] = useState("2026-10-14");
    const [departure, setDeparture] = useState("2026-10-20");
    const [guests, setGuests] = useState(2);
    const [roomType, setRoomType] = useState("Suite");
    const [guestOpen, setGuestOpen] = useState(false);

    const bookingValues = {
        arrival,
        departure,
        accommodation: `${guests} ${guests === 1 ? "Guest" : "Guests"
            } • ${roomType}`,
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Booking Search:", bookingValues);

        window.location.href = `/rooms?arrival=${arrival}&departure=${departure}&guests=${guests}&room=${roomType}`;
    };

    return (
        <section
            className="
                relative
                min-h-[92svh]
                w-full
                overflow-hidden
                bg-[#151815]
                text-white
                lg:min-h-screen
            "
        >
            {/* =====================================================
                BACKGROUND VIDEO
            ====================================================== */}
            <div className="absolute inset-0 z-0">
                <video
                    src="/Media/v2.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="
                        h-full
                        w-full
                        scale-105
                        object-cover
                        object-center
                    "
                />

                {/* Bottom gradient */}
                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#131613]
                        via-[#151815]/55
                        to-[#151815]/15
                    "
                />

                {/* Side gradient */}
                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-[#151815]/85
                        via-transparent
                        to-[#151815]/55
                    "
                />
            </div>

            {/* =====================================================
                HERO CONTENT
            ====================================================== */}
            <div
                className="
                    relative
                    z-10
                    mx-auto
                    flex
                    min-h-[92svh]
                    w-full
                    max-w-[1400px]
                    flex-col
                    px-4
                    pb-4
                    pt-24
                    sm:px-6
                    sm:pb-7
                    sm:pt-28
                    md:px-10
                    lg:min-h-screen
                    lg:justify-between
                    lg:px-16
                    lg:pb-12
                    lg:pt-36
                "
            >
                {/* ===================================================
                    TOP META
                ==================================================== */}
                <div
                    className="
                        flex
                        flex-col
                        gap-5
                        md:flex-row
                        md:items-center
                        md:justify-between
                    "
                >
                    {/* Location intentionally hidden */}
                </div>

                {/* ===================================================
                    MAIN CONTENT
                ==================================================== */}
                <div
                    className="
                        flex
                        flex-1
                        items-center
                        py-8
                        sm:py-12
                        lg:flex-none
                        lg:py-20
                    "
                >
                    <div className="max-w-4xl">
                        {/* Eyebrow */}
                        <p
                            className="
                                mb-4
                                text-[9px]
                                font-semibold
                                uppercase
                                tracking-[0.22em]
                                text-[#f0bd8a]
                                sm:text-[11px]
                                sm:tracking-[0.25em]
                            "
                        >
                            {HERO_DATA.eyebrow}
                        </p>

                        {/* Heading */}
                        <h1
                            className="
                                max-w-4xl
                                font-serif
                                text-[34px]
                                font-normal
                                leading-[1.05]
                                tracking-[-0.02em]
                                text-white
                                sm:text-5xl
                                md:text-6xl
                                lg:text-[64px]
                                lg:leading-[1.04]
                            "
                        >
                            {HERO_DATA.title}
                        </h1>

                        {/* Description intentionally hidden */}
                    </div>
                </div>

                {/* ===================================================
                    MINIMAL BOOKING BAR
                ==================================================== */}
                <div
                    className="
                        relative
                        z-20
                        mt-auto
                        w-full
                        rounded-xl
                        bg-white/95
                        p-1.5
                        text-[#171915]
                        shadow-[0_12px_40px_rgba(0,0,0,0.25)]
                        backdrop-blur-sm
                        sm:rounded-2xl
                        sm:p-2.5
                        lg:mt-0
                    "
                >
                    <form
                        onSubmit={handleSubmit}
                        className="
                            grid
                            grid-cols-1
                            gap-1.5
                            sm:grid-cols-2
                            lg:grid-cols-12
                            lg:gap-2
                        "
                    >
                        {/* =================================================
                            BOOKING FIELDS
                        ================================================== */}
                        {HERO_DATA.booking.map((field) => {
                            const Icon = field.icon;

                            return (
                                <div
                                    key={field.id}
                                    className={`
                                        relative
                                        flex
                                        min-h-[52px]
                                        flex-col
                                        justify-center
                                        rounded-lg
                                        bg-[#f6f3ed]
                                        px-3
                                        py-1.5
                                        transition-colors
                                        hover:bg-[#efebe3]
                                        sm:min-h-[64px]
                                        sm:px-3.5
                                        sm:py-2.5
                                        lg:min-h-[68px]
                                        ${field.grid}
                                    `}
                                >
                                    {/* Label */}
                                    <label
                                        htmlFor={field.id}
                                        className="
                                            mb-0.5
                                            flex
                                            items-center
                                            gap-1
                                            text-[8px]
                                            font-bold
                                            uppercase
                                            tracking-[0.12em]
                                            text-[#7d562d]
                                            sm:text-[9px]
                                        "
                                    >
                                        <Icon
                                            size={12}
                                            strokeWidth={1.8}
                                            className="sm:h-[13px] sm:w-[13px]"
                                        />

                                        {field.label}
                                    </label>

                                    {/* =================================================
                                        ARRIVAL
                                    ================================================== */}
                                    {field.id === "arrival" && (
                                        <>
                                            <input
                                                id="arrival"
                                                type="date"
                                                value={arrival}
                                                min={
                                                    new Date()
                                                        .toISOString()
                                                        .split("T")[0]
                                                }
                                                onChange={(e) =>
                                                    setArrival(e.target.value)
                                                }
                                                className="
                                                    w-full
                                                    cursor-pointer
                                                    bg-transparent
                                                    font-serif
                                                    text-sm
                                                    outline-none
                                                    sm:text-base
                                                "
                                            />

                                            <span
                                                className="
                                                    hidden
                                                    text-[9px]
                                                    text-[#555951]
                                                    sm:block
                                                "
                                            >
                                                {field.note}
                                            </span>
                                        </>
                                    )}

                                    {/* =================================================
                                        DEPARTURE
                                    ================================================== */}
                                    {field.id === "departure" && (
                                        <>
                                            <input
                                                id="departure"
                                                type="date"
                                                value={departure}
                                                min={arrival}
                                                onChange={(e) =>
                                                    setDeparture(e.target.value)
                                                }
                                                className="
                                                    w-full
                                                    cursor-pointer
                                                    bg-transparent
                                                    font-serif
                                                    text-sm
                                                    outline-none
                                                    sm:text-base
                                                "
                                            />

                                            <span
                                                className="
                                                    hidden
                                                    text-[9px]
                                                    text-[#555951]
                                                    sm:block
                                                "
                                            >
                                                {field.note}
                                            </span>
                                        </>
                                    )}

                                    {/* =================================================
                                        ACCOMMODATION
                                    ================================================== */}
                                    {field.id === "accommodation" && (
                                        <div className="relative">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setGuestOpen(
                                                        (prev) => !prev
                                                    )
                                                }
                                                className="
                                                    flex
                                                    w-full
                                                    items-center
                                                    justify-between
                                                    gap-2
                                                    text-left
                                                    outline-none
                                                "
                                            >
                                                <span className="truncate font-serif text-sm sm:text-base">
                                                    {
                                                        bookingValues.accommodation
                                                    }
                                                </span>

                                                <ChevronDown
                                                    size={14}
                                                    className={`
                                                        shrink-0
                                                        transition-transform
                                                        duration-200
                                                        ${guestOpen
                                                            ? "rotate-180"
                                                            : ""
                                                        }
                                                    `}
                                                />
                                            </button>

                                            <span
                                                className="
                                                    mt-0.5
                                                    hidden
                                                    text-[9px]
                                                    text-[#555951]
                                                    sm:block
                                                "
                                            >
                                                {field.note}
                                            </span>

                                            {/* =================================================
                                                GUEST DROPDOWN
                                            ================================================== */}
                                            {guestOpen && (
                                                <div
                                                    className="
                                                        absolute
                                                        bottom-[calc(100%+6px)]
                                                        left-0
                                                        right-0
                                                        z-[999]
                                                        min-w-[230px]
                                                        rounded-xl
                                                        border
                                                        border-black/5
                                                        bg-white
                                                        p-3
                                                        text-[#171915]
                                                        shadow-[0_15px_40px_rgba(0,0,0,0.18)]
                                                        sm:p-4
                                                    "
                                                >
                                                    {/* Guests */}
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <p className="text-sm font-medium">
                                                                Guests
                                                            </p>

                                                            <p className="text-[10px] text-black/45">
                                                                Adults &
                                                                children
                                                            </p>
                                                        </div>

                                                        <div className="flex items-center gap-2.5">
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    setGuests(
                                                                        (
                                                                            prev
                                                                        ) =>
                                                                            Math.max(
                                                                                1,
                                                                                prev -
                                                                                1
                                                                            )
                                                                    )
                                                                }
                                                                className="
                                                                    flex
                                                                    h-7
                                                                    w-7
                                                                    items-center
                                                                    justify-center
                                                                    rounded-full
                                                                    border
                                                                    border-black/10
                                                                    text-sm
                                                                    transition
                                                                    hover:bg-black
                                                                    hover:text-white
                                                                "
                                                            >
                                                                −
                                                            </button>

                                                            <span className="w-4 text-center text-sm">
                                                                {guests}
                                                            </span>

                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    setGuests(
                                                                        (
                                                                            prev
                                                                        ) =>
                                                                            Math.min(
                                                                                8,
                                                                                prev +
                                                                                1
                                                                            )
                                                                    )
                                                                }
                                                                className="
                                                                    flex
                                                                    h-7
                                                                    w-7
                                                                    items-center
                                                                    justify-center
                                                                    rounded-full
                                                                    border
                                                                    border-black/10
                                                                    text-sm
                                                                    transition
                                                                    hover:bg-black
                                                                    hover:text-white
                                                                "
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="my-3 h-px bg-black/5" />

                                                    {/* Room Type */}
                                                    <div>
                                                        <p className="mb-2 text-sm font-medium">
                                                            Room Type
                                                        </p>

                                                        <div className="grid grid-cols-3 gap-2">
                                                            {[
                                                                "Standard",
                                                                "Deluxe",
                                                                "Suite",
                                                            ].map((room) => (
                                                                <button
                                                                    key={room}
                                                                    type="button"
                                                                    onClick={() =>
                                                                        setRoomType(
                                                                            room
                                                                        )
                                                                    }
                                                                    className={`
                                                                        rounded-lg
                                                                        border
                                                                        px-2
                                                                        py-2
                                                                        text-[10px]
                                                                        transition
                                                                        ${roomType ===
                                                                            room
                                                                            ? "border-[#7d562d] bg-[#7d562d] text-white"
                                                                            : "border-black/10 hover:border-[#7d562d]"
                                                                        }
                                                                    `}
                                                                >
                                                                    {room}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Done */}
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setGuestOpen(false)
                                                        }
                                                        className="
                                                            mt-3
                                                            w-full
                                                            rounded-lg
                                                            bg-[#171915]
                                                            py-2
                                                            text-[10px]
                                                            font-medium
                                                            uppercase
                                                            tracking-wider
                                                            text-white
                                                            transition
                                                            hover:bg-[#7d562d]
                                                        "
                                                    >
                                                        Done
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })}

                        {/* =================================================
                            CTA
                        ================================================== */}
                        <div className="flex sm:col-span-2 lg:col-span-3">
                            <button
                                type="submit"
                                className="
                                    group
                                    flex
                                    min-h-[52px]
                                    w-full
                                    items-center
                                    justify-center
                                    gap-1.5
                                    rounded-lg
                                    bg-[#171915]
                                    px-4
                                    py-2.5
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.14em]
                                    text-white
                                    transition-all
                                    duration-300
                                    hover:bg-[#7d562d]
                                    active:scale-[0.99]
                                    sm:min-h-[64px]
                                    sm:text-xs
                                    lg:min-h-[68px]
                                "
                            >
                                <span>{HERO_DATA.cta.label}</span>

                                <ArrowRight
                                    size={14}
                                    className="
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-1
                                    "
                                />
                            </button>
                        </div>
                    </form>
                </div>

                {/* ===================================================
                    BOTTOM META
                ==================================================== */}
                <div
                    className="
                        flex
                        items-center
                        justify-between
                        gap-3
                        pt-2
                        text-[9px]
                        text-white/60
                        sm:pt-4
                        sm:text-[10px]
                    "
                >
                    {/* Benefits */}
                    <div className="flex items-center gap-4">
                        {HERO_DATA.benefits.map((benefit, index) => {
                            const Icon = benefit.icon;

                            return (
                                <div
                                    key={benefit.text}
                                    className={`
                                        flex
                                        items-center
                                        gap-1.5
                                        ${index === 1
                                            ? "hidden sm:flex"
                                            : "flex"
                                        }
                                    `}
                                >
                                    <Icon
                                        size={12}
                                        strokeWidth={1.5}
                                        className="shrink-0 text-[#ffe088]"
                                    />

                                    <span>{benefit.text}</span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Coordinates */}
                    <span
                        className="
                            hidden
                            text-[8px]
                            font-semibold
                            uppercase
                            tracking-[0.1em]
                            text-white/40
                            sm:block
                            sm:text-right
                        "
                    >
                        {HERO_DATA.coordinates}
                    </span>
                </div>
            </div>
        </section>
    );
}