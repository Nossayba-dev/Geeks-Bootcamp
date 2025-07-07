// EXERCISE1
import React ,{ useState}from "react";
import Garage from "./Garage";


function Car(props){

    const [carColor, setCarColor] = useState("red");

    return (
        <div>
            <p>this is {props.name} model {props.model} in the {carColor} color</p>
            <Garage size="small"/>
        </div>
    );
}

export default Car;