import homeData from "@/data/homeData.json";
import { Rocket, BarChart, Lightbulb } from "lucide-react";
import Link from "next/link";

const icons = {
    Rocket: <Rocket className="w-6 h-6 inline-block mr-1" />,
    BarChart: <BarChart className="w-6 h-6 inline-block mr-1" />,
    Lightbulb: <Lightbulb className="w-6 h-6 inline-block mr-1" />
};

export default function RoiSection() {
    const { roiSection } = homeData;
    const { title, buttonText, buttonUrl, items } = roiSection;

    return (
        <section className="bg-blue-600 text-black py-16 px-3 ">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-2xl md:text-4xl text-white">{title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-xl text-center p-6 shadow hover:shadow-lg transition"
                    >
                        <div className="mb-4">
                            <button className="inline-flex items-center px-3 py-2.5 gap-x-2 rounded-md bg-black text-white text-sm">
                                {icons[item.icon]} {item.label}
                            </button>
                        </div>
                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                        <p className="text-sm">{item.description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-10 text-center">
                <Link
                    href={buttonUrl}
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-black hover:bg-black hover:text-white transition duration-300 font-semibold"
                >
                    {buttonText}
                </Link>
            </div>
        </section>
    );
}
