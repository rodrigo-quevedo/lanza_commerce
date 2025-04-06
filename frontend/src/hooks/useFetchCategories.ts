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
            
            console.log('concat inside setState:', data.concat([{
                id: 123123,
                name: "dsjflskdjflskfjasdfsaaaaaaaaaaaaaaaaaaaaaaaaaaafdasdfasdfsdf asdfasdfasdf asdfasdfaf",
                image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
                creationAt: "lsdkfjlaskdfj",
                updatedAt: "lsakdfjlkasjdflkasjfd"
        
            }]))

            setCategories(data.concat([{
                id: 123123,
                name: "dsjflskdjflskfjasdfsaaaaaaaaaaaaaaaaaaaaaaaaaaafdasdfasdfsdf asdfasdfasdf asdfasdfaf",
                image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
                creationAt: "lsdkfjlaskdfj",
                updatedAt: "lsakdfjlkasjdflkasjfd"
        
            }]));
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



