import React from 'react';
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from "@material-ui/core";
import Search  from "../Search";

export default function Home() {
    return (
        <div className="home">
         {/* <h1>This is a Home Page 🤭</h1> */}
            <div className="home-header">
             <div className="home-headerLeft">
                {/* link */}
                <Link to="/about">About</Link>
                <Link to="/Store">Store</Link>
             </div>
             <div className="home-headerRight">
             <Link to="/gmail">Gmail</Link>
             <Link to="/images">Images</Link>
             <AppsIcon />
             <Avatar />
            </div>
          </div>

         <div className="home-body">
       <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=""/>
        {/* <center><h1>Tets</h1></center> */}
        <div className="home-inputContainer">
         <Search/>
         </div>
         <p className="login-text-desc">Design and Develop by  <span role="img" aria-label="programmer">👨‍💻 🚀</span> Adarsh Tripathi
         <center><h4>Github Profile <span role="img" aria-label="programmer">👉</span> <a  className="footerlinkcolor"href="https://github.com/adarshtiwari1998/">https://github.com/adarshtiwari1998</a></h4></center></p>
        </div>

        </div>
    )
}
