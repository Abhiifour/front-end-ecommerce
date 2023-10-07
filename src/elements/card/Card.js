import React from 'react'
import './Card.scss'
import Img from './eren.jpg';

function Card() {
  return (
    <div className="card-main">
        <div className="img-part">
       <div className="img">
       <img src={Img} alt="image" />
       </div>
        </div>
        <div className="detail-part">
            <div className="name">ANIME - AOT EREN YEAGER FREEDOM DESIGN WALL POSTER</div>
            <div className="price"> RS. 249</div>
        </div>
    </div>
  )
}

export default Card