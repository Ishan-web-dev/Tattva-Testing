"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    ShieldCheck,
    Check,
} from "lucide-react";

const CONCIERGE_DATA = {
    intro: {
        eyebrow: "Guest Assistance",
        response: "We’re Here to Help",
        title: "Tattva Ranakpur Contact",
        description:
            "Get in touch with our team for room reservations, stay-related questions, travel assistance, dining, local experiences, or any special requests.",
    },

    contact: [
        {
            label: "Direct Telephone",
            value: "+91 (0) 141 890 2300",
            href: "tel:+911418902300",
            icon: Phone,
        },
        {
            label: "WhatsApp",
            value: "+91 98290 41001",
            href: "https://wa.me/919829041001",
            icon: MessageCircle,
            external: true,
        },
        {
            label: "Email",
            value: "info@tattvau...com",
            href: "mailto:info@tattvau...com",
            icon: Mail,
        },
    ],

    departments: [
        {
            number: "1",
            eyebrow: "Reservations",
            meta: "Rooms & Stays",
            title: "Reservations & Stay Enquiries",
            description:
                "Contact our team for room availability, bookings, stay details, check-in information, and special requests.",
            email: "reservations@tattvau...com",
        },
        {
            number: "2",
            eyebrow: "Guest Services",
            meta: "Experiences & Travel",
            title: "Local Experiences & Assistance",
            description:
                "We can help you plan local experiences, explore Udaipur and Ranakpur, arrange travel assistance, and make the most of your Rajasthan stay.",
            email: "info@tattvau...com",
        },
    ],

    location: {
        eyebrow: "Find Tattva Udaipur",
        address: "Udaipur, Rajasthan, India",
        details: [
            ["LOCATION", "Udaipur • Rajasthan"],
            ["REGION", "Aravalli Landscape"],
            ["AIRPORT", "Maharana Pratap Airport"],
            ["CHECK-IN", "02:00 PM"],
            ["CHECK-OUT", "12:00 PM"],
        ],
    },

    press: {
        eyebrow: "Media & Partnerships",
        description:
            "For media, photography, collaborations, and partnership enquiries.",
        email: "press@tattvau...com",
    },
};

