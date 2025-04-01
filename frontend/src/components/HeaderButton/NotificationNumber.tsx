

type Props =  NotificationNumberProps & {
    notificationClassName: string
}

export default function NotificationNumber(
    {notificationAmmount: number, notificationClassName}: Props){
    return (      
        <span 
            className={`
                absolute bottom-8 left-5 sm:bottom-4.5 sm:left-4.5 md:bottom-5 md:left-5.5
                flex items-center justify-center text-center
                ${notificationClassName}
                bg-[#A61713] sm:bg-white
                text-white sm:text-black text-[10px]  sm:text-xs sm:font-bold    
                w-3.5 h-3.5 md:w-4 md:h-4 rounded-full 
        `}>
            {number}
        </span>
    )
}