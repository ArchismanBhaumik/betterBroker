import React from 'react'
import { Link } from 'react-router-dom'
export default function Post(props) {
  return (
    <Link to={'/details/'+props.keyId} >
    <div className='postCard p-2 px-0 m-3 rounded-4 row' style={{backgroundImage:`url(${props.image})`}}>
        <div className='bg-white mx-auto px-3 py-3  cardDetail'>
            <div className="row">
                <div className="col-8">
                    <h3 className='linkRoutes text-dark'>{props.name}</h3>
                </div>
                <div className="col-4">
                    <button className='bg-primary btn text-white py-0'>For Sale</button>
                </div>
            </div>
            <p className='m-0 linkRoutes text-dark'>{props.address} <small className='mx-1'><i className="fas fa-circle small"></i></small> Posted 2 days ago</p>

        </div>
    </div>
    </Link>
  )
}
