import React from 'react'
import { Routes, Route } from "react-router-dom";
import Posts from './Posts';
import Favourites from './Favourites';

function Body() {
  return ( <div>
    <Routes>
        <Route path='' element={<Posts/>}/>
        <Route path='favourites' element={<Favourites/>}/>
      
      </Routes>
  </div> );
}

export default Body;
