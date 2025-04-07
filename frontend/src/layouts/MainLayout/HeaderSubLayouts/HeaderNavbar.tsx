import { JSX, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import useFetchCategories  from "../../../hooks/useFetchCategories";
import useFilterCategoriesByInterval from "../../../hooks/useFilterCategoriesByInterval";
import mapCategory from "../../../utils/map/mapCategories";


export default function HeaderNavbar(){

    const { categories, fetchState } = useFetchCategories();
    const { filteredCategories } = useFilterCategoriesByInterval(categories);
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);

    console.log(categories)

    useEffect(()=>{
        let hamburger_button = document.getElementById("nav__hamburger-button")
        let nav_overlay = document.getElementById("nav__overlay")
        let nav_mobile = document.getElementById("mobile-nav")
        let close_button = document.getElementById("nav__close-button")

        let handleClick = (e: MouseEvent)=>{
            console.log('hamburger or close button click')
            
            setMobileMenu(!mobileMenu);
            hamburger_button?.classList.toggle('invisible')
            nav_overlay?.classList.toggle('invisible')
            nav_mobile?.classList.toggle("-translate-x-full")
            nav_mobile?.classList.toggle("opacity-0")
        }
        
        hamburger_button?.addEventListener('click', handleClick)
        close_button?.addEventListener('click', handleClick)
        
        //On development mode, react executes 2 times the useEffect, so there'll be 2 event listeners.
        //But when react executes the useEffect 2 times, it has to unmount the component from the first execution.
        //So we just have to remove the event listener of that first execution component.
        return () => {
            hamburger_button?.removeEventListener('click', handleClick)
            close_button?.removeEventListener('click', handleClick)

        };
    }, [])



    //common styles for every state
    let className = `hidden
                    sm:flex sm:justify-around sm:items-center 
                    sm:overflow-hidden
                    sm:p-1 
                    sm:max-h-7
                    font-medium text-sm
                    bg-black text-white`

    // success
    className += ``;
    let content: JSX.Element[] | undefined | JSX.Element   
        = (categories.length <= 5 || mobileMenu) ? 
            mapCategory(categories, "") 
            : 
            filteredCategories


    //loading
    if (fetchState.loading){
        className += ` `
        content = <span className="animate-pulse">Loading categories...</span>
    }

    //error
    if (fetchState.error){
        className += `text-red-500!`
        content = <span>Error: ${fetchState.error}</span>
    }


    return (
        <>
            <nav id="large-nav" 
                className={className}>
                {content}
            </nav>

            <div id="nav__overlay" 
                className={`
                    z-10
                    fixed top-0 left-0 sm:hidden
                    invisible
                    h-screen w-screen
                    bg-black opacity-90
            `}>
            </div>

            <span id="nav__hamburger-button" 
                className={`sm:hidden 
                        z-100
                        absolute left-2 
                        hover:cursor-pointer
                        text-2xl
                        p-1.5
                        rounded-full border-1
                        bg-white text-black `}>
                <GiHamburgerMenu/>
            </span>
            
            <nav id="mobile-nav" 
                className={`
                    sm:hidden
                    absolute top-0
                    z-20
                    -translate-x-full opacity-0 
                    transition-all duration-400
                    h-full w-1/2
                    bg-white text-black
                    flex flex-col
                    overflow-hidden
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
                    <span className="absolute top-[1px] right-[11.4px]">
                        &times;
                    </span>
                </span>
                
                {content}
            </nav>
                
        </>
    )
}



