import { JSX } from "react";

export default function mapCategory(
    displayedCategories: ProductCategory[], animationStr: string) : JSX.Element[] {
    return displayedCategories.map((category)=>{
        return(
            <a 
                key={category.id} 
                href="#category1" 
                className={`
                            p-1
                            hover:mt-2 hover:mb-2 hover:ml-1 
                            hover:pl-2
                            
                            sm:p-0 sm:hover:m-0 sm:hover:p-0 

                            hover:border-l-6 hover:border-l-[#A61713] sm:hover:border-none
                            hover:scale-110 hover:font-bold hover:text-[#A61713] 
                            transition-all hover:transition-all 
                            ${animationStr}
                            `}>
                {category.name}
            </a>
        )
    }) 
}