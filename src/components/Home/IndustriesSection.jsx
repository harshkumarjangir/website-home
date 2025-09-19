"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import { motion } from "framer-motion";
import homeData from "@/data/homeData.json";

import {
    ChevronLeft,
    ChevronRight,
    HeartPulse,
    Wallet,
    UtensilsCrossed,
    ShoppingCart,
    Car,
    Cloud,
    Plane,
    Music,
    BookOpen,
    Truck,
    Leaf,
    Dumbbell,
    Building,
    BatteryCharging,
    Signal,
    Store,
} from "lucide-react";
import Link from "next/link";

const iconMap = {
    HeartPulse,
    Wallet,
    UtensilsCrossed,
    ShoppingCart,
    Car,
    Cloud,
    Plane,
    Music,
    BookOpen,
    Truck,
    Leaf,
    Dumbbell,
    Building,
    BatteryCharging,
    Signal,
    Store,
};

const cardVariants = {
    initial: {},
    hover: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const iconVariants = {
    initial: { y: 0, opacity: 1 },
    hover: {
        y: -12,
        opacity: 1,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

const textVariants = {
    initial: { opacity: 0, y: 20 },
    hover: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const IndustriesSection = () => {
    const { title, buttonText, buttonUrl, industries } = homeData.industriesSection;
    const [titleFirstPart, titleSecondPart] = title.split("|");
    const swiperRef = useRef(null);

    return (
        <section className="py-16 bg-black text-white">
            <div className="container mx-auto px-6 relative">
                {/* Header */}
                <div className="flex justify-between items-center mb-12">
                    <div className="flex flex-col md:flex-row items-start justify-between w-full gap-6">
                        <h2 className="text-3xl max-w-2xl">
                            {titleFirstPart}
                            <br />
                            <span className="font-bold">{titleSecondPart}</span>
                        </h2>
                        <Link
                            href={buttonUrl}
                            className="bg-transparent group hover:bg-[#1163FB] border-2 border-white hover:border-[#1163FB] text-white py-1.5 px-3 pl-5 rounded-lg transition duration-300 inline-flex items-center"
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
                            <ChevronRight size={22} className="inline-block ml-2 chevron-animate" />
                        </Link>
                    </div>
                </div>

                {/* Swiper */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Grid]}
                        spaceBetween={24}
                        slidesPerView={1}
                        grid={{ rows: 1, fill: "row" }} // ✅ One row always on mobile
                        breakpoints={{
                            640: { slidesPerView: 2, grid: { rows: 2 } },
                            1024: { slidesPerView: 4, grid: { rows: 2 } },
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className="pb-12"
                    >
                        {industries.map((item) => {
                            const Icon = iconMap[item.icon];
                            return (
                                <SwiperSlide key={item.id}>
                                    <motion.div
                                        className={`group p-6 rounded-xl border border-[#343434] h-[320px] flex justify-center items-center cursor-pointer overflow-hidden text-center transition duration-300 bg-[#1163FB] md:bg-black md:hover:bg-[#1163FB]`}
                                        variants={cardVariants}
                                        initial="initial"
                                        whileHover="hover"
                                    >
                                        <div className="flex flex-col items-center">
                                            {Icon && (
                                                <motion.div variants={iconVariants}>
                                                    <Icon className="w-10 h-10 mb-3" />
                                                </motion.div>
                                            )}
                                            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>

                                            {/* ✅ Always visible on mobile, hover on desktop */}
                                            <motion.p
                                                variants={textVariants}
                                                className="text-sm text-white text-center block md:hidden" /* Always show on mobile */
                                                initial={{ opacity: 1, y: 0 }} // force visible on mobile
                                                animate={{ opacity: 1, y: 0 }} // override hover on mobile
                                            >
                                                {item.description}
                                            </motion.p>

                                            <motion.p
                                                variants={textVariants}
                                                className="text-sm text-white text-center hidden md:block"  /* Only for desktop hover */

                                            >
                                                {item.description}
                                            </motion.p>



                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    {/* Nav Buttons */}
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
            </div>
        </section>
    );
};

export default IndustriesSection;








// "use client";

// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Grid } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/grid";
// import { motion } from "framer-motion";
// import homeData from "@/data/homeData.json";

// import {
//     ChevronLeft,
//     ChevronRight,
//     HeartPulse,
//     Wallet,
//     UtensilsCrossed,
//     ShoppingCart,
//     Car,
//     Cloud,
//     Plane,
//     Music,
//     BookOpen,
//     Truck,
//     Leaf,
//     Dumbbell,
//     Building,
//     BatteryCharging,
//     Signal,
//     Store,
// } from "lucide-react";
// import Link from "next/link";

// const iconMap = {
//     HeartPulse,
//     Wallet,
//     UtensilsCrossed,
//     ShoppingCart,
//     Car,
//     Cloud,
//     Plane,
//     Music,
//     BookOpen,
//     Truck,
//     Leaf,
//     Dumbbell,
//     Building,
//     BatteryCharging,
//     Signal,
//     Store,
// };

// // Variants for staggered hover animation
// const cardVariants = {
//     initial: {},
//     hover: {
//         transition: {
//             staggerChildren: 0.15, // icon first, then text
//         },
//     },
// };

// const iconVariants = {
//     initial: { y: 0, opacity: 1 },
//     hover: { y: -12, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
// };

// const textVariants = {
//     initial: { opacity: 0, y: 20 },
//     hover: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
// };

// const IndustriesSection = () => {
//     const { title, buttonText, buttonUrl, industries } = homeData.industriesSection;
//     const [titleFirstPart, titleSecondPart] = title.split("|") //.map(part => part.trim());
//     const swiperRef = useRef(null);

//     return (
//         <section className="py-16 bg-black text-white">
//             <div className="container mx-auto px-6 relative">
//                 {/* Header */}
//                 <div className="flex justify-between items-center mb-12">
//                     <div className="flex flex-col md:flex-row items-start justify-between w-full gap-6">
//                         <h2 className="text-3xl max-w-2xl">
//                         {titleFirstPart}
//                         <br />
//                         <span className="font-bold">{titleSecondPart}</span>
//                     </h2>
//                     <Link
//                         href={buttonUrl}
//                         className="bg-transparent group hover:bg-[#1163FB] border-2 border-white hover:border-2 hover:border-[#1163FB] text-white py-1.5 px-3 pl-5 rounded-lg transition duration-300 inline-flex items-center"
//                     >
//                         {buttonText}

//                         <style>
//                             {`
//                   @keyframes slide-horizontal {
//                     0%, 100% { transform: translateX(0); }
//                     50% { transform: translateX(8px); }
//                   }
//                   .group:hover .chevron-animate {
//                     animation: slide-horizontal 0.7s infinite ease-in-out;
//                   }
//                 `}
//                         </style>

//                         <ChevronRight
//                             size={22}
//                             className="inline-block ml-2 chevron-animate"
//                         />
//                     </Link>
//                     </div>
//                 </div>

//                 {/* Swiper */}
//                 <div className="relative">
//                     <Swiper
//                         modules={[Navigation, Grid]}
//                         spaceBetween={24}
//                         slidesPerView={1}
//                         grid={{ rows: 2, fill: "row" }}
//                         breakpoints={{
//                             640: { slidesPerView: 2, grid: { rows: 2 } },
//                             1024: { slidesPerView: 4, grid: { rows: 2 } },
//                         }}
//                         onSwiper={(swiper) => (swiperRef.current = swiper)}
//                         className="pb-12"
//                     >
//                         {industries.map((item) => {
//                             const Icon = iconMap[item.icon];
//                             return (
//                                 <SwiperSlide key={item.id}>
//                                     <motion.div
//                                         className="group p-6 rounded-xl border border-[#343434] bg-black hover:bg-[#1163FB] h-[320px] flex justify-center items-center cursor-pointer overflow-hidden text-center transition duration-300"
//                                         variants={cardVariants}
//                                         initial="initial"
//                                         whileHover="hover"
//                                     >
//                                         <div className="flex flex-col items-center">
//                                             {/* Icon with stagger */}
//                                             {Icon && (
//                                                 <motion.div variants={iconVariants}>
//                                                     <Icon className="w-10 h-10 mb-3" />
//                                                 </motion.div>
//                                             )}

//                                             <h3 className="font-semibold text-lg mb-2">
//                                                 {item.title}
//                                             </h3>

//                                             {/* Text pops in smoothly */}
//                                             <motion.p
//                                                 variants={textVariants}
//                                                 className="text-sm text-gray-300 text-center"
//                                             >
//                                                 {item.description}
//                                             </motion.p>
//                                         </div>
//                                     </motion.div>
//                                 </SwiperSlide>
//                             );
//                         })}
//                     </Swiper>

//                     {/* Nav Buttons */}
//                     <div className="flex justify-center gap-4 mt-6">
//                         <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             onClick={() => swiperRef.current?.slidePrev()}
//                             className="bg-transparent hover:bg-[#116BFB] text-white p-3 rounded-full shadow border border-[#343434] cursor-pointer"
//                         >
//                             <ChevronLeft className="w-5 h-5" />
//                         </motion.button>
//                         <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             onClick={() => swiperRef.current?.slideNext()}
//                             className="bg-whi-trbg-transparent hover:bg-[#116BFB] text-white p-3 rounded-full shadow  border border-[#343434] cursor-pointer"
//                         >
//                             <ChevronRight className="w-5 h-5" />
//                         </motion.button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default IndustriesSection;













// "use client";

// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Grid } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/grid";
// import homeData from "@/data/homeData.json";

// import {
//     ChevronLeft,
//     ChevronRight,
//     HeartPulse,
//     Wallet,
//     UtensilsCrossed,
//     ShoppingCart,
//     Car,
//     Cloud,
//     Plane,
//     Music,
//     BookOpen,
//     Truck,
//     Leaf,
//     Dumbbell,
//     Building,
//     BatteryCharging,
//     Signal,
//     Store,
// } from "lucide-react";

// const iconMap = {
//     HeartPulse,
//     Wallet,
//     UtensilsCrossed,
//     ShoppingCart,
//     Car,
//     Cloud,
//     Plane,
//     Music,
//     BookOpen,
//     Truck,
//     Leaf,
//     Dumbbell,
//     Building,
//     BatteryCharging,
//     Signal,
//     Store,
// };

// const IndustriesSection = () => {
//     const { title, buttonText, industries } = homeData.industriesSection;
//     const swiperRef = useRef(null);

//     return (
//         <section className="py-16 bg-black text-white">
//             <div className="container mx-auto px-6 relative">
//                 {/* Header */}
//                 <div className="flex justify-between items-center mb-12">
//                     <h2 className="text-3xl font-bold max-w-2xl">{title}</h2>
//                     <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
//                         {buttonText}
//                     </button>
//                 </div>

//                 {/* Swiper */}
//                 <div className="relative">
//                     <Swiper
//                         modules={[Navigation, Grid]}
//                         spaceBetween={24}
//                         slidesPerView={1}
//                         grid={{ rows: 2, fill: "row" }}
//                         breakpoints={{
//                             640: { slidesPerView: 2, grid: { rows: 2 } },
//                             1024: { slidesPerView: 4, grid: { rows: 2 } },
//                         }}
//                         onSwiper={(swiper) => (swiperRef.current = swiper)}
//                         className="pb-12"
//                     >
//                         {industries.map((item) => {
//                             const Icon = iconMap[item.icon];
//                             return (
//                                 <SwiperSlide key={item.id}>
//                                     <div className="group p-6 rounded-xl border border-[#343434] bg-black hover:bg-[#1163FB] transition-all duration-500 h-[320px] flex justify-center items-center shadow-sm hover:shadow-lg cursor-pointer overflow-hidden text-center">
//                                         <div className="flex flex-col items-center transition-all duration-500 group-hover:-translate-y-6">
//                                             {Icon && (
//                                                 <Icon className="w-10 h-10 mb-3 transition-all duration-500 group-hover:scale-110" />
//                                             )}
//                                             <h3 className="font-semibold text-lg mb-2 transition-all duration-500">
//                                                 {item.title}
//                                             </h3>
//                                             <p className="text-sm text-gray-300 hidden opacity-0 translate-y-6 transition-all duration-500 delay-200 group-hover:opacity-100 group-hover:block group-hover:translate-y-0">
//                                                 {item.description}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </SwiperSlide>
//                             );
//                         })}
//                     </Swiper>

//                     {/* Nav Buttons - Placed After Cards */}
//                     <div className="flex justify-center gap-4 mt-6">
//                         <button
//                             onClick={() => swiperRef.current?.slidePrev()}
//                             className="bg-white text-black p-3 rounded-full shadow hover:bg-gray-100"
//                         >
//                             <ChevronLeft className="w-5 h-5" />
//                         </button>
//                         <button
//                             onClick={() => swiperRef.current?.slideNext()}
//                             className="bg-white text-black p-3 rounded-full shadow hover:bg-gray-100"
//                         >
//                             <ChevronRight className="w-5 h-5" />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default IndustriesSection;
