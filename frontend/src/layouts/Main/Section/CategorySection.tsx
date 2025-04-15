import useFetchProducts from "../../../hooks/useFetchProducts"
import ProductCard from "./ProductCard"



export default function CategorySection(){

    const {products, fetchState} = useFetchProducts()

    return (
        <section>
            <h3 className="font-bold my-3 ml-5">Category</h3>
            <div className="flex overflow-x-scroll gap-4 mx-10 max-h-100">
                {products.map(prod => <ProductCard product={prod}/>)}
            </div>
        </section>
    )
}