export default function Searchbox(){
    return (
        <div 
            className="
                flex flex-1 
                max-w-2xl
        ">
            
            <input
                name="product_search"
                type="text"
                placeholder="Search for products..."
                className="
                    flex-grow px-4 py-2 
                    border border-gray-600 rounded-l-md 
                    bg-white
                    focus:outline-none     
            "/>

            <button
                type="submit"
                className="
                    px-4 py-2
                    bg-[#020202] text-white hover:bg-blue-700
                    font-medium 
                    rounded-r-md
            ">
                Search
            </button>

        </div>
    )
}