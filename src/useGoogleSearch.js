import { useState, useEffect }  from 'react';
import API_KEY from "./keys";

const CONTEXT_KEY = "0bf938e36a9203f05";

const useGoogleSearch = (term) => {
    const [data, setData ] = useState(null);
      
     // data layers  (term)--> use for data layers
    useEffect(() => {
      const fetchData = async() => {
            //   use the get  request from this url https://developers.google.com/custom-search/v1/using_rest
            // use this get function --> https://www.googleapis.com/customsearch/v1?key=${INSERT_YOUR_API_KEY}&cx=${CONTEXT_KEY}:omuauf_lfve&q=lectures
            // and change to this from your API_KEY and CONTEXT_KEY with your query term..
          fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
          .then(response => response.json())
          .then(result => {
            setData(result)
          })
      }

      fetchData();
       
    }, [term])

    return { data }

    // data layers  (term)--> use for data layers
};

export default useGoogleSearch;
