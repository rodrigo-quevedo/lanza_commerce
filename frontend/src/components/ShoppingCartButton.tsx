import { FaShoppingCart } from "react-icons/fa";
import NotificationNumber from "./NotificationNumber";

export default function ShoppingCartButton(){
    return (
        <button
            aria-label="Shopping Cart"
            className="
                relative 
                bg-gray-100 rounded-full 
                hover:bg-gray-200 hover:cursor-pointer
        ">

            <span
                className="
                    relative
                    flex items-center justify-center 
                    w-10 h-10 
                    text-black
                    text-xl
            ">
                <FaShoppingCart />
            </span>

            <NotificationNumber number={5}/>
            
        </button>
    )
}