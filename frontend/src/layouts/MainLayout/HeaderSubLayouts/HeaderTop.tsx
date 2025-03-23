import HeaderButtonContainer from "../../../components/HeaderButton/HeaderButtonContainer";
import Logo from "../../../components/Logo";
import Searchbox from "../../../components/Searchbox";
import { IoIosNotifications } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

export default function HeaderTop(){
    return (
        <div className="flex flex-wrap justify-between items-center 
                        px-8 py-2 
        ">
            <Logo/>

            <div className="flex justify-around flex-1 pb-2.5 px-2
                            md:pb-0
            ">
                <Searchbox/>

                <div className="flex justify-around gap-2
                                ml-3
                ">

                    <HeaderButtonContainer number={4} className="bg-[#f00] text-white" iconElement={<IoIosNotifications/>} />

                    <HeaderButtonContainer number={4} className="bg-[#72f546]" iconElement={<FaShoppingCart/>} />

                    <HeaderButtonContainer number={0} className="" iconElement={<FaUserAlt/>} />
                </div>

                </div>
            </div>
    )
}