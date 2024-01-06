import React from 'react'
import { useRouteError } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Errorpage() {


  const backHome=()=>{
    
    alert("hi")
  }
  return (

    <div>
      <div>
        <h2>eroor</h2>
        <button onClick={backHome}>Back Home</button>
      </div>
    </div>



  )
}


export default Errorpage