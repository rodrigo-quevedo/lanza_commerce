import { useEffect } from "react"
import { useFetchCategories } from "../../../hooks/useFetchCategories";

export default function HeaderNavbar(){

    const { categories, fetchState } = useFetchCategories();

    if (fetchState.loading) {
      return (
        <nav className="flex justify-center items-center p-4 bg-black text-white">
          <span className="animate-pulse">Loading categories...</span>
        </nav>
      );
    }
  
    if (fetchState.error !== null) {
      return (
        <nav className="flex justify-center items-center p-4 bg-black text-red-500">
          <span>Error: {fetchState.error}</span>
        </nav>
      );
    }

    return (
        <nav 
            className="
                flex justify-around 
                gap-6 
                p-0 
                w-full
                font-medium
                text-sm
                bg-black
        ">
            {categories.map((category) => {
                return(
                    <a key={category.id} href="#category1" className=" hover:text-black ">
                        {category.name}
                    </a>
                )
            })}
            
            {/* <a href="#category2" className=" hover:text-black">
                Category 2
            </a>
            <a href="#category3" className=" hover:text-black">
                Category 3
            </a>
            <a
                href="#special-offers"
                className="text-red-600 hover:underline"
            >
                Special Offers
            </a> */}
        </nav>
    )

}