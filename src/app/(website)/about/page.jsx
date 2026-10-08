import React from 'react'
import About from '@/components/About/About'


export const metadata = {
  title: "About Tattva Udaipur | Rajasthan Hospitality & Comfort",

  description:
    "Discover Tattva Udaipur, a Rajasthan-based hotel offering comfortable rooms, warm hospitality, and a peaceful stay for travellers exploring Udaipur, Ranakpur, and the Aravalli region.",

  keywords: [
    "Tattva Udaipur",
    "Tattva Hotel Udaipur",
    "hotel in Udaipur",
    "hotels in Udaipur Rajasthan",
    "Ranakpur hotel",
    "Rajasthan hotel",
    "Udaipur stay",
    "hotel near Ranakpur",
    "Rajasthan hospitality",
  ],

  authors: [
    {
      name: "Tattva Udaipur",
    },
  ],

  creator: "Tattva Udaipur",

  openGraph: {
    title: "About Tattva Udaipur | Rajasthan Hospitality & Comfort",

    description:
      "Learn more about Tattva Udaipur, a comfortable Rajasthan hotel offering warm hospitality and a memorable stay in Udaipur and Ranakpur.",

    type: "website",

    locale: "en_IN",

    siteName: "Tattva Udaipur",

    images: [
      {
        url: "https://i.pinimg.com/1200x/56/79/a3/5679a3635fb7c9d2bdc3b60f4cc2a208.jpg",
        width: 1200,
        height: 800,
        alt: "Tattva Udaipur hotel",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "About Tattva Udaipur | Rajasthan Hospitality & Comfort",

    description:
      "Discover Tattva Udaipur, a comfortable Rajasthan hotel inspired by the warmth, culture, and timeless charm of the region.",

    images: [
      "https://i.pinimg.com/1200x/56/79/a3/5679a3635fb7c9d2bdc3b60f4cc2a208.jpg",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

function page() {
  return (
    <div>
      <About />
    </div>
  )
}

export default page
