// exercise2
import React, { useState } from 'react';

const Events = () => {
  const [inputValue, setInputValue] = useState('');
  const [isToggleOn , setIsToggleOn] =useState(false);

  const clickMe = () => {
    alert('I was clicked');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert(`The Enter key was pressed , your input is: React
         ${inputValue}`);
    }
  };

  const fctIsToggleOn = () =>{
    setIsToggleOn((prev) => !prev);
  }


  return (
    <div>
      <button onClick={clickMe}>Click me</button>
      <br /><br />
      <input
        type="text"
        placeholder="Press the ENTER key!"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <p>exercise 9:</p>
      <button onClick={fctIsToggleOn}>{isToggleOn ? 'ON' : 'OFF'}</button>

    </div>
  );
};

export default Events;
