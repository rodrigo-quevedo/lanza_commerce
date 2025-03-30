import { ReactNode } from "react";

type Props = {
    children: ReactNode
}

export default function ButtonIcon({children}: Props){
    return (
        <span
            className="
                relative 
                flex items-center justify-center
                m-auto sm:m-0
                w-10 h-10 
                text-black hover:text-white
                text-2xl sm:text-xl md:text-2xl
                transition-all ease-out
        ">
            {children}
        </span>
    )
}