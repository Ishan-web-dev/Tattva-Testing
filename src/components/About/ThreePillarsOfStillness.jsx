import React from "react";

const THREE_PILLARS_DATA = {
    eyebrow: "Chapter 03 • The Tattva Experience",

    title: "Three Ways to Experience Tattva",

    pillars: [
        {
            id: 1,
            label: "Pillar 01",
            title: "Comfortable Stays",
            description:
                "Thoughtfully designed rooms and suites offer a peaceful place to rest, with modern comforts and warm interiors made for a relaxed Rajasthan stay.",
            image: {
                src: "https://i.pinimg.com/736x/81/1b/6f/811b6f20eb951a8518ef87ad98c324fe.jpg",
                alt: "Comfortable room at Tattva Udaipur",
            },
        },

        {
            id: 2,
            label: "Pillar 02",
            title: "Dining & Flavours",
            description:
                "Enjoy comforting Indian and Rajasthani flavours, fresh ingredients, and welcoming dining spaces made for relaxed breakfasts, family meals, and peaceful evenings.",
            image: {
                src: "https://i.pinimg.com/736x/90/58/d7/9058d7c57a5d1008a46add450458d96e.jpg",
                alt: "Dining experience at Tattva Udaipur",
            },
        },

        {
            id: 3,
            label: "Pillar 03",
            title: "Explore Rajasthan",
            description:
                "Use Tattva as your base to discover Udaipur, Ranakpur, the Aravalli landscapes, historic landmarks, local culture, and the timeless beauty of Rajasthan.",
            image: {
                src: "https://i.pinimg.com/736x/b5/4d/77/b54d77c534ff4b0f762d7fa6416fa94e.jpg",
                alt: "Rajasthan landscape and travel experience near Udaipur and Ranakpur",
            },
        },
    ],
};

export default function ThreePillarsOfStillness() {
    const data = THREE_PILLARS_DATA;

    return (
        <section className="w-full bg-[#ebe8e2]/40 py-20 lg:py-12">
            <div className="mx-auto max-w-[1360px] px-5 md:px-10 lg:px-[4.5rem]">

                {/* Section Heading */}
                <div className="mb-12 flex flex-col">
                    <span className="mb-2 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7d562d]">
                        {data.eyebrow}
                    </span>

                    <h2 className="font-serif text-[28px] font-normal leading-tight text-[#020402] md:text-[40px]">
                        {data.title}
                    </h2>
                </div>

                {/* Pillars */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {data.pillars.map((pillar) => (
                        <article
                            key={pillar.id}
                            className="group flex flex-col"
                        >
                            {/* Image */}
                            <div className="relative h-80 overflow-hidden rounded-lg">
                                <img
                                    src={pillar.image.src}
                                    alt={pillar.image.alt}
                                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />

                                {/* Image Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020402]/70 via-transparent to-transparent" />

                                {/* Image Content */}
                                <div className="absolute bottom-4 left-4 text-white">
                                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ffdcbd]">
                                        {pillar.label}
                                    </span>

                                    <h3 className="font-serif text-[18px] leading-[26px]">
                                        {pillar.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Description */}
                            {/* <div className="flex flex-col pt-5">
                                <p className="max-w-xl font-sans text-[13px] font-light leading-5 text-[#444844]">
                                    {pillar.description}
                                </p>
                            </div> */}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}