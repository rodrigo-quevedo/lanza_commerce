import { IoIosNotifications } from "react-icons/io";

interface ComponentProps {
    number: number
}

export default function NotificationNumber({number}: ComponentProps){
    return (      
        <span 
            className="
                absolute bottom-6 left-6 
                flex items-center justify-center
                bg-[#72f546]
                text-black text-xs
                w-5 h-5 rounded-full 
        ">
            {number}
        </span>
    )
}