"use client";

import homeData from "@/data/homeData.json";
import { motion } from "motion/react"
import { Cpu, Sparkles, BrainCircuit, Eye, Send, ChevronRight } from "lucide-react";
import Link from "next/link";

const icons = {
    Cpu: <Cpu className="w-6 h-6 text-white" />,
    Sparkles: <Sparkles className="w-6 h-6 text-white" />,
    BrainCircuit: <BrainCircuit className="w-6 h-6 text-white" />,
    Eye: <Eye className="w-6 h-6 text-white" />
};

const InnovationSection = () => {
    const { innovationSection } = homeData;
    const { title, cta, items } = innovationSection;

    return (
        <section className="bg-black text-white py-16 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left side */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-medium leading-snug mb-6">
                        {title}
                    </h2>

                    <div className="bg-neutral-900 rounded-xl p-6 shadow-lg mt-8">
                        <div className="flex flex-col items-start mb-3">
                            <Send className="w-10 h-10 text-white mb-2" />
                            <h3 className="text-2xl font-semibold">{cta.title}</h3>
                        </div>
                        <p className="text-[18px] mb-4">{cta.subtitle}</p>
                        <Link
                            href={cta.buttonUrl}
                            className="inline-block bg-[#1163FB] hover:bg-transparent border-2 border-[#1163FB] hover:border-white text-white font-semibold px-6 py-2 rounded-lg transition duration-300"
                        >
                            {cta.buttonText}
                        </Link>
                    </div>
                </div>

                {/* Right side - scrollable list with animation */}
                <div className="space-y-0 overflow-y-auto max-h-[450px] pr-2 no-scrollbar">
                    {items.map((item, idx) => (
                        <Link href={item.link} key={idx}>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group border-b border-neutral-800 py-5 hover:bg-[#131315] cursor-pointer transition duration-300"
                            >
                                <div
                                    className="flex items-center justify-between mb-0">
                                    <div className="flex items-center space-x-2">
                                        <span className="group-hover:transform md:group-hover:translate-x-3 transition-transform duration-500">{icons[item.icon]}</span>
                                        <h3 className="text-lg font-semibold ml-2">{item.title}</h3>
                                    </div>
                                    <ChevronRight
                                        size={22}
                                        className="group-hover:transform group-hover:-translate-x-3 inline-block transition-transform duration-300"
                                    />
                                </div>
                                <p className="text-sm px-10 pt-3">{item.description}</p>
                            </motion.div>
                        </Link>

                    ))}
                </div>
            </div>
        </section>
    );
}
export default InnovationSection;