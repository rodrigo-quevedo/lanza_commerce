import { JSX, useEffect, useState } from "react";
import mapCategory from "../utils/map/mapCategories";


export default function useFilterCategoriesByInterval(categories: ProductCategory[]) {
    const [ filteredCategories, setFilteredCategories ] = useState<JSX.Element[]>();
    const [intervalExists, setIntervalExists] = useState<boolean>(false);
    
    let iteration: number = 0;
    let max_iteration: number = 0;
    
    useEffect( ()=>{
        if (categories.length === 0 || categories.length <=5 || intervalExists) return;
        
        max_iteration = Math.trunc(categories.length / 5)
        
        //execute first time (bc interval doesn't have immediate effect)
        let displayedCategories: ProductCategory[] 
            = categories.slice(iteration*5, iteration*5+5)

        iteration++;
        if (iteration > max_iteration) iteration = 0;
        
        setFilteredCategories(mapCategory(displayedCategories))    
        
        //then execute on an interval 
        //I'm having trouble updating 'iteration' and 'max_iteration' by reference (args 
        // of a modularized function), so I'll just duplicate this code for now
        setInterval(()=>{
            let displayedCategories: ProductCategory[] = categories.slice(iteration*5, iteration*5+5)

            iteration++; console.log(`iteration: ${iteration}`)
            if (iteration > max_iteration) iteration = 0;
        
            console.log(`displayedCategories: ${displayedCategories}`)
            setFilteredCategories(mapCategory(displayedCategories))        
        }, 3000)
        

        setIntervalExists(true);
        console.log("paso interval")
        
    }, [categories])

    return {filteredCategories}
}