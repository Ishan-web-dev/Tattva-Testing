"use client";

import React from "react";
import {
    ArrowRight,
    Coffee,
    Utensils,
} from "lucide-react";
import Link from "next/link";

const SENSORY_DATA = {
    section: {
        className: "w-full py-24 lg:py-36 bg-[#fcf9f3]",
    },

    chapters: [
        {
            id: 1,
            number: "Chapter 01 • Dining & Flavours",
            title: "A taste of Rajasthan, served with warmth.",

            description:
                "Dining at Tattva is a simple celebration of good food and warm hospitality. Enjoy thoughtfully prepared Indian and Rajasthani flavours, fresh ingredients, and comfortable dining spaces made for relaxed breakfasts, family meals, and peaceful evenings.",

            image: {
                src: "https://i.pinimg.com/736x/3b/61/5d/3b615d7f6e6134b0a01179b6d487289b.jpg",
                alt: "Elegant dining space at Tattva Udaipur",
            },

            layout: "image-left",

            highlights: [
                {
                    title: "Rajasthani Flavours",
                    description:
                        "Enjoy traditional favourites and regional flavours prepared with fresh ingredients and local inspiration.",
                    icon: Utensils,
                },
                {
                    title: "Relaxed Dining",
                    description:
                        "Comfortable spaces for a relaxed breakfast, family meal, or evening dining with friends.",
                    icon: Coffee,
                },
            ],

            storyCard: {
                eyebrow: "A Taste of Rajasthan",
                text: '"Simple flavours, warm hospitality, and memorable meals inspired by the region."',
                footer: "Tattva Udaipur",
                position: "bottom",
            },

            cta: "Explore Dining",
        },

        {
            id: 2,
            number: "Chapter 02 • Rest & Relaxation",
            title: "A peaceful space to slow down and unwind.",

            description:
                "After a day of exploring Udaipur, Ranakpur, or the surrounding Aravalli landscapes, return to a calm and comfortable environment. From restful rooms to welcoming common spaces, Tattva gives you the time and space to relax at your own pace.",

            image: {
                src: "https://i.pinimg.com/1200x/f7/c3/d9/f7c3d98e3dca05c6688625469ed7797f.jpg",
                alt: "Peaceful relaxation area at Tattva Udaipur",
            },

            layout: "content-left",

            highlights: [
                {
                    title: "Comfortable Spaces",
                    description:
                        "Relax in thoughtfully designed spaces that bring together comfort, simplicity, and a warm atmosphere.",
                },
                {
                    title: "Time to Unwind",
                    description:
                        "Take a break from sightseeing and enjoy a slower, more peaceful side of your Rajasthan journey.",
                },
            ],

            storyCard: {
                eyebrow: "Your Time to Relax",
                text: '"Come back from the day, leave the rush behind, and simply enjoy your stay."',
                position: "top",
            },

            cta: "Discover Your Stay",
        },

        {
            id: 3,
            number: "Chapter 03 • Udaipur & Ranakpur",
            title: "Discover the beauty and stories of Rajasthan.",

            description:
                "Tattva is a comfortable base for discovering the culture, history, and natural beauty of Rajasthan. Explore the lakes and palaces of Udaipur, visit the famous Jain temples of Ranakpur, or take a scenic drive through the Aravalli hills.",

            image: {
                src: "https://i.pinimg.com/1200x/9b/90/d3/9b90d3ebd5c5640c823cb87c9e184620.jpg",
                alt: "Rajasthan heritage and travel experience near Udaipur and Ranakpur",
            },

            layout: "image-left",

            featureCard: {
                title: "Explore Rajasthan",
                time: "Plan Your Day",
                description:
                    "Discover nearby heritage sites, local culture, scenic landscapes, and memorable places around Udaipur and Ranakpur.",
            },

            cta: "Explore Experiences",
        },
    ],
};

