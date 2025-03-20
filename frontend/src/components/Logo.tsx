export default function Logo(){
    return (
        <div 
            className="
                flex items-center 
                mx-auto 
        ">
            <img 
                src="../../public/logo.png" 
                alt="Website logo"
                className="h-22"/>
            
            <h1 
                className="
                    text-xl mr-0
                    md:mr-20
            ">
                Lanza Commerce
            </h1>

        </div>
    )
}