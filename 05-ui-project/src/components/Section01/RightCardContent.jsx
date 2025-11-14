import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between">
        <h1 className="bg-white text-2xl font-bold rounded-full h-10 w-10 flex items-center justify-center">{props.id+1}</h1>
        <div>
            <p className="text-lg leading-normal mb-2 text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quisquam! Perferendis provident omnis dicta eum.</p>
            <div className="flex justify-between">
               <button style={{backgroundColor:props.color}} className=" rounded-full text-white font-semibold px-7 py-3 ">{props.tag}</button> 
               <button className=" rounded-full text-white font-semibold px-3 "><ArrowRight /></button>
            </div>
        </div>
      </div>
  )
}

export default RightCardContent