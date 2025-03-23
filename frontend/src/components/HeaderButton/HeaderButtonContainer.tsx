import { ReactNode } from "react";
import NotificationNumber from "./NotificationNumber";
import ButtonIcon from "./ButtonIcon";

type Props = NotificationNumberProps & {
    iconElement: ReactNode
}

export default function HeaderButtonContainer(
    {number, className, iconElement}: Props
){
    return (
        <button
            aria-label="Notifications"
            className=" 
                relative
                bg-gray-100 rounded-full 
                hover:bg-gray-200 hover:cursor-pointer
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