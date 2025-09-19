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

import { useRef, useState, useEffect } from "react";
import homeData from "@/data/homeData.json";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
    motion,
    AnimatePresence,
    useScroll,
    useTransform,
} from "framer-motion";

export default function CaseStudySection() {
    const slides = homeData.caseStudySection || [];
    const containerRef = useRef(null);

    // track scroll progress
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (!scrollYProgress || slides.length === 0) return;

        const unsubscribe = scrollYProgress.on("change", (v) => {
            const idx = Math.min(
                slides.length - 1,
                Math.floor(v * slides.length)
            );
            setActiveIndex(idx);
        });

        return () => unsubscribe();
    }, [scrollYProgress, slides.length]);

    if (!slides.length) return null;

    // Parallax shift
    const yParallax = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

    // Scroll to a specific index when clicking indicator
    const scrollToIndex = (idx) => {
        if (!containerRef.current) return;
        const sectionHeight = window.innerHeight;
        const targetScroll = containerRef.current.offsetTop + idx * sectionHeight;
        window.scrollTo({ top: targetScroll, behavior: "smooth" });
    };

    return (
        <section
            ref={containerRef}
            style={{ height: `${slides.length * 100}vh` }}
            className="relative bg-black text-white"
        >
            <div className="sticky top-0 h-screen flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-6 lg:px-12 max-md:pt-10 gap-10">
                {/* --- Left Text --- */}
                <div className="w-full lg:w-[38%] relative z-20">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 40 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="space-y-5"
                        >
                            <p className="text-blue-500 text-sm sm:text-base font-medium">
                                Case Study
                            </p>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
                                {slides[activeIndex].company}
                            </h2>
                            <p className="text-sm sm:text-base font-light leading-relaxed text-gray-300">
                                {slides[activeIndex].description}
                            </p>
                            <p className="text-xs sm:text-sm uppercase tracking-wide text-gray-400">
                                {slides[activeIndex].result}
                            </p>

                            {/* Stats */}
                            <motion.div
                                className="flex flex-wrap sm:flex-nowrap sm:space-x-10 mt-2"
                                initial="hidden"
                                animate="show"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    show: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { staggerChildren: 0.15 },
                                    },
                                }}
                            >
                                {slides[activeIndex].stats.map((s, i) => (
                                    <motion.div
                                        key={i}
                                        className=" first:pr-8 border-r-2 border-gray-700 last:border-r-0 max-md:last:pl-8 mb-4 sm:mb-0"
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            show: { opacity: 1, y: 0 },
                                        }}
                                    >
                                        <p className="text-2xl sm:text-3xl font-bold">{s.count}</p>
                                        <p className="text-xs sm:text-sm text-gray-400">{s.title}</p>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                whileHover="hover"
                            >
                                <Link
                                    href={slides[activeIndex].buttonLink}
                                    className="inline-flex items-center mt-6 px-4 py-2 sm:px-5 sm:py-3 rounded-lg border border-white hover:bg-[#1163FB] hover:border-[#1163FB] transition"
                                >
                                    <span className="text-xs sm:text-sm font-medium">
                                        {slides[activeIndex].buttonText}
                                    </span>
                                    <motion.div
                                        className="ml-2"
                                        variants={{
                                            hover: { x: [0, 6, 0] }
                                        }}
                                        transition={{ repeat: Infinity, duration: 1.0 }}
                                    >
                                        <ChevronRight className="ml-2 w-6 h-6" />
                                    </motion.div>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* --- Right Image --- */}
                {/* <div className="w-full lg:w-[62%] h-[250px] sm:h-[350px] lg:h-[80%] relative overflow-hidden rounded-2xl shadow-2xl">
                    {slides.map((slide, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: idx === 0 ? 1 : 0 }}
                            animate={{
                                opacity: activeIndex === idx ? 1 : 0,
                                scale: activeIndex === idx ? 1 : 1.05,
                            }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="absolute inset-0"
                        >
                            <motion.div style={{ y: yParallax }} className="w-full h-full overflow-hidden rounded-2xl">
                                <Image
                                    src={slide.image}
                                    alt={slide.company}
                                    fill
                                    className="object-cover overflow-hidden"
                                    priority={idx === 0}
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div> */}
                {/* --- Right Image --- */}
                <div className="w-full lg:w-[62%] h-[250px] sm:h-[350px] lg:h-[70%] relative overflow-hidden rounded-2xl shadow-2xl">
                    {slides.map((slide, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }} // Start slightly below
                            animate={{
                                opacity: activeIndex === idx ? 1 : 0,
                                y: activeIndex === idx ? 0 : -40, // Active → center, Inactive → move up
                                scale: activeIndex === idx ? 1 : 1.05, // Optional zoom effect
                            }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={slide.image}
                                alt={slide.company}
                                fill
                                className="object-cover rounded-2xl"
                                priority={idx === 0}
                            />
                        </motion.div>
                    ))}
                </div>



                {/* --- Progress Indicator --- */}
                {/* Desktop → Right Center */}
                <div className="hidden lg:flex absolute top-1/2 right-4 -translate-y-1/2 flex-col items-center gap-3">
                    {slides.map((_, idx) => (
                        <motion.button
                            key={idx}
                            onClick={() => scrollToIndex(idx)}
                            className="w-[3px] rounded-full bg-gray-600 overflow-hidden transition-all cursor-pointer"
                            style={{
                                height: activeIndex === idx ? "32px" : "16px",
                                backgroundColor:
                                    activeIndex === idx ? "#1163FB" : "rgba(255,255,255,0.3)",
                            }}
                            transition={{ duration: 0.4 }}
                        />
                    ))}
                </div>

                {/* Mobile/Tablet → Bottom Center */}
                <div className="lg:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-row items-center gap-3">
                    {slides.map((_, idx) => (
                        <motion.button
                            key={idx}
                            onClick={() => scrollToIndex(idx)}
                            className="h-[3px] rounded-full bg-gray-600 overflow-hidden transition-all"
                            style={{
                                width: activeIndex === idx ? "32px" : "16px",
                                backgroundColor:
                                    activeIndex === idx ? "#1163FB" : "rgba(255,255,255,0.3)",
                            }}
                            transition={{ duration: 0.4 }}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}










// THe best of all

// "use client";

// import { useRef, useState, useEffect } from "react";
// import homeData from "@/data/homeData.json";
// import { ChevronRight } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//     motion,
//     AnimatePresence,
//     useScroll,
//     useTransform,
// } from "framer-motion";

// export default function CaseStudySection() {
//     const slides = homeData.caseStudySection || [];
//     const containerRef = useRef(null);

//     // track scroll progress
//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ["start start", "end end"],
//     });

//     const [activeIndex, setActiveIndex] = useState(0);

//     useEffect(() => {
//         if (!scrollYProgress || slides.length === 0) return;

//         const unsubscribe = scrollYProgress.on("change", (v) => {
//             const idx = Math.min(
//                 slides.length - 1,
//                 Math.floor(v * slides.length)
//             );
//             setActiveIndex(idx);
//         });

//         return () => unsubscribe();
//     }, [scrollYProgress, slides.length]);

//     if (!slides.length) return null;

//     // Parallax shift
//     const yParallax = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

//     return (
//         <section
//             ref={containerRef}
//             style={{ height: `${slides.length * 100}vh` }}
//             className="relative bg-black text-white"
//         >
//             <div className="sticky top-0 h-screen flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-6 lg:px-12 gap-10">
//                 {/* --- Left Text --- */}
//                 <div className="w-full lg:w-[38%] relative z-20">
//                     <AnimatePresence mode="wait">
//                         <motion.div
//                             key={activeIndex}
//                             initial={{ opacity: 0, x: -40 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             exit={{ opacity: 0, x: 40 }}
//                             transition={{ duration: 0.5, ease: "easeOut" }}
//                             className="space-y-5"
//                         >
//                             <p className="text-blue-500 text-sm sm:text-base font-medium">
//                                 Case Study
//                             </p>
//                             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
//                                 {slides[activeIndex].company}
//                             </h2>
//                             <p className="text-sm sm:text-base font-light leading-relaxed text-gray-300">
//                                 {slides[activeIndex].description}
//                             </p>
//                             <p className="text-xs sm:text-sm uppercase tracking-wide text-gray-400">
//                                 {slides[activeIndex].result}
//                             </p>

//                             {/* Stats */}
//                             <motion.div
//                                 className="flex flex-wrap sm:flex-nowrap sm:space-x-10 mt-2"
//                                 initial="hidden"
//                                 animate="show"
//                                 variants={{
//                                     hidden: { opacity: 0, y: 20 },
//                                     show: {
//                                         opacity: 1,
//                                         y: 0,
//                                         transition: { staggerChildren: 0.15 },
//                                     },
//                                 }}
//                             >
//                                 {slides[activeIndex].stats.map((s, i) => (
//                                     <motion.div
//                                         key={i}
//                                         className="pr-6 border-r border-gray-700 last:border-r-0 mb-4 sm:mb-0"
//                                         variants={{
//                                             hidden: { opacity: 0, y: 20 },
//                                             show: { opacity: 1, y: 0 },
//                                         }}
//                                     >
//                                         <p className="text-2xl sm:text-3xl font-bold">{s.count}</p>
//                                         <p className="text-xs sm:text-sm text-gray-400">{s.title}</p>
//                                     </motion.div>
//                                 ))}
//                             </motion.div>

//                             {/* Button */}
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: 0.3 }}
//                             >
//                                 <Link
//                                     href={slides[activeIndex].buttonLink}
//                                     className="inline-flex items-center mt-6 px-4 py-2 sm:px-5 sm:py-3 rounded-lg border border-white hover:bg-[#1163FB] hover:border-[#1163FB] transition"
//                                 >
//                                     <span className="text-xs sm:text-sm font-medium">
//                                         {slides[activeIndex].buttonText}
//                                     </span>
//                                     <motion.div
//                                         animate={{ x: [0, 6, 0] }}
//                                         transition={{ repeat: Infinity, duration: 1.5 }}
//                                     >
//                                         <ChevronRight className="ml-2 w-4 h-4" />
//                                     </motion.div>
//                                 </Link>
//                             </motion.div>
//                         </motion.div>
//                     </AnimatePresence>
//                 </div>

