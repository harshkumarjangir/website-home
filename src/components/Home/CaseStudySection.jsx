// "use client";

// import { useRef, useState } from "react";
// import homeData from "@/data/homeData.json";
// import { ChevronRight } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//     motion,
//     useScroll,
//     useTransform,
//     AnimatePresence,
// } from "framer-motion";

// const CaseStudySection = () => {
//     const slides = homeData.caseStudySection || [];
//     const scrollRef = useRef(null);
//     const [activeIndex, setActiveIndex] = useState(0);

//     // Scroll progress tracker for progress bar
//     const { scrollYProgress } = useScroll({
//         container: scrollRef,
//     });

//     const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

//     const handleScroll = () => {
//         if (!scrollRef.current) return;
//         const scrollTop = scrollRef.current.scrollTop;
//         const totalScrollHeight =
//             scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
//         const index = Math.round(
//             (scrollTop / totalScrollHeight) * (slides.length - 1)
//         );
//         setActiveIndex(index);
//     };

//     if (slides.length === 0) return null;

//     const activeSlide = slides[activeIndex];

//     return (
//         <div className="flex flex-col md:flex-row h-screen md:h-[80vh] gap-x-10 max-md:gap-y-5 bg-black text-white md:p-16 p-3">
//             {/* Left Info Section */}
//             <div className="md:w-1/3 flex flex-col justify-center space-y-6">
//                 <AnimatePresence mode="wait">
//                     <motion.div
//                         key={activeIndex}
//                         initial={{ opacity: 0, x: -40 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         exit={{ opacity: 0, x: 40 }}
//                         transition={{ duration: 0.6, ease: "easeOut" }}
//                         className="space-y-6"
//                     >
//                         <p className="text-blue-500">Case Study</p>
//                         <h2 className="text-2xl font-bold">{activeSlide.company}</h2>
//                         <p className="font-light">{activeSlide.description}</p>
//                         <p className="text-xs">{activeSlide.result}</p>
//                         <div className="flex space-x-8">
//                             {activeSlide.stats.map((stat, idx) => (
//                                 <motion.div
//                                     key={idx}
//                                     className="border-r pr-6 last:border-r-0"
//                                     initial={{ opacity: 0, y: 20 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ delay: 0.2 * idx, duration: 0.5 }}
//                                 >
//                                     <p className="text-2xl font-bold">{stat.count}</p>
//                                     <p className="text-sm">{stat.title}</p>
//                                 </motion.div>
//                             ))}
//                         </div>
//                         {/* Call to Action Button */}
//                         <Link
//                             href={activeSlide.buttonLink}
//                             className="w-44 bg-transparent group hover:bg-[#1163FB] border-2 border-white hover:border-2 hover:border-[#1163FB] text-white py-3 px-3 rounded-lg transition duration-300 inline-flex items-center"
//                         >
//                             {activeSlide.buttonText}

//                             <style>
//                                 {`
//                   @keyframes slide-horizontal {
//                     0%, 100% { transform: translateX(0); }
//                     50% { transform: translateX(8px); }
//                   }
//                   .group:hover .chevron-animate {
//                     animation: slide-horizontal 0.7s infinite ease-in-out;
//                   }
//                 `}
//                             </style>

//                             <ChevronRight
//                                 size={22}
//                                 className="inline-block ml-1 chevron-animate"
//                             />
//                         </Link>
//                     </motion.div>
//                 </AnimatePresence>
//             </div>

//             {/* Image Scroller */}
//             <div className="relative md:w-2/3">
//                 {/* Progress bar */}
//                 <motion.div
//                     style={{ scaleX }}
//                     className="absolute top-0 left-0 h-1 bg-blue-500 origin-left z-10"
//                 />
//                 <div
//                     ref={scrollRef}
//                     onScroll={handleScroll}
//                     className="h-[60vh] overflow-y-scroll scroll-smooth custom-scrollbar relative z-0"
//                     style={{ scrollbarWidth: "thin" }}
//                 >
//                     {slides.map((slide, idx) => {
//                         // Each image has its own scroll range
//                         const { scrollYProgress: itemScroll } = useScroll({
//                             container: scrollRef,
//                             offset: ["start end", "end start"],
//                         });

//                         // Parallax effect (move up/down slightly while scrolling)
//                         const y = useTransform(itemScroll, [0, 1], ["-10%", "10%"]);

//                         return (
//                             <motion.div
//                                 key={idx}
//                                 className="mb-0 rounded-lg overflow-hidden w-full h-[60vh] relative"
//                                 initial={{ opacity: 0, scale: 0.95 }}
//                                 whileInView={{ opacity: 1, scale: 1 }}
//                                 transition={{ duration: 0.6, ease: "easeOut" }}
//                                 viewport={{ once: false, amount: 0.4 }}
//                                 style={{ y }}
//                             >
//                                 <Image
//                                     src={slide.image}
//                                     alt={`Slide ${idx}`}
//                                     fill
//                                     className="object-cover"
//                                     sizes="100vw"
//                                     priority={idx === 0}
//                                 />
//                             </motion.div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CaseStudySection;











"use client";

