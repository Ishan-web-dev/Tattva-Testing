"use client";

import React from "react";
import { Star } from "lucide-react";

const REFLECTIONS_DATA = {
    header: {
        eyebrow: "Guest Experiences",
        title: "What Our Guests Say",
    },

    reflections: [
        {
            id: 1,
            rating: 3,
            quote:
                "A very comfortable stay with warm hospitality. The rooms were clean, peaceful, and well maintained. It was a wonderful place to relax after exploring Udaipur.",
            guest: "Rahul & Neha",
            stay: "Family Stay • 3 Nights",
        },
        {
            id: 2,
            rating: 4,
            quote:
                "We loved the calm atmosphere and the attention to detail. The staff was helpful throughout our stay and made our visit to Rajasthan feel easy and comfortable.",
            guest: "Priya Sharma",
            stay: "Leisure Stay • 4 Nights",
        },
        {
            id: 3,
            rating: 4,
            quote:
                "A great choice for a Rajasthan trip. The location worked well for our plans, the rooms were comfortable, and the overall experience felt warm and welcoming.",
            guest: "Amit",
            stay: "Family Holiday • 2 Nights",
        },
    ],
};

export default function GuestReflections() {
    return (
        <section className="w-full bg-[#f5eddf] py-16 text-[#1c1c18] lg:py-18">
            <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">

                {/* Header */}
                <div className="mb-10">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7d562d]">
                        {REFLECTIONS_DATA.header.eyebrow}
                    </p>

                    <h2 className="font-serif text-3xl leading-tight text-[#020402] md:text-4xl">
                        {REFLECTIONS_DATA.header.title}
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {REFLECTIONS_DATA.reflections.map((reflection) => (
                        <article
                            key={reflection.id}
                            className="
                                rounded-xl
                                bg-white
                                p-6
                                md:p-7
                            "
                        >
                            {/* Rating */}
                            <div className="mb-5 flex items-center gap-1">
                                {Array.from({
                                    length: reflection.rating,
                                }).map((_, index) => (
                                    <Star
                                        key={index}
                                        size={15}
                                        strokeWidth={1.5}
                                        fill="currentColor"
                                        className="text-[#7d562d]"
                                    />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="font-serif text-[17px] leading-7 text-[#22241f]">
                                “{reflection.quote}”
                            </p>

                            {/* Guest */}
                            <div className="mt-7 border-t border-black/10 pt-4">
                                <p className="text-sm font-semibold text-[#171915]">
                                    {reflection.guest}
                                </p>

                                <p className="mt-1 text-[11px] text-[#666862]">
                                    {reflection.stay}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}