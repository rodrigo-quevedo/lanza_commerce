import Logo from "../UserActions/components/Logo/Logo";
import Searchbox from "../UserActions/components/Searchbox/Searchbox";
import UserActions from "../UserActions/UserActions";


export default function HeaderTop({isAuth}: ReadAuthProps){
    return (
        <div className="flex justify-between items-center 
                        sm:px-4 
                        py-1
        ">
            <Logo/>

            <Searchbox/>
            
            <UserActions isAuth={isAuth}/>
            
        </div>
    )
}