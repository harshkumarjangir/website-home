import homeData from "@/data/homeData.json";
import { Sparkles } from "lucide-react";
import Image from "next/image";

const AIAdvisorySection = () => {
    const { aiAdvisorySection } = homeData;

    return (
        <section className="bg-[#010409] py-12 px-6">
            <div
                className="relative max-w-6xl mx-auto bg-black border border-[#292929] rounded-2xl shadow-[0_0_20px_8px_rgba(37,99,235,0.4)] flex flex-col md:flex-row items-center overflow-hidden"
            >
                {/* Left content */}
                <div className="flex-1 p-8">
                    <div className="flex items-center mb-4">
                        <Sparkles className="w-6 h-6 text-white mr-2" />
                        <h3 className="text-xl font-semibold text-white">
                            {aiAdvisorySection.title}
                        </h3>
                    </div>
                    <p className="text-gray-300 mb-6">{aiAdvisorySection.description}</p>
                    <a
                        href={aiAdvisorySection.buttonUrl}
                        className="inline-block bg-white text-black font-medium px-6 py-3 rounded-lg hover:bg-gray-200 transition"
                    >
                        {aiAdvisorySection.buttonText}
                    </a>
                </div>

                {/* Right image */}
                <div className="md:w-1/2">
                    <Image
                        src={aiAdvisorySection.image}
                        alt={aiAdvisorySection.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default AIAdvisorySection;
