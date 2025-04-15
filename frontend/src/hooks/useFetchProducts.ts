import { useEffect, useState } from "react";

export default function useFetchProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [fetchState, setFetchState] = useState<FetchState>({
        loading: true, //when component mounts, it is loading until fetch is done
        error: null
    });
    
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
        .then(res=>res.json())
        
        .then(data=>{
            if (import.meta.env.DEV) console.log(data)

            setProducts(data);
            setFetchState({
                error: null,
                loading: false
            }) })
        
        .catch(err=> setFetchState({
            error:  err.message,
            loading: false}) )

    }, []); //run once 
  
    return { products, fetchState };
}

