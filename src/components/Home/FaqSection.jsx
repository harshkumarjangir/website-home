"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import homeData from "@/data/homeData.json";

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="py-16 px-6 md:px-16 mx-auto border-b-6 border-[#1163FB]">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
                {homeData.faqsSection.title}
            </h2>

            {/* FAQ List */}
            <div className="grid md:grid-cols-2 gap-6 items-start">
                {homeData.faqsSection.faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-indigo-50 p-6 rounded-2xl shadow-sm flex flex-col"
                    >
                        {/* Question Row */}
                        <button
                            className="flex items-center justify-between w-full text-left hover:text-[#1D6DFB] transition-colors duration-200 tracking-wide cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="text-lg font-medium w-[90%]">{faq.question}</span>
                            {activeIndex === index ? (
                                <ChevronUp className="w-8 h-8" />
                            ) : (
                                <ChevronDown className="w-8 h-8" />
                            )}
                        </button>

                        {/* Answer */}
                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden mt-4 text-gray-600 text-sm leading-relaxed"
                                >
                                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FaqSection;
