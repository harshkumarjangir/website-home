import homeData from "@/data/homeData.json";
import { PhoneCall } from "lucide-react";
import Link from "next/link";

const HeaderMarquee = () => {
    const { items, contact } = homeData.headerMarquee;

    return (
        <div className="flex items-center bg-[#1163FB] text-white py-2 max-md:px-2 px-16 w-full overflow-hidden">

            {/* Marquee Section */}
            <div
                className="flex-grow overflow-hidden"
            >
                <div
                    className="inline-flex pause-on-hover"
                    style={{
                        animation: 'marquee 20s linear infinite',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {items.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-8"
                        >
                            {item.text}
                            <button className="ml-3 font-semibold underline cursor-pointer">{item.btnText}</button>
                            <svg
                                className="ml-2"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.00004 0C6.89555 6 5.99995 6.89551 0 8C5.99995 9.10456 6.89555 10.0001 8.00004 16C9.10453 10.0001 10.0001 9.10449 16 8C9.99997 6.89551 9.10461 6 8.00004 0Z"
                                    fill="white"
                                />
                            </svg>
                        </a>
                    ))}

                    {/* Duplicate for seamless scrolling */}
                    {items.map((item, index) => (
                        <a
                            key={`duplicate-${index}`}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-8"
                        >
                            {item.text}
                            <button className="ml-3 font-semibold underline cursor-pointer">{item.btnText}</button>
                            <svg
                                className="ml-2"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.00004 0C6.89555 6 5.99995 6.89551 0 8C5.99995 9.10456 6.89555 10.0001 8.00004 16C9.10453 10.0001 10.0001 9.10449 16 8C9.99997 6.89551 9.10461 6 8.00004 0Z"
                                    fill="white"
                                />
                            </svg>
                        </a>
                    ))}
                </div>
            </div>

            {/* Contact Us Button */}
            <div className="max-md:hidden ml-16">
                <Link
                    href={contact.contactBtnLink}
                    className="bg-white text-black text-[14px] font-semibold py-2 px-2.5 rounded-lg inline-flex items-center text-nowrap"
                >
                    <PhoneCall size={20} className="inline-block mr-2" />
                    {contact.contactBtnText}
                </Link>
            </div>

            <style>
                {`
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }

                    .pause-on-hover:hover {
                        animation-play-state: paused !important;
                    }
                `}
            </style>
        </div>
    );
};

export default HeaderMarquee;