//                 {/* --- Right Image --- */}
//                 <div className="w-full lg:w-[62%] h-[250px] sm:h-[350px] lg:h-[80%] relative overflow-hidden rounded-2xl shadow-2xl">
//                     {slides.map((slide, idx) => (
//                         <motion.div
//                             key={idx}
//                             initial={{ opacity: idx === 0 ? 1 : 0 }}
//                             animate={{
//                                 opacity: activeIndex === idx ? 1 : 0,
//                                 scale: activeIndex === idx ? 1 : 1.05,
//                             }}
//                             transition={{ duration: 0.8, ease: "easeOut" }}
//                             className="absolute inset-0"
//                         >
//                             <motion.div style={{ y: yParallax }} className="w-full h-full">
//                                 <Image
//                                     src={slide.image}
//                                     alt={slide.company}
//                                     fill
//                                     className="object-cover"
//                                     priority={idx === 0}
//                                 />
//                             </motion.div>
//                         </motion.div>
//                     ))}
//                 </div>

//                 {/* --- Progress Indicator --- */}
//                 <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col items-center gap-3">
//                     {slides.map((_, idx) => (
//                         <motion.div
//                             key={idx}
//                             className="w-[3px] rounded-full bg-gray-600 overflow-hidden"
//                             style={{
//                                 height: activeIndex === idx ? "32px" : "16px",
//                                 backgroundColor:
//                                     activeIndex === idx ? "#1163FB" : "rgba(255,255,255,0.3)",
//                             }}
//                             transition={{ duration: 0.4 }}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }








