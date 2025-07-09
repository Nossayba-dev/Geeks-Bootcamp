import React , {useEffect , useState} from "react";
function fct_useEffect(){
    const [count, setCout] = useState(0);

    useEffect(()=>{
        document.title =`Count: ${count}`;
    } ,[count]);


    function addCout(){
        setCout(c => c + 1);
    }

    return(
        <>
        <p>cout:{count}</p>
        <button onClick={addCout}> add</button>
        </>
    );
}
export default fct_useEffect;