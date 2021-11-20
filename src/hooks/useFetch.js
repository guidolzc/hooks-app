import { useEffect, useRef, useState } from "react"


export const useFetch = (url) => {
    // cuando cambie el valor no mostrar y cuando este entrue mostrar
    const isMounted = useRef(true)

    const [state, setState] = useState({data:null, loading: true, error: null });

   
    useEffect(() => {
        return ()=> {
            isMounted.current = false;
        }
    },[])


    useEffect(() => {
        // aqui state usa el efecto para q muestre el loading
        setState({data:null, loading: true, error: null })
        fetch(url)
        .then(resp=> resp.json())
        .then(data=> {

           
              if(isMounted.current){
            setState({
               
                loading: false,
                error: null,
                data
            
            });
        }
    
        })
    }, [url])


return state;
}