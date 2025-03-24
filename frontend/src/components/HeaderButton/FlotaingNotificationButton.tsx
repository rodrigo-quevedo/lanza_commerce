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
                absolute bottom-9 right-9
                bg-neutral-300 rounded-full 
                hover:bg-gray-400 hover:cursor-pointer hover:scale-110 
                transition-all hover:transition-all
        ">
             <ButtonIcon>
                {iconElement}
            </ButtonIcon>

            {(number !== 0)? 
                <NotificationNumber number={number} notificationClassName={className} />
                : 
                null
            }
            
        </button>
    
    :null}</>
    )
}