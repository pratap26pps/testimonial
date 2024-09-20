import dataBox from './data';
import './App.css'
//  pankaj
import Testimonials  from './Components/Testimonials';
function App() {
  return (
    <div>

      <div className='bg-slate-400 flex flex-col w-[216vh] justify-center items-center relative h-[110vh] '>

      <div className='  text-center mb-96   '>
      <h5 className='text-3xl gap-6'>OUR testimonials</h5> 
      
       <div className= 'bg-red-700   h-1 w-54  ml-78 mb-7 '></div>
      </div>
        

     <div className='absolute  flex flex-col h-[70vh] w-[110vh] shadow-2xl mt-35 p-4 bg-slate-300'>
      <Testimonials dataBox={dataBox} ></Testimonials>
     </div>

     </div>

    </div>
  );
}

export default App;
