import HeaderNavbar from "../../components/HeaderNavbar";
import Logo from "../../components/Logo";
import NotificationsButton from "../../components/NotificationsButton";
import Searchbox from "../../components/Searchbox";
import ShoppingCartButton from "../../components/ShoppingCartButton";
import UserProfileButton from "../../components/UserProfileButton";



function Header() {
    return (
        <header  className="flex items-center flex-wrap justify-between px-8 py-4 bg-gray-950 border-b border-gray-200">

           <Logo/>

           <HeaderNavbar/>

            <Searchbox/>

            <NotificationsButton />

            <ShoppingCartButton/>

            <UserProfileButton/>

        </header>
    )
}

export default Header;