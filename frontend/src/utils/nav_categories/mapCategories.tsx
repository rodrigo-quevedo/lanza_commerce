import { JSX } from "react";

export default function mapCategory(
    displayedCategories: ProductCategory[], animationStr: string) : JSX.Element[] {
    return displayedCategories.map((category)=>{
        return(
            <a 
                key={category.id} 
                href="#category1" 
                className={`hover:scale-110 hover:font-bold hover:text-red-700 
                            transition-all hover:transition-all 
                            ${animationStr}
                            `}>
                {category.name}
            </a>
        )
    }) 
}