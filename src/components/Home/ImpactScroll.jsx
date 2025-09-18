import { useEffect, useRef, useState } from "react";

const ImpactScroll = () => {
    const [slides, setSlides] = useState([]);
    const scrollRef = useRef();
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => setSlides(data.slides));
    }, []);

    const handleScroll = () => {
        const scrollLeft = scrollRef.current.scrollLeft;
        const totalScrollWidth = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        const index = Math.round((scrollLeft / totalScrollWidth) * (slides.length - 1));
        setActiveIndex(index);
    };

    if (slides.length === 0) return null;

    return (
        <div className="flex h-screen bg-gray-900 text-white p-8">

            {/* Left Side Text */}
            <div className="w-1/3 flex items-center text-2xl font-bold">
                {slides[activeIndex].text}
            </div>

            {/* Image Scroller */}
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="w-1/3 overflow-x-scroll whitespace-nowrap scroll-smooth"
                style={{ scrollbarWidth: "none" }}
            >
                {slides.map((slide, idx) => (
                    <img
                        key={idx}
                        src={slide.image}
                        alt={`Slide ${idx}`}
                        className="inline-block w-full h-[80vh] object-cover mr-4 rounded-lg"
                    />
                ))}
            </div>

            {/* Vertical Scroll Indicator */}
            <div className="w-1/12 flex items-center justify-center">
                <div className="w-1 bg-gray-600 rounded-full h-full relative">
                    <div
                        className="bg-blue-500 rounded-full absolute left-0 w-full"
                        style={{
                            top: `${(activeIndex / (slides.length - 1)) * 100}%`,
                            height: `${100 / slides.length}%`,
                            transition: "top 0.3s"
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
export default ImpactScroll;