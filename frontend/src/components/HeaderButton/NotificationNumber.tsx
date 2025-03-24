
export default function NotificationNumber({number, notificationClassName: className}: NotificationNumberProps){
    return (      
        <span 
            className={`
                absolute bottom-6 left-6
                flex items-center justify-center
                ${className}
                text-black text-xs
                w-5 h-5 rounded-full 
        `}>
            {number}
        </span>
    )
}