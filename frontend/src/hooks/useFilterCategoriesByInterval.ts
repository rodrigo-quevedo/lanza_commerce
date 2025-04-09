import { JSX, useEffect, useState } from "react";
import displayCategories from "../utils/nav_categories/displayCategories";


export default function useFilterCategoriesByInterval(categories: ProductCategory[], interval_milliseconds: number) {
    const [ filteredCategories, setFilteredCategories ] = useState<JSX.Element[]>();
    const [intervalExists, setIntervalExists] = useState<boolean>(false);
    

    let iteration: number = 0;
    let max_iteration: number = 0;

    
    useEffect( ()=>{
        //max_iteration is always >= 1 (so at least 2 iterations)
        if (categories.length === 0 || categories.length <=5 || intervalExists) return;
        
        max_iteration = Math.trunc(
            (categories.length - 1) //fix multiples of 5 (10, 15, etc.), otherwise they will add an unnecesary iteration (e.g. 10/2 gives a max_iteration = 2, but for 10 elements I only need max_iteration = 1). This happens because categories.length is 1 ahead of iteration, the latter begins at 0.
            / 5) 
        
                
        //execute first time (bc interval doesn't have immediate effect)
        displayCategories(categories, iteration, interval_milliseconds, setFilteredCategories)
        
        //then execute on an interval 
        setInterval(()=>{
            iteration++;
            if (iteration > max_iteration) iteration = 0;
            
            displayCategories(categories, iteration, interval_milliseconds, setFilteredCategories)

        }, interval_milliseconds)

        setIntervalExists(true);
        
    }, [categories])

    return {filteredCategories}
}