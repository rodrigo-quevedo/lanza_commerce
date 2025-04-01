import { useEffect, useState } from "react";

export default function useFetchCategories() {
    const [categories, setCategories] = useState<ProductCategory[]>([]);
    const [fetchState, setFetchState] = useState<FetchState>({
        loading: true, //when component mounts, it is loading until fetch is done
        error: null
    });
    
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/categories")
        .then(res=>res.json())
        
        .then(data=>{
            if (import.meta.env.DEV) console.log(data)
            
            setCategories(data);
            setFetchState({
                error: null,
                loading: false
            }) })
        
        .catch(err=> setFetchState({
            error:  err.message,
            loading: false}) )

    }, []); //run once 
  
    return { categories, fetchState };
}



