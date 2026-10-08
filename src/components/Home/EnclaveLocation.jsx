"use client";

import React from "react";
import {
    ArrowRight,
    CarFront,
    Plane,
    MapPin,
} from "lucide-react";

const ENCLAVE_DATA = {
    eyebrow: "Location & Access",

    title: "Well connected, yet peacefully away from the rush.",

    description:
        "Tattva Udaipur offers a comfortable base for exploring the beauty of Rajasthan. Conveniently located in Udaipur, the hotel makes it easy to discover the city's lakes, palaces, local markets, and nearby destinations including Ranakpur.",

    arrivalOptions: [
        {
            id: 1,
            icon: CarFront,
            text: "Easy access by road from Udaipur city and nearby destinations",
        },
        {
            id: 2,
            icon: Plane,
            text: "Conveniently accessible from Maharana Pratap Airport, Udaipur",
        },
        {
            id: 3,
            icon: MapPin,
            text: "Udaipur, Rajasthan, India",
        },
    ],

    cta: {
        label: "Explore Udaipur",
        href: "#",
    },

    map: {
        location: "Udaipur, Rajasthan, India",

        image:
            "https://i.pinimg.com/736x/b4/a1/39/b4a1393b5d0c51289fd5963212da50e2.jpg",

        title: "Tattva Udaipur",

        coordinates: "Udaipur, Rajasthan, India",

        elevation: "The City of Lakes • Rajasthan",
    },
};

export default function EnclaveLocation() {
    return (
        <section className="w-full bg-[#fcf9f3] py-20 lg:py-20">
            <div className="mx-auto max-w-[1360px] px-5 md:px-10 lg:px-[4.5rem]">
                <div className="rounded-xl bg-[#f6f3ed] p-8 shadow-sm lg:p-12">
                    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">

                        {/* Location Details */}
                        <div className="flex flex-col gap-6 lg:col-span-5">
                            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#7d562d]">
                                {ENCLAVE_DATA.eyebrow}
                            </span>

                            <h2 className="font-serif text-[28px] font-normal leading-tight tracking-tight text-[#020402] md:text-[40px] md:leading-[48px]">
                                {ENCLAVE_DATA.title}
                            </h2>

                            <p className="font-sans text-[15px] font-light leading-7 text-[#444844]">
                                {ENCLAVE_DATA.description}
                            </p>

                            {/* Arrival Options */}
                            <div className="space-y-4 pt-2">
                                {ENCLAVE_DATA.arrivalOptions.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.id}
                                            className="flex items-center gap-3 text-[14px] text-[#020402]"
                                        >
                                            <Icon
                                                size={20}
                                                strokeWidth={1.7}
                                                className="shrink-0 text-[#7d562d]"
                                            />

                                            <span>{item.text}</span>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* CTA */}
                            {/* <div className="pt-4">
                                <a
                                    href={ENCLAVE_DATA.cta.href}
                                    className="inline-flex items-center gap-2 rounded-lg bg-[#020402] px-6 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#7d562d]"
                                >
                                    <span>{ENCLAVE_DATA.cta.label}</span>

                                    <ArrowRight
                                        size={16}
                                        strokeWidth={1.8}
                                    />
                                </a>
                            </div> */}
                        </div>

                        {/* Map Visual */}
                        <div className="lg:col-span-7">
                            <div className="relative overflow-hidden rounded-xl shadow-md">
                                <div
                                    className="h-96 w-full bg-cover bg-center lg:h-[420px]"
                                    style={{
                                        backgroundImage: `url("${ENCLAVE_DATA.map.image}")`,
                                    }}
                                    aria-label={ENCLAVE_DATA.map.location}
                                />

                                {/* Floating Coordinates Badge */}
                                <div className="absolute bottom-4 left-4 flex items-center gap-4 rounded-lg bg-white/95 p-4 shadow-md backdrop-blur-md">
                                    <div className="relative flex h-3 w-3 shrink-0 items-center justify-center">
                                        <span className="absolute h-3 w-3 animate-ping rounded-full bg-[#735c00] opacity-60" />
                                        <span className="relative h-3 w-3 rounded-full bg-[#735c00]" />
                                    </div>

                                    <div className="flex flex-col">
                                        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-[#020402]">
                                            {ENCLAVE_DATA.map.title}
                                        </span>

                                        <span className="mt-1 font-sans text-[11px] leading-4 text-[#444844]">
                                            {ENCLAVE_DATA.map.coordinates}
                                            {" • "}
                                            {ENCLAVE_DATA.map.elevation}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}