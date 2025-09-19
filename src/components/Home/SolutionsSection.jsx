"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import homeData from "@/data/homeData.json";
import { ChevronLeft, ChevronRight, Lightbulb } from "lucide-react";

const iconMap = {
    Lightbulb,
};

const SolutionsSection = () => {
    const { title, items } = homeData.solutionsSection;
    const swiperRef = useRef(null);

    return (
        <section className="py-16 bg-black text-white">
            <div className="mx-auto px-4 relative">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-medium mb-10 max-w-4xl">
                    {title}
                </h2>

                {/* Swiper */}
                <Swiper
                    modules={[Navigation]}
                    centeredSlides={true}
                    spaceBetween={24}
                    slidesPerView={2.2} // 2 full + peeks
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    className="pb-12"
                    breakpoints={{
                        0: { slidesPerView: 1.1, centeredSlides: true },
                        640: { slidesPerView: 1.3, centeredSlides: true },
                        1024: { slidesPerView: 2.2, centeredSlides: true }, // 2 full + preview
                    }}
                >
                    {items.map((item) => {
                        const Icon = iconMap[item.icon];

                        return (
                            <SwiperSlide key={item.id} className="h-auto">
                                {({ isActive }) => (
                                    <motion.div
                                        transition={{ duration: 0.3 }}
                                        className={`p-8 rounded-2xl bg-[#1a1a1a] border border-[#343434] 
                      flex flex-col items-center text-center shadow-md 
                      ${isActive ? "opacity-100 h-[275px]" : "opacity-40 h-[250px] mt-2.5"}`}
                                    >
                                        {Icon && (
                                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#2b2b2b] mb-4">
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                        )}
                                        <h3 className="font-bold text-lg mb-3">{item.title}</h3>

                                        {/* flex-1 ensures descriptions stretch evenly */}
                                        <p className="text-sm text-gray-300 leading-relaxed flex-1">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                )}
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                {/* Navigation Buttons */}
                <div className="flex justify-center gap-4 mt-6">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="bg-transparent hover:bg-[#116BFB] text-white p-3 rounded-full shadow border border-[#343434] cursor-pointer"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => swiperRef.current?.slideNext()}
                        className="bg-transparent hover:bg-[#116BFB] text-white p-3 rounded-full shadow border border-[#343434] cursor-pointer"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;








// "use client";

// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { motion } from "framer-motion";
// import homeData from "@/data/homeData.json";
// import { ChevronLeft, ChevronRight, Lightbulb } from "lucide-react";

// const iconMap = {
//     Lightbulb,
// };

// const SolutionsSection = () => {
//     const { title, items } = homeData.solutionsSection;
//     const swiperRef = useRef(null);

//     return (
//         <section className="py-16 bg-black text-white">
//             <div className="container mx-auto px-4 relative">
//                 {/* Section Title */}
//                 <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center max-w-4xl mx-auto">
//                     {title}
//                 </h2>

//                 {/* Swiper */}
//                 <Swiper
//                     modules={[Navigation]}
//                     centeredSlides={true}
//                     spaceBetween={24}
//                     slidesPerView={"auto"} // auto width for peeking effect
//                     onSwiper={(swiper) => (swiperRef.current = swiper)}
//                     className="pb-12"
//                 >
//                     {items.map((item) => {
//                         const Icon = iconMap[item.icon];
//                         return (
//                             <SwiperSlide
//                                 key={item.id}
//                                 className="max-w-[90%] sm:max-w-[70%] md:max-w-[45%] lg:max-w-[40%]" // control card width
//                             >
//                                 <motion.div
//                                     whileHover={{ y: -6 }}
//                                     transition={{ duration: 0.3 }}
//                                     className="p-8 rounded-2xl bg-[#1a1a1a] border border-[#343434] h-full flex flex-col text-center items-center shadow-md"
//                                 >
//                                     {/* Icon */}
//                                     {Icon && (
//                                         <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#2b2b2b] mb-4">
//                                             <Icon className="w-6 h-6 text-white" />
//                                         </div>
//                                     )}
//                                     {/* Title */}
//                                     <h3 className="font-bold text-lg mb-3">{item.title}</h3>
//                                     {/* Description */}
//                                     <p className="text-sm text-gray-300 leading-relaxed">
//                                         {item.description}
//                                     </p>
//                                 </motion.div>
//                             </SwiperSlide>
//                         );
//                     })}
//                 </Swiper>

//                 {/* Navigation Buttons */}
//                 <div className="flex justify-center gap-4 mt-6">
//                     <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => swiperRef.current?.slidePrev()}
//                         className="bg-transparent hover:bg-[#116BFB] text-white p-3 rounded-full shadow border border-[#343434] cursor-pointer"
//                     >
//                         <ChevronLeft className="w-5 h-5" />
//                     </motion.button>
//                     <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => swiperRef.current?.slideNext()}
//                         className="bg-transparent hover:bg-[#116BFB] text-white p-3 rounded-full shadow border border-[#343434] cursor-pointer"
//                     >
//                         <ChevronRight className="w-5 h-5" />
//                     </motion.button>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default SolutionsSection;
