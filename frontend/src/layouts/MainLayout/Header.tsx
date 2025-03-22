import HeaderNavbar from "../../components/HeaderNavbar";
import Logo from "../../components/Logo";
import NotificationsButton from "../../components/NotificationsButton";
import Searchbox from "../../components/Searchbox";
import ShoppingCartButton from "../../components/ShoppingCartButton";
import UserProfileButton from "../../components/UserProfileButton";



function Header() {
    return (
        <header  
            className="
                bg-[#A61713] text-white
                border-b border-gray-200
                
        ">

            <div 
                className="
                    flex flex-wrap justify-between items-center 
                    px-8 py-2 
            ">
                <Logo/>

                <div
                    className="
                        flex justify-around flex-1 pb-2.5 px-2
                        md:pb-0
                ">
                    <Searchbox/>

                    <div
                        className="
                            flex justify-around gap-2
                            ml-3
                    ">
                        <NotificationsButton />

                        <ShoppingCartButton/>

                        <UserProfileButton/>
                    </div>

                </div>
            </div>

            <HeaderNavbar/>

        </header>
    )
}

export default Header;