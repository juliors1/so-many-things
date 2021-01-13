import React from 'react';
import { Link } from 'react-router-dom'


const ThingsCard = (props) => {
  return ( 
  <>
  <h3>Things Card</h3>
  {props.things.map(thing => {
    return (
      <div>
        <p>{thing.name}</p>
        <img src={thing.image} alt="thing-pic"/>
        <p>{thing.attributes.join(", ")}</p>
        <hr/>
      </div>
    )
  })}
  <Link to={{
    pathname: "/"
  }}>
    Back to All Things
    </Link>
  </> );
}
 

export default ThingsCard;