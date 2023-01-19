import React from 'react'

export default function SnapFirstLogo({SnapLogo}) {
  setTimeout(()=>{
    SnapLogo.current.style = 'display: none;'
  }, 3000)
  return (
    <div className='first-loding-page' ref={SnapLogo}>
      <img src="https://images.indianexpress.com/2022/04/Snapchat-logo.jpg" alt="no" id='snapchat-logo' />
    </div>
  )
}


