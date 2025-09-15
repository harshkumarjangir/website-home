import Image from "next/image";
import homeData from "@/data/homeData.json";

const AwardSection = () => {
    const awards = homeData.awardSection.awards;

    return (
        <div className="py-5 bg-black">
            <div className="flex max-md:flex-col flex-wrap justify-center
             items-center gap-8">
                {awards.map((award, idx) => (
                    <div key={idx} className="flex items-center md:border-r-1 md:border-[#707070] last:border-0 h-32">
                        <Image
                            src={award.image}
                            alt={award.name}
                            width={140}
                            height={100}
                            className="object-contain md:mx-10"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AwardSection