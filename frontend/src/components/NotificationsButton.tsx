import { IoIosNotifications } from "react-icons/io";


export default function NotificationsButton(){
    return (
        <button
        aria-label="Notifications"
        className="relative w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
        >
            <span>
                <IoIosNotifications />
            </span>

            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            5
            </span>

        </button>
    )
}