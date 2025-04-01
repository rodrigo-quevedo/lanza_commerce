import { JSX } from "react";
import useFetchCategories  from "../../../hooks/useFetchCategories";
import useFilterCategoriesByInterval from "../../../hooks/useFilterCategoriesByInterval";
import mapCategory from "../../../utils/map/mapCategories";


export default function HeaderNavbar(){

    const { categories, fetchState } = useFetchCategories();
    const { filteredCategories } = useFilterCategoriesByInterval(categories);

    
    let className = `flex justify-around items-center 
                    font-medium text-sm
                    bg-black`;
    let content: JSX.Element[] | undefined | JSX.Element   
        = (categories.length <= 5) ? mapCategory(categories, "") : filteredCategories



    if (fetchState.loading){
        className = `flex justify-center items-center 
                        p-1 
                        bg-black text-white`
        content = <span className="animate-pulse">Loading categories...</span>
    }

    if (fetchState.error){
        className = `flex justify-center items-center 
                        bg-black text-red-500`
        content = <span>Error: ${fetchState.error}</span>
    }


    return (
        <nav className={className}>
            {content}
        </nav>
    )
}