import { useRef, useState } from "react";
import homeData from "@/data/homeData.json";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const CaseStudySection = () => {
    const slides = homeData.caseStudySection || [];
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Scroll progress tracker
    const { scrollYProgress } = useScroll({
        container: scrollRef,
    });

    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const handleScroll = () => {
        if (!scrollRef.current) return;
        const scrollTop = scrollRef.current.scrollTop;
        const totalScrollHeight =
            scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
        const index = Math.round(
            (scrollTop / totalScrollHeight) * (slides.length - 1)
        );
        setActiveIndex(index);
    };

    if (slides.length === 0) return null;

    const activeSlide = slides[activeIndex];

    return (
        <div className="flex flex-col md:flex-row h-screen md:h-[80vh] gap-x-10 max-md:gap-y-5 bg-black text-white md:p-16 p-3">
            {/* Left Info Section with AnimatePresence */}
            <div className="md:w-1/3 flex flex-col justify-center space-y-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 40 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        <p className="text-blue-500">Case Study</p>
                        <h2 className="text-2xl font-bold">{activeSlide.company}</h2>
                        <p className="font-light">{activeSlide.description}</p>
                        <p className="text-xs">{activeSlide.result}</p>
                        <div className="flex space-x-8">
                            {activeSlide.stats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    className="border-r pr-6 last:border-r-0"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 * idx, duration: 0.5 }}
                                >
                                    <p className="text-2xl font-bold">{stat.count}</p>
                                    <p className="text-sm">{stat.title}</p>
                                </motion.div>
                            ))}
                        </div>
                        {/* Call to Action Button */}
                        <Link
                            href={activeSlide.buttonLink}
                            className="w-44 bg-transparent group hover:bg-[#1163FB] border-2 border-white hover:border-2 hover:border-[#1163FB] text-white py-3 px-3 rounded-lg transition duration-300 inline-flex items-center"
                        >
                            {activeSlide.buttonText}

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
                                className="inline-block ml-1 chevron-animate"
                            />
                        </Link>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Image Scroller */}
            <div className="relative md:w-2/3">
                {/* Progress bar */}
                <motion.div
                    style={{ scaleX }}
                    className="absolute top-0 left-0 h-1 bg-blue-500 origin-left z-10"
                />
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="h-[60vh] overflow-y-scroll scroll-smooth custom-scrollbar relative z-0"
                    style={{ scrollbarWidth: "thin" }}
                >
                    {slides.map((slide, idx) => (
                        <motion.div
                            key={idx}
                            className="mb-0 rounded-lg overflow-hidden w-full h-[60vh] relative"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.4 }}
                        >
                            <Image
                                src={slide.image}
                                alt={`Slide ${idx}`}
                                fill
                                className="object-cover"
                                sizes="100vw"
                                priority={idx === 0}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CaseStudySection;











// "use client";

// import { useRef, useState } from "react";
// import homeData from "@/data/homeData.json";
// import { ChevronRight } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";

// const CaseStudySection = () => {
//     const slides = homeData.caseStudySection || [];
//     const scrollRef = useRef();
//     const [activeIndex, setActiveIndex] = useState(0);

//     const handleScroll = () => {
//         const scrollTop = scrollRef.current.scrollTop;
//         const totalScrollHeight = scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
//         const index = Math.round((scrollTop / totalScrollHeight) * (slides.length - 1));
//         setActiveIndex(index);
//     };

//     if (slides.length === 0) return null;

//     const activeSlide = slides[activeIndex];

//     return (
//         <div className="flex flex-col md:flex-row h-screen md:h-[80vh] gap-x-10 max-md:gap-y-5 bg-black text-white md:p-16 p-3">
//             {/* Left Info Section */}
//             <div className="md:w-1/3 flex flex-col justify-center space-y-6">
//                 <p className="text-blue-500">Case Study</p>
//                 <h2 className="text-2xl font-bold">{activeSlide.company}</h2>
//                 <p className="font-light">{activeSlide.description}</p>
//                 <p className="text-xs">{activeSlide.result}</p>
//                 <div className="flex space-x-8">
//                     {activeSlide.stats.map((stat, idx) => (
//                         <div key={idx} className="border-r pr-6 last:border-r-0">
//                             <p className="text-2xl font-bold">{stat.count}</p>
//                             <p className="text-sm">{stat.title}</p>
//                         </div>
//                     ))}
//                 </div>
//                 {/* Call to Action Button */}
//                 <Link
//                     href={activeSlide.buttonLink}
//                     className="w-44 bg-transparent group hover:bg-[#1163FB] border-2 border-white hover:border-2 hover:border-[#1163FB] text-white py-3 px-3 rounded-lg transition duration-300 inline-flex items-center"
//                 >
//                     {activeSlide.buttonText}

//                     <style>
//                         {`
//       @keyframes slide-horizontal {
//         0%, 100% { transform: translateX(0); }
//         50% { transform: translateX(8px); }
//       }
//       .group:hover .chevron-animate {
//         animation: slide-horizontal 0.7s infinite ease-in-out;
//       }
//     `}
//                     </style>

//                     <ChevronRight
//                         size={22}
//                         className="inline-block ml-1 chevron-animate"
//                     />
//                 </Link>
//             </div>

//             {/* Image Scroller */}
//             <div
//                 ref={scrollRef}
//                 onScroll={handleScroll}
//                 className="md:w-2/3 h-[60vh] overflow-y-scroll scroll-smooth custom-scrollbar"
//                 style={{ scrollbarWidth: "thin" }}
//             >
//                 {slides.map((slide, idx) => (
//                     <div key={idx} className="mb-0 rounded-lg overflow-hidden w-full h-[60vh] relative">
//                         <Image
//                             src={slide.image}
//                             alt={`Slide ${idx}`}
//                             fill
//                             className="object-cover"
//                             sizes="100vw"
//                             priority={idx === 0}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default CaseStudySection;