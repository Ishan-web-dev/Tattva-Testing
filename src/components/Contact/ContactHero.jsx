"use client";

import React from "react";
import { ArrowDown, } from "lucide-react";

const CONTACT_HERO_DATA = {
    breadcrumb: {
        section: "Tattva Udaipur",
        current: "Contact Us",
    },

    eyebrow: "Contact & Guest Assistance",

    title: {
        main: "We’re Here to Help:",
        highlight: "Connect with Tattva Udaipur.",
    },

    description:
        "Have a question about your stay, rooms, dining, directions, or local experiences? Our team is happy to help you plan a comfortable stay in Udaipur and make your Rajasthan journey easier.",

    image: {
        src: "/Media/B1.jpeg",
        alt: "Tattva Udaipur hotel and peaceful surroundings",
        label: "Tattva Udaipur • Rajasthan",
        caption: "Warm hospitality, thoughtful service, and a comfortable stay.",
    },

    actions: [
        {
            label: "Send an Inquiry",
            href: "#inquiry",
            primary: true,
        },
        {
            label: "Call Our Team",
            href: "tel:+911418902300",
            primary: false,
        },
    ],
};

export default function ContactHero() {
    return (
        <section className="w-full bg-[#fcf9f3]">
            {/* Breadcrumb / Status Bar */}
            <div className="border-b border-[#020402]/5 bg-[#f6f3ed]/60">
                <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-4 px-5 py-3 md:px-10 lg:px-[72px]">
                    <div className="flex min-w-0 items-center gap-2 overflow-hidden text-[10px] font-semibold uppercase tracking-[0.14em] text-[#444844]">
                        <span className="shrink-0">
                            {CONTACT_HERO_DATA.breadcrumb.section}
                        </span>

                        <span className="shrink-0 text-[#7d562d]">/</span>

                        <span className="truncate text-[#020402]">
                            {CONTACT_HERO_DATA.breadcrumb.current}
                        </span>
                    </div>

                    <div className="hidden shrink-0 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#7d562d] sm:flex">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-[#7d562d]" />
                        <span>Concierge Desk Active</span>
                    </div>
                </div>
            </div>

            {/* Main Hero */}
            <div className="mx-auto max-w-[1360px] px-5 py-12 md:px-10 md:py-16 lg:px-[72px] lg:py-20">
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
                    {/* Content */}
                    <div className="flex flex-col lg:col-span-7">
                        {/* Eyebrow */}
                        <div className="mb-5 flex items-center gap-3 md:mb-6">
                            <span className="h-px w-8 shrink-0 bg-[#7d562d] md:w-10" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7d562d] md:text-[11px]">
                                {CONTACT_HERO_DATA.eyebrow}
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="max-w-4xl font-serif text-[38px] font-normal leading-[1.08] tracking-[-0.02em] text-[#020402] sm:text-[46px] md:text-[54px] lg:text-[60px]">
                            {CONTACT_HERO_DATA.title.main}{" "}
                            <span className=" text-[#95632d]">
                                {CONTACT_HERO_DATA.title.highlight}
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-6 max-w-2xl text-[14px] leading-7 text-[#444844] sm:text-[15px] md:mt-7 md:text-[16px] md:leading-8">
                            {CONTACT_HERO_DATA.description}
                        </p>

                        {/* Actions */}


                        {/* Scroll Indicator */}
                        <div className="mt-10 hidden items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#757873] sm:flex">
                            <div className="flex h-8 w-5 items-start justify-center rounded-full border border-[#757873]/40 p-1">
                                <span className="h-1.5 w-1 rounded-full bg-[#7d562d]" />
                            </div>

                            <span>Explore the concierge desk</span>

                            <ArrowDown
                                size={13}
                                className="text-[#7d562d]"
                            />
                        </div>
                    </div>

                    {/* Image */}
                    <div className="lg:col-span-5">
                        <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#ebe8e2] shadow-[0_18px_45px_-15px_rgba(27,30,27,0.18)] sm:aspect-[16/10]">
                            <img
                                src={CONTACT_HERO_DATA.image.src}
                                alt={CONTACT_HERO_DATA.image.alt}
                                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />

                            {/* Image Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020402]/75 via-[#020402]/10 to-transparent" />

                            {/* Image Caption */}
                            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                                <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-[#ffdcbd] sm:text-[10px]">
                                    {CONTACT_HERO_DATA.image.label}
                                </span>

                                <p className="mt-2 font-serif text-[17px] italic leading-6 text-white sm:text-[19px]">
                                    "{CONTACT_HERO_DATA.image.caption}"
                                </p>
                            </div>

                            {/* Corner Detail */}
                            <div className="absolute right-4 top-4 h-10 w-10 rounded-full border border-white/30" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}