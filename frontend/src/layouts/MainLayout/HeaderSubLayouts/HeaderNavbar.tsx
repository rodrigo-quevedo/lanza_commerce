import { JSX, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import useFetchCategories  from "../../../hooks/useFetchCategories";
import useFilterCategoriesByInterval from "../../../hooks/useFilterCategoriesByInterval";
import mapCategory from "../../../utils/nav_categories/mapCategories";
import useSetupMobileNavbar from "../../../hooks/useSetupMobileNavbar";


export default function HeaderNavbar(){

    const { categories, fetchState } = useFetchCategories();
    const { filteredCategories } = useFilterCategoriesByInterval(categories, 8000);
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);
    
    // if (import.meta.env.DEV) console.log(categories)

    useSetupMobileNavbar(setMobileMenu)

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
                    h-full w-1/2 min-w-55
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



