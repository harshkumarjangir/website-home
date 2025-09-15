import homeData from "@/data/homeData.json"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

const HeroSection = () => {

  const { backgroundVideo, heading, description, buttonLink, buttonText } = homeData.heroSection;

  return (
    <div className="relative md:h-[90vh] w-full flex max-md:flex-col flex-row items-center max-md:justify-center justify-start max-md:bg-black text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="max-md:hidden absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source
          src={backgroundVideo}
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>


      {/* Content */}
      <div className="lg:max-w-4xl px-4 max-md:py-12 md:px-8">
        <h2 className="text-3xl md:text-5xl mb-4">
          {heading}
        </h2>
        <p className="text md:text-lg mb-8 max-w-4xl">
          {description}
        </p>

        <Link
          href={buttonLink}
          className="bg-[#1163FB] group hover:bg-transparent border-2 border-[#1163FB] hover:border-2 hover:border-white text-white py-5 px-3 rounded-lg transition duration-300 inline-flex items-center"
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

          <ChevronRight
            size={22}
            className="inline-block ml-1 chevron-animate"
          />
        </Link>
      </div>

      <video
        autoPlay
        loop
        muted
        className="md:hidden w-full h-80 object-cover p-5"
      >
        <source
          src={homeData.heroSection.backgroundVideo}
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default HeroSection