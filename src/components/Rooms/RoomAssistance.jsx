"use client";

import React from "react";
import {
    MessageCircle,
    Phone,
    ArrowUpRight,
    Users,
} from "lucide-react";

const ASSISTANCE_DATA = {
    eyebrow: "PERSONAL RESERVATION ASSISTANCE",
    title: "Need Assistance Choosing Your Room or Traveling with Family?",
    description:
        "Our reservation team is happy to help you find the right room, understand occupancy options, and plan a comfortable stay for everyone.",
    note: "Speak with our team for personalized room recommendations and family stay assistance.",
    phone: "+91 00000 00000",
    whatsapp: "Chat on WhatsApp",
};

const RoomAssistance = () => {
    return (
        <section className="w-full bg-[#020402] py-16 text-white md:py-20 lg:py-24">
            <div className="mx-auto max-w-[1240px] px-5 md:px-8 lg:px-10">
                <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
                    {/* Left Content */}
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#b08a5a]" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b08a5a]">
                                {ASSISTANCE_DATA.eyebrow}
                            </span>
                        </div>

                        <h2 className="max-w-3xl font-serif text-3xl font-normal leading-[1.12] tracking-tight text-white md:text-4xl lg:text-[52px]">
                            {ASSISTANCE_DATA.title}
                        </h2>

                        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
                            {ASSISTANCE_DATA.description}
                        </p>
                    </div>

                    {/* Right Assistance Card */}
                    <div className="border border-white/10 bg-white/[0.04] p-6 md:p-8">
                        {/* Icon */}
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#b08a5a]/40 text-[#b08a5a]">
                            <Users size={21} strokeWidth={1.5} />
                        </div>

                        <p className="max-w-md text-sm leading-7 text-white/65">
                            {ASSISTANCE_DATA.note}
                        </p>

                        {/* Contact */}
                        <div className="mt-7 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row">
                            <a
                                href={`tel:${ASSISTANCE_DATA.phone}`}
                                className="group inline-flex items-center justify-center gap-2 border border-white/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:border-[#b08a5a] hover:text-[#b08a5a]"
                            >
                                <Phone size={15} strokeWidth={1.7} />
                                Call Us
                            </a>

                            <a
                                href="#"
                                className="group inline-flex items-center justify-center gap-2 bg-[#b08a5a] px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#c09a6c]"
                            >
                                <MessageCircle
                                    size={15}
                                    strokeWidth={1.7}
                                />

                                {ASSISTANCE_DATA.whatsapp}

                                <ArrowUpRight
                                    size={14}
                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoomAssistance;