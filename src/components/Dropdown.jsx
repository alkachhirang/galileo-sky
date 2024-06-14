import Link from "next/link";
import { DropdownData } from "./common/Helper";

export default function Dropdown() {
    return (
        <>
            <ul className="dropdown absolute invisi ble opacity-0 h-0 border border-solid border-transparent bg-offBlack rounded p-0 top-[35px] left-[50%] mt-[2px] z-[2] translate-x-[-50%] transition-all duration-300 ease-linear">
                {DropdownData.map((data, index) => (
                    <li key={index} className="px-5 !text-lightWhite ff_poppins text-base font-normal p-[6px_20px] text-nowrap text-center bg-transparent "><Link href="" className="text-lightWhite">
                        {data.title}
                    </Link></li>
                ))}
            </ul >
        </>
    );
}