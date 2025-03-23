import HeaderNavbar from "./HeaderSubLayouts/HeaderNavbar";
import HeaderTop from "./HeaderSubLayouts/HeaderTop";



function Header() {
    return (
        <header className="bg-[#A61713] text-white
                            border-b border-gray-200
        ">
            <HeaderTop/>
            <HeaderNavbar/>
        </header>
    )
}

export default Header;