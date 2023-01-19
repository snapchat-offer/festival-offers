import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MainPage({main_page, snLoad}) {
  var to = '/login'
  setTimeout(()=>{
    main_page.current.style = 'display: block;'
  }, 3000)




  const navigate = useNavigate()
  const Load = (to, snLoad)=> {
    snLoad.current.style = 'display: flex;'
    setTimeout(()=>{navigate(to)}, 2000)
    setTimeout(() => {
      snLoad.current.style = 'display:  none;'
    }, 3000)

  }

  
  
  return (
    <div ref={main_page} className="hidden">
    <div className='main-page'>
      <div className="main-text">Hey! <br/> It's Snapchat Festival. Increase your snap score for free! <br />Login and increase snap score</div>
      
    </div>
    <div className="login-btn"><span onClick={()=>{Load(to, snLoad)}} > <button id='login-click'>Login</button> </span></div>
    </div>
  )
}
 