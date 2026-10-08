"use client";

import React from "react";
import {
    CalendarDays,
} from "lucide-react";

const SANCTUARY_DATA = {
    eyebrow: "A Stay Shaped Around You",

    title: "Tailor Your Sanctuary Experience",

    description:
        "From private transfers and restorative rituals to dining preferences and thoughtful in-residence details, our team is here to shape every element of your stay around you.",

    primaryAction: {
        label: "Plan Your Stay",
        href: "/contact",
        icon: CalendarDays,
    },


};

function SanctuaryServiceCard({ service }) {
    const Icon = service.icon;

    return (
        <article className="group border border-white/10 bg-white/[0.04] p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.07] sm:p-7 lg:p-8">
            <div className="mb-7 flex h-11 w-11 items-center justify-center border border-[#cca830]/40 text-[#cca830] transition-colors duration-300 group-hover:bg-[#cca830] group-hover:text-[#1b1e1b]">
                <Icon size={20} strokeWidth={1.5} />
            </div>

            <h3 className="font-serif text-xl leading-tight text-[#fcf9f3] sm:text-2xl">
                {service.title}///////////////////////
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/60 sm:text-[15px]">
                {service.description}
            </p>

            <div className="mt-7 h-px w-10 bg-[#cca830]/50 transition-all duration-500 group-hover:w-16" />
        </article>
    );
}

export default function TailorSanctuaryExperience() {
    return (
        <section
            id="tailor-experience"
            className="relative overflow-hidden bg-[#1b1e1b] text-[#fcf9f3]"
        >
            {/* Decorative background */}
            <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full border border-[#cca830]/10" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-[300px] w-[300px] rounded-full border border-[#cca830]/10" />
        </section>
    );
}