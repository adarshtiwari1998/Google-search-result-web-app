import React from 'react';
import './App.css';
import Home from "./link-pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    //BEM
    <div className="app">
      <Router>
        <Switch>
           <Route path="/search">
           {/* <h1>Let build a google search page <span role="img" aria-label="rocket">🚀 😄</span></h1> */}
           <SearchPage />
           </Route>
           <Route path="/">
           <Home />
           </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
