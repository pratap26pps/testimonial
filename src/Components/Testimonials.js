import React, { useState } from 'react'
import Card from './Card';
import { LuMoveLeft,LuMoveRight } from "react-icons/lu";
export const Testimonials = (props) => {
    let dataBox=props.dataBox;
    const [index,setindex]=useState(0);



function leftshifthandler(){
   if(index-1<0){
    setindex(dataBox.length-1)
   }
   else{
    setindex(index-1)
   }
}

function rightshifthandler(){
  if(index+1>dataBox.length){
    setindex(0);
   }
   else{
    setindex(index+1);
   }
}


function surprisehandler(){
// math.floor is used for rounding off the value of number
// math.random proves any number between 0 and 1.
let randomindex= Math.floor(Math.random()*dataBox.length) 
  setindex(randomindex);
}




  return (
    <div >

      
      <Card dataBox1={dataBox[index]}></Card>

      <div className='flex gap-8  justify-center '>
      <p onClick={leftshifthandler} className=' hover:text-lime-600'><LuMoveLeft/></p>
      <p onClick={rightshifthandler}  className=' hover:text-lime-600 ' ><LuMoveRight/></p>
    </div>
      
     <div className='ml-48'>
       <button onClick={surprisehandler}  className='w-[123px] hover:bg-red-700 bg-lime-600 '>Surprise Me</button>
       </div>
   


    </div>
  )
}
export default Testimonials;