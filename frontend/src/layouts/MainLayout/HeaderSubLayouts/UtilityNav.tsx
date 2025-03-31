import { FaHome, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import HeaderButtonContainer from "../../../components/HeaderButton/HeaderButtonContainer";
import FlotaingNotificationButton from "../../../components/HeaderButton/FlotaingNotificationButton";
import { IoIosNotifications } from "react-icons/io";


export default function UtilityNav(){

    return (
        <div 
            className=" absolute bottom-0 sm:static
                        flex justify-around sm:justify-end items-center
                        p-0 w-full sm:w-fit
                        bg-neutral-300 sm:bg-transparent
        ">

            <HeaderButtonContainer 
                notificationAmmount={0}
                buttonIcon={<FaHome/>} 
                buttonText="Home" 
                hide={true}/>

            <FlotaingNotificationButton
                notificationAmmount={10}
                notificationClassName="bg-[#f00] text-white" 
                iconElement={<IoIosNotifications/>}
                buttonText="Notifications" />

            <HeaderButtonContainer 
                notificationAmmount={4} 
                buttonIcon={<FaShoppingCart/>} 
                buttonText="Cart" />

            <HeaderButtonContainer 
                notificationAmmount={0}
                buttonIcon={<FaUserAlt/>} 
                buttonText="Profile" />
        </div>

    )
}