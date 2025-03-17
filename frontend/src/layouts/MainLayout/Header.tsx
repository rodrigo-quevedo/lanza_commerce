

function Header() {
    return (
        <header  className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200">
                <nav className="flex gap-6">
                    <a href="#category1" className="text-gray-700 hover:text-black font-medium">
                        Category 1
                    </a>
                    <a href="#category2" className="text-gray-700 hover:text-black font-medium">
                        Category 2
                    </a>
                    <a href="#category3" className="text-gray-700 hover:text-black font-medium">
                        Category 3
                    </a>
                    <a
                        href="#special-offers"
                        className="text-red-600 font-semibold hover:underline"
                    >
                        Special Offers
                    </a>
                </nav>


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


                <div className="flex items-center gap-4">
                    {/* User Profile Button */}
                    <button
                        aria-label="User Profile"
                        className="relative w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
                    >
                        <span className="w-6 h-6 bg-gray-400 rounded-full" />
                    </button>

                    {/* Shopping Cart Button */}
                    <button
                        aria-label="Shopping Cart"
                        className="relative w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
                    >
                        <span className="w-6 h-6 bg-gray-400 rounded-full" />
                        <span className="absolute top-0 right-0 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        3
                        </span>
                    </button>

                    {/* Notifications Button */}
                    <button
                        aria-label="Notifications"
                        className="relative w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
                    >
                        <span className="w-6 h-6 bg-gray-400 rounded-full" />
                        <span className="absolute top-0 right-0 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        5
                        </span>
                    </button>
                </div>
        </header>
    )
}

export default Header;