

export default function ProductCard({product}:ProductProps){
    return (
        <div className="p-4 bg-neutral-600 min-w-100 inline-block
                        transition-all
                        product-card-slide
        ">
            <p>{product.title}</p>

            <img src={product.images[1]} alt="slfakjsldkfj" className="w-80"/>

        </div>
    )
}