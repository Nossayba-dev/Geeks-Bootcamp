import React ,{ useState } from 'react';
function myComponent() {
    const [name , setName] = useState("abbara");
    const [age , setAge] = useState(19);
    const [isEmployed,setIsEmpoyed] = useState(true);
    const updateName =()=>{
        setName("noussayba");
        // name="noussayba";
        // console.log(name);
    }
    const icrementAge =()=>{
        setAge(age + 1);
    }
    const fctEmployed=()=>{
        setIsEmpoyed(!isEmployed)
    }
    
    return(
        <div>
            <p>Name : {name}</p>
            <button onClick={updateName}>set Name</button>

            <p>age : {age}</p>
            <button onClick={icrementAge}>+1</button>

            <p>Employed : {isEmployed? 'yes':'no'}</p>
            <button onClick={fctEmployed}>yes or no</button>
        </div>
    );
}
export default myComponent;