export default function Searchbox(){
    return (
        <div className="flex flex-1 mx-8 max-w-2xl">
            <input
                type="text"
                placeholder="Search for products..."
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white font-medium rounded-r-md hover:bg-blue-700"
            >
                Search
            </button>
        </div>
    )
}