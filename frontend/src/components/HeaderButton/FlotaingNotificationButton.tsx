import { ReactNode } from "react";
import NotificationNumber from "./NotificationNumber";
import ButtonIcon from "./ButtonIcon";

type Props = NotificationNumberProps & {
    iconElement: ReactNode
}

export default function FlotaingNotificationButton(
    {number, notificationClassName: className, iconElement}: Props
){
    return (
    <>{(number !== 0)? 
        <button
            aria-label="Notifications"
            className=" 
                relative
                sm:absolute sm:bottom-9 sm:right-9
                sm:bg-neutral-400 sm:rounded-full 
                hover:bg-gray-500 hover:cursor-pointer hover:scale-110 
                transition-all hover:transition-all
        ">
             <ButtonIcon>
                {iconElement}
            </ButtonIcon>
            <span
                className="text-black 
                            sm:hidden
                "
            >Notifications</span>

            {(number !== 0)? 
                <NotificationNumber number={number} notificationClassName={className} />
                : 
                null
            }
            
        </button>
    
    :null}</>
    )
}