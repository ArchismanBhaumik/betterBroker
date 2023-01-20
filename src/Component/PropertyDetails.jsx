import React from 'react'
import { useParams } from 'react-router-dom';
import {posts} from './Posts'


function PropertyDetails(props) {
  const { keyId } = useParams();
  
  const currentProperty=posts[keyId]
  return (
    <div>
      <div className="m-3 rounded-4 bg-dark pageImage" style={{backgroundImage: `url(${currentProperty.image})`}}>

      </div>
      <h1 className='display-3'>{currentProperty.name}</h1>
      
      {currentProperty.address}
      <br />

      <p className='box rounded  bg-light '>{currentProperty.description}</p>
      
      <br />
      <button>Add to favourites</button>
    </div>
  )
}

export default PropertyDetails