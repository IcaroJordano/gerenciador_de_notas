import Card from "./Card"
import "./Section.css"
import { IoIosAddCircleOutline } from "react-icons/io";
import { useState } from "react";

function Section() {
    const [count,setcount]=useState(1)  
    var lista = [];
    // const tamanhoDaLista = 7;
    for (let i = 0; i < count; i++) {
        lista.push(i);
  } 
//   return (
//     <div>
//       {lista.map((item, index) => (
//         <h2 key={index}>Ola Mundo </h2>
//       ))}
//     </div>
//   );
    return(
        <div className="Section">
                {lista.map((item, index) => (
            <Card key={index}>Ola Mundo </Card>))}

            <div className="add" onClick={()=>{setcount(count+1)} }>
                <IoIosAddCircleOutline></IoIosAddCircleOutline>    
            </div>    
        </div>
)}

export default Section