"use client";

import React from "react";
import {
    ArrowRight,
    Flower2,
    Wine,
} from "lucide-react";

const GASTRONOMY_DATA = {
    chapter: "Chapter 01 • Terroir & Cellar",

    title: "Gastronomy anchored in the microclimates of the archipelago.",

    description:
        "Dining at UdayHotels is not a formal ceremony, but an intimate reflection of volcanic soil, deep ocean trenches, and small-batch sustainable farming. Morning ingredients are harvested from our cliffside botanical garden, transformed through wood-fired hearths and ancient preservation techniques.",

    image: {
        src: "https://lh3.googleusercontent.com/aida/AEtjO1WwIjW0R1LlFfzfJDJSyPWaDTLGoea2ItVrCiq69-_0CFUoBn5XPg1IuRvTFV35L8ho-s5rTpcNfLiaPhg0tBcXohx3YOlWRxjbxvNucVSZ8fvUQijmeWDEbxR6dyscMXxT7Ih7ZQJmXCfUNec43YasyQUKppbXOqpGWY1T-t2xboKb_PqNVGzP33Wjv5VAXDL30oauu6rcR3qbUg3pZl4Dx1YHf57OqoqsKiTMbz9Iaac5llUWIvDcJ0Uj",
        alt: "UdayHotels culinary experience",
    },

    highlights: [
        {
            id: 1,
            title: "The Subterranean Vault",
            description:
                "Private candlelit tastings curated around ancient biodynamic vintages.",
            icon: Wine,
        },
        {
            id: 2,
            title: "Cliffside Organic Garden Table",
            description:
                "A seven-course botanical menu prepared directly in front of diners at dusk.",
            icon: Flower2,
        },
    ],

    cta: {
        label: "View Tasting Menus & Reservations",
        href: "#",
    },

    cellarNote: {
        eyebrow: "Estate Cellar Note",
        quote:
            '"Over 800 biodynamic labels cellared in subterranean natural basalt vaults."',
        author: "Curation by Head Sommelier Jean-Luc M.",
    },
};

export default function Gastronomy() {
    return (
        <section className="w-full bg-[#fcf9f3] py-20 md:py-24 lg:py-32">
            <div className="mx-auto max-w-[1360px] px-5 md:px-10 lg:px-[4.5rem]">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
                    {/* Image */}
                    <div className="order-1 lg:col-span-6">
                        <div className="relative">
                            <div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-[#dedbd2]">
                                <img
                                    src={GASTRONOMY_DATA.image.src}
                                    alt={GASTRONOMY_DATA.image.alt}
                                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#020402]/50 via-transparent to-transparent" />
                            </div>

                            {/* Inset Story Card */}
                            <div className="absolute -bottom-8 -right-4 hidden max-w-xs rounded-xl bg-white p-6 shadow-xl sm:block lg:-right-6">
                                <span className="mb-1 block font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7d562d]">
                                    {GASTRONOMY_DATA.cellarNote.eyebrow}
                                </span>

                                <p className="font-serif text-sm italic leading-6 text-[#020402]">
                                    {GASTRONOMY_DATA.cellarNote.quote}
                                </p>

                                <span className="mt-2 block font-sans text-[10px] uppercase tracking-[0.12em] text-[#666963]">
                                    {GASTRONOMY_DATA.cellarNote.author}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="order-2 flex flex-col gap-6 lg:col-span-6 lg:pl-8">
                        {/* Chapter */}
                        <div className="flex items-center gap-3">
                            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7d562d]">
                                {GASTRONOMY_DATA.chapter}
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="max-w-xl font-serif text-[30px] font-normal leading-[1.15] tracking-tight text-[#020402] md:text-[42px] lg:text-[48px]">
                            {GASTRONOMY_DATA.title}
                        </h2>

                        {/* Description */}
                        <p className="max-w-2xl font-sans text-[15px] font-light leading-7 text-[#555954]">
                            {GASTRONOMY_DATA.description}
                        </p>

                        {/* Culinary Highlights */}
                        <div className="space-y-5 pt-2">
                            {GASTRONOMY_DATA.highlights.map((highlight) => {
                                const Icon = highlight.icon;

                                return (
                                    <div
                                        key={highlight.id}
                                        className="flex items-start gap-4"
                                    >
                                        <Icon
                                            size={20}
                                            strokeWidth={1.5}
                                            className="mt-0.5 shrink-0 text-[#7d562d]"
                                        />

                                        <div className="flex flex-col gap-1">
                                            <h4 className="font-sans text-sm font-semibold text-[#020402]">
                                                {highlight.title}
                                            </h4>

                                            <p className="max-w-lg font-sans text-[13px] font-light leading-5 text-[#555954]">
                                                {highlight.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA */}
                        <div className="pt-3">
                            <a
                                href={GASTRONOMY_DATA.cta.href}
                                className="group inline-flex items-center gap-2 font-sans text-[12px] font-semibold uppercase tracking-[0.08em] text-[#020402] underline decoration-[#7d562d]/50 underline-offset-8 transition-colors duration-300 hover:text-[#7d562d] hover:decoration-[#7d562d]"
                            >
                                <span>{GASTRONOMY_DATA.cta.label}</span>

                                <ArrowRight
                                    size={16}
                                    strokeWidth={1.5}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}