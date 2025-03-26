
import { JSX, useEffect, useState } from "react";
import { useFetchCategories } from "../../../hooks/useFetchCategories";
import mapCategory from "../../../utils/map/mapCategories";

export default function HeaderNavbar(){

    const { categories, fetchState } = useFetchCategories();
    const [ filteredCategories, setFilteredCategories ] = useState<JSX.Element[]>();
    const [intervalExists, setIntervalExists] = useState<boolean>(false);
    
    let iteration: number = 0;
    let max_iteration: number = 0;
    
    useEffect( ()=>{
        if (categories.length === 0 || categories.length <=5 || intervalExists) return;
        
        max_iteration = Math.trunc(categories.length / 5)
        
        setInterval(()=>{
            let displayedCategories: ProductCategory[] = categories.slice(iteration*5, iteration*5+5)

            iteration++
            if (iteration > max_iteration) iteration = 0;

            setFilteredCategories(mapCategory(displayedCategories))            
        }, 3000)
        
        

        setIntervalExists(true);
        console.log("paso interval")
        
    }, [fetchState])


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
            {(categories.length <= 5) ? mapCategory(categories) : filteredCategories  }
            
        </nav>
    )

}