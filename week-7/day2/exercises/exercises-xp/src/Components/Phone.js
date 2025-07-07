// exercise3
import React ,{useState,useEffect} from "react";

function Phone( props){
    
  const [brand] = useState("Samsung");
  const [model] = useState("Galaxy S20");
  const [color , setColor] = useState("black");
  const [year] = useState(2020);
  const changeColor = () =>{
    setColor('red');
  }

    
    
    return(
        <div>
            <h2> My phone is a { brand}</h2>
            <p>it is a {color} {model} from {year}</p>
            <button onClick={changeColor}> change color</button>
        </div>
    );
}
export default Phone;