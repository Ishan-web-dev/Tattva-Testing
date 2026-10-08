"use client";

import React from "react";

const EXPLORATION_DATA = {
    eyebrow: "Explore & Experience",

    title: "Discover the Beauty Around Tattva",

    paragraphs: [
        "Tattva offers more than a comfortable stay. Step outside and discover peaceful forest surroundings, the Aravalli landscape, and the rich culture of Rajasthan.",

        "From exploring Udaipur and visiting Ranakpur to discovering local places and enjoying quiet moments in nature, every experience lets you see Rajasthan at your own pace.",
    ],

    privileges: [
        {
            label: "Experience 01",
            title: "Nature & Forest Walks",
            description:
                "Enjoy the peaceful surroundings of the forest and Aravalli landscape with relaxed walks and quiet moments close to nature.",
        },
        {
            label: "Experience 02",
            title: "Udaipur & Ranakpur",
            description:
                "Explore the lakes, heritage, temples, and cultural landmarks of Udaipur and Ranakpur, all while enjoying the comfort of Tattva as your base.",
        },
        {
            label: "Experience 03",
            title: "Local Rajasthan",
            description:
                "Discover the local culture, traditions, landscapes, and everyday charm of Rajasthan through places and experiences around the hotel.",
        },
    ],
};

export default function RestorativeExploration() {
    return (
        <section className="w-full bg-[#fcf9f3] py-16 md:py-20 lg:py-24">
            <div className="mx-auto w-full max-w-[1360px] px-5 md:px-10 lg:px-[4.5rem]">
                <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
                    {/* Left Content */}
                    <div className="space-y-6 lg:col-span-7">
                        <span className="block font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7d562d]">
                            {EXPLORATION_DATA.eyebrow}
                        </span>

                        <h2 className="font-serif text-3xl font-normal leading-tight tracking-tight text-[#1b1e1b] sm:text-4xl lg:text-5xl">
                            {EXPLORATION_DATA.title}
                        </h2>

                        <div className="space-y-4">
                            {EXPLORATION_DATA.paragraphs.map(
                                (paragraph, index) => (
                                    <p
                                        key={index}
                                        className={
                                            index === 0
                                                ? "font-sans text-lg leading-8 text-[#555b55]"
                                                : "font-sans text-base leading-7 text-[#555b55]"
                                        }
                                    >
                                        {paragraph}
                                    </p>
                                )
                            )}
                        </div>
                    </div>

                    {/* Right Privileges */}
                    <div className="flex flex-col gap-3 rounded-xl bg-[#f3f0e9] p-5 md:p-6 lg:col-span-5 lg:p-8">
                        {EXPLORATION_DATA.privileges.map((privilege) => (
                            <div
                                key={privilege.label}
                                className="rounded-lg bg-[#fcf9f3] p-5 shadow-sm md:p-6"
                            >
                                <span className="mb-2 block font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7d562d]">
                                    {privilege.label}
                                </span>

                                <h3 className="font-serif text-xl font-normal leading-7 text-[#1b1e1b]">
                                    {privilege.title}
                                </h3>

                                <p className="mt-2 font-sans text-sm leading-6 text-[#555b55]">
                                    {privilege.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}