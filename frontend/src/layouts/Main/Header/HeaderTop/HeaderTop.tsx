import Logo from "./components/Logo";
import Searchbox from "./components/Searchbox";
import UtilityNav from "../UtilityNav";


export default function HeaderTop(){
    return (
        <div className="flex justify-between items-center 
                        sm:px-4 
                        py-1
        ">
            <Logo/>

            <Searchbox/>
 
            <UtilityNav/>
            
        </div>
    )
}