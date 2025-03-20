import { IoIosNotifications } from "react-icons/io";
import NotificationNumber from "./NotificationNumber";


export default function NotificationsButton(){
    return (
        <button
            aria-label="Notifications"
            className=" 
                relative
                bg-gray-100 rounded-full 
                hover:bg-gray-200 hover:cursor-pointer
        ">
            <span
                className="
                    relative 
                    flex items-center justify-center
                    w-10 h-10 
                    text-black
                    text-2xl
            ">
                <IoIosNotifications />
            </span>

            <NotificationNumber number={10}/>

        </button>
    )
}