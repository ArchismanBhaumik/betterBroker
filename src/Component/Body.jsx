import React from 'react'
import { Routes, Route } from "react-router-dom";
import Posts from './Posts';
import Favourites from './Favourites';
import PostAd from './PostAd';
import ListProperty from './ListProperty';
import Login from './Login';
import Register from './Register';


function Body() {
  return ( <div>
    <Routes>
        <Route path='' element={<Posts/>}/>
        <Route path='favourites' element={<Favourites/>}/>
        <Route path='post' element={<PostAd/>}/>
        <Route path='list' element={<ListProperty/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
      </Routes>
  </div> );
}

export default Body;
