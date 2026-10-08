"use client";

import React from "react";

const CONTACT_SALON_DATA = {
    eyebrow: "Guest Reception",
    title: "A Warm Welcome, From the Moment You Arrive",
    description:
        "Our reception is designed to make your arrival comfortable and welcoming. Meet our team, get assistance with your stay, and begin your Rajasthan journey with ease.",
    image:
        "/Media/t6.jpg",
    alt:
        "Warm and welcoming hotel reception and seating area at Tattva Udaipur.",
};

export default function ContactSalonBanner() {
    return (
        <section className="w-full bg-[#f6f3ed] py-10 sm:py-12 lg:py-8">
            <div className="mx-auto max-w-[1360px] px-5 md:px-10 lg:px-[72px]">
                <div className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-[#ebe8e2] shadow-lg sm:aspect-[16/9] lg:aspect-[21/9]">
                    {/* Image */}
                    <img
                        src={CONTACT_SALON_DATA.image}
                        alt={CONTACT_SALON_DATA.alt}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                    />

                    {/* Dark Editorial Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#020402]/90 via-[#020402]/55 to-transparent" />

                    {/* Bottom subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020402]/40 via-transparent to-transparent" />

                    {/* Content */}
                    <div className="relative flex h-full max-w-2xl flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-16">
                        {/* Eyebrow */}
                        <div className="flex items-center gap-3">
                            <span className="h-px w-8 bg-[#ffdcbd] sm:w-10" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#ffdcbd] sm:text-[11px]">
                                {CONTACT_SALON_DATA.eyebrow}
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="mt-4 max-w-xl font-serif text-3xl font-normal leading-tight tracking-tight text-white sm:mt-5 sm:text-4xl lg:text-5xl">
                            {CONTACT_SALON_DATA.title}
                        </h2>

                        {/* Description */}
                        <p className="mt-4 max-w-lg text-sm leading-6 text-white/75 sm:mt-5 sm:text-base sm:leading-7">
                            {CONTACT_SALON_DATA.description}
                        </p>
                    </div>

                    {/* Corner Label */}
                    <div className="absolute bottom-5 right-5 hidden items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/70 sm:flex lg:bottom-7 lg:right-8">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ffdcbd]" />
                        Tattva Udaipur
                    </div>
                </div>
            </div>
        </section>
    );
}