// On of the best Attempts

// "use client";

// import { useRef, useState, useEffect } from "react";
// import homeData from "@/data/homeData.json";
// import { ChevronRight } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//     motion,
//     AnimatePresence,
//     useScroll,
//     useTransform,
// } from "framer-motion";

// export default function CaseStudySection() {
//     const slides = homeData.caseStudySection || [];
//     const containerRef = useRef(null);

//     // track scroll progress of the section
//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ["start start", "end end"],
//     });

//     const [activeIndex, setActiveIndex] = useState(0);

//     useEffect(() => {
//         if (!scrollYProgress || slides.length === 0) return;

//         const unsubscribe = scrollYProgress.on("change", (v) => {
//             const idx = Math.min(
//                 slides.length - 1,
//                 Math.floor(v * slides.length)
//             );
//             setActiveIndex(idx);
//         });

//         return () => unsubscribe();
//     }, [scrollYProgress, slides.length]);

//     if (!slides.length) return null;

//     // global parallax effect (image moves slightly up/down as scrolls)
//     const yParallax = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

//     return (
//         <section
//             ref={containerRef}
//             style={{ height: `${slides.length * 100}vh` }}
//             className="relative bg-black text-white"
//         >
//             <div className="sticky top-0 h-screen flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-6 lg:px-12 gap-10">

