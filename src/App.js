
import React,{ useState } from 'react';
import data from './data';
import Tours from './component/Tours';
import Cards from './component/Card';


import './App.css';

function App() {
  function removeTour(id){
    const newTour = tours.filter(tour=>tour.id !=id);
    setTours(newTour);
  }

  const [tours,setTours] = useState(data);
  
  if (tours.length ===0){
    return(<div className=' refresh h-screen flex items-center justify-center flex-col '><h2>No Tours Left</h2>
    <button className='btn-white mt-18 px-10 py-4 border-1 bg-[#b4161b21] border-white cursor-pointer hover:bg-white hover:border-red-600 hover:border-dashed hover:border-8 hover:text-black hover:transition-all duration-200 ' onClick={()=>setTours(data)} >Refresh</button>
    </div>
    
  );}
  return (
       <div>
        <Tours tours = {tours} removeTour={removeTour}></Tours>
       </div>
  );
}

export default App;
