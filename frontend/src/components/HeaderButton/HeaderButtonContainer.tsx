import { ReactNode, useState } from "react";
import NotificationNumber from "./NotificationNumber";
import ButtonIcon from "./ButtonIcon";

type Props = NotificationNumberProps & {
    iconElement: ReactNode
}


export default function HeaderButtonContainer(
    {number, notificationClassName: className, iconElement}: Props
){
    
    const [isHovered, setIsHovered]= useState<boolean>(false);
    
    return (   
        <button
            aria-label="Notifications"
            onMouseEnter={()=>setIsHovered(true)}
            onMouseLeave={()=>setIsHovered(false)}
            className=" 
                sm:mx-2
                relative
                bg-transparent rounded-full 
                hover:bg-white hover:cursor-pointer hover:scale-110 
                transition-all hover:transition-all
        ">
             <ButtonIcon>
                {iconElement}
            </ButtonIcon>

           {(number !== 0 && !isHovered)?
                <NotificationNumber number={number} notificationClassName={className} />
                : 
                null
            }
            
        </button>

    )
}