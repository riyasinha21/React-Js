import React from 'react'
import './Signup.css'

function Signup() {
  return (
    <div className="container">
        <form>
            <h1 className="heading">Register</h1>

            <label for = "text"> User Name   </label>
            <input type="text" name="username" id="text"/>
            <br/> <br/>
            
            <label for = "email"> Email Id  </label>
            <input type="email" name="email" id="email"/>
            <br/> <br/>

            <label for = "password"> Password   </label>
            <input type="password" name="password" id="password"/>
            <br/> <br/>

            <input type="submit" value="Signup" className= "sign-btn"/>        
        </form>
    </div>
  )
}

export default Signup