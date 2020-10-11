import React from 'react';
import Response from './Response';
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from './useGoogleSearch';
import { Link } from "react-router-dom";
import Search  from "./Search";
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from "@material-ui/core";

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    
    
    //live API CALL code
    // const { data } = useGoogleSearch(term); 
     //live API CALL code
     
    //Mock api call here
    const {data} = useGoogleSearch(term);
     //Mock api call here

    //  const data = Response;

    // google custom search Api to fetch data by using the API KEY

    //https://developers.google.com/custom-search/v1/using-rest

    // google custom search Api to fetch data by using the API KEY

    console.log(data)
    return (
        <div className="searchPage">
             <div className="searchPage-header">
            {/* <h1>{term}</h1> */}
            <Link to="/">
            <img className="search-pageLogo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=""/>
            </Link>
            <div className="searchPage-header-Body">
            <Search hideButtons />
            <div className="searchPage-options">
            <div className="searchPage-options-Left">
            <div className="searchPage-option">
               <SearchIcon />
               <Link to="/all">All</Link>
             </div>
             <div className="searchPage-option">
               <DescriptionIcon />
               <Link to="/News">News</Link>
             </div>
             <div className="searchPage-option">
               <ImageIcon />
               <Link to="/images">Images</Link>
             </div>
             <div className="searchPage-option">
               <LocalOfferIcon />
               <Link to="/shopping">Shopping</Link>
             </div>
             <div className="searchPage-option">
               <RoomIcon />
               <Link to="/maps">Maps</Link>
             </div>
             <div className="searchPage-option">
               <MoreVertIcon />
               <Link to="/more">More</Link>
             </div>
              </div>

            <div className="searchPage-options-Right">
            <div className="searchPage-option">
               <Link to="/Setting">Setting</Link>
             </div>
             <div className="searchPage-option">
               <Link to="/tools">Tools</Link>
             </div>
             </div>
             <div className="searchPage-header-topoption" >
             <AppsIcon className="searchPage-header-topoptionIcon"  />
              <Avatar className="searchPage-header-topoptionIcon" />
             </div>
            </div>
            </div>
            </div>
           {/* term also place ,
           true also place*/}
        {term && (
             <div className="searchPage-results">
                 <p className="searchPage-resultsCount">
                     {/* json data fetch here by json keywords */}
                     About {data?.searchInformation.formattedTotalResults} results ( {data?.searchInformation.formattedSearchTime} seconds) for {term}
                 </p>

                 {data?.items.map(item => (
                     <div className="searchPage-result">
                         <a href={item.link}>
                          {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                         <img className="searchPage-resultImage" src={
                                item.pagemap?.cse_image[0]?.src
                         }
                         alt=""
                      />
                          )}
                         {item.displayLink}  ▽
                         </a>
                         <a className="searchPage-resultTitle" href={item.link}>
                          <h2>{item.title}</h2>
                         </a>
                         <p className="searchPage-resultSnippet">
                             {item.snippet}
                         </p>
                        
                    </div>
                 ))}
             </div>
        )}
            
            
        </div>
    )
}
export default SearchPage;
