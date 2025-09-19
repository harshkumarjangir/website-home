import homeData from "@/data/homeData.json";

const StatsSection = () => {
    const { title, description, stats } = homeData.statsSection;

    return (
        <div className="bg-black text-white py-24 px-6 mx-auto">
            <div className="w-full flex flex-col md:flex-row justify-evenly px-4">
                <h2 className="text-3xl mb-4">{title}</h2>
                <p className="text-gray-300 md:max-w-1/2 md:mt-5">{description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                {stats.map((stat, index) => (
                    <div key={index} className="border-l border-gray-800 p-6 rounded-lg">
                        <h3 className="text-blue-500 text-2xl font-bold mb-2">{stat.count}</h3>
                        <h4 className="font-semibold text-lg mb-2">{stat.title}</h4>
                        <p className="text-gray-400">{stat.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatsSection;
