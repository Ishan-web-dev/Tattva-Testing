"use client";

import React, { useMemo, useState, useEffect } from "react";
import {
    CalendarDays,
    Users,
    ArrowUpDown,
    Search,
    CheckCircle2,
    Verified,
    Flame,
    Camera,
    Ruler,
    BedDouble,
    UserRound,
    Building2,
    Wifi,
    Coffee,
    Bath,
    Plane,
    Wine,
    Thermometer,
    ShowerHead,
    Cable,
    BriefcaseBusiness,
    Tv,
    LockKeyhole,
    Fan,
    UtensilsCrossed,
    Info,
    Phone,
    MessageCircle,
} from "lucide-react";
import Link from "next/link";

const ROOMS = [
    {
        id: 1,
        category: "suites",
        name: "Executive Suite",
        href: "/roominfo",
        images: [
            "https://i.pinimg.com/736x/6c/0d/b8/6c0db8c2b64d307cbc76ce0201ba6527.jpg",
            "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",
        ],
        size: "68 m² / 730 sq ft",
        bed: "1 King Bed",
        guests: "Up to 3 Guests",
        maxGuests: 3,
        price: 8500,
        taxPrice: 10030,
        description:
            "A spacious and refined suite designed for a relaxed stay, featuring a separate living area, elegant interiors, generous space, and a comfortable setting for couples, families, or business travellers.",
        button: "Book Suite",
    },

    {
        id: 2,
        category: "premium",
        name: "Premium Room",
        href: "/roominfo",
        images: [
            "https://i.pinimg.com/736x/23/85/7a/23857ac822abadba51b5dd165ff75cc3.jpg",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=85",
        ],
        size: "42 m² / 450 sq ft",
        bed: "1 King Bed",
        guests: "Up to 2 Guests",
        maxGuests: 2,
        price: 5500,
        taxPrice: 6490,
        description:
            "A stylish and comfortable room with a well-appointed interior, spacious bedding, a dedicated work area, and modern amenities for a pleasant stay in the city.",
        button: "Select Room",
    },

    {
        id: 3,
        category: "deluxe",
        name: "Deluxe Room",
        href: "/roominfo",
        images: [
            "https://i.pinimg.com/1200x/fc/57/94/fc57945417f5de1c201d37c6f4a5b713.jpg",
            "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85",
        ],
        size: "36 m² / 388 sq ft",
        bed: "1 Queen Bed",
        guests: "Up to 2 Guests",
        maxGuests: 2,
        price: 4200,
        taxPrice: 4956,
        description:
            "A warm and inviting room with comfortable bedding, tasteful interiors, natural textures, and essential modern amenities for a relaxing stay.",
        button: "Select Room",
    },

    {
        id: 4,
        category: "standard",
        name: "Standard Room",
        href: "/roominfo",
        images: [
            "https://i.pinimg.com/1200x/8d/3b/b6/8d3bb6b8b99b76e8f6a098a52b248fe4.jpg",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85",
        ],
        size: "28 m² / 300 sq ft",
        bed: "1 Queen Bed",
        guests: "Up to 2 Guests",
        maxGuests: 2,
        price: 3000,
        taxPrice: 3540,
        description:
            "A comfortable and thoughtfully planned room with quality bedding, a practical work area, modern essentials, and a peaceful atmosphere for a convenient stay.",
        button: "Select Room",
    },
];

const FILTERS = [
    { id: "all", label: "All Accommodations" },
    { id: "standard", label: "Standard Room" },
    { id: "deluxe", label: "Deluxe Room" },
    { id: "premium", label: "Premium Room" },
    { id: "suites", label: "Suite" },
];



function calculateNights(checkIn, checkOut) {
    if (!checkIn || !checkOut) return 0;

    const start = new Date(`${checkIn}T00:00:00`);
    const end = new Date(`${checkOut}T00:00:00`);

    const difference = end.getTime() - start.getTime();

    return difference > 0
        ? Math.ceil(difference / (1000 * 60 * 60 * 24))
        : 0;
}

