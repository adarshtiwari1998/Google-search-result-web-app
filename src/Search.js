import React, { useState } from 'react';
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import "./Search.css";
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Search({ hideButtons = false}) {
  const [{}, dispatch] = useStateValue();
   const [input, setInput ] = useState("");
// its push the input type into the /search page by using this and call the function 
   const history = useHistory();

    const search = (e) => {
     e.preventDefault();
  
     console.log ('You want to search >>', input)
          dispatch ({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
          })

          
     //done something with input.. --> result 
     // its push the input type into the /search page by using this
      history.push("/search");

     //
    };


    return (
      
        <form className="search">
            <div className="search-input">
                <SearchIcon className="search-inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon className="search-inputIcon" />
             </div>
             {!hideButtons ? (
                <div className="search-buttons">
                <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm feeling Lucky</Button>
                </div>
             ): (
                <div className="search-buttons">
                <Button className="search-buttonshidden" type="submit" onClick={search} variant="outlined">Google Search</Button>
                <Button  className="search-buttonshidden" variant="outlined">I'm feeling Lucky</Button>
               </div>
             )}
    
        </form>
 
    )
}

export default Search
