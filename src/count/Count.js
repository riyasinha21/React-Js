import React, { useState } from 'react'
import './Count.css'

function Count() {
    let  [count, setCount ] = useState(0) ;

    function incHandler (){
        setCount(count++)
    }

    function decHandler (){
      
      if(count>=0){
        setCount(count--)
      }
      
    }

  return (
    <div>
        <h1>The value is : {count}</h1>
        <button className='btn' onClick={incHandler}>Increment</button>
        <button className='btn' onClick={decHandler}>Decrement</button>
    </div>
  )
}

export default Count