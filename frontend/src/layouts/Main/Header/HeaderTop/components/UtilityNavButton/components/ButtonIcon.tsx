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
                pt-2 sm:p-0
                text-black sm:hover:text-white
                text-md sm:text-xl md:text-2xl
                transition-all ease-out
        ">
            {children}
        </span>
    )
}