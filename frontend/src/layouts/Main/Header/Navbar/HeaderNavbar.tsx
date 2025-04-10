import { JSX, useEffect, useState } from "react";
import useFetchCategories  from "./hooks/useFetchCategories";
import useFilterCategoriesByInterval from "./hooks/useFilterCategoriesByInterval";
import mapCategory from "../../../../utils/nav_categories/mapCategories";
import useSetupMobileNavbar from "./hooks/useSetupMobileNavbar";
import MobileNavbar from "./components/MobileNavbar";
import Overlay from "./components/Overlay";
import MenuButton from "./components/MenuButton";


export default function HeaderNavbar(){

    const { categories, fetchState } = useFetchCategories();
    const { filteredCategories } = useFilterCategoriesByInterval(categories, 8000);
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);


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

            <Overlay />

            <MenuButton/>
            
            <MobileNavbar content={content}/>     
        </>
    )
}



