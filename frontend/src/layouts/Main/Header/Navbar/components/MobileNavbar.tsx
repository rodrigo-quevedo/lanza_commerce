import { JSX } from "react"

type Props = {
    content: JSX.Element | JSX.Element[] | undefined
}

export default function MobileNavbar({content}: Props) {
    return (
        <nav id="mobile-nav" 
            className={`
                sm:hidden
                absolute top-0
                z-20
                -translate-x-full opacity-0 
                transition-all duration-400
                h-full w-1/2 min-w-55
                bg-white text-black
                flex flex-col 
                pt-5 pb-30 pl-7
                overflow-x-hidden overflow-y-auto
        `}>
            <span id="nav__close-button"
                className={`
                    z-30
                    absolute right-0.5 top-0.5                         
                    bg-neutral-200
                    text-2xl
                    w-10 h-10
                    rounded-full
                    transition-all duration-200
                    hover:cursor-pointer hover:bg-neutral-400
            `}>
                {/* This one below is there to center the x */}
                <span className="absolute top-[1px] right-[11.4px]">
                    &times;
                </span>
            </span>

            <p className="
                mt-6 mb-5
                font-bold 
                
            ">
                Categories
            </p>                

          {content}
        </nav>
    )
}