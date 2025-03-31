import { ReactNode, useState } from "react";
import NotificationNumber from "./NotificationNumber";
import ButtonIcon from "./ButtonIcon";
import ButtonText from "./ButtonText";

type Props = NotificationNumberProps & {
    buttonIcon: ReactNode,
    buttonText: string,
    hide?: boolean
}


export default function HeaderButtonContainer(
    {notificationAmmount, buttonIcon, buttonText, hide}: Props
){
    
    const [isHovered, setIsHovered]= useState<boolean>(false);
    
    return (   
        <button
            aria-label="Notifications"
            onMouseEnter={()=>setIsHovered(true)}
            onMouseLeave={()=>setIsHovered(false)}
            className={` 
                ${hide? "sm:hidden": ""}
                mx-0.5 sm:mx-2
                relative
                bg-transparent rounded-full 
                hover:cursor-pointer sm:hover:scale-110
                transition-all hover:transition-all
        `}>
             <ButtonIcon>
                {buttonIcon}
            </ButtonIcon>

            <ButtonText text={buttonText} />

           {(notificationAmmount !== 0 && !isHovered)?
                <NotificationNumber notificationAmmount={notificationAmmount} notificationClassName={""} />
                : 
                null
            }
            
        </button>

    )
}