import { FaHome, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import HeaderButtonContainer from "../../../components/HeaderButton/HeaderButtonContainer";
import FlotaingNotificationButton from "../../../components/HeaderButton/FlotaingNotificationButton";
import { IoIosNotifications } from "react-icons/io";


export default function UtilityNav(){

    return (
        <div 
            className=" absolute bottom-0 
                        flex justify-around sm:justify-end 
                        p-0 w-full 
                        bg-neutral-200 sm:bg-transparent
        ">

            <HeaderButtonContainer 
                number={0} 
                notificationClassName="bg-[#00f] text-black font-bold 
                                        sm:bottom-6! sm:left-7! md:bottom-7! " 
                iconElement={<FaHome/>} />

            <FlotaingNotificationButton
                number={10}
                notificationClassName="bg-[#f00] text-white" 
                iconElement={<IoIosNotifications/>}
            />

            <HeaderButtonContainer 
                number={4} 
                notificationClassName="bg-[#0f0] text-black font-bold 
                                        sm:bottom-6! sm:left-7! md:bottom-7! " 
                iconElement={<FaShoppingCart/>} />

            <HeaderButtonContainer 
                number={0} 
                notificationClassName="hidden" 
                iconElement={<FaUserAlt/>} />
        </div>

    )
}