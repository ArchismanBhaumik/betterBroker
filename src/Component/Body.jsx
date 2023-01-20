import React from 'react'
import { Routes, Route } from "react-router-dom";
import Posts from './Posts';
import Favourites from './Favourites';
import PostAd from './PostAd';
import ListProperty from './ListProperty';
import Register from './Register';
import PropertyDetails from './PropertyDetails';
import {posts} from './Posts'

function Body(props) {
  let currentPage=window.location.href;
  console.log(currentPage);
  return ( <div>
    <Routes>
        <Route  path='' element={<Posts/>}/>
        <Route  path='favourites' element={<Favourites/>}/>
        <Route  path='post' element={<PostAd/>}/>
        <Route  path='list' element={<ListProperty/>}/>
        <Route  path='register' element={<Register/>}/>
        {
          posts.map((post,i)=>(<Route key={i} path='details/:keyId'  element={<PropertyDetails post={post}/>}/>))
        
        }
      </Routes>
  </div> );
}

export default Body;
