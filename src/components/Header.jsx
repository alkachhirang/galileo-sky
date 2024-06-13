"use client";
import React, { useState } from "react";
import Navbar from './Navbar';
import { headerIcons } from './common/Helper';
import Image from "next/image";

const Header = () => {
    const [open, setopen] = useState(true);
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };
    return (
        <div className='lg:h-[810px] md:h-[720px] sm:h-[640px] h-[600px] 2xl:min-h-screen overflow-x-clip lg:flex lg:flex-col relative bg-black'>
            <Image src="/assets/images/webp/redDotted1.png" alt="dotted" width={273} height={70} className='absolute left-0 sm:top-[20%] top-[16%] lg:max-w-[273px] md:max-w-[200px] max-w-[150px]' />
            <Image src="/assets/images/webp/redDotted2.png" alt="dotted" width={112} height={53} className='absolute right-[4%] bottom-[7%] lg:max-w-[112px] md:max-w-[90px] max-w-[70px]' />
            <div className={`absolute right-0 top-[25%] z-10 duration-300 ${open ? "max-lg:right-[-80px]" : "right-0"}`}>
                <div className={` relative transition-opacity ease-linear duration-300`}>
                    <span onClick={() => setopen(!open)} className='sm:w-[15px] w-[8px] absolute left-[-10%] sm:left-[-20%] top-[30%] h-[145px] bg-lightWhite rounded-[30px_0px_0px_30px]'>
                    </span>
                    <div className="flex flex-col justify-center gap-[20px] md:gap-[28px] items-center bg-whiteGrey w-[80px] h-[300px] sm:h-[330px] md:h-[368px] px-[14px] sm:px-[22px]">
                        {headerIcons.map((icon, index) => {
                            return (
                                <div key={index} className="hover:scale-125 transition-all duration-300 ease-linear">
                                    <a href={icon.link} aria-label={icon.label} target='blank'>
                                        {icon.headersvg}
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Navbar />
            <div className='container xl:max-w-[1164px] 2xl:flex-grow flex justify-center items-center flex-col mx-auto px-3 mt-[70px] sm:mt-[100px] md:mt-[164px] 2xl:mt-0'>
                <div className='bg-futureBtnbg bg-no-repeat bg-bgSize py-[11.5px] md:px-[62.5px] sm:px-[40px] px-[35px]'>
                    <p className='ff_inter text-lightWhite text-sm font-medium'>Future of Gaming</p>
                </div>
                <h1 className='font-normal text-4xl sm:text-6xl md:text-7xl lg:text-8lg xl:text-9xl ff_opensans text-lightWhite text-center mt-4 lg:mt-[10px] leading-xsm mb-4'>BEYOND <span className='text-lightRed'>ENTERTAINMENT</span></h1>
                <p className='ff_poppins fw-normal text-sm sm:text-base text-lightWhite opacity-[90%] max-w-[809px] text-center sm:px-5 md:px-10 lg:px-0 !leading-normal'>Galileo Sky, founded by industry experts, is redefining the gaming landscape. With a blend of groundbreaking technology and immersive entertainment, we create world-class gaming experiences and thriving digital economies that captivate and inspire</p>
            </div>
            <div className="absolute bottom-[4%] z-30 left-0 right-0 flex items-center justify-center">
                <div
                    className="border border-lightRed p-2 inline-block h-[76px] w-[43px] rounded-[55px] relative cursor-pointer"
                    onClick={handleToggle}
                >
                    <div
                        className={`w-[27px] h-[27px] rounded-full bg-lightRed absolute transition-transform duration-300 ${isToggled ? 'translate-y-[30px]' : 'translate-y-0'}`}
                    ></div>
                </div>
            </div>
        </div>
    )
}
export default Header;