import { ReactNode, useState } from "react";
import NotificationNumber from "./NotificationNumber";
import ButtonIcon from "./ButtonIcon";

type Props = NotificationNumberProps & {
    iconElement: ReactNode
}


export default function HeaderButtonContainer(
    {number, className, iconElement}: Props
){
    
    const [isHovered, setIsHovered]= useState<boolean>(false);
    
    return (
        <button
            aria-label="Notifications"
            onMouseEnter={()=>setIsHovered(true)}
            onMouseLeave={()=>setIsHovered(false)}
            className=" 
                mx-2
                relative
                bg-transparent rounded-full 
                hover:bg-gray-200 hover:cursor-pointer hover:scale-110 
                transition-all hover:transition-all
        ">
             <ButtonIcon>
                {iconElement}
            </ButtonIcon>

            {(number !== 0 && !isHovered)? 
                <NotificationNumber number={number} className={className} />
                : 
                null
            }
            
        </button>
    )
}