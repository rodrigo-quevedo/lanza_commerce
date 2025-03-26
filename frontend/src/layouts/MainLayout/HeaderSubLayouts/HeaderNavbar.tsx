
import { useFetchCategories } from "../../../hooks/useFetchCategories";

export default function HeaderNavbar(){

    const { categories, fetchState } = useFetchCategories();

    if (fetchState.loading) {
      return (
        <nav className="flex justify-center items-center p-1 bg-black text-white">
          <span className="animate-pulse">Loading categories...</span>
        </nav>
      );
    }
  
    if (fetchState.error !== null) {
        console.log("!= null")
      return (
        <nav className="flex justify-center items-center bg-black text-red-500">
          <span>Error: {fetchState.error} sldfjlaskfdj</span>
        </nav>
      );
    }

    return (
        <nav 
            className="
                flex justify-around items-center
                overflow-hidden
                gap-6  
                w-full
                font-medium
                text-sm
                bg-black
        ">
            {categories.map((category) => {
                return(
                    <a 
                        key={category.id} 
                        href="#category1" 
                        className="hover:scale-110 hover:font-bold hover:text-red-700 
                                    transition-all hover:transition-all">
                        {category.name}
                    </a>
                )
            })}
            
        </nav>
    )

}