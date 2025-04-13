import HeaderNavbar from "./Header/Navbar/HeaderNavbar";
import HeaderTop from "./Header/HeaderTop/HeaderTop";



function Header({isAuth}: ReadAuthProps) {
    return (
        <header className="bg-[#A61713] text-white
                            border-b border-gray-200
        ">
            <HeaderTop isAuth={isAuth}/>
            
            <HeaderNavbar/>
        </header>
    )
}

export default Header;