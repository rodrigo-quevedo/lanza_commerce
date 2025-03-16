import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";


function Home() {
    return (
        <div>
            <Header/>

            <Outlet/>
            
            <Footer/>
        </div>
    )
}

export default Home;