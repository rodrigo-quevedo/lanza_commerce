import { Link } from "react-router";

export default function Logo(){
    return (
        <Link 
            to="/"
            className="
                flex items-center 
                mx-auto
                md:mx-0 
        ">
            <img 
                src="../../public/logo.png" 
                alt="Website logo"
                className="h-16"/>
            
            <h1 
                className="
                    text-xl
                    mr-0
                    md:mr-20
            ">
                Lanza Commerce
            </h1>

        </Link>
    )
}