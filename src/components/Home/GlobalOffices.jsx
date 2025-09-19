"use client";

import React from "react";
import Image from "next/image"; // Next.js optimized image
import homeData from "@/data/homeData.json";

const GlobalOffices = () => {
    const { logo, tagline, locations } = homeData.offices;

    return (
        <section className="bg-black text-white py-16 px-6 md:px-16">
            {/* Top logo + tagline */}
            <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto mb-12">
                <div className="flex items-center gap-3">
                    <Image src={logo} alt="Company Logo" width={160} height={40} priority />
                </div>
                <div className="bg-[#1d1d40] px-6 py-2 rounded-md mt-6 md:mt-0">
                    <span className="text-sm md:text-base font-medium">{tagline}</span>
                </div>
            </div>

            {/* Office Grid */}
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-7xl mx-auto text-center">
                {locations.map((office, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                        <img
                            src={office.image}
                            alt={`${office.country} office`}
                            className="h-20 mb-4"
                        />
                        <h3 className="font-semibold text-lg">{office.country}</h3>
                        <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                            {office.address}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GlobalOffices;
