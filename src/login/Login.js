import React from 'react'
import "./Login.css"

function Login() {
  return (
    <div className='login'>
        <h3>Login</h3>
        <form>
            <label className='text' for="email" >Email Id </label>
            <input className="input" type="email" id="email" name ="email" />
            <br/><br/>

            <label className='text' for="password" >Password </label>
            <input className="input" type="password" id="password" name ="password" />
            <br/><br/>

            <input type="submit" value="Login" className='btn'/>

           
            
        </form>
    </div>
  )
}

export default Login