//                 {/* --- Left Text --- */}
//                 <div className="w-full lg:w-[38%] relative z-20">
//                     <AnimatePresence mode="wait">
//                         <motion.div
//                             key={activeIndex}
//                             initial={{ opacity: 0, x: -40 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             exit={{ opacity: 0, x: 40 }}
//                             transition={{ duration: 0.5, ease: "easeOut" }}
//                             className="space-y-5"
//                         >
//                             <p className="text-blue-500 text-sm sm:text-base font-medium">
//                                 Case Study
//                             </p>
//                             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
//                                 {slides[activeIndex].company}
//                             </h2>
//                             <p className="text-sm sm:text-base font-light leading-relaxed text-gray-300">
//                                 {slides[activeIndex].description}
//                             </p>
//                             <p className="text-xs sm:text-sm uppercase tracking-wide text-gray-400">
//                                 {slides[activeIndex].result}
//                             </p>

//                             {/* Stats animation */}
//                             <motion.div
//                                 className="flex flex-wrap sm:flex-nowrap sm:space-x-10 mt-2"
//                                 initial="hidden"
//                                 animate="show"
//                                 variants={{
//                                     hidden: { opacity: 0, y: 20 },
//                                     show: {
//                                         opacity: 1,
//                                         y: 0,
//                                         transition: { staggerChildren: 0.15 },
//                                     },
//                                 }}
//                             >
//                                 {slides[activeIndex].stats.map((s, i) => (
//                                     <motion.div
//                                         key={i}
//                                         className="pr-6 border-r border-gray-700 last:border-r-0 mb-4 sm:mb-0"
//                                         variants={{
//                                             hidden: { opacity: 0, y: 20 },
//                                             show: { opacity: 1, y: 0 },
//                                         }}
//                                     >
//                                         <p className="text-2xl sm:text-3xl font-bold">{s.count}</p>
//                                         <p className="text-xs sm:text-sm text-gray-400">{s.title}</p>
//                                     </motion.div>
//                                 ))}
//                             </motion.div>

//                             {/* Button */}
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: 0.3 }}
//                             >
//                                 <Link
//                                     href={slides[activeIndex].buttonLink}
//                                     className="inline-flex items-center mt-6 px-4 py-2 sm:px-5 sm:py-3 rounded-lg border border-white hover:bg-[#1163FB] hover:border-[#1163FB] transition"
//                                 >
//                                     <span className="text-xs sm:text-sm font-medium">
//                                         {slides[activeIndex].buttonText}
//                                     </span>
//                                     <motion.div
//                                         animate={{ x: [0, 6, 0] }}
//                                         transition={{ repeat: Infinity, duration: 1.5 }}
//                                     >
//                                         <ChevronRight className="ml-2 w-4 h-4" />
//                                     </motion.div>
//                                 </Link>
//                             </motion.div>
//                         </motion.div>
//                     </AnimatePresence>
//                 </div>

//                 {/* --- Right Image --- */}
//                 <div className="w-full lg:w-[62%] h-[250px] sm:h-[350px] lg:h-[80%] relative overflow-hidden rounded-2xl shadow-2xl">
//                     {slides.map((slide, idx) => (
//                         <motion.div
//                             key={idx}
//                             initial={{ opacity: idx === 0 ? 1 : 0 }}
//                             animate={{
//                                 opacity: activeIndex === idx ? 1 : 0,
//                                 scale: activeIndex === idx ? 1 : 1.05,
//                             }}
//                             transition={{ duration: 0.8, ease: "easeOut" }}
//                             className="absolute inset-0"
//                         >
//                             {/* Parallax shift on scroll */}
//                             <motion.div style={{ y: yParallax }} className="w-full h-full">
//                                 <Image
//                                     src={slide.image}
//                                     alt={slide.company}
//                                     fill
//                                     className="object-cover"
//                                     priority={idx === 0}
//                                 />
//                             </motion.div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }











// Current Working Code Fully

// "use client";

// import { useRef, useState, useEffect } from "react";
// import homeData from "@/data/homeData.json";
// import { ChevronRight } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//     motion,
//     AnimatePresence,
//     useScroll,
//     useTransform,
// } from "framer-motion";

// export default function CaseStudySection() {
//     const slides = homeData.caseStudySection || [];
//     const containerRef = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ["start start", "end end"],
//     });

//     const [activeIndex, setActiveIndex] = useState(0);

