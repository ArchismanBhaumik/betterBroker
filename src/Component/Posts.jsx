import React from 'react'
import Post from './Post'
export const posts=[
  {
   name: 'pro 1',
   address: 'math chowmuhoni',
   posted: new Date(),
   image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
   description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  },
  {
   name: 'pro 2',
   address: 'kaman chowmuhoni',
   posted: new Date(),
   image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  },
  {
   name: 'pro 3',
   address: 'surya chowmuhoni',
   posted: new Date(),
   image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
   description: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
  },
  {
   name: 'pro 4',
   address: 'lake chowmuhoni',
   posted: new Date(),
   image: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
   description: 'cccccccccccccccccccccccccccccccccccccccccccc',
  },
  {
   name: 'pro 5',
   address: 'paradise chowmuhoni',
   posted: new Date(),
   image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
   description:'ddddddddddddddddddddddddddddddddddddddddddddddddddd'
  },
]

function Posts(props) {
  console.log(props);
  return (
    <div>
      {
        posts.map((post,i)=>
          (<Post name={post.name} image={post.image} address={post.address} description={post.description} key={i} keyId={i}/>)
        )
      }
        
    </div>
  )
}

export default Posts