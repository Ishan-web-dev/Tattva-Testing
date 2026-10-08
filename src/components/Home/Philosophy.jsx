import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const PHILOSOPHY_DATA = {
    eyebrow: "THE ESSENCE OF RAJASTHAN",

    title: {
        normal: "A stay shaped by",
        highlight: "warmth."
    },

    description:
        "Tattva Udaipur brings together the timeless charm of Rajasthan with the comfort of a modern hotel. Inspired by the beauty of Udaipur and the Aravalli landscape, every space is designed to offer a peaceful stay, thoughtful hospitality, and a true sense of place.",

    image: {
        src: "/Media/t3.jpg",
        alt: "Tattva Udaipur hotel and Rajasthan inspired interiors"
    },

    details: [
        {
            number: "01",
            title: "Rajasthan at Heart",
            description:
                "Warm colours, elegant details, and a sense of local character bring the timeless beauty of Rajasthan into the guest experience."
        },
        {
            number: "02",
            title: "Comfort with Character",
            description:
                "Thoughtfully designed rooms and welcoming spaces combine modern comfort with the charm and character of a Rajasthan stay."
        },
        {
            number: "03",
            title: "Stay at Your Pace",
            description:
                "Whether you are exploring Udaipur, visiting Ranakpur, or simply taking a break, Tattva offers a relaxed space to rest, reconnect, and enjoy your journey."
        }
    ],

    link: {
        label: "Discover Our Story",
        href: "/about"
    }
};

export default function Philosophy() {
    return (
        <section className="w-full bg-[#f3efe8] text-[#18332f]">
            <div className="mx-auto max-w-[1360px] px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-16 lg:py-28">

                {/* Intro */}
                <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-20">

                    {/* Eyebrow */}
                    <div>
                        <div className="flex items-center gap-2.5 sm:gap-3">
                            <span className="h-px w-7 bg-[#18332f]/50 sm:w-10" />

                            <span className="text-[9px] font-semibold tracking-[0.18em] text-[#18332f]/70 sm:text-[10px] sm:tracking-[0.22em]">
                                {PHILOSOPHY_DATA.eyebrow}
                            </span>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="max-w-4xl">
                        <h2 className="font-serif text-[2.1rem] font-medium leading-[1.01] tracking-[-0.025em] sm:text-5xl md:text-6xl lg:text-7xl">
                            {PHILOSOPHY_DATA.title.normal}{" "}
                            <span className="">
                                {PHILOSOPHY_DATA.title.highlight}
                            </span>
                        </h2>

                        <p className="mt-5 max-w-2xl text-[13px] leading-6 text-[#18332f]/65 sm:mt-7 sm:text-base sm:leading-8">
                            {PHILOSOPHY_DATA.description}
                        </p>

                        <Link
                            href={PHILOSOPHY_DATA.link.href}
                            className="group mt-6 inline-flex items-center gap-2.5 border-b border-[#18332f]/30 pb-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors hover:border-[#18332f] sm:mt-8 sm:gap-3 sm:pb-2 sm:text-[11px] sm:tracking-[0.16em]"
                        >
                            {PHILOSOPHY_DATA.link.label}

                            <ArrowUpRight
                                size={15}
                                strokeWidth={1.5}
                                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:h-4 sm:w-4"
                            />
                        </Link>
                    </div>
                </div>

                {/* Image */}
                <div className="mt-10 overflow-hidden sm:mt-14 lg:mt-28">
                    <div className="group relative aspect-[4/3] overflow-hidden sm:aspect-[16/8] sm:min-h-[300px]">
                        <img
                            src={PHILOSOPHY_DATA.image.src}
                            alt={PHILOSOPHY_DATA.image.alt}
                            className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                        />

                        <div className="absolute inset-0 bg-black/10" />


                    </div>
                </div>

                {/* Details */}
                <div className="mt-10 grid grid-cols-1 border-t border-[#18332f]/15 sm:mt-14 md:grid-cols-3 lg:mt-16">
                    {PHILOSOPHY_DATA.details.map((item) => (
                        <div
                            key={item.number}
                            className="border-b border-[#18332f]/15 py-6 last:border-b-0 sm:py-7 md:border-b-0 md:border-r md:px-8 md:py-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                        >
                            <span className="text-[9px] font-semibold tracking-[0.16em] text-[#18332f]/45 sm:text-[10px] sm:tracking-[0.18em]">
                                {item.number}
                            </span>

                            <h3 className="mt-3 font-serif text-xl sm:mt-5 sm:text-2xl">
                                {item.title}
                            </h3>

                            <p className="mt-2.5 max-w-sm text-[13px] leading-6 text-[#18332f]/60 sm:mt-4 sm:text-sm sm:leading-7">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}