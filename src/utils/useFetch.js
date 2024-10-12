import { useEffect, useState } from "react"
// custom hook
function useFetch(url){
    const [data, setData]= useState(null);
    const [error, setError]= useState(null);
    const [loading, setLoading]= useState(true);

    useEffect(() => {
        const fetchdata = async () => {
            try {
            const response =await  fetch(url);
            const result = await response.json();
            setData(result);
        }
        catch (err){
             setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchdata();
    },[url]);

    return{data, loading, error};

}

export default useFetch;