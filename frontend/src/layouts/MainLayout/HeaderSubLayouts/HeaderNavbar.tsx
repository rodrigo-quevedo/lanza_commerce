import { JSX } from "react";
import useFetchCategories  from "../../../hooks/useFetchCategories";
import useFilterCategoriesByInterval from "../../../hooks/useFilterCategoriesByInterval";
import mapCategory from "../../../utils/map/mapCategories";


export default function HeaderNavbar(){

    const { categories, fetchState } = useFetchCategories();
    const { filteredCategories } = useFilterCategoriesByInterval(categories);

    console.log(categories)

    //common styles for every state
    let className = `hidden 
                    sm:flex justify-around items-center 
                    overflow-hidden
                    p-1 
                    max-h-7
                    font-medium text-sm
                    bg-black text-white`

    // success
    className += ``;
    let content: JSX.Element[] | undefined | JSX.Element   
        = (categories.length <= 5) ? mapCategory(categories, "") : filteredCategories


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
        <nav className={className}>
            {content}
        </nav>
    )
}



