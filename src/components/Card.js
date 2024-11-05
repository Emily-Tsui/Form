import React from 'react'
import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'
import { supabase } from '../client'

const Card = (props) =>  {

  // const [count, setCount] = useState(0)
 
  // const updateCount = async (event) => {
  //   event.preventDefault();
  
  //   await supabase
  //     .from('Posts')
  //     .update({ betCount: count + 1})
  //     .eq('id', props.id)
  
  //   setCount((count) => count + 1);
  // }

  return (
      <div className="Card">
          <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <Link to={`/crewmate/${props.id}`}>
                <h2 className="title">{props.crewName}</h2>
                <p className="description">{props.color}</p>
          </Link>
          
      </div>
  );
};

export default Card;