export default function ConciergeInquiry() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <section
            id="inquiry"
            className="w-full bg-[#f6f3ed] py-14 sm:py-16 md:py-20 lg:py-24"
        >
            <div className="mx-auto max-w-[1360px] px-5 md:px-10 lg:px-[72px]">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
                    {/* =====================================================
                        LEFT — CONCIERGE INFORMATION
                    ====================================================== */}
                    <div className="flex flex-col gap-10 lg:col-span-5">
                        {/* Main Concierge */}
                        <div>
                            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#020402]/10 pb-3">
                                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7d562d]">
                                    {CONCIERGE_DATA.intro.eyebrow}
                                </span>

                                <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#757873]">
                                    {CONCIERGE_DATA.intro.response}
                                </span>
                            </div>

                            <h2 className="font-serif text-[30px] font-normal leading-tight text-[#020402] sm:text-[34px] md:text-[38px]">
                                {CONCIERGE_DATA.intro.title}
                            </h2>

                            <p className="mt-4 max-w-xl text-sm leading-7 text-[#444844] md:text-[15px]">
                                {CONCIERGE_DATA.intro.description}
                            </p>

                            {/* Contact Methods */}
                            <div className="mt-6 divide-y divide-[#020402]/10">
                                {CONCIERGE_DATA.contact.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            target={item.external ? "_blank" : undefined}
                                            rel={
                                                item.external
                                                    ? "noopener noreferrer"
                                                    : undefined
                                            }
                                            className="group flex items-center gap-4 py-4"
                                        >
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-[#7d562d] transition-colors group-hover:bg-[#020402] group-hover:text-white">
                                                <Icon size={17} />
                                            </div>

                                            <div className="min-w-0">
                                                <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#757873]">
                                                    {item.label}
                                                </span>

                                                <span className="mt-1 block break-all text-sm font-medium text-[#020402] transition-colors group-hover:text-[#7d562d] sm:break-normal">
                                                    {item.value}
                                                </span>
                                            </div>

                                            <ArrowRight
                                                size={15}
                                                className="ml-auto shrink-0 text-[#757873] transition-all group-hover:translate-x-1 group-hover:text-[#7d562d]"
                                            />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Department Desks */}
                        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                            {CONCIERGE_DATA.departments.map((department) => (
                                <div
                                    key={department.number}
                                    className="border-t border-[#020402]/15 pt-4"
                                >
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7d562d]">
                                            {department.eyebrow}
                                        </span>

                                        <span className="text-[9px] uppercase tracking-[0.1em] text-[#757873]">
                                            {department.meta}
                                        </span>
                                    </div>

                                    <div className="mt-3 flex items-start gap-3">
                                        <span className="font-serif text-lg text-[#7d562d]">
                                            {department.number}
                                        </span>

                                        <div>
                                            <h3 className="font-serif text-[19px] leading-6 text-[#020402]">
                                                {department.title}
                                            </h3>

                                            <p className="mt-2 text-[12px] leading-5 text-[#444844]">
                                                {department.description}
                                            </p>

                                            <Link
                                                href={`mailto:${department.email}`}
                                                className="mt-3 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#7d562d] transition-colors hover:text-[#020402]"
                                            >
                                                <Mail size={13} />
                                                {department.email}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Location */}
                        <div className="rounded-xl bg-white p-5 sm:p-6">
                            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7d562d]">
                                <MapPin size={15} />
                                {CONCIERGE_DATA.location.eyebrow}
                            </div>

                            <p className="mt-3 text-sm font-medium leading-6 text-[#020402]">
                                {CONCIERGE_DATA.location.address}
                            </p>

                            <div className="mt-5 grid grid-cols-2 gap-4 border-t border-[#020402]/10 pt-4">
                                {CONCIERGE_DATA.location.details.map(
                                    ([label, value]) => (
                                        <div key={label}>
                                            <span className="block text-[9px] font-semibold uppercase tracking-[0.12em] text-[#757873]">
                                                {label}
                                            </span>

                                            <span className="mt-1 block text-[11px] font-medium text-[#020402]">
                                                {value}
                                            </span>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Press */}
                        <div className="flex flex-col gap-3 border-t border-[#020402]/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7d562d]">
                                    {CONCIERGE_DATA.press.eyebrow}
                                </span>

                                <p className="mt-1 text-xs text-[#444844]">
                                    {CONCIERGE_DATA.press.description}
                                </p>
                            </div>

                            <Link
                                href={`mailto:${CONCIERGE_DATA.press.email}`}
                                className="shrink-0 text-xs font-medium text-[#020402] underline decoration-[#7d562d]/40 underline-offset-4 transition-colors hover:text-[#7d562d]"
                            >
                                {CONCIERGE_DATA.press.email}
                            </Link>
                        </div>
                    </div>

                    {/* =====================================================
                        RIGHT — INQUIRY FORM
                    ====================================================== */}
                    <div className="lg:col-span-7">
                        {/* Minimalist Card Container */}
                        <div className="bg-[#fcf9f3] p-6 sm:p-10 md:p-14 lg:p-16">

                            {/* Editorial Header */}
                            <div className="mb-12 max-w-2xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="h-px w-8 bg-[#7d562d]"></div>
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7d562d]">
                                        Contact Tattva Udaipur
                                    </span>
                                </div>

                                <h2 className="font-serif text-[32px] md:text-[40px] font-light leading-tight text-[#020402]">
                                    Plan Your Stay With Us
                                </h2>

                                <p className="mt-4 text-sm leading-relaxed text-[#444844]">
                                    Share your stay details, questions, or special requests with our team.
                                    We are happy to help you plan a comfortable stay in Udaipur.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-10">

                                {/* Personal Details Row */}
                                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                                    <div className="group flex flex-col sm:col-span-2">
                                        <label htmlFor="full-name" className="mb-2 text-[10px] uppercase tracking-[0.15em] text-[#757873] transition-colors group-focus-within:text-[#7d562d]">
                                            Full Name *
                                        </label>
                                        <input
                                            id="full-name"
                                            name="fullName"
                                            type="text"
                                            required
                                            placeholder="Enter your full name"
                                            className="w-full border-b border-[#020402]/10 bg-transparent pb-3 text-sm text-[#020402] placeholder:text-[#757873]/40 focus:border-[#7d562d] focus:outline-none transition-colors"
                                        />
                                    </div>

                                    <div className="group flex flex-col">
                                        <label htmlFor="email" className="mb-2 text-[10px] uppercase tracking-[0.15em] text-[#757873] transition-colors group-focus-within:text-[#7d562d]">
                                            Email *
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            placeholder="you@domain.com"
                                            className="w-full border-b border-[#020402]/10 bg-transparent pb-3 text-sm text-[#020402] placeholder:text-[#757873]/40 focus:border-[#7d562d] focus:outline-none transition-colors"
                                        />
                                    </div>

                                    <div className="group flex flex-col">
                                        <label htmlFor="telephone" className="mb-2 text-[10px] uppercase tracking-[0.15em] text-[#757873] transition-colors group-focus-within:text-[#7d562d]">
                                            Phone / WhatsApp *
                                        </label>
                                        <input
                                            id="telephone"
                                            name="telephone"
                                            type="tel"
                                            required
                                            placeholder="+91 00000 00000"
                                            className="w-full border-b border-[#020402]/10 bg-transparent pb-3 text-sm text-[#020402] placeholder:text-[#757873]/40 focus:border-[#7d562d] focus:outline-none transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Stay Details Row */}
                                <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
                                    <div className="group flex flex-col sm:col-span-3">
                                        <label htmlFor="inquiry-type" className="mb-2 text-[10px] uppercase tracking-[0.15em] text-[#757873] transition-colors group-focus-within:text-[#7d562d]">
                                            Nature of Inquiry
                                        </label>
                                        <select
                                            id="inquiry-type"
                                            name="inquiryType"
                                            className="w-full cursor-pointer appearance-none border-b border-[#020402]/10 bg-transparent pb-3 text-sm text-[#020402] focus:border-[#7d562d] focus:outline-none transition-colors"
                                        >
                                            <option value="room">Room Reservation</option>
                                            <option value="group">Family / Group Stay</option>
                                            <option value="celebration">Special Celebration</option>
                                            <option value="dining">Dining Enquiry</option>
                                            <option value="experience">Local Experiences</option>
                                            <option value="concierge">General Enquiry</option>
                                        </select>
                                    </div>

                                    <div className="group flex flex-col">
                                        <label htmlFor="arrival" className="mb-2 text-[10px] uppercase tracking-[0.15em] text-[#757873] transition-colors group-focus-within:text-[#7d562d]">
                                            Arrival
                                        </label>
                                        <input
                                            id="arrival"
                                            name="arrival"
                                            type="date"
                                            className="w-full border-b border-[#020402]/10 bg-transparent pb-3 text-sm text-[#020402] focus:border-[#7d562d] focus:outline-none transition-colors"
                                        />
                                    </div>

                                    <div className="group flex flex-col">
                                        <label htmlFor="departure" className="mb-2 text-[10px] uppercase tracking-[0.15em] text-[#757873] transition-colors group-focus-within:text-[#7d562d]">
                                            Departure
                                        </label>
                                        <input
                                            id="departure"
                                            name="departure"
                                            type="date"
                                            className="w-full border-b border-[#020402]/10 bg-transparent pb-3 text-sm text-[#020402] focus:border-[#7d562d] focus:outline-none transition-colors"
                                        />
                                    </div>

                                    <div className="group flex flex-col">
                                        <label htmlFor="guests" className="mb-2 text-[10px] uppercase tracking-[0.15em] text-[#757873] transition-colors group-focus-within:text-[#7d562d]">
                                            Guests
                                        </label>
                                        <select
                                            id="guests"
                                            name="guests"
                                            className="w-full cursor-pointer appearance-none border-b border-[#020402]/10 bg-transparent pb-3 text-sm text-[#020402] focus:border-[#7d562d] focus:outline-none transition-colors"
                                        >
                                            <option>1 Guest</option>
                                            <option>2 Guests</option>
                                            <option>3 Guests</option>
                                            <option>4 Guests</option>
                                            <option>5+ Guests</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Notes Row */}
                                <div className="group flex flex-col">
                                    <label htmlFor="notes" className="mb-2 text-[10px] uppercase tracking-[0.15em] text-[#757873] transition-colors group-focus-within:text-[#7d562d]">
                                        Message / Special Requests
                                    </label>
                                    <textarea
                                        id="notes"
                                        name="notes"
                                        rows={3}
                                        placeholder="Tell us about your requirements, preferences, or any questions..."
                                        className="w-full resize-none border-b border-[#020402]/10 bg-transparent pb-3 text-sm leading-relaxed text-[#020402] placeholder:text-[#757873]/40 focus:border-[#7d562d] focus:outline-none transition-colors"
                                    />
                                </div>

                                {/* Footer / Submit */}
                                <div className="mt-4 flex flex-col-reverse items-start justify-between gap-6 sm:flex-row sm:items-center">
                                    <div className="flex max-w-xs items-start gap-3 text-[#757873]">
                                        <ShieldCheck size={16} className="mt-0.5 shrink-0 text-[#7d562d]" />
                                        <span className="text-[14px] leading-relaxed tracking-wide">
                                            Your details are kept private and used only to respond to your enquiry.
                                        </span>
                                    </div>

                                    <button
                                        type="submit"
                                        className="group relative flex h-12 w-full items-center justify-center gap-3 overflow-hidden bg-[#020402] px-8 text-[11px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#7d562d] sm:w-auto"
                                    >
                                        <span>Send Enquiry</span>
                                        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                                    </button>
                                </div>

                                {/* Success Message */}
                                {submitted && (
                                    <div className="mt-2 flex items-center gap-4 border-l-2 border-[#7d562d] bg-[#f6f3ed] py-4 pl-4 pr-6">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#7d562d]/10">
                                            <Check size={16} className="text-[#7d562d]" />
                                        </div>
                                        <div>
                                            <p className="font-serif text-sm font-medium text-[#020402]">
                                                Your enquiry has been received.
                                            </p>
                                            <p className="mt-0.5 text-xs text-[#444844]">
                                                Our team will get in touch with you shortly.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}