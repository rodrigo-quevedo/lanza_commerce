import { useState } from "react"

export default function Searchbox(){

    let [selected, setSelected] = useState<boolean>(false);

    return (
        <form 
            className={`
                flex flex-1 
                max-w-2xl
                transition-transform duration-500
                ${selected? "scale-105": ''}
        `}>
            
            <input
                name="product_search"
                type="text"
                placeholder="Search for products..."
                onClick={()=>{setSelected(true)}}
                onBlur={()=>{setSelected(false)}}
                className={`
                    flex-grow px-4 py-2 
                    rounded-l-md 
                    bg-white text-black hover:bg-neutral-300 transition-colors
                    ${selected? " bg-neutral-800! text-white!": ''}
                    focus:outline-none     
            `}/>

            <button
                type="submit"
                className={`
                    px-4 py-2
                    font-medium 
                    rounded-r-md
                    bg-[#020202] text-white 
                    transition-colors
                    ${selected? " bg-neutral-900": ''}
                    hover:bg-white hover:text-black hover:scale-105 hover:border-black hover:border-1 hover:rounded-none
                    hover:cursor-pointer!
            `}>
                Search
            </button>

        </form>
    )
}