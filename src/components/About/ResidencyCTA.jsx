import React from "react";
import Link from "next/link";
import { Flower2 } from "lucide-react";

const RESIDENCY_CTA_DATA = {
    eyebrow: "Plan Your Stay",

    title: {
        firstLine: "Your Rajasthan stay",
        secondLine: "starts at Tattva.",
    },

    description:
        "Whether you are exploring Udaipur, visiting Ranakpur, or simply looking for a peaceful break, Tattva offers comfortable rooms, warm hospitality, and a relaxed place to enjoy Rajasthan.",

    actions: [
        {
            id: 1,
            label: "Book Your Stay",
            href: "/rooms",
            variant: "primary",
        },
        {
            id: 2,
            label: "Contact Tattva",
            href: "/contact",
            variant: "secondary",
        },
    ],
};

export default function ResidencyCTA() {
    const data = RESIDENCY_CTA_DATA;

    return (
        <section className="w-full bg-[#fcf9f3] pb-20">
            <div className="mx-auto max-w-[1360px] px-5 md:px-10 lg:px-[4.5rem]">
                <div className="relative flex w-full flex-col items-center overflow-hidden rounded-xl bg-[#f6f3ed] p-10 text-center md:p-16">

                    {/* Decorative Watermark */}
                    <div className="pointer-events-none absolute -bottom-12 -right-12 opacity-[0.05]">
                        <Flower2
                            size={260}
                            strokeWidth={1}
                            className="text-[#020402]"
                        />
                    </div>

                    {/* Eyebrow */}
                    <span className="relative z-10 mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#7d562d]">
                        {data.eyebrow}
                    </span>

                    {/* Heading */}
                    <h2 className="relative z-10 max-w-2xl font-serif text-[28px] font-normal leading-[1.28] text-[#020402] md:text-[40px]">
                        {data.title.firstLine}
                        <br />
                        {data.title.secondLine}
                    </h2>

                    {/* Description */}
                    <p className="relative z-10 mt-4 max-w-lg font-sans text-[15px] font-light leading-6 text-[#444844]">
                        {data.description}
                    </p>

                    {/* Actions */}
                    <div className="relative z-10 mt-8 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">

                        {data.actions.map((action) => (
                            <Link
                                key={action.id}
                                href={action.href}
                                className={
                                    action.variant === "primary"
                                        ? "inline-flex w-full items-center justify-center rounded-lg bg-[#020402] px-8 py-3.5 font-sans text-[14px] font-medium text-white shadow-[0_4px_12px_rgba(2,4,2,0.15)] transition-all duration-300 hover:bg-[#7d562d] sm:w-auto"
                                        : "inline-flex w-full items-center justify-center rounded-lg bg-transparent px-6 py-3.5 font-sans text-[14px] font-medium text-[#020402] transition-colors duration-300 hover:bg-[#f0eee8] sm:w-auto"
                                }
                            >
                                {action.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}