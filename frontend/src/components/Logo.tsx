import { Link } from "react-router";

export default function Logo(){
    return (
        <Link 
            to="/"
            className="
                hidden sm: static
                sm:flex items-center 
                mx-auto md:mx-0
        ">
            <img 
                src="../../public/logo.png" 
                alt="Website logo"
                className="h-12 sm:h-16"/>
            
            <h1 
                className="
                    text-xl
                    mr-0 md:mr-10
                    hidden md:inline
            ">
                Lanza Commerce
            </h1>

        </Link>
    )
}