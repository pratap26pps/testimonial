import React from 'react'
import {FaQuoteLeft, FaQuoteRight,} from "react-icons/fa";
export const Card = (props) => {
    let dataBox1=props.dataBox1
  return (
    <div  >
      <div>
          <img className='rounded-full aspect-square h-[112px] w-[112px ]  z-[25]' src={dataBox1.image}></img>
  
      </div>
     
    <div className='text-center'>
      <div className='font-bold'>{dataBox1.name} </div>
    </div>
      
    <div className='text-center'>
      <div>{dataBox1.job}</div>
    </div>
      
    <div>
      <p className='text-center'><FaQuoteLeft/></p>
    </div>

    <div>
      <p>{dataBox1.text}</p>
    </div>
      
    
    <div>
      <p className='text-center'><FaQuoteRight/></p>
    </div>


   

    

    </div>
  )
}
export default Card;