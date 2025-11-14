import React from 'react'
import RightCard from './RightCard'
import { FunctionSquare } from 'lucide-react';

const RightContent = (props) => {
  console.log(props);

  return (
    <div id='right' className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-4 p-6 w-2/3 '>
      {props.users.map(function(elem, ind){
        return <RightCard key={ind} id={ind} img={elem.img} tag={elem.tag} color={elem.color} /> 
      })}
    </div>
  )
}

export default RightContent