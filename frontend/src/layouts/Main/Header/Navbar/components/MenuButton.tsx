import { GiHamburgerMenu } from "react-icons/gi";

export default function MenuButton(){

    return (
        <span id="nav__hamburger-button" 
            className={`sm:hidden 
                    z-100
                    absolute left-1 top-20
                    hover:cursor-pointer
                    text-2xl
                    p-1.5
                    rounded-full border-1
                    bg-white text-black 
        `}>
            <GiHamburgerMenu/>
        </span>
    )
}