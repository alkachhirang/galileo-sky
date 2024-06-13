import Link from "next/link";
import { useState, useEffect } from "react";
import { footerIcons, footerLinks } from "./common/Helper";

export default function Footer() {
    const [formData, setFormData] = useState({
        email: "",
    });
    const [formErrors, setFormErrors] = useState({
        email: "",
    });
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const regex = {
            email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        };
        const errors = {};
        if (!formData.email) {
            errors.email = "Email is required.";
        } else if (!regex.email.test(formData.email)) {
            errors.email = "Email is invalid.";
        }
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            setShowSuccessPopup(true);
        }
    };

    const handlePopupClose = () => {
        setShowSuccessPopup(false);
        setFormData({
            email: "",
        });
        setFormErrors({
            email: "",
        });
    };

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!e.target.closest(".success-popup")) {
                handlePopupClose();
            }
        };
        if (showSuccessPopup) {
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [showSuccessPopup]);

    return (
        <div className='lg:pt-[80px] md:pt-[64px] pt-[48px]'>
            <div className='container xl:max-w-[1164px] px-3 mx-auto'>
                <div className="flex flex-row flex-wrap justify-between">
                    <div className="lg:w-5/12 w-full ">
                        <Link href="">
                            <img src="/assets/images/svg/footerLogo.svg" alt="footerlogo" width={289} height={53} className="md:w-[289px] w-[200px]" />
                        </Link>
                        <p className="ff_poppins text-offBlack text-sm sm:text-base font-normal opacity-[70%] mt-4 mb-6">Galileo Sky, founded by industry experts, is redefining the gaming landscape. With a blend of groundbreaking technology and immersive entertainment, we create world-class gaming experiences and thriving digital economies that captivate and inspire
                        </p>
                        <div className="flex gap-[16px] items-center">
                            {footerIcons.map((icon, index) => {
                                return (
                                    <a key={index} href={icon.link} aria-label={icon.label} target='blank' className="w-[36px] h-[36px] rounded-[100%] border border-solid border-darkRed flex justify-center items-center hover:scale-110  transition-all duration-300 ease-linear">
                                        {icon.footersvg}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                    <div className="lg:w-7/12 w-full mt-[40px] lg:mt-0">
                        <div className="flex gap-[25px] sm:gap-[76px] sm:flex-row flex-col flex-wrap lg:justify-end">
                            <div className="sm:w-2/12 w-full sm:order-1 order-2">
                                <ul>
                                    <li className="text-base font-normal ff_poppins text-offBlack mb-4">Quick Links</li>
                                    {footerLinks.map((data, index) => (
                                        <li key={index}>
                                            <Link
                                                href={data.Path}
                                                className="text-base mb-3 inline-block font-normal ff_poppins text-nowrap text-offBlack opacity-[70%] hover:opacity-[100%] after:h-[1px] after:w-[0] hover:after:w-full after:bg-black after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-2px] after:rounded-[10px]"
                                            >
                                                {data.Link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="sm:w-7/12 w-full sm:order-2 order-1">
                                <p className="text-base font-normal ff_poppins text-offBlack mb-4">Get Connected</p>
                                <form onSubmit={handleSubmit} className="sm:max-w-[347px] h-[66px] max-w-[500px] bg-grey flex items-center w-full border border-solid border-offWhite pl-[21px] p-[7px] rounded-[10px]">
                                    <input required className="text-base !text-offBlack placeholder:text-offBlack placeholder:!text-opacity-[70%] !text-opacity-[70%] bg-transparent ff_poppins font-normal outline-none w-full"
                                        type="text"
                                        placeholder="Email Here"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                    <button type="submit" className="ff_poppins text-offWhite font-normal text-base rounded-[8px] py-[12px] px-[28px] md:py-[13px] md:px-[32px] hover:bg-transparent hover:text-darkRed border border-solid border-transparent hover:border-darkRed bg-darkRed transition-all duration-300 ease-linear ">Submit</button>
                                </form>
                                {formErrors.email && (
                                    <p className="error-message ff_poppins mt-1 text-red-600">{formErrors.email}</p>
                                )}
                                {showSuccessPopup && (
                                    <div className="fixed top-[50%] left-[50%] h-[200px] sm:h-[280px] md:h-[250px] w-full max-w-[300px] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[400px] bg-white border border-solid border-darkRed p-[20px] sm:p-[40px] rounded  shadow-[0px_0px_10px_0px_#0000001A] flex justify-center items-center flex-col translate-x-[-50%] translate-y-[-50%] z-[50]">
                                        <p className="sm:mb-[40px] mb-[25px] text-black text-xl sm:text-3xl font-semibold font-plusJkarta text-center leading-lg">Your form submitted successfully!</p>
                                        <div className="flex justify-center items-center">
                                            <div className='w-full'>
                                                <button onClick={handlePopupClose} className="ff_poppins text-offWhite font-normal text-base rounded-[8px] py-[12px] px-[28px] md:py-[13px] md:px-[32px] hover:bg-transparent hover:text-darkRed border border-solid border-transparent hover:border-darkRed bg-darkRed transition-all duration-300 ease-linear ">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <p className="sm:text-base text-sm font-normal ff_poppins opacity-[70%] text-offBlack mt-4 sm:max-w-[338px] pe-12">Your email address is very safe with Galileo Sky. You will only receive our gaming updates</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-[#01010126] mt-[35px]"></div>
            <p className="text-center text-offBlack opacity-[70%] text-sm sm:text-base font-normal ff_poppins py-[24px]">
                {new Date().getFullYear()} Copyrights Galileo Sky, All Rights Reserved
            </p>
        </div>
    );
}