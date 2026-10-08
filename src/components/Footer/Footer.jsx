"use client";

import React, { useState } from "react";
import Link from 'next/link';

import {
    Mail,
    MapPin,
    Phone,
    Send,
    MessageCircle,
} from "lucide-react";

import {
    FaInstagram,
    FaFacebookF,
} from "react-icons/fa";

const FOOTER_DATA = {
    brand: {
        name: "Tattva Hotel",
        tagline: "Comfort & Thoughtful Hospitality",
        description:
            "A refined stay in Udaipur, Rajasthan, offering comfortable rooms, thoughtful amenities, and warm hospitality for business and leisure travellers.",
    },

    socialLinks: [
        {
            id: 1,
            label: "Instagram",
            href: "#",
            icon: FaInstagram,
        },
        {
            id: 2,
            label: "Facebook",
            href: "#",
            icon: FaFacebookF,
        },
        {
            id: 3,
            label: "Contact Us",
            href: "mailto:info@tattvahotel.com",
            icon: Mail,
        },
    ],

    navigation: [
        {
            id: 1,
            label: "Home",
            href: "/",
        },
        {
            id: 2,
            label: "Rooms",
            href: "/rooms",
        },
        {
            id: 3,
            label: "About Us",
            href: "/about",
        },
        {
            id: 4,
            label: "Amenities",
            href: "/amenitiessection",
        },
        {
            id: 5,
            label: "Experiences",
            href: "/experiences",
        },
        {
            id: 6,
            label: "Contact",
            href: "/contact",
        },
    ],

    contact: {
        title: "Stay & Location",
        address:
            "Udaipur, Rajasthan, India",
        phone: "+91 XXXXX XXXXX",
        whatsapp: "+91 XXXXX XXXXX",
        email: "info@tattvahotel.com",
    },

    editorial: {
        title: "Stay Connected",
        description:
            "Be the first to know about special offers, seasonal stays, and updates from Tattva Hotel, Udaipur.",
        placeholder: "Your email address",
        buttonLabel: "Subscribe",
        note: "We respect your inbox. No unnecessary emails.",
    },

    legal: [
        {
            id: 1,
            label: "Privacy Policy",
            href: "/privatepolicy",
        },
        {
            id: 2,
            label: "Terms of Hospitality",
            href: "/termsofhospitality",
        },
    ],

    copyright:
        "© 2026 Tattva Hotel, Udaipur. All rights reserved.",
};;

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        // Connect this form to your newsletter API or email service.
        console.log("Newsletter subscription:", email);
    };

    return (
        <footer className="w-full bg-[#f6f3ed] pb-24 pt-20 text-[#020402] md:pb-20 lg:pt-28">
            <div className="mx-auto max-w-[1360px] px-5 md:px-10 lg:px-[4.5rem]">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 gap-10 pb-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-6 lg:col-span-4">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="font-serif text-[28px] uppercase tracking-wide text-[#020402]">
                                {FOOTER_DATA.brand.name}
                            </span>

                            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7d562d]">
                                • {FOOTER_DATA.brand.tagline}
                            </span>
                        </div>

                        <p className="max-w-sm font-sans text-[14px] leading-7 text-[#444844]">
                            {FOOTER_DATA.brand.description}
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-2 pt-1">
                            {FOOTER_DATA.socialLinks.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <Link
                                        key={social.id}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ebe8e2] text-[#444844] transition-colors duration-300 hover:bg-[#020402] hover:text-white"
                                    >
                                        <Icon size={18} />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div className="flex flex-col gap-5 lg:col-span-2">
                        <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#7d562d]">
                            Navigation
                        </h3>

                        <nav className="flex flex-col gap-3">
                            {FOOTER_DATA.navigation.map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    className="font-sans text-[14px] text-[#444844] transition-colors duration-300 hover:text-[#020402]"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Column */}
                    <div className="flex flex-col gap-5 lg:col-span-3">
                        <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#7d562d]">
                            {FOOTER_DATA.contact.title}
                        </h3>

                        <address className="flex flex-col gap-3 not-italic">
                            <p className="flex items-start gap-2 font-sans text-[14px] leading-6 text-[#444844]">
                                <MapPin
                                    size={18}
                                    strokeWidth={1.7}
                                    className="mt-1 shrink-0 text-[#7d562d]"
                                />

                                <span>{FOOTER_DATA.contact.address}</span>
                            </p>

                            <p className="flex items-center gap-2 font-sans text-[14px] text-[#444844]">
                                <Phone
                                    size={18}
                                    strokeWidth={1.7}
                                    className="shrink-0 text-[#7d562d]"
                                />

                                <Link
                                    href="tel:+18005550199"
                                    className="transition-colors duration-300 hover:text-[#020402]"
                                >
                                    {FOOTER_DATA.contact.phone}
                                </Link>
                            </p>

                            <p className="flex items-center gap-2 font-sans text-[14px] text-[#444844]">
                                <MessageCircle
                                    size={18}
                                    strokeWidth={1.7}
                                    className="shrink-0 text-[#7d562d]"
                                />

                                <Link
                                    href="https://wa.me/18005550199"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="transition-colors duration-300 hover:text-[#020402]"
                                >
                                    {FOOTER_DATA.contact.whatsapp}
                                </Link>
                            </p>

                            <p className="flex items-center gap-2 font-sans text-[14px] text-[#444844]">
                                <Mail
                                    size={18}
                                    strokeWidth={1.7}
                                    className="shrink-0 text-[#7d562d]"
                                />

                                <Link
                                    href={`mailto:${FOOTER_DATA.contact.email}`}
                                    className="break-all transition-colors duration-300 hover:text-[#020402]"
                                >
                                    {FOOTER_DATA.contact.email}
                                </Link>
                            </p>
                        </address>
                    </div>

                    {/* Newsletter Column */}
                    <div className="flex flex-col gap-5 lg:col-span-3">
                        <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#7d562d]">
                            {FOOTER_DATA.editorial.title}
                        </h3>

                        <p className="font-sans text-[14px] leading-6 text-[#444844]">
                            {FOOTER_DATA.editorial.description}
                        </p>

                    </div>
                </div>

                {/* Bottom Footer Bar */}
                <div className="flex flex-col items-center justify-between gap-5 border-t border-[#dcdad4] pt-8 md:flex-row">
                    <p className="text-center font-sans text-[12px] leading-5 text-[#444844] md:text-left">
                        {FOOTER_DATA.copyright}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-5 font-sans text-[12px] text-[#444844]">
                        {FOOTER_DATA.legal.map((item) => (
                            <Link
                                key={item.id}
                                href={item.href}
                                className="transition-colors duration-300 hover:text-[#020402]"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}