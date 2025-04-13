import { ReactNode, useState } from "react";
import NotificationNumber from "./components/NotificationNumber";
import ButtonIcon from "./components/ButtonIcon";
import ButtonText from "./components/ButtonText";

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
                mx-0.5 sm:mx-2 md:mx-3
                relative
                bg-transparent rounded-full 
                hover:cursor-pointer sm:hover:scale-110
                transition-all hover:transition-all
        `}>
             <ButtonIcon>
                {buttonIcon}
            </ButtonIcon>

            <ButtonText text={buttonText} />

           {(notificationAmmount !== 0)?
                <NotificationNumber notificationAmmount={notificationAmmount} notificationClassName={isHovered?" sm:hidden ": ""} />
                : 
                null
            }
            
        </button>

    )
}