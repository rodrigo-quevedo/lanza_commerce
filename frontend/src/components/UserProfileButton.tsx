import { CgProfile } from "react-icons/cg";

export default function UserProfileButton(){
    return (
        <button
        aria-label="User Profile"
        className="relative w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
        >
            <span className="text-gray-900 text-2xl">
                <CgProfile />
            </span>
        </button>
    )
}