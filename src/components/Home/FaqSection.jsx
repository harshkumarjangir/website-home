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
        <section className="py-16 px-6 md:px-16 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-6 items-start">
                {homeData.faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-indigo-50 p-6 rounded-2xl shadow-sm flex flex-col"
                    >
                        {/* Question Row */}
                        <button
                            className="flex items-center justify-between w-full text-left"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="text-lg font-medium">{faq.question}</span>
                            {activeIndex === index ? (
                                <ChevronUp className="w-5 h-5" />
                            ) : (
                                <ChevronDown className="w-5 h-5" />
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
