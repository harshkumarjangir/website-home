"use client";

import React from "react";
import Image from "next/image";
import homeData from "@/data/homeData.json";

const GlobalOffices = () => {
    const { logo, tagline, taglineLogo, locations } = homeData.offices;

    return (
        <section className="bg-[linear-gradient(75deg,_#000000_40%,_#010137_60%)] text-white py-16 px-6 md:px-16">
            {/* Top logo + tagline */}
            <div className="flex flex-col md:flex-row items-center justify-between mx-auto mb-12 md:px-10">
                <div className="flex items-center gap-3">
                    <Image src={logo} alt="Company Logo" width={180} height={45} priority />
                </div>
                <div className="bg-[#252543] px-6 py-2 mt-6 md:mt-0 flex items-center gap-3 rounded-lg">
                    <Image src={taglineLogo} alt="Tagline Logo" width={32} height={32} />
                    <span className="text-sm md:text-base font-medium">{tagline}</span>
                </div>
            </div>

            {/* Office Grid */}
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-7xl mx-auto text-center">
                {locations.map((office, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center transition group text-gray-400 hover:text-white"
                    >
                        <div className="mb-4 w-35 h-35 relative">
                            <Image
                                src={office.image}
                                alt={`${office.country} office`}
                                fill
                                className="object-contain grayscale group-hover:grayscale-0 transition"
                                sizes="80px"
                            />
                        </div>
                        <h3 className="font-semibold text-lg transition group-hover:text-white">{office.country}</h3>
                        <p className="text-sm mt-2 leading-relaxed transition group-hover:text-white">
                            {office.address}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GlobalOffices;






// "use client";

// import React from "react";
// import Image from "next/image";
// import homeData from "@/data/homeData.json";

// const GlobalOffices = () => {
//     const { logo, tagline, taglineLogo, locations } = homeData.offices;

//     return (
//         // bg-[linear-gradient(135deg,_#0C0A28_50%,_#AF44FE_100%)]
//         <section className="bg-[linear-gradient(75deg,_#000000_40%,_#010137_60%)] text-white py-16 px-6 md:px-16">
//             {/* Top logo + tagline */}
//             <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto mb-12">
//                 <div className="flex items-center gap-3">
//                     <Image src={logo} alt="Company Logo" width={160} height={40} priority />
//                 </div>
//                 <div className="bg-[#252543] px-6 py-2 mt-6 md:mt-0 flex items-center gap-3 rounded-lg">
//                     <Image src={taglineLogo} alt="Tagline Logo" width={32} height={32} />
//                     <span className="text-sm md:text-base font-medium">{tagline}</span>
//                 </div>
//             </div>

//             {/* Office Grid */}
//             <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-7xl mx-auto text-center">
//                 {locations.map((office, idx) => (
//                     <div key={idx} className="flex flex-col items-center grayscale hover:grayscale-0 transition">
//                         <img
//                             src={office.image}
//                             alt={`${office.country} office`}
//                             className="h-20 mb-4"
//                         />
//                         <h3 className="font-semibold text-lg">{office.country}</h3>
//                         <p className="text-sm mt-2 leading-relaxed">
//                             {office.address}
//                         </p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default GlobalOffices;
