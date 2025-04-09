import { JSX } from "react"
import mapCategory from "./mapCategories"

export default function displayCategories(
    categories: ProductCategory[], 
    iteration: number, 
    interval_milliseconds:number, 
    setFilteredCategories: (value: React.SetStateAction<JSX.Element[] | undefined>) => void
): void{   
    let displayedCategories: ProductCategory[] = categories.slice(iteration*5, iteration*5+5)

    setFilteredCategories(mapCategory(displayedCategories, ""))    

    setTimeout(()=>{
        setFilteredCategories(mapCategory(displayedCategories," translate-x-400 ")) 
    }, (interval_milliseconds - 1000))
}