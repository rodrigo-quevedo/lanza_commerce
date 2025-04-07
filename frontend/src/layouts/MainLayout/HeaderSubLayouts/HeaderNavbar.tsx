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

        if (hamburger_button !== null)
            hamburger_button.addEventListener('click', ()=>{
                setMobileMenu(true);
                hamburger_button.classList.toggle('hidden')
                nav_overlay?.classList.toggle('invisible')
                nav_mobile?.classList.toggle("-translate-x-full")
                nav_mobile?.classList.toggle("opacity-0")
            })
    })



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
                    fixed top-0 left-0 sm:hidden
                    invisible
                    h-screen w-screen
                    bg-black opacity-90
            `}>
            </div>

            <span id="nav__hamburger-button" 
                className={`sm:hidden 
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
                    fixed 
                    -translate-x-full opacity-0 
                    h-full w-40
                    bg-black text-white
            `}>
                {content}
            </nav>
                
        </>
    )
}