//     useEffect(() => {
//         if (!scrollYProgress || slides.length === 0) return;

//         const unsubscribe = scrollYProgress.onChange((v) => {
//             const clamped = Math.max(0, Math.min(1, v || 0));
//             const idx = Math.min(
//                 slides.length - 1,
//                 Math.floor(clamped * slides.length)
//             );
//             setActiveIndex(idx);
//         });

//         return unsubscribe;
//     }, [scrollYProgress, slides.length]);

//     if (!slides.length) return null;

//     // Parallax effect (image moves vertically slightly)
//     const yParallax = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

//     return (
//         <section
//             ref={containerRef}
//             style={{ height: `${slides.length * 100}vh` }}
//             className="relative bg-black text-white"
//         >
//             <div className="sticky top-0 h-screen flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-6 pt-10 lg:px-12 gap-10">
//                 {/* Left Content */}
//                 <div className="w-full lg:w-[38%] relative z-20">
//                     <AnimatePresence mode="wait">
//                         <motion.div
//                             key={activeIndex}
//                             initial={{ opacity: 0, x: -24 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             exit={{ opacity: 0, x: 24 }}
//                             transition={{ duration: 0.45 }}
//                             className="space-y-5"
//                         >
//                             <p className="text-blue-500 text-sm font-medium">Case Study</p>
//                             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
//                                 {slides[activeIndex].company}
//                             </h2>
//                             <p className="text-sm sm:text-base font-light leading-relaxed text-gray-300">
//                                 {slides[activeIndex].description}
//                             </p>
//                             <p className="text-xs sm:text-sm uppercase tracking-wide text-gray-400">
//                                 Result
//                             </p>

//                             {/* Stats */}
//                             <div className="flex flex-wrap sm:flex-nowrap sm:space-x-10 mt-2">
//                                 {slides[activeIndex].stats.map((s, i) => (
//                                     <div
//                                         key={i}
//                                         className="pr-6 border-r border-gray-700 last:border-r-0 mb-4 sm:mb-0"
//                                     >
//                                         <p className="text-2xl sm:text-3xl font-bold">{s.count}</p>
//                                         <p className="text-xs sm:text-sm text-gray-400">{s.title}</p>
//                                     </div>
//                                 ))}
//                             </div>

//                             {/* Button */}
//                             <Link
//                                 href={slides[activeIndex].buttonLink}
//                                 className="inline-flex items-center mt-6 px-4 py-2 sm:px-5 sm:py-3 rounded-lg border border-white hover:bg-[#1163FB] transition"
//                             >
//                                 <span className="text-xs sm:text-sm font-medium">
//                                     {slides[activeIndex].buttonText}
//                                 </span>
//                                 <ChevronRight className="ml-2 w-4 h-4" />
//                             </Link>
//                         </motion.div>
//                     </AnimatePresence>
//                 </div>

//                 {/* Right Image */}
//                 <div className="w-full lg:w-[62%] h-[250px] sm:h-[350px] lg:h-[80%] relative overflow-hidden rounded-2xl shadow-xl">
//                     {slides.map((slide, idx) => (
//                         <motion.div
//                             key={idx}
//                             initial={{ opacity: idx === 0 ? 1 : 0, y: 20 }}
//                             animate={{
//                                 opacity: activeIndex === idx ? 1 : 0,
//                                 y: activeIndex === idx ? 0 : -20,
//                             }}
//                             transition={{ duration: 0.6, ease: "easeOut" }}
//                             className="absolute inset-0"
//                         >
//                             <motion.div style={{ y: yParallax }} className="w-full h-full">
//                                 <Image
//                                     src={slide.image}
//                                     alt={slide.company}
//                                     fill
//                                     className="object-cover"
//                                     priority={idx === 0}
//                                 />
//                             </motion.div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }










// Kind of Worked

// "use client";

// import { useRef, useState, useEffect } from "react";
// import homeData from "@/data/homeData.json";
// import { ChevronRight } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, AnimatePresence, useScroll } from "framer-motion";

// export default function CaseStudySection() {
//     const slides = homeData.caseStudySection || [];
//     const containerRef = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ["start start", "end end"],
//     });

//     const [activeIndex, setActiveIndex] = useState(0);

//     // Subscribe to scroll progress and compute an integer activeIndex (0..n-1)
//     useEffect(() => {
//         if (!scrollYProgress || slides.length === 0) return;

