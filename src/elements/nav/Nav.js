import React from 'react'
import './Nav.scss'

function Nav() {
  return (
    <div className='main'>
      <div className="box1">
         <h1 className="heading">
            Be Happy
         </h1>
      </div>
      <div className="box2">
         <div className="inner-box">
         <div className="icon icon1">
            Products
          </div>
          <div className="icon icon2">
            blogs
          </div>
          <div className="icon icon3">
            career
          </div>
          <div className="icon icon4">
            help
          </div>
         </div>
      </div>
    </div>
  )
}

export default Nav;