function StoryImage({ chapter }) {
    return (
        <div className="relative lg:col-span-6">
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-[#dcdad4] shadow-lg">
                <img
                    src={chapter.image.src}
                    alt={chapter.image.alt}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                />
            </div>

            {chapter.storyCard && (
                <div
                    className={`absolute hidden max-w-xs rounded-xl bg-white p-6 shadow-xl sm:block ${chapter.storyCard.position === "top"
                        ? "-left-6 -top-6"
                        : "-bottom-8 -right-6"
                        }`}
                >
                    <span className="mb-1 block font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7d562d]">
                        {chapter.storyCard.eyebrow}
                    </span>

                    <p className="font-serif text-sm leading-6 text-[#020402]">
                        {chapter.storyCard.text}
                    </p>

                    {chapter.storyCard.footer && (
                        <span className="mt-2 block font-sans text-[10px] uppercase tracking-[0.1em] text-[#444844]">
                            {chapter.storyCard.footer}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
}

function ChapterContent({ chapter }) {
    return (
        <div className="flex flex-col gap-6 lg:col-span-6 lg:pl-8">
            {/* Chapter Label */}
            <div className="flex items-center gap-3">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7d562d]">
                    {chapter.number}
                </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-[28px] font-normal leading-9 tracking-tight text-[#020402] md:text-[40px] md:leading-[48px]">
                {chapter.title}
            </h2>

            {/* Description */}
            <p className="font-sans text-[15px] font-light leading-6 text-[#444844]">
                {chapter.description}
            </p>

            {/* Chapter 01 */}
            {chapter.highlights && chapter.id === 1 && (
                <div className="space-y-4 pt-2">
                    {chapter.highlights.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="flex items-start gap-4"
                            >
                                <Icon
                                    size={20}
                                    strokeWidth={1.5}
                                    className="mt-0.5 shrink-0 text-[#7d562d]"
                                />

                                <div>
                                    <h4 className="font-sans text-sm font-semibold text-[#020402]">
                                        {item.title}
                                    </h4>

                                    <p className="font-sans text-[13px] leading-5 text-[#444844]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Chapter 02 */}
            {chapter.highlights && chapter.id === 2 && (
                <div className="grid grid-cols-2 gap-4 pt-2">
                    {chapter.highlights.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-lg bg-[#f6f3ed] p-4"
                        >
                            <span className="block font-serif text-lg leading-6 text-[#020402]">
                                {item.title}
                            </span>

                            <span className="mt-1 block font-sans text-[12px] leading-5 text-[#444844]">
                                {item.description}
                            </span>
                        </div>
                    ))}
                </div>
            )}

            {/* Chapter 03 */}
            {chapter.featureCard && (
                <div className="flex flex-col gap-2 rounded-xl bg-[#f6f3ed] p-6">
                    <div className="flex items-center justify-between gap-4">
                        <span className="font-sans text-sm font-semibold text-[#020402]">
                            {chapter.featureCard.title}
                        </span>

                        <span className="shrink-0 font-sans text-[11px] uppercase tracking-[0.12em] text-[#7d562d]">
                            {chapter.featureCard.time}
                        </span>
                    </div>

                    <p className="font-sans text-[13px] leading-5 text-[#444844]">
                        {chapter.featureCard.description}
                    </p>
                </div>
            )}

            {/* CTA */}
            {/* <div className="pt-2">
                <Link
                    href=""
                    className="group inline-flex items-center gap-2 font-sans text-sm font-medium text-[#020402] underline decoration-[#7d562d]/50 underline-offset-8 transition-colors duration-300 hover:text-[#7d562d] hover:decoration-[#7d562d]"
                >
                    <span>{chapter.cta}</span>

                    <ArrowRight
                        size={16}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                </Link>
            </div> */}
        </div>
    );
}

export default function SensoryImmersion() {
    return (
        <section className={SENSORY_DATA.section.className}>
            <div className="mx-auto flex max-w-[1360px] flex-col gap-24 px-5 md:px-10 lg:gap-32 lg:px-[4.5rem]">
                {SENSORY_DATA.chapters.map((chapter) => (
                    <div
                        key={chapter.id}
                        className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10"
                    >
                        {chapter.layout === "image-left" ? (
                            <>
                                <StoryImage chapter={chapter} />
                                <ChapterContent chapter={chapter} />
                            </>
                        ) : (
                            <>
                                <div className="order-2 lg:order-1 lg:col-span-6">
                                    <ChapterContent chapter={chapter} />
                                </div>

                                <div className="order-1 lg:order-2 lg:col-span-6">
                                    <StoryImage chapter={chapter} />
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}