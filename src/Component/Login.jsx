import React from 'react'

function Login() {
  return (
    <div className='login-form'>
        <h1>BetterBroker.Com</h1>
        <div>
          <div>
          <label className='Name'>Name</label>
          </div>
          <input type="text" name='fname' id='fname' placeholder='Enter full name' />
        </div>
          
        <div>
          <div>
          <label className='email'>Email</label>
          </div>
          <input type="text" name='email' id='email' placeholder='Enter Email' />
          
        </div>
        <div>
          <div>
          <label className='password'>Enter Password</label>
          </div>
          <input type="password" name='password' id='password' placeholder='Enter Password' />
        </div>
        <br></br>
          <button>Login</button>
    </div>
  )
}

export default Login