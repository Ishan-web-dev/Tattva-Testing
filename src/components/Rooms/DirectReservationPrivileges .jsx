"use client";

import React from "react";
import {
    BadgeCheck,
    CalendarClock,
    Clock3,
    Headphones,
} from "lucide-react";

const DIRECT_RESERVATION_PRIVILEGES = [
    {
        id: 1,
        icon: BadgeCheck,
        title: "Best Rate Guarantee",
        description:
            "Direct booking promise with complimentary category upgrade upon arrival whenever available.",
    },
    {
        id: 2,
        icon: CalendarClock,
        title: "Flexible 48h Cancellation",
        description:
            "Hassle-free itinerary modifications and zero penalty fee up to two full days prior to arrival.",
    },
    {
        id: 3,
        icon: Clock3,
        title: "Early Check-in Priority",
        description:
            "Priority room preparation and early sanctuary access complimentary upon availability.",
    },
    {
        id: 4,
        icon: Headphones,
        title: "Dedicated Concierge",
        description:
            "Direct WhatsApp link with your personal host for tailored transfers, dining tables, and itinerary notes.",
    },
];

const DirectReservationPrivileges = () => {
    return (
        <section className="w-full bg-[#fcf9f3] py-16 md:py-20 lg:py-24">
            <div className="mx-auto max-w-[1360px] px-5 md:px-8 lg:px-12">
                {/* Section Heading */}
                <div className="mx-auto mb-12 max-w-xl text-center md:mb-14">
                    <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7d562d]">
                        Our Hospitality Promise
                    </span>

                    <h2 className="font-serif text-3xl font-normal leading-tight tracking-tight text-[#020402] md:text-4xl lg:text-5xl">
                        Privileges of Direct Reservation
                    </h2>
                </div>

                {/* Privileges Grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                    {DIRECT_RESERVATION_PRIVILEGES.map((privilege) => {
                        const Icon = privilege.icon;

                        return (
                            <div
                                key={privilege.id}
                                className="group flex min-h-[250px] flex-col items-start rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-7"
                            >
                                {/* Icon */}
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#f6f3ed] text-[#7d562d] transition-colors duration-300 group-hover:bg-[#020402] group-hover:text-white">
                                    <Icon
                                        size={22}
                                        strokeWidth={1.6}
                                    />
                                </div>

                                {/* Content */}
                                <h3 className="mb-3 font-serif text-xl font-medium leading-snug text-[#020402]">
                                    {privilege.title}
                                </h3>

                                <p className="text-sm leading-7 text-[#444844]">
                                    {privilege.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default DirectReservationPrivileges;