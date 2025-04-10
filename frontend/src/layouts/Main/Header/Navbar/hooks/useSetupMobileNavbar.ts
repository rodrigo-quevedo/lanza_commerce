import { useEffect } from "react"

export default function useSetupMobileNavbar(
    setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>
){
    useEffect(()=>{
        
        let hamburger_button = document.getElementById("nav__hamburger-button")
        let nav_overlay = document.getElementById("nav__overlay")
        let nav_mobile = document.getElementById("mobile-nav")
        let close_button = document.getElementById("nav__close-button")

        // I can't take out these functions because I can't change the parameter (e: MouseEvent)
        let handleClick = ()=> {
            nav_overlay?.classList.toggle('invisible')
            nav_mobile?.classList.toggle("-translate-x-full")
            nav_mobile?.classList.toggle("opacity-0")
        }

        let handleClick_open = (e: MouseEvent)=>{
            setMobileMenu(true);
            handleClick()
        }

        let handleClick_close = (e: MouseEvent)=>{
            setMobileMenu(false);
            handleClick()
        }
        
        
        //hook event listeners
        hamburger_button?.addEventListener('click', handleClick_open)
        close_button?.addEventListener('click', handleClick_close)
        
        //On development mode, react executes 2 times the useEffect, so there'll be 2 event listeners.
        //But when react executes the useEffect 2 times, it has to unmount the component from the first execution.
        //So we just have to remove the event listener of that first execution component.
        return () => {
            hamburger_button?.removeEventListener('click', handleClick_open)
            close_button?.removeEventListener('click', handleClick_close)

        };
    }, [])

}
