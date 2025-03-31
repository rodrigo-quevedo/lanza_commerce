

type Props =  NotificationNumberProps & {
    notificationClassName: string
}

export default function NotificationNumber(
    {notificationAmmount: number, notificationClassName}: Props){
    return (      
        <span 
            className={`
                absolute bottom-10 left-13 sm:bottom-6 sm:left-6
                flex items-center justify-center
                ${notificationClassName}
                text-black text-xs
                w-5 h-5 rounded-full 
        `}>
            {number}
        </span>
    )
}