import React, { useState } from 'react';

function Hello(){
    const [isVisible , setIsVisible] = useState(false);
    
    const toggleVisibility=()=>{
         setIsVisible(props => !props);
    };
    return(
        <div>
            { isVisible && <h2>hello hello</h2>}
            <button onClick={toggleVisibility}>{ isVisible ? "Hide":"Show"}</button>
            
        </div>
    );
}
export default Hello