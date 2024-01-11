import './Card.css';

import { useState } from "react";

function Cards({id,name,info,image,price,removeTour}){
    function readmoreHandler(){
        setreadmore(!readmore);
    }
    const [readmore,setreadmore]= useState(false); 
    const description = readmore ? info:`${info.substring(0,200)}...`;
    return(
        
        <div className=' w-[400px] h-max m-4 p-4 flex flex-col rounded-10 shadow-md items-center' >
            <img src= {image} className=" image w-[380px] aspect-square object-cover  " ></img>
            <div className=' mt-20 mx-5' >
                <h4 className='text-[#1faa59] text-1.3rem ' >Rs. {price}</h4>
                <h4 className=' text-1.5rem'>{name}</h4>
            </div>
            <div>{description}
            <span className=' text-[#12b0e8] cursor-pointer '  onClick={readmoreHandler} >{readmore ? `show less`:`read more`} </span>

            </div>            
            <button className=' btn-red mt-18 px-10 py-4 border-1 border-[#b4161b] cursor-pointer rounded-10 text-18 font-bold bg-[#b4161b21] hover:bg-red-500 hover:text-white hover: transition-all duration-200' onClick={()=>removeTour(id)}  >Not interested</button>
        </div>
    )
}

export default Cards;