
import './Tours.css';
import Cards from "./Card";
function Tours({tours,removeTour}){
return(
    <div className=" flex items-center justify-center flex-col  ">
        <h1 className=" text-3xl m-8 border-8  border-dashed border-blue-700 rounded-2xl p-[1vh,5vw] ">Plan with LEO</h1>
        <div className=" flex justify-center flex-wrap max-w-[1300px] mx-auto ">
            {tours.map((tours) => {
               return <Cards {...tours} removeTour={removeTour}></Cards>
            })}
        </div>
    </div>
)
}

export default Tours;
