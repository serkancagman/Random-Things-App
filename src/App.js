import "./style.css";
import React from "react";
import Dog from "./Component/Dogs";
import Header from "./Component/Header";
import Home from "./Component/HomeSection";
import GetUser from "./Component/RandomUser";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Cat from "./Component/Cats";
import Giphy from "./Component/Giphy";
import RandomImage from "./Component/Image";
import RandomCannabis from "./Component/Cannabis";
import Error from "./Component/Error";

const App = () => {
  return (
    
      <>
        <Header/>
      <Router basename="/"  >
        <Routes>
            <Route path="/Cannabis" element={<RandomCannabis/>} />
            <Route path="/Random_User" element={<GetUser/>} />
            <Route path="/Images" element={<RandomImage/>} />
            <Route path="/Dogs" element={<Dog/>} />
            <Route path="/Giphy" element={<Giphy/>} />
            <Route path="/Cats" element={<Cat/>} />
            <Route path="/"     element={<Home/>} />
            <Route path='*' element={<Error/>} />
        </Routes>
        </Router>
        
        
      </>

    
  );
};

export default App;
