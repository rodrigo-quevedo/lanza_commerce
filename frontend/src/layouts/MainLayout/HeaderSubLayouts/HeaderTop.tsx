import HeaderButtonContainer from "../../../components/HeaderButton/HeaderButtonContainer";
import Logo from "../../../components/Logo";
import Searchbox from "../../../components/Searchbox";
import { IoIosNotifications } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import FlotaingNotificationButton from "../../../components/HeaderButton/FlotaingNotificationButton";


export default function HeaderTop(){
    return (
        <div className="flex flex-wrap justify-between items-center 
                        px-4 
        ">
            <Logo/>

            <Searchbox/>

            <FlotaingNotificationButton
                number={0}
                className="bg-[#f00] text-white" 
                iconElement={<IoIosNotifications/>}
            />
 
            <HeaderButtonContainer 
                number={4} 
                className="bg-[#fff] text-black font-bold bottom-7 left-7" 
                iconElement={<FaShoppingCart/>} />

            <HeaderButtonContainer 
                number={0} 
                className="" 
                iconElement={<FaUserAlt/>} />
            

        </div>
    )
}