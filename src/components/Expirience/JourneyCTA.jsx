"use client";

import React from "react";
import {

    FiPhone,
    FiMessageCircle,
} from "react-icons/fi";
import Link from "next/link";

const JOURNEY_DATA = {
    eyebrow: "Plan Your Experience",

    title:
        "Your Rajasthan Experience Starts Here.",

    description:
        "From peaceful forest surroundings to Udaipur, Ranakpur, and the Aravalli landscape, our team can help you plan experiences that suit your stay and interests.",

    phone: "+91 (0) 141 890 2300",

    whatsapp: "+91 98290 41001",
};

export default function JourneyCTA({
}) {
    return (
        <section
            className="
                relative
                w-full
                overflow-hidden
                bg-[#1b1e1b]
                py-16
                text-white
                md:py-20
                lg:py-24
            "
        >

            {/* =====================================================
                BACKGROUND ACCENT
            ====================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -bottom-24
                    -right-24
                    h-96
                    w-96
                    rounded-full
                    bg-[#7d562d]/10
                    blur-3xl
                "
            />


            {/* =====================================================
                MAIN CONTENT
            ====================================================== */}

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    w-full
                    max-w-[1360px]
                    px-5
                    md:px-10
                    lg:px-[4.5rem]
                "
            >

                <div className="max-w-3xl">

                    {/* =================================================
                        EYEBROW
                    ================================================== */}

                    <span
                        className="
                            block
                            font-sans
                            text-[11px]
                            font-semibold
                            uppercase
                            tracking-[0.18em]
                            text-[#ffdcbd]
                        "
                    >
                        {JOURNEY_DATA.eyebrow}
                    </span>


                    {/* =================================================
                        HEADING
                    ================================================== */}

                    <h2
                        className="
                            mt-4
                            font-serif
                            text-4xl
                            font-normal
                            leading-tight
                            tracking-tight
                            text-[#fcf9f3]
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        {JOURNEY_DATA.title}
                    </h2>


                    {/* =================================================
                        DESCRIPTION
                    ================================================== */}

                    <p
                        className="
                            mt-6
                            max-w-2xl
                            font-sans
                            text-base
                            leading-relaxed
                            text-[#dedbd4]
                            md:text-lg
                            md:leading-8
                        "
                    >
                        {JOURNEY_DATA.description}
                    </p>

                    {/* =================================================
                        CONTACT DETAILS
                    ================================================== */}

                    <div
                        className="
                            mt-10
                            grid
                            grid-cols-1
                            gap-6
                            border-t
                            border-white/10
                            pt-7
                            sm:grid-cols-3
                            sm:gap-8
                        "
                    >

                        {/* Direct Private Line */}

                        <div>

                            <span
                                className="
                                    block
                                    font-sans
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.14em]
                                    text-[#ffdcbd]
                                "
                            >
                                Direct Private Line
                            </span>

                            <Link
                                href={`tel:${JOURNEY_DATA.phone.replace(
                                    /[^0-9+]/g,
                                    ""
                                )}`}
                                className="
                                    mt-1
                                    flex
                                    items-center
                                    gap-2
                                    font-sans
                                    text-sm
                                    font-medium
                                    text-[#fcf9f3]
                                    transition-colors
                                    hover:text-[#ffdcbd]
                                "
                            >
                                <FiPhone size={14} />

                                <span>
                                    {JOURNEY_DATA.phone}
                                </span>
                            </Link>

                        </div>


                        {/* WhatsApp Desk */}

                        <div>

                            <span
                                className="
                                    block
                                    font-sans
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.14em]
                                    text-[#ffdcbd]
                                "
                            >
                                WhatsApp Desk
                            </span>

                            <Link
                                href={`https://wa.me/${JOURNEY_DATA.whatsapp.replace(
                                    /\D/g,
                                    ""
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    mt-1
                                    flex
                                    items-center
                                    gap-2
                                    font-sans
                                    text-sm
                                    font-medium
                                    text-[#fcf9f3]
                                    transition-colors
                                    hover:text-[#ffdcbd]
                                "
                            >
                                <FiMessageCircle size={15} />

                                <span>
                                    {JOURNEY_DATA.whatsapp}
                                </span>
                            </Link>

                        </div>


                        {/* Concierge Hours */}

                        <div>

                            <span
                                className="
                                    block
                                    font-sans
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.14em]
                                    text-[#ffdcbd]
                                "
                            >
                                Concierge Hours
                            </span>

                            <span
                                className="
                                    mt-1
                                    block
                                    font-sans
                                    text-sm
                                    font-medium
                                    text-[#fcf9f3]
                                "
                            >
                                24 Hours · 7 Days
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}