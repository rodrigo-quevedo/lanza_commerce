import { FaUserAlt } from "react-icons/fa";

export default function UserProfileButton(){
    return (
        <button
            aria-label="User Profile"
            className="
                relative 
                w-10 h-10 
                flex items-center justify-center
                 bg-gray-100 rounded-full 
                 hover:bg-gray-200 hover:cursor-pointer
        ">

            <span 
                className="
                    text-black text-lg
            ">
                <FaUserAlt />
            </span>

        </button>
    )
}