//         const unsubscribe = scrollYProgress.onChange((v) => {
//             const clamped = Math.max(0, Math.min(1, v || 0));
//             // multiply by slides.length then floor; clamp to last index
//             const idx = Math.min(slides.length - 1, Math.floor(clamped * slides.length));
//             setActiveIndex(idx);
//         });

//         return unsubscribe;
//     }, [scrollYProgress, slides.length]);

//     if (!slides.length) return null;

//     // IMPORTANT: use inline style for dynamic height so Tailwind doesn't need to compile dynamic classes
//     return (
//         <section
//             ref={containerRef}
//             style={{ height: `${slides.length * 100}vh` }}
//             className="relative bg-black text-white"
//         >
//             {/* Sticky wrapper that stays for the full viewport while the page scrolls through the large section */}
//             <div className="sticky top-0 h-screen flex md:flex-row flex-col items-center md:px-16 px-6">
//                 {/* Left content (sticky info) */}
//                 <div className="md:w-1/3 w-full relative z-20">
//                     <AnimatePresence mode="wait">
//                         <motion.div
//                             key={activeIndex}
//                             initial={{ opacity: 0, x: -24 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             exit={{ opacity: 0, x: 24 }}
//                             transition={{ duration: 0.45 }}
//                             className="space-y-4"
//                         >
//                             <p className="text-blue-500">Case Study</p>
//                             <h2 className="text-3xl font-bold">{slides[activeIndex].company}</h2>
//                             <p className="font-light mt-1">{slides[activeIndex].description}</p>
//                             <p className="text-xs">{slides[activeIndex].result}</p>

//                             <div className="flex space-x-6 mt-4">
//                                 {slides[activeIndex].stats.map((s, i) => (
//                                     <div key={i} className="pr-6 border-r last:border-r-0">
//                                         <p className="text-2xl font-bold">{s.count}</p>
//                                         <p className="text-sm">{s.title}</p>
//                                     </div>
//                                 ))}
//                             </div>

//                             <Link
//                                 href={slides[activeIndex].buttonLink}
//                                 className="inline-flex items-center mt-6 px-4 py-2 rounded-lg border border-white hover:bg-[#1163FB] transition"
//                             >
//                                 {slides[activeIndex].buttonText}
//                                 <ChevronRight className="ml-2" />
//                             </Link>
//                         </motion.div>
//                     </AnimatePresence>
//                 </div>

//                 {/* Right image stack (absolute images that crossfade/slide) */}
//                 <div className="md:w-2/3 w-full h-full relative overflow-hidden rounded-lg">
//                     {slides.map((slide, idx) => (
//                         <motion.div
//                             key={idx}
//                             initial={{ opacity: idx === 0 ? 1 : 0, y: 20 }}
//                             animate={{
//                                 opacity: activeIndex === idx ? 1 : 0,
//                                 y: activeIndex === idx ? 0 : -20,
//                             }}
//                             transition={{ duration: 0.6, ease: "easeOut" }}
//                             className="absolute inset-0"
//                         >
//                             <Image
//                                 src={slide.image}
//                                 alt={slide.company}
//                                 fill
//                                 className="object-cover"
//                                 priority={idx === 0}
//                             />
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }















// // Current Code
// "use client";

// import { useRef, useState } from "react";
// import homeData from "@/data/homeData.json";
// import { ChevronRight } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// const CaseStudySection = () => {
//     const slides = homeData.caseStudySection || [];
//     const scrollRef = useRef(null);
//     const [activeIndex, setActiveIndex] = useState(0);

//     // Scroll progress tracker
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
//             {/* Left Info Section with AnimatePresence */}
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
//                     className="h-[60vh] overflow-y-scroll scroll-smooth no-scrollbar relative z-0"
//                     // style={{ scrollbarWidth: "thin" }}
//                 >
//                     {slides.map((slide, idx) => (
//                         <motion.div
//                             key={idx}
//                             className="mb-0 rounded-lg overflow-hidden w-full h-[60vh] relative"
//                             initial={{ opacity: 0, scale: 0.95 }}
//                             whileInView={{ opacity: 1, scale: 1 }}
//                             transition={{ duration: 0.6, ease: "easeOut" }}
//                             viewport={{ once: false, amount: 0.4 }}
//                         >
//                             <Image
//                                 src={slide.image}
//                                 alt={`Slide ${idx}`}
//                                 fill
//                                 className="object-cover"
//                                 sizes="100vw"
//                                 priority={idx === 0}
//                             />
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CaseStudySection;











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