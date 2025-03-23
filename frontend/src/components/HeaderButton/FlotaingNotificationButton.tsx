import { ReactNode } from "react";
import NotificationNumber from "./NotificationNumber";
import ButtonIcon from "./ButtonIcon";

type Props = NotificationNumberProps & {
    iconElement: ReactNode
}

export default function FlotaingNotificationButton(
    {number, className, iconElement}: Props
){
    return (
        <button
            aria-label="Notifications"
            className=" 
                absolute bottom-9 right-9
                bg-neutral-400 rounded-full 
                hover:bg-gray-200 hover:cursor-pointer hover:scale-110 
                transition-all hover:transition-all
        ">
             <ButtonIcon>
                {iconElement}
            </ButtonIcon>

            {(number !== 0)? 
                <NotificationNumber number={number} className={className} />
                : 
                null
            }
            
        </button>
    )
}