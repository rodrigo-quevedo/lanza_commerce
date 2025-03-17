import { FaShoppingCart } from "react-icons/fa";

export default function ShoppingCartButton(){
    return (
        <button
        aria-label="Shopping Cart"
        className="relative w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
        >
            <span>
                <FaShoppingCart />
            </span>

            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            3
            </span>
        </button>
    )
}