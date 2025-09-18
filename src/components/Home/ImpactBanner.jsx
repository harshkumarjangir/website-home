import React from 'react';
import homeData from "@/data/homeData.json"
import { TrendingUp } from 'lucide-react';
import Link from 'next/link';

const ImpactBanner = () => {
    const { text, buttonText, buttonLink } = homeData.impactBanner;

    return (
        <div className="bg-black px-10">
            <div className="bg-[#171717] text-white border-2 border-[#2B2B2B] p-6 rounded-lg flex flex-col md:flex-row max-md:gap-y-5 items-center justify-between shadow-lg">
                <div className="flex items-center space-x-4">
                    <div className="bg-[#2F2F2F] p-2 rounded">
                        <TrendingUp size={32} />
                    </div>
                    <span className="text-lg font-semibold">{text}</span>
                </div>

                <Link
                    href={buttonLink}
                    className="bg-[#1163FB] hover:bg-[#084AC6] text-white md:font-semibold max-md:py-2 py-4 px-5 rounded-lg transition duration-300"
                >
                    {buttonText}
                </Link>
            </div>
        </div>
    );
};

export default ImpactBanner;
