import HeaderButtonContainer from "../../../components/HeaderButton/HeaderButtonContainer";
import Logo from "../../../components/Logo";
import Searchbox from "../../../components/Searchbox";
import { IoIosNotifications } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import FlotaingNotificationButton from "../../../components/HeaderButton/FlotaingNotificationButton";


export default function HeaderTop(){
    return (
        <div className="flex justify-between items-center 
                        sm:px-4 
                        py-1
        ">
            <Logo/>

            <Searchbox/>

            <FlotaingNotificationButton
                number={10}
                notificationClassName="bg-[#f00] text-white" 
                iconElement={<IoIosNotifications/>}
            />
 
            <div className="flex justify-end">
                <HeaderButtonContainer 
                    number={4} 
                    notificationClassName="bg-[#fff] text-black font-bold 
                                            bottom-6! left-7! md:bottom-7! " 
                    iconElement={<FaShoppingCart/>} />

                <HeaderButtonContainer 
                    number={0} 
                    notificationClassName="hidden" 
                    iconElement={<FaUserAlt/>} />
            </div>
            

        </div>
    )
}