"use client";
import React, { useState, useEffect, useRef } from "react";
import Navbar from './Navbar';
import { headerIcons } from './common/Helper';
import Image from "next/image";

const Header = () => {
    const [open, setOpen] = useState(true);
    const [presentVideo, setPresentVideo] = useState(0);
    const [toggleScroll, setToggleScroll] = useState(false);

    const videos = [
        "/assets/video/game2.mp4",
        "/assets/video/game3.mp4",
        "/assets/video/game1.mp4",
    ];

    const videoRefs = useRef(videos.map(() => React.createRef()));

    useEffect(() => {
        const videoElement = videoRefs.current[presentVideo].current;

        if (videoElement) {
            videoElement.src = videos[presentVideo];
            videoElement.play();

            const handleVideoEnded = () => {
                setPresentVideo((prev) => (prev + 1) % videos.length);
            };

            videoElement.addEventListener("ended", handleVideoEnded);

            return () => {
                videoElement.removeEventListener("ended", handleVideoEnded);
            };
        }
    }, [presentVideo, videos]);

    const scrollToSection = () => {
        const elementId = toggleScroll ? "footer" : "header";
        const element = document.getElementById(elementId);
        element?.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
        });
    };

    const setCurrentVideo = (index) => {
        setPresentVideo(index);
    };

    return (
        <div id='header' className='lg:h-[810px] md:h-[720px] sm:h-[640px] h-[600px] 2xl:min-h-screen overflow-x-clip lg:flex lg:flex-col relative'>
            <div className="bg-black opacity-70 w-full h-full absolute top-0 left-0 z-[2]"></div>
            {videos.map((videoSrc, index) => (
                <video
                    key={index}
                    ref={videoRefs.current[index]}
                    id={`video-${index}`}
                    src={videoSrc}
                    muted
                    autoPlay
                    playsInline
                    preload="auto"
                    className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${presentVideo === index ? "opacity-100" : "opacity-0"}`}
                />
            ))}
            <Image src="/assets/images/webp/redDotted1.webp" alt="dotted" width={273} height={70} className='absolute left-0 sm:top-[20%] top-[16%] lg:max-w-[273px] md:max-w-[200px] max-w-[150px] z-[3]' />
            <Image src="/assets/images/webp/redDotted2.webp" alt="dotted" width={112} height={53} className='absolute right-[4%] bottom-[7%] lg:max-w-[112px] md:max-w-[90px] max-w-[70px] z-[3]' />
            <div className={`absolute right-0 top-[25%] z-[4] duration-300 ${open ? "max-lg:right-[-80px]" : "right-0"}`}>
                <div className={`relative transition-opacity ease-linear duration-300`}>
                    <span onClick={() => setOpen(!open)} className='sm:w-[15px] w-[8px] absolute left-[-10%] sm:left-[-20%] top-[30%] h-[145px] bg-lightWhite rounded-[30px_0px_0px_30px]'></span>
                    <div className="flex flex-col justify-center gap-[20px] md:gap-[28px] items-center bg-offBlack lg:bg-whiteGrey w-[80px] h-[300px] sm:h-[330px] md:h-[368px] px-[14px] sm:px-[22px]">
                        {headerIcons.map((icon, index) => (
                            <div key={index} className="hover:scale-125 transition-all duration-300 ease-linear">
                                <a href={icon.link} aria-label={icon.label} target='_blank' rel='noopener noreferrer'>
                                    {icon.headersvg}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Navbar />
            <div className='container xl:max-w-[1164px] 2xl:flex-grow flex justify-center items-center flex-col mx-auto px-3 mt-[70px] sm:mt-[100px] md:mt-[164px] 2xl:mt-0 relative z-[4]'>
                <div className="flex md:flex-col max-md:items-baseline items-center gap-[13px] justify-between h-20 absolute max-md:justify-center md:left-0 xl:left-[-12px] lg:left-0 max-md:bottom-[-30%] md:top-[38%] translate-y-[50%] space-y-2.5">
                    {videos.map((_, index) => (
                        <div key={index} className="flex items-center">
                            <span
                                className={`h-[8px] rounded-[21px] ${index === presentVideo ? "bg-lightRed w-[47px]" : "bg-white w-5"} cursor-pointer md:rotate-90`}
                                onClick={() => setCurrentVideo(index)}
                            ></span>
                        </div>
                    ))}
                </div>

                <div className='bg-futureBtnbg bg-no-repeat bg-bgSize py-[11.5px] md:px-[62.5px] sm:px-[40px] px-[35px]'>
                    <p className='ff_inter text-lightWhite text-sm font-medium'>Future of Gaming</p>
                </div>
                <h1 className='font-normal text-4xl sm:text-6xl md:text-7xl lg:text-8lg xl:text-9xl ff_opensans text-lightWhite text-center mt-4 lg:mt-[10px] leading-xsm mb-4'>BEYOND <span className='text-lightRed'>ENTERTAINMENT</span></h1>
                <p className='ff_poppins font-normal text-sm sm:text-base text-lightWhite opacity-[90%] max-w-[809px] text-center sm:px-5 md:px-10 lg:px-0 leading-normal'>Galileo Sky, founded by industry experts, is redefining the gaming landscape. With a blend of groundbreaking technology and immersive entertainment, we create world-class gaming experiences and thriving digital economies that captivate and inspire</p>
            </div>
            <div className="absolute bottom-[3%] z-[4] left-0 right-0 flex items-center justify-center cursor-pointer">
                <div
                    onClick={scrollToSection}
                    className="border border-lightRed lg:p-2 p-1 inline-block lg:h-[76px] h-[50px] rounded-[55px]"
                >
                    <div
                        className={`${toggleScroll ? "translate-y-[110%]" : "translate-y-0"} lg:w-[27px] lg:h-[27px] w-[17px] h-[17px] rounded-full bg-lightRed duration-300`}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Header;
