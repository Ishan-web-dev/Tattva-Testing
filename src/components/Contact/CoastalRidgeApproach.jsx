"use client";

import React from "react";
import Link from "next/link";
import {
    MapPin,
    Navigation,
    ArrowUpRight,
    ShieldCheck,
    Route,
} from "lucide-react";

const MAP_DATA = {
    name: "Tattva Udaipur",
    address:
        "Udaipur, Rajasthan, India",

    // Udaipur coordinates
    latitude: 24.5854,
    longitude: 73.7125,

    // Google Maps location URL
    googleMapsUrl:
        "https://maps.app.goo.gl/LSBErpMYLRMwwUTZ9",

    // Google Maps directions URL
    directionsUrl:
        "https://maps.app.goo.gl/LSBErpMYLRMwwUTZ9",
};

const APPROACH_STEPS = [
    {
        number: "01",
        title: "Reach Tattva Udaipur",
        description:
            "Enjoy an easy arrival to Tattva, surrounded by the peaceful landscape of Udaipur and the Aravalli region.",
    },
    {
        number: "02",
        title: "Arrive & Settle In",
        description:
            "Our team welcomes you on arrival and helps make your check-in smooth and comfortable.",
    },
    {
        number: "03",
        title: "Start Your Rajasthan Journey",
        description:
            "From Tattva, explore Udaipur, Ranakpur, nearby attractions, local culture, and the natural beauty of Rajasthan.",
    },
];

export default function CoastalRidgeApproach() {
    return (
        <section className="w-full bg-[#fcf9f3] py-16 md:py-20 lg:py-24">
            <div className="mx-auto max-w-[1360px] px-5 md:px-10 lg:px-[72px]">
                {/* Heading */}
                <div className="mb-10 max-w-2xl md:mb-14">
                    <div className="mb-3 flex items-center gap-2">
                        <span className="h-px w-8 bg-[#7d562d]" />

                        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7d562d]">
                            Location & Directions
                        </span>
                    </div>

                    <h2 className="font-serif text-3xl font-normal leading-tight tracking-tight text-[#020402] md:text-4xl lg:text-[42px]">
                        Find Your Way to Tattva
                    </h2>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-[#444844] md:text-[15px]">
                        Located in Udaipur, Rajasthan, Tattva offers a peaceful base for
                        exploring the city, Ranakpur, the Aravalli landscape, and the
                        surrounding region.
                    </p>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
                    {/* Left Content */}
                    <div className="flex flex-col lg:col-span-5">
                        {/* Steps */}
                        <div className="flex flex-col">
                            {APPROACH_STEPS.map((step, index) => (
                                <div
                                    key={step.number}
                                    className={`flex gap-4 py-5 ${index !== APPROACH_STEPS.length - 1
                                        ? "border-b border-[#020402]/10"
                                        : ""
                                        }`}
                                >
                                    {/* Number */}
                                    <div className="shrink-0">
                                        <span className="font-serif text-2xl text-[#7d562d]">
                                            {step.number}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="min-w-0">
                                        <h3 className="text-sm font-semibold text-[#020402] md:text-[15px]">
                                            {step.title}
                                        </h3>

                                        <p className="mt-1.5 text-sm leading-6 text-[#444844]">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Location Information */}
                        <div className="mt-7 rounded-xl bg-[#f6f3ed] p-5 md:p-6">
                            <div className="flex items-start gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#ebe8e2] text-[#7d562d]">
                                    <MapPin size={19} />
                                </div>

                                <div className="min-w-0">
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7d562d]">
                                        Hotel Location
                                    </span>

                                    <h3 className="mt-1 text-sm font-semibold text-[#020402]">
                                        Tattva Udaipur
                                    </h3>

                                    <p className="mt-1 text-xs leading-5 text-[#444844]">
                                        {MAP_DATA.address}
                                    </p>
                                </div>
                            </div>

                            {/* Coordinate Details */}
                            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-[#020402]/10 pt-4">
                                <div>
                                    <span className="block text-[9px] font-semibold uppercase tracking-[0.12em] text-[#757873]">
                                        Latitude
                                    </span>

                                    <span className="mt-1 block text-xs font-medium text-[#020402]">
                                        24.5854° N
                                    </span>
                                </div>

                                <div>
                                    <span className="block text-[9px] font-semibold uppercase tracking-[0.12em] text-[#757873]">
                                        Longitude
                                    </span>

                                    <span className="mt-1 block text-xs font-medium text-[#020402]">
                                        73.7125° E
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Map Actions */}
                        <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                            <Link
                                href={MAP_DATA.googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-[#020402] px-4 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#7d562d]"
                            >
                                <MapPin size={16} />
                                Open in Google Maps
                                <ArrowUpRight size={14} />
                            </Link>

                            <Link
                                href={MAP_DATA.directionsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-[#020402]/15 bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#020402] transition-colors hover:border-[#7d562d] hover:text-[#7d562d]"
                            >
                                <Navigation size={16} />
                                Get Directions
                            </Link>
                        </div>
                    </div>

                    {/* Google Map */}
                    <div className="lg:col-span-7">
                        <div className="relative overflow-hidden rounded-xl bg-[#ebe8e2] shadow-[0_18px_45px_-12px_rgba(27,30,27,0.16)]">
                            {/* Map */}
                            <div className="h-[360px] w-full sm:h-[430px] lg:h-[520px]">
                                <iframe
                                    title="UdayHotels Location - Google Maps"
                                    src={`https://www.google.com/maps?q=${MAP_DATA.latitude},${MAP_DATA.longitude}&z=15&output=embed`}
                                    className="h-full w-full border-0"
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>

                            {/* Top Map Badge */}
                            <div className="pointer-events-none absolute left-4 top-4 sm:left-5 sm:top-5">
                                <div className="flex items-center gap-2 rounded-lg border border-[#020402]/10 bg-[#fcf9f3]/95 px-3 py-2 shadow-md backdrop-blur-md">
                                    <span className="relative flex h-2 w-2">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7d562d] opacity-50" />
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7d562d]" />
                                    </span>

                                    <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#020402]">
                                        Hotel Location
                                    </span>
                                </div>
                            </div>

                            {/* Bottom Map Info */}
                            <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-sm">
                                <div className="rounded-lg border border-[#020402]/10 bg-[#fcf9f3]/95 p-4 shadow-lg backdrop-blur-md">
                                    <div className="flex items-start gap-3">
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#ebe8e2] text-[#7d562d]">
                                            <Route size={17} />
                                        </div>

                                        <div className="min-w-0">
                                            <div className="flex items-center gap-2">
                                                <h4 className="text-sm font-semibold text-[#020402]">
                                                    Tattva Udaipur
                                                </h4>

                                                <ShieldCheck
                                                    size={14}
                                                    className="shrink-0 text-[#7d562d]"
                                                />
                                            </div>

                                            <p className="mt-1 text-[11px] leading-5 text-[#444844]">
                                                Udaipur • Rajasthan, India
                                            </p>

                                            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 border-t border-[#020402]/10 pt-2.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#757873]">
                                                <span>Hotel Location</span>
                                                <span>•</span>
                                                <span>Udaipur</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Small Map Note */}
                        <div className="mt-3 flex items-start gap-2 text-[10px] leading-5 text-[#757873]">
                            <MapPin
                                size={13}
                                className="mt-0.5 shrink-0 text-[#7d562d]"
                            />

                            <span>
                                Use the interactive map to zoom, pan, explore
                                the surrounding area, or open the location
                                directly in Google Maps for navigation.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}