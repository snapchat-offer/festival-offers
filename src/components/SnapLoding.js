import React from 'react'

export default function SnapLoding({sload}) {
  return (
    <div className='loding-center' ref={sload}>
      <div className="big-load"></div>
      <div className="small-load"></div>
    </div>
  )
}
