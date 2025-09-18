"use client";

import homeData from "@/data/homeData.json";
import {
    BrainCircuit, Smartphone, Code, Workflow,
    Lightbulb, Monitor, Infinity, Cloud,
    ChevronRight
} from "lucide-react";
import Link from "next/link";

const icons = {
    BrainCircuit: <BrainCircuit className="w-8 h-8 text-white" />,
    Smartphone: <Smartphone className="w-8 h-8 text-white" />,
    Code: <Code className="w-8 h-8 text-white" />,
    Workflow: <Workflow className="w-8 h-8 text-white" />,
    Lightbulb: <Lightbulb className="w-8 h-8 text-white" />,
    Monitor: <Monitor className="w-8 h-8 text-white" />,
    Infinity: <Infinity className="w-8 h-8 text-white" />,
    Cloud: <Cloud className="w-8 h-8 text-white" />
};

const ServicesSection = () => {
    const { servicesSection } = homeData;
    const { title, buttonText, buttonUrl, items } = servicesSection;

    return (
        <section className="bg-black text-white py-16 px-6 md:px-16">
            <div className="mb-12 flex justify-between items-center">
                <h2 className="text-2xl lg:text-5xl leading-snug">{title}</h2>
                <div className="max-sm:hidden">
                    <Link
                        href={buttonUrl}
                        className="bg-transparent group hover:bg-[#1163FB] border-2 border-white hover:border-2 hover:border-[#1163FB] text-white text-nowrap py-1.5 px-3 pl-5 rounded-lg transition duration-300 inline-flex items-center"
                    >
                        {buttonText}

                        <style>
                            {`
                  @keyframes slide-horizontal {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(8px); }
                  }
                  .group:hover .chevron-animate {
                    animation: slide-horizontal 0.7s infinite ease-in-out;
                  }
                `}
                        </style>

                        <ChevronRight
                            size={22}
                            className="inline-block ml-2 chevron-animate"
                        />
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {items.map((service, idx) => (
                    <div
                        key={idx}
                        className="bg-neutral-900 border border-neutral-700 rounded-xl p-6 hover:border hover:border-[#1163FB] transition duration-300 cursor-pointer"
                    >
                        <div className="mb-4">{icons[service.icon]}</div>
                        <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-300">{service.description}</p>
                    </div>
                ))}
            </div>

            <div className="sm:hidden mt-10 text-center">
                <Link
                    href={buttonUrl}
                    className="bg-transparent group hover:bg-[#1163FB] border-2 border-white hover:border-2 hover:border-[#1163FB] text-white py-1.5 px-3 pl-5 rounded-lg transition duration-300 inline-flex items-center"
                >
                    {buttonText}

                    <style>
                        {`
                  @keyframes slide-horizontal {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(8px); }
                  }
                  .group:hover .chevron-animate {
                    animation: slide-horizontal 0.7s infinite ease-in-out;
                  }
                `}
                    </style>

                    <ChevronRight
                        size={22}
                        className="inline-block ml-2 chevron-animate"
                    />
                </Link>
            </div>
        </section>
    );
}
export default ServicesSection;