import React from 'react'

function PostAd() {
  return (
    <div className='postad-form'>
        <h1>BetterBroker.Com</h1>
        <div>
          <div>
          <label className='pName'>Name of Property</label>
          </div>
          <input type="text" name='pname' id='pname' placeholder='Enter property name' className='rounded' />
        </div>
          
        <div>
          <div>
          <label className='address'>Address</label>
          </div>
          <input type="text" name='email' id='email' placeholder='Enter Email' className='rounded'/>
          
        </div>
        <div>
          <div>
          <label className='imageOfProperty'>upload photos</label>
          </div>
          <input type="file" name='imageProp' id='imageProp'  />
        </div>
        
        <br></br>
          <button>Post</button>
          
    </div>
  )
}

export default PostAd