function PageIntro({ resultsCount, hasAppliedSearch }) {
    return (
        <section className="bg-[#fcf9f3] py-8">
            <div className="mx-auto max-w-[1360px] px-5 md:px-10 lg:px-[72px]">
                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                    <div className="max-w-3xl">
                        <div className="mb-2 flex items-center gap-2 text-[#7d562d]">
                            <span className="h-2 w-2 rounded-full bg-[#7d562d]" />

                            <span className="text-[11px] font-semibold uppercase tracking-[0.12em]">
                                Accommodations & Availability
                            </span>
                        </div>

                        <h1 className="font-serif text-4xl font-normal leading-tight tracking-tight text-[#020402] md:text-6xl">
                            Available Sanctuaries for Your Stay
                        </h1>

                        <p className="mt-3 max-w-2xl text-base leading-7 text-[#444844] md:text-lg">
                            Discover thoughtfully crafted rooms and suites
                            tailored for rest, productivity, and quiet
                            elegance. Filter by category, view real-time
                            inclusions, and reserve with best-rate guarantee.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 rounded-lg bg-[#f6f3ed] px-4 py-3">
                        <Verified
                            size={20}
                            className="shrink-0 text-[#7d562d]"
                        />

                        <div>
                            <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#444844]">
                                Live Booking Engine
                            </div>

                            <div className="text-sm font-medium text-[#020402]">
                                {hasAppliedSearch
                                    ? `${resultsCount} ${resultsCount === 1
                                        ? "Accommodation"
                                        : "Accommodations"
                                    } Available`
                                    : "All 4 Tiers Available for Your Dates"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function BookingFilters({
    activeFilter,
    setActiveFilter,
    sortBy,
    setSortBy,
    bookingData,
    setBookingData,
}) {
    const [draftCheckIn, setDraftCheckIn] = useState(
        bookingData.checkIn
    );
    const [draftCheckOut, setDraftCheckOut] = useState(
        bookingData.checkOut
    );
    const [draftAdults, setDraftAdults] = useState(bookingData.adults);
    const [draftRooms, setDraftRooms] = useState(bookingData.rooms);

    const nights = calculateNights(draftCheckIn, draftCheckOut);

    const today = new Date().toISOString().split("T")[0];

    const handleCheckInChange = (value) => {
        setDraftCheckIn(value);

        if (
            draftCheckOut &&
            new Date(`${value}T00:00:00`) >=
            new Date(`${draftCheckOut}T00:00:00`)
        ) {
            const nextDay = new Date(`${value}T00:00:00`);
            nextDay.setDate(nextDay.getDate() + 1);

            setDraftCheckOut(
                nextDay.toISOString().split("T")[0]
            );
        }
    };

    const handleUpdate = () => {
        if (!draftCheckIn || !draftCheckOut) {
            return;
        }

        if (
            new Date(`${draftCheckOut}T00:00:00`) <=
            new Date(`${draftCheckIn}T00:00:00`)
        ) {
            return;
        }

        setBookingData({
            checkIn: draftCheckIn,
            checkOut: draftCheckOut,
            adults: draftAdults,
            rooms: draftRooms,
            nights,
        });
    };

    return (
        <section className="top-20 z-30 bg-[#fcf9f3]/95 py-2 backdrop-blur-md">
            <div className="mx-auto max-w-[1360px] px-2 min-[400px]:px-5 md:px-10 lg:px-[72px]">
                <div className="rounded-xl bg-white p-2 shadow-md min-[400px]:p-3 md:p-4">
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-12">

                        {/* Dates */}
                        <div className="min-w-0 rounded-lg bg-[#f6f3ed] px-2.5 py-3 min-[400px]:px-4 md:col-span-4">
                            <div className="flex min-w-0 items-center gap-2 min-[400px]:gap-3">
                                <CalendarDays
                                    size={20}
                                    className="shrink-0 text-[#7d562d] min-[400px]:h-[22px] min-[400px]:w-[22px]"
                                />

                                <div className="min-w-0 flex-1">
                                    <div className="truncate text-[9px] font-semibold uppercase tracking-[0.08em] text-[#444844] min-[400px]:text-[10px] min-[400px]:tracking-[0.12em]">
                                        Stay Dates
                                    </div>

                                    <div className="mt-1 flex min-w-0 flex-col gap-1.5 min-[400px]:flex-row min-[400px]:flex-wrap min-[400px]:items-center min-[400px]:gap-2">
                                        <input
                                            type="date"
                                            value={draftCheckIn}
                                            min={today}
                                            onChange={(e) =>
                                                handleCheckInChange(
                                                    e.target.value
                                                )
                                            }
                                            className="min-w-0 w-full cursor-pointer bg-transparent text-[10px] font-semibold text-[#020402] outline-none min-[400px]:max-w-[145px] min-[400px]:text-xs"
                                            aria-label="Check-in date"
                                        />

                                        <span className="hidden text-[#757873] min-[400px]:inline">
                                            →
                                        </span>

                                        <input
                                            type="date"
                                            value={draftCheckOut}
                                            min={
                                                draftCheckIn
                                                    ? draftCheckIn
                                                    : today
                                            }
                                            onChange={(e) =>
                                                setDraftCheckOut(
                                                    e.target.value
                                                )
                                            }
                                            className="min-w-0 w-full cursor-pointer bg-transparent text-[10px] font-semibold text-[#020402] outline-none min-[400px]:max-w-[145px] min-[400px]:text-xs"
                                            aria-label="Check-out date"
                                        />

                                        {nights > 0 && (
                                            <span className="w-fit rounded bg-[#ffdcbd] px-1.5 py-0.5 text-[9px] font-semibold text-[#2c1600] min-[400px]:text-[10px]">
                                                {nights}{" "}
                                                {nights === 1
                                                    ? "Night"
                                                    : "Nights"}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Guests */}
                        <div className="min-w-0 rounded-lg bg-[#f6f3ed] px-2.5 py-3 min-[400px]:px-4 md:col-span-3">
                            <div className="flex min-w-0 items-center gap-2 min-[400px]:gap-3">
                                <Users
                                    size={20}
                                    className="shrink-0 text-[#7d562d] min-[400px]:h-[22px] min-[400px]:w-[22px]"
                                />

                                <div className="min-w-0 flex-1">
                                    <div className="truncate text-[9px] font-semibold uppercase tracking-[0.08em] text-[#444844] min-[400px]:text-[10px] min-[400px]:tracking-[0.12em]">
                                        Guests & Rooms
                                    </div>

                                    <div className="mt-1 flex min-w-0 flex-wrap items-center gap-1">
                                        <select
                                            value={draftAdults}
                                            onChange={(e) =>
                                                setDraftAdults(
                                                    Number(e.target.value)
                                                )
                                            }
                                            className="min-w-0 max-w-full cursor-pointer bg-transparent text-[11px] font-semibold text-[#020402] outline-none min-[400px]:text-sm"
                                            aria-label="Number of adults"
                                        >
                                            {[1, 2, 3, 4, 5, 6].map(
                                                (count) => (
                                                    <option
                                                        key={count}
                                                        value={count}
                                                    >
                                                        {count}{" "}
                                                        {count === 1
                                                            ? "Adult"
                                                            : "Adults"}
                                                    </option>
                                                )
                                            )}
                                        </select>

                                        <span className="text-[#757873]">
                                            •
                                        </span>

                                        <select
                                            value={draftRooms}
                                            onChange={(e) =>
                                                setDraftRooms(
                                                    Number(e.target.value)
                                                )
                                            }
                                            className="min-w-0 max-w-full cursor-pointer bg-transparent text-[11px] font-semibold text-[#020402] outline-none min-[400px]:text-sm"
                                            aria-label="Number of rooms"
                                        >
                                            {[1, 2, 3, 4].map((count) => (
                                                <option
                                                    key={count}
                                                    value={count}
                                                >
                                                    {count}{" "}
                                                    {count === 1
                                                        ? "Room"
                                                        : "Rooms"}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sort */}
                        <div className="flex min-w-0 items-center gap-2 rounded-lg bg-[#f6f3ed] px-2.5 py-3 min-[400px]:gap-3 min-[400px]:px-4 md:col-span-3">
                            <ArrowUpDown
                                size={20}
                                className="shrink-0 text-[#7d562d] min-[400px]:h-[22px] min-[400px]:w-[22px]"
                            />

                            <div className="flex min-w-0 flex-1 flex-col">
                                <label
                                    htmlFor="room-sort"
                                    className="truncate text-[9px] font-semibold uppercase tracking-[0.08em] text-[#444844] min-[400px]:text-[10px] min-[400px]:tracking-[0.12em]"
                                >
                                    Sort By
                                </label>

                                <select
                                    id="room-sort"
                                    value={sortBy}
                                    onChange={(e) =>
                                        setSortBy(e.target.value)
                                    }
                                    className="min-w-0 max-w-full cursor-pointer truncate bg-transparent text-[11px] font-medium text-[#020402] outline-none min-[400px]:text-sm"
                                >
                                    <option value="recommended">
                                        Recommended
                                    </option>

                                    <option value="price-asc">
                                        Price: Low to High
                                    </option>

                                    <option value="price-desc">
                                        Price: High to Low
                                    </option>

                                    <option value="size">
                                        Room Size: Largest First
                                    </option>
                                </select>
                            </div>
                        </div>

                        {/* Update */}
                        <button
                            type="button"
                            onClick={handleUpdate}
                            disabled={
                                !draftCheckIn ||
                                !draftCheckOut ||
                                nights <= 0
                            }
                            className="flex min-w-0 items-center justify-center gap-2 rounded-lg bg-[#020402] px-3 py-3 text-sm font-medium text-white transition hover:bg-[#7d562d] disabled:cursor-not-allowed disabled:opacity-50 md:col-span-2"
                        >
                            <Search
                                size={17}
                                className="shrink-0"
                            />
                            <span>Update</span>
                        </button>
                    </div>

                    {/* Category Filters */}
                    <div className="mt-3 flex min-w-0 flex-col justify-between gap-3 lg:flex-row lg:items-center">
                        <div className="flex min-w-0 flex-wrap gap-1.5 min-[400px]:gap-2">
                            {FILTERS.map((filter) => {
                                const active =
                                    activeFilter === filter.id;

                                const count =
                                    filter.id === "all"
                                        ? ROOMS.length
                                        : ROOMS.filter(
                                            (room) =>
                                                room.category ===
                                                filter.id
                                        ).length;

                                return (
                                    <button
                                        key={filter.id}
                                        type="button"
                                        onClick={() =>
                                            setActiveFilter(filter.id)
                                        }
                                        className={`rounded-full px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.08em] transition min-[400px]:px-4 min-[400px]:py-2 min-[400px]:text-[10px] min-[400px]:tracking-[0.12em] ${active
                                                ? "bg-[#020402] text-white"
                                                : "bg-[#f0eee8] text-[#444844] hover:bg-[#e5e2dc]"
                                            }`}
                                    >
                                        {filter.label} ({count})
                                    </button>
                                );
                            })}
                        </div>

                        <div className="flex min-w-0 items-start gap-2 text-[10px] leading-relaxed text-[#444844] min-[400px]:items-center min-[400px]:text-xs">
                            <CheckCircle2
                                size={15}
                                className="mt-0.5 shrink-0 text-[#7d562d] min-[400px]:mt-0 min-[400px]:h-4 min-[400px]:w-4"
                            />

                            <span className="min-w-0">
                                Free cancellation up to 48 hours prior to
                                arrival
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function RoomCard({ room, bookingData }) {
    const [imageIndex, setImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const totalPrice = room.price * bookingData.nights;
    const totalTaxPrice = room.taxPrice * bookingData.nights;

    useEffect(() => {
        if (!isHovered || !room.images?.length || room.images.length <= 1) {
            return;
        }

        const interval = setInterval(() => {
            setImageIndex((prevIndex) => {
                return (prevIndex + 1) % room.images.length;
            });
        }, 1200);

        return () => clearInterval(interval);
    }, [isHovered, room.images]);

    return (
        <article
            className="group flex w-full flex-row overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setImageIndex(0);
            }}
        >
            {/* Image */}
            <div className="relative h-[240px] w-[38%] shrink-0 overflow-hidden bg-gray-100 sm:h-[280px] sm:w-[40%] lg:h-auto lg:w-2/5">
                {room.images?.map((image, index) => (
                    <img
                        key={image}
                        src={image}
                        alt={`${room.name} view ${index + 1}`}
                        className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out ${imageIndex === index
                                ? "scale-100 opacity-100"
                                : "scale-105 opacity-0"
                            }`}
                    />
                ))}

                {/* Image Indicators */}
                {/* {room.images?.length > 1 && (
                    <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1 rounded-full bg-black/40 px-2 py-1.5">
                        {room.images.map((_, index) => (
                            <span
                                key={index}
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                    imageIndex === index
                                        ? "w-4 bg-white"
                                        : "w-1.5 bg-white/50"
                                }`}
                            />
                        ))}
                    </div>
                )} */}
            </div>

            {/* Content */}
            <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-6 lg:p-8">
                {/* Header */}
                <div className="mb-2 flex items-start justify-between gap-2">
                    <h2 className="min-w-0 font-serif text-lg leading-tight text-gray-900 sm:text-2xl">
                        {room.name}
                    </h2>

                    <div className="shrink-0 text-right">
                        <span className="text-base font-bold text-gray-900 sm:text-xl">
                            ${room.price}
                        </span>

                        <span className="block text-[10px] text-gray-500 sm:text-xs">
                            / night
                        </span>
                    </div>
                </div>

                {/* Details */}
                <div className="mb-3 flex flex-col gap-1.5 text-xs text-gray-600 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2 sm:text-sm">
                    <span className="flex items-center gap-1.5">
                        <UserRound size={14} className="shrink-0 sm:h-4 sm:w-4" />
                        <span className="truncate">{room.guests}</span>
                    </span>

                    <span className="flex items-center gap-1.5">
                        <BedDouble size={14} className="shrink-0 sm:h-4 sm:w-4" />
                        <span className="truncate">{room.bed}</span>
                    </span>

                    <span className="flex items-center gap-1.5">
                        <Ruler size={14} className="shrink-0 sm:h-4 sm:w-4" />
                        <span className="truncate">{room.size}</span>
                    </span>
                </div>

                {/* Description */}
                <p className="mb-3 line-clamp-3 text-xs leading-relaxed text-gray-600 sm:mb-6 sm:line-clamp-2 sm:text-sm">
                    {room.description}
                </p>

                {/* Footer */}
                <div className="mt-auto flex flex-col items-start justify-between gap-3 border-t border-gray-100 pt-3 sm:flex-row sm:items-center sm:gap-4 sm:pt-6">
                    {bookingData.nights > 0 ? (
                        <div className="min-w-0">
                            <p className="mb-0.5 text-[10px] text-gray-500 sm:mb-1 sm:text-xs">
                                {bookingData.nights}{" "}
                                {bookingData.nights === 1
                                    ? "night"
                                    : "nights"}{" "}
                                • {bookingData.rooms}{" "}
                                {bookingData.rooms === 1
                                    ? "room"
                                    : "rooms"}
                            </p>

                            <p className="text-sm font-bold text-gray-900 sm:text-lg">
                                ₹{totalPrice}{" "}
                                <span className="text-[10px] font-normal text-gray-500 sm:text-xs">
                                    + ₹{totalTaxPrice} tax
                                </span>
                            </p>
                        </div>
                    ) : (
                        <div />
                    )}

                    <Link
                        href={room.href}
                        className="w-full shrink-0 rounded-lg bg-black px-4 py-2.5 text-center text-xs font-medium text-white transition-colors duration-300 hover:bg-gray-800 sm:w-auto sm:rounded-xl sm:px-8 sm:py-3 sm:text-sm"
                    >
                        {room.button}
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default function RoomsPage() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [sortBy, setSortBy] = useState("recommended");

    const [bookingData, setBookingData] = useState({
        checkIn: "2026-10-10",
        checkOut: "2026-10-13",
        adults: 2,
        rooms: 1,
        nights: 3,
    });

    const filteredRooms = useMemo(() => {
        let rooms =
            activeFilter === "all"
                ? [...ROOMS]
                : ROOMS.filter(
                    (room) => room.category === activeFilter
                );

        rooms = rooms.filter(
            (room) => bookingData.adults <= room.maxGuests
        );

        if (sortBy === "price-asc") {
            rooms.sort((a, b) => a.price - b.price);
        }

        if (sortBy === "price-desc") {
            rooms.sort((a, b) => b.price - a.price);
        }

        if (sortBy === "size") {
            rooms.sort((a, b) => {
                const sizeA = parseInt(a.size);
                const sizeB = parseInt(b.size);

                return sizeB - sizeA;
            });
        }

        return rooms;
    }, [activeFilter, sortBy, bookingData.adults]);

    return (
        <main className="min-h-screen bg-[#fcf9f3] text-[#1c1c18]">
            <div className="pt-20">
                <PageIntro
                    resultsCount={filteredRooms.length}
                    hasAppliedSearch={bookingData.nights > 0}
                />
                <BookingFilters
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    bookingData={bookingData}
                    setBookingData={setBookingData}
                />
                {/* Room Showcase */}
                <section className="w-full py-12 md:py-16">
                    <div className="mx-auto flex max-w-[1360px] flex-col gap-8 px-5 md:px-10 lg:px-[72px]">
                        {filteredRooms.length > 0 ? (
                            filteredRooms.map((room) => (
                                <RoomCard
                                    key={room.id}
                                    room={room}
                                    bookingData={bookingData}
                                />
                            ))
                        ) : (
                            <div className="rounded-xl bg-white p-12 text-center">
                                <h3 className="font-serif text-2xl text-[#020402]">
                                    No accommodations found
                                </h3>

                                <p className="mt-2 text-sm text-[#444844]">
                                    Try selecting another room category or
                                    reducing the number of guests.
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </main>
    );
}
