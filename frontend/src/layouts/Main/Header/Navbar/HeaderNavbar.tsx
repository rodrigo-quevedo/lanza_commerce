import { JSX, useEffect, useState } from "react";
import useFetchCategories  from "../../../../hooks/useFetchCategories";
import useFilterCategoriesByInterval from "./hooks/useFilterCategoriesByInterval";
import mapCategory from "../../../../utils/nav_categories/mapCategories";
import useSetupMobileNavbar from "./hooks/useSetupMobileNavbar";
import MobileNavbar from "./components/MobileNavbar";
import Overlay from "./components/Overlay";
import MenuButton from "./components/MenuButton";

type ContentType = JSX.Element[] | undefined | JSX.Element;

export default function HeaderNavbar(){

    const { categories, fetchState } = useFetchCategories();
    const { filteredCategories } = useFilterCategoriesByInterval(categories, 8000);
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);

    let containerModifierClasses: string = "";

    useSetupMobileNavbar(setMobileMenu)


    // success
    let content: ContentType = (categories.length <= 5 || mobileMenu) ? 
        mapCategory(categories, "") 
        : 
        filteredCategories


    //loading
    if (fetchState.loading)
        content = <span className="animate-pulse">Loading categories...</span>
    

    //error
    if (fetchState.error){
        containerModifierClasses += `text-red-500!`
        content = <span>Error: ${fetchState.error}</span>
    }


    return (
        <>
            <nav id="large-nav" 
                className={`hidden
                            sm:flex sm:justify-around sm:items-center 
                            sm:overflow-hidden
                            sm:p-1 
                            sm:max-h-7
                            font-medium text-sm
                            bg-black text-white
                            ${containerModifierClasses}
            `}>
                {content}
            </nav>

            <Overlay />

            <MenuButton/>
            
            <MobileNavbar content={content}/>     
        </>
    )
}



