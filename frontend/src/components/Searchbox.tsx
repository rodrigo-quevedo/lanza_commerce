import { useState } from "react"
import { IoSearchOutline } from "react-icons/io5";

export default function Searchbox(){

    let [selected, setSelected] = useState<boolean>(false);

    return (
        <form 
            action="#"
            className={`
                flex flex-1
                mx-2 
                max-w-2xl sm:h-10
                ${selected? "scale-103 md:scale-102": ''}
                transition ease-out duration-500
        `}>
            
            <input
                name="product_search"
                type="text"
                placeholder="What are you searching?"
                onClick={()=>{setSelected(true)}}
                onBlur={()=>{setSelected(false)}}
                className={`
                    flex-grow 
                    px-3 
                    rounded-l-4xl 
                    border-1 border-white
                    bg-white text-black hover:bg-neutral-300 transition-colors
                    ${selected? " bg-neutral-200!": ''}
                    focus:outline-none     
            `}/>

            <button
                type="submit"
                className={`
                    hover:cursor-pointer
                    box-border
                    px-4 py-2 
                    font-medium text-sm sm:text-base
                    rounded-r-4xl border-white border-1 border-l-0
                    text-white 
                    transition-colors
                    ${selected? "border-0! bg-red-950 text-white": ''}
                    hover:text-black 
            `}>
                <IoSearchOutline />
            </button>

        </form>
    )
}