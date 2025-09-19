"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import homeData from "@/data/homeData.json";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AccoladesSection = () => {
    const { accoladesSection } = homeData;

    // Refs
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    return (
        <section className="bg-black text-white py-16 px-6 relative">
            <div className="max-w-6xl mx-auto">
                {/* Title + Buttons Row (Desktop) */}
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl md:text-4xl max-w-4xl">
                        {accoladesSection.title}
                    </h2>

                    {/* Desktop Buttons */}
                    <div className="max-md:hidden flex gap-3">
                        <button
                            ref={prevRef}
                            className="bg-transparent text-white border border-[#343434] rounded-full p-4 shadow hover:bg-[#116BFB] transition duration-300 cursor-pointer"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            ref={nextRef}
                            className="bg-transparent text-white border border-[#343434] rounded-full p-4 shadow hover:bg-[#116BFB] transition duration-300 cursor-pointer"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Swiper */}
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper; // store swiper instance
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                >
                    {accoladesSection.awards.map((award, idx) => (
                        <SwiperSlide key={idx} className="h-auto">
                            <div className="bg-[#171717] rounded-xl shadow-lg border border-[#343434] p-6 flex flex-col items-center text-center h-[320px]">
                                <div className="flex-grow flex items-center justify-center mb-6">
                                    <Image
                                        src={award.logo}
                                        alt={award.title}
                                        width={150}
                                        height={100}
                                        className="object-contain"
                                    />
                                </div>
                                <p className="text-gray-300 text-sm">{award.year}</p>
                                <h3 className="text-lg font-medium mt-2">{award.title}</h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Mobile Buttons */}
                <div className="md:hidden flex justify-center gap-3 mt-6">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="bg-transparent text-white border border-[#343434] rounded-full p-4 shadow hover:bg-[#116BFB] transition duration-300 cursor-pointer"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="bg-transparent text-white border border-[#343434] rounded-full p-4 shadow hover:bg-[#116BFB] transition duration-300 cursor-pointer"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AccoladesSection;
