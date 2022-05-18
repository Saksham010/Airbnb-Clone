import React from "react"

export default function Card(props){
  // console.log(props.item.id);

  let itemStatus;
  if(props.item.openSpots === 0){
    itemStatus = "SOLD OUT";
  }
  else{
    itemStatus = "AVAILABLE"
  }

  return(
    <div className="outer-card">


      <div className="item-status">
          <p>{itemStatus}</p>
      </div>


      <div className="outer-image">
        <img src={props.item.coverImg} />
      </div>

      <div className="card-text">
        <img src="images/star.png"/>
        <p className="para">{props.item.stats.rating} <span className="outer-span">({props.item.stats.reviewCount}) • {props.item.location}</span></p>
        <br/>
        <p> {props.item.title}</p>
        <br/>
        <p><span className="inner-span">From ${props.item.price} /</span> person</p>
      </div>

    </div>
  )
}
