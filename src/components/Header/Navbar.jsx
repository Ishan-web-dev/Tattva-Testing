"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
    FiMenu,
    FiX,
    FiArrowRight,
    FiCalendar,
} from "react-icons/fi";


const NAVBAR_DATA = {
    brand: {
        name: "Tattva Hotel",
        href: "/",
    },

    navigation: [
        {
            id: 1,
            label: "Home",
            href: "/",
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

    booking: {
        label: "Book Your Stay",
        href: "/rooms",
    },

    mobileFooter: {
        text: "Comfortable stays · Thoughtful hospitality",
    },
};


export default function Navbar() {
    const pathname = usePathname();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);


    /*
    ============================================================
    HOME PAGE CHECK
    ============================================================
    */

    const isHomePage = pathname === "/";


    /*
    ============================================================
    SCROLL HANDLER
    ============================================================
    */

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, []);


    /*
    ============================================================
    CLOSE MOBILE MENU WHEN PAGE CHANGES
    ============================================================
    */

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);


    /*
    ============================================================
    NAVBAR STYLE
    ============================================================

    Home + top       = transparent
    Home + scroll    = white
    Other pages      = white
    */

    const isTransparent =
        isHomePage && !isScrolled && !isMenuOpen;


    /*
    ============================================================
    MOBILE MENU
    ============================================================
    */

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };


    const closeMenu = () => {
        setIsMenuOpen(false);
    };


    return (
        <>
            {/* ==================================================
                NAVBAR
            ================================================== */}

            <header
                className={`
                    fixed
                    left-0
                    top-0
                    z-50
                    w-full
                    transition-all
                    duration-300
                    ${isTransparent
                        ? "bg-transparent text-white"
                        : "bg-white text-[#020402] shadow-md"
                    }
                `}
            >

                <div className="mx-auto w-full max-w-[1360px] px-5 md:px-10 lg:px-[4.5rem]">

                    <div
                        className={`
                            flex
                            items-center
                            justify-between
                            transition-all
                            duration-300
                            ${isScrolled || !isHomePage
                                ? "min-h-[64px]"
                                : "min-h-[82px]"
                            }
                        `}
                    >

                        {/* ==================================================
                            BRAND
                        ================================================== */}

                        <Link
                            href={NAVBAR_DATA.brand.href}
                            className="group flex shrink-0 items-center"
                            onClick={closeMenu}
                        >

                            <Image
                                src="/Media/Black.png"
                                alt={NAVBAR_DATA.brand.name}
                                width={150}
                                height={50}
                                priority
                                className={`
                                    h-auto
                                    w-[120px]
                                    object-contain
                                    transition-all
                                    duration-300
                                    ${isTransparent
                                        ? "brightness-0 invert"
                                        : "brightness-100"
                                    }
                                `}
                            />

                        </Link>


                        {/* ==================================================
                            DESKTOP NAVIGATION
                        ================================================== */}

                        <nav className="hidden items-center gap-7 lg:flex xl:gap-9">

                            {NAVBAR_DATA.navigation.map((item) => {

                                const isActive =
                                    pathname === item.href;

                                return (
                                    <Link
                                        key={item.id}
                                        href={item.href}
                                        className={`
                                            group
                                            relative
                                            font-sans
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-[0.12em]
                                            transition-colors
                                            duration-300
                                            ${isTransparent
                                                ? "text-white/90 hover:text-white"
                                                : "text-[#444844] hover:text-[#7d562d]"
                                            }
                                        `}
                                    >

                                        {item.label}

                                        {/* Active / Hover Line */}

                                        <span
                                            className={`
                                                absolute
                                                -bottom-2
                                                left-0
                                                h-px
                                                bg-[#7d562d]
                                                transition-all
                                                duration-300
                                                ${isActive
                                                    ? "w-full"
                                                    : "w-0 group-hover:w-full"
                                                }
                                            `}
                                        />

                                    </Link>
                                );
                            })}

                        </nav>


                        {/* ==================================================
                            BOOKING CTA
                        ================================================== */}

                        <Link
                            href={NAVBAR_DATA.booking.href}
                            className={`
                                group
                                hidden
                                items-center
                                gap-2
                                border
                                px-5
                                py-3
                                font-sans
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.13em]
                                transition-all
                                duration-300
                                lg:inline-flex
                                ${isTransparent
                                    ? "border-white/70 bg-black/20 text-white hover:border-[#7d562d] hover:bg-[#7d562d]"
                                    : "border-[#020402] bg-[#020402] text-white hover:border-[#7d562d] hover:bg-[#7d562d]"
                                }
                            `}
                        >

                            <FiCalendar
                                size={15}
                                strokeWidth={1.5}
                            />

                            <span>
                                {NAVBAR_DATA.booking.label}
                            </span>

                            <FiArrowRight
                                size={14}
                                strokeWidth={1.5}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />

                        </Link>


                        {/* ==================================================
                            MOBILE MENU BUTTON
                        ================================================== */}

                        <button
                            type="button"
                            onClick={toggleMenu}
                            aria-label={
                                isMenuOpen
                                    ? "Close navigation"
                                    : "Open navigation"
                            }
                            aria-expanded={isMenuOpen}
                            className={`
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                border
                                transition-all
                                duration-300
                                lg:hidden
                                ${isTransparent
                                    ? "border-white/60 text-white hover:bg-white hover:text-[#020402]"
                                    : "border-[#dcdad4] text-[#020402] hover:bg-[#020402] hover:text-white"
                                }
                            `}
                        >

                            {isMenuOpen ? (
                                <FiX
                                    size={20}
                                    strokeWidth={1.5}
                                />
                            ) : (
                                <FiMenu
                                    size={20}
                                    strokeWidth={1.5}
                                />
                            )}

                        </button>

                    </div>

                </div>

            </header>


            {/* ==================================================
                MOBILE MENU
            ================================================== */}

            <div
                className={`
                    fixed
                    inset-0
                    z-40
                    bg-white
                    transition-all
                    duration-500
                    lg:hidden
                    ${isMenuOpen
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                    }
                `}
            >

                <div className="flex h-full flex-col px-6 pb-8 pt-[110px] md:px-10">


                    {/* ==================================================
                        MOBILE NAVIGATION
                    ================================================== */}

                    <nav className="flex flex-col">

                        {NAVBAR_DATA.navigation.map(
                            (item, index) => {

                                const isActive =
                                    pathname === item.href;

                                return (
                                    <Link
                                        key={item.id}
                                        href={item.href}
                                        onClick={closeMenu}
                                        className={`
                                            group
                                            flex
                                            items-center
                                            justify-between
                                            border-b
                                            py-5
                                            transition-colors
                                            duration-300
                                            ${isActive
                                                ? "border-[#7d562d]"
                                                : "border-[#ebe8e2]"
                                            }
                                        `}
                                    >

                                        <span
                                            className={`
                                                font-serif
                                                text-[25px]
                                                transition-colors
                                                duration-300
                                                ${isActive
                                                    ? "text-[#7d562d]"
                                                    : "text-[#020402] group-hover:text-[#7d562d]"
                                                }
                                            `}
                                        >
                                            {item.label}
                                        </span>


                                        <span
                                            className={`
                                                font-sans
                                                text-[10px]
                                                tracking-[0.15em]
                                                ${isActive
                                                    ? "text-[#7d562d]"
                                                    : "text-[#999]"
                                                }
                                            `}
                                        >
                                            {String(index + 1).padStart(
                                                2,
                                                "0"
                                            )}
                                        </span>

                                    </Link>
                                );
                            }
                        )}

                    </nav>


                    {/* ==================================================
                        MOBILE BOOKING
                    ================================================== */}

                    <div className="mt-auto">

                        <Link
                            href={NAVBAR_DATA.booking.href}
                            onClick={closeMenu}
                            className="
                                group
                                flex
                                w-full
                                items-center
                                justify-between
                                bg-[#020402]
                                px-5
                                py-4
                                font-sans
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.14em]
                                text-white
                                transition-colors
                                duration-300
                                hover:bg-[#7d562d]
                            "
                        >

                            <span className="flex items-center gap-3">

                                <FiCalendar
                                    size={16}
                                    strokeWidth={1.5}
                                />

                                {NAVBAR_DATA.booking.label}

                            </span>


                            <FiArrowRight
                                size={17}
                                strokeWidth={1.5}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />

                        </Link>


                        <p className="mt-5 text-center font-sans text-[9px] uppercase tracking-[0.18em] text-[#999]">
                            {NAVBAR_DATA.mobileFooter.text}
                        </p>

                    </div>

                </div>

            </div>
        </>
    );
}