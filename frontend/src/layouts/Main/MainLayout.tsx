import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";


function MainLayout({isAuth, setIsAuth}:AuthProps) {
    return (
        <>
            <Header isAuth={isAuth}/>

            <Outlet/>
            
            <Footer/>
        </>
    )
}

export default MainLayout;