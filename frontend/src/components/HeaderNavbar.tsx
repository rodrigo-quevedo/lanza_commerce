export default function HeaderNavbar(){

    return (
        <nav 
            className="
                flex justify-around 
                gap-6 p-3 w-full
                bg-[#020202]
        ">
            <a href="#category1" className=" hover:text-black font-medium">
                Category 1
            </a>
            <a href="#category2" className=" hover:text-black font-medium">
                Category 2
            </a>
            <a href="#category3" className=" hover:text-black font-medium">
                Category 3
            </a>
            <a
                href="#special-offers"
                className="text-red-600 font-semibold hover:underline"
            >
                Special Offers
            </a>
        </nav>
    )

}