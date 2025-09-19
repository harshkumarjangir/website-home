"use client";

import homeData from "@/data/homeData.json";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

const TestimonialsSection = () => {
    const testimonialSection = homeData.testimonialSection || {};
    const testimonialsData = testimonialSection.items || [];

    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.6 });

    // Split heading into words
    const words = testimonialSection.heading?.split(" ") || [];

    return (
        <div className="bg-[linear-gradient(135deg,_#0C0A28_50%,_#AF44FE_100%)] text-white py-12 px-4 md:px-16">

            {/* Word by word color reveal */}
            <h2
                ref={ref}
                className="text-2xl md:text-4xl mb-12 max-w-4xl leading-snug font-bold flex flex-wrap gap-x-2"
            >
                {words.map((word, i) => (
                    <motion.span
                        key={i}
                        initial={{ color: "rgba(255,255,255,0.3)" }}
                        animate={{
                            color: isInView
                                ? "rgba(255,255,255,1)"
                                : "rgba(255,255,255,0.3)",
                        }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: i * 0.1, // staggered color reveal
                        }}
                    >
                        {word}
                    </motion.span>
                ))}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {testimonialsData.map((testimonial, index) => (
                    <div
                        key={index}
                        className={`transition-transform duration-500 ${index % 2 === 1 ? "md:translate-y-10" : ""
                            }`}
                    >
                        <VideoCard testimonial={testimonial} />
                    </div>
                ))}
            </div>

            <div className="mt-10 md:mt-20 text-center">
                <Link
                    href={testimonialSection.buttonLink}
                    className="bg-transparent group hover:bg-[#1163FB] border-2 border-white hover:border-2 hover:border-[#1163FB] text-white py-2 px-4 rounded-lg transition duration-300 inline-flex items-center"
                >
                    {testimonialSection.buttonText}
                    <ChevronRight size={22} className="inline-block ml-1 chevron-animate" />
                </Link>
            </div>
        </div>
    );
};

const VideoCard = ({ testimonial }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    return (
        <div className="rounded-lg text-center">
            <div
                className="relative overflow-hidden rounded-lg"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <video
                    ref={videoRef}
                    src={testimonial.videoUrl}
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover"
                />

                {/* Show Play icon only when paused */}
                {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <Play size={50} className="text-white" />
                    </div>
                )}

                {/* Sound Toggle Button */}
                <button
                    onClick={toggleMute}
                    className="absolute bottom-2 right-2 bg-black/50 hover:bg-black/70 p-2 rounded-full"
                >
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
            </div>
            <h3 className="font-semibold mt-4">{testimonial.name}</h3>
            <p className="text-sm">{testimonial.position}</p>
        </div>
    );
};

export default TestimonialsSection;










// "use client";

// import homeData from "@/data/homeData.json";
// import { ChevronRight } from "lucide-react";
// import Link from "next/link";
// import { motion, useInView } from "framer-motion";
// import { useRef, useState } from "react";
// import { Play, Pause, Volume2, VolumeX } from "lucide-react";

// const TestimonialsSection = () => {
//     const testimonialSection = homeData.testimonialSection || {};
//     const testimonialsData = testimonialSection.items || [];

//     const ref = useRef(null);
//     const isInView = useInView(ref, { amount: 0.6 }); // 60% visible threshold

//     return (
//         <div className="bg-[linear-gradient(135deg,_#0C0A28_50%,_#AF44FE_100%)] text-white py-12 px-4 md:px-16">
//             <motion.h2
//                 ref={ref}
//                 animate={{
//                     color: isInView ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.3)",
//                     y: isInView ? 0 : 20,
//                 }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//                 className="text-2xl md:text-4xl mb-12 max-w-4xl leading-snug font-bold"
//             >
//                 {testimonialSection.heading}
//             </motion.h2>

//             <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
//                 {testimonialsData.map((testimonial, index) => (
//                     <div
//                         key={index}
//                         className={`transition-transform duration-500 ${index % 2 === 1 ? "md:translate-y-10" : ""}`}
//                     >
//                         <VideoCard testimonial={testimonial} />
//                     </div>

//                 ))}
//             </div>

//             <div className="mt-10 md:mt-20 text-center">
//                 <Link
//                     href={testimonialSection.buttonLink}
//                     className="bg-transparent group hover:bg-[#1163FB] border-2 border-white hover:border-2 hover:border-[#1163FB] text-white py-2 px-4 rounded-lg transition duration-300 inline-flex items-center"
//                 >
//                     {testimonialSection.buttonText}
//                     <ChevronRight
//                         size={22}
//                         className="inline-block ml-1 chevron-animate"
//                     />
//                 </Link>
//             </div>
//         </div>
//     );
// };

// const VideoCard = ({ testimonial }) => {
//     const videoRef = useRef(null);
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [isMuted, setIsMuted] = useState(true);

//     const handleMouseEnter = () => {
//         if (videoRef.current) {
//             videoRef.current.play();
//             setIsPlaying(true);
//         }
//     };

//     const handleMouseLeave = () => {
//         if (videoRef.current) {
//             videoRef.current.pause();
//             setIsPlaying(false);
//         }
//     };

//     const toggleMute = () => {
//         if (videoRef.current) {
//             videoRef.current.muted = !videoRef.current.muted;
//             setIsMuted(videoRef.current.muted);
//         }
//     };

//     return (
//         <div className="rounded-lg text-center">
//             <div
//                 className="relative overflow-hidden rounded-lg"
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//             >
//                 <video
//                     ref={videoRef}
//                     src={testimonial.videoUrl}
//                     muted={isMuted}
//                     playsInline
//                     className="w-full h-full object-cover"
//                 />

//                 {/* Show Play icon only when paused */}
//                 {!isPlaying && (
//                     <div className="absolute inset-0 flex items-center justify-center bg-black/30">
//                         <Play size={50} className="text-white" />
//                     </div>
//                 )}

//                 {/* Sound Toggle Button */}
//                 <button
//                     onClick={toggleMute}
//                     className="absolute bottom-2 right-2 bg-black/50 hover:bg-black/70 p-2 rounded-full"
//                 >
//                     {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
//                 </button>
//             </div>
//             <h3 className="font-semibold mt-4">{testimonial.name}</h3>
//             <p className="text-sm">{testimonial.position}</p>
//         </div>
//     );
// };

// export default TestimonialsSection;