import { useEffect, useState } from "react"
import useFetchProducts from "../../../hooks/useFetchProducts"
import ProductCard from "./ProductCard"



export default function CategorySection(){

    const {products, fetchState} = useFetchProducts()


    // let xPosition = 0;//class changes but it's not re-rendering. We'll need a state to trigger re-render.
    const [xPosition, setXPosition] = useState<number>(0);

    useEffect(()=>{
        let slides = document.querySelectorAll(".product-card-slide");
        
        console.log("useeffect category")

        setTimeout(()=>{
            console.log("xposition:", xPosition)
            setXPosition(xPosition + 350);

            console.log("inside interval")
            // console.log(slides)

            slides.forEach(slide =>{
                // slide.classList.add(`-translate-x-${xPosition}!`)//tailwind doens't allow dynamic change of classes, bc it generates the css before the server starts. There's a way to safelist classes with @source inline(), but vite throws an error.

                //i'll try changing the styles directly
                let htmlElement = slide as HTMLElement;

                htmlElement.style.transform = `translateX(-${xPosition}px)`;

            })
        }, 3000)
        
    }, [products, xPosition]) //first time CategorySection mounts, products will be empty (while it's doing the fetch)

    return (
        <section>
            <h3 className="font-bold my-3 ml-5">Category</h3>
            <div className="flex overflow-x-scroll gap-4 mx-10 max-h-100 ">
                {products.map(prod => <ProductCard product={prod}/>)}
            </div>
        </section>
    )
}

