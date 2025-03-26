import { useEffect, useState } from "react";

export function useFetchCategories() {
    const [categories, setCategories] = useState<FakeStoreCathegory[]>([]);
    const [fetchState, setFetchState] = useState<FetchState>({
        loading: true, //when component mounts, it is loading untill fetch is done
        error: null
    });
    
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/categories")
        .then(res=>res.json())
        
        .then(data=>{
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



