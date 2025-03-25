import { useEffect, useState } from "react";


export function useFetchCategories() {
    const [categories, setCategories] = useState<FakeStoreCathegory[]>([]);
    const [fetchState, setFetchState] = useState<FetchState>({
        loading: true, //when component mounts, it is loading untill fetch is done
        error: null});
    
  
    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await fetch("https://api.escuelajs.co/api/v1/categories");
                
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                
                const data: FakeStoreCathegory[] = await response.json();
                setCategories(data);

            } 
            catch (err) {
                setFetchState({
                    ...fetchState,
                    error:  err instanceof Error ? err.message : "Failed to fetch categories",
                });
                
            } finally {
                setFetchState({
                    ...fetchState,
                    loading: false
                });
            }
      };
  
     
      console.log( fetchCategories())
    }, []); //run once 
  
    return { categories, fetchState };
  }