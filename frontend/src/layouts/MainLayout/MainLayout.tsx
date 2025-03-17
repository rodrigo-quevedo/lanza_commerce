import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";


function MainLayout() {
    return (
        <>
            <Header/>

            <Outlet/>
            
            <Footer/>
        </>
    )
}

export default MainLayout;