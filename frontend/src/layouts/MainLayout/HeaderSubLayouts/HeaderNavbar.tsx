
import { JSX, useEffect, useState } from "react";
import { useFetchCategories } from "../../../hooks/useFetchCategories";
import mapCategory from "../../../utils/map/mapCategories";
import useFilterCategoriesByInterval from "../../../hooks/useFilterCategoriesByInterval";

export default function HeaderNavbar(){

    const { categories, fetchState } = useFetchCategories();
    const { filteredCategories } = useFilterCategoriesByInterval(categories);


    if (fetchState.loading) return (
        <nav className="flex justify-center items-center p-1 bg-black text-white">
          <span className="animate-pulse">Loading categories...</span>
        </nav> );
    
  
    if (fetchState.error !== null) return (
        <nav className="flex justify-center items-center bg-black text-red-500">
          <span>Error: {fetchState.error} sldfjlaskfdj</span>
        </nav>);

    return (
        <nav 
            className="
                flex justify-around items-center
                overflow-hidden
                gap-6  
                font-medium text-sm
                bg-black
        ">
            {(categories.length <= 5) ? mapCategory(categories, "") : filteredCategories  }
            
        </nav>
    )

}