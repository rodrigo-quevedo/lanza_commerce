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
                w-10 h-10 
                text-black hover:text-white
                text-xl md:text-2xl
                transition-all ease-out
        ">
            {children}
        </span>
    )
}