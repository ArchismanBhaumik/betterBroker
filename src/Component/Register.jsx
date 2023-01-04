import React from 'react'

function Register() {
  return (
    <div>        
        <h1>BetterBroker.Com</h1>
    <div>
      <div>
      <label className='Name'>Name</label>
      </div>
      <input type="text" name='fname' id='fname' placeholder='Enter full name' className='rounded' />
    </div>
      
    <div>
      <div>
      <label className='email'>Email</label>
      </div>
      <input type="text" name='email' id='email' placeholder='Enter Email' className='rounded'/>
      
    </div>
    <div>
      <div >
      <label className='password'>Enter Password</label>
      </div>
      <input type="password" name='password' id='password' placeholder='Enter Password' className='rounded'/>
    </div>
    <div>
      <div >
      <label className='password'>Confirm Password</label>
      </div>
      <input type="password" name='password' id='password' placeholder='Enter Password' className='rounded'/>
    </div>
    <br></br>
      <button>Register</button></div>
  )
}

export default Register