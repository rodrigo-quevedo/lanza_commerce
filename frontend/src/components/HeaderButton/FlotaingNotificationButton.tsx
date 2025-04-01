import { ReactNode } from "react";
import NotificationNumber from "./NotificationNumber";
import ButtonIcon from "./ButtonIcon";
import ButtonText from "./ButtonText";

type Props = NotificationNumberProps & {
    notificationClassName: string,
    iconElement: ReactNode,
    buttonText: string
}

export default function FlotaingNotificationButton(
    {notificationAmmount, notificationClassName, iconElement, buttonText}: Props
){
    return (
    <>{(notificationAmmount !== 0)? 
        <button
            aria-label="Notifications"
            className=" 
                relative
                sm:absolute sm:bottom-9 sm:right-9
                sm:p-2
                sm:bg-neutral-400 sm:rounded-full 
                hover:cursor-pointer sm:hover:bg-gray-500 sm:hover:scale-110 
                transition-all hover:transition-all
        ">
             <ButtonIcon>
                {iconElement}
            </ButtonIcon>

            <ButtonText text={buttonText}/>

            {(notificationAmmount !== 0)? 
                <NotificationNumber 
                    notificationAmmount={notificationAmmount} 
                    notificationClassName={notificationClassName} />
                
                : 
                null
            }
            
        </button>
    
    :null}</>
    )
}