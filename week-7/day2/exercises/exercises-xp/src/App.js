import Car from './Components/Car';
import Event from './Components/Events'
import Phone from './Components/Phone'
import Color from './Components/Color';
import './App.css';

  const carinfo = {name: "Ford", model: "Mustang"};


function App() {
  return (
    
    <div className="App">
     {/* exercise1 */}
      <Car name={carinfo.name}  model={carinfo.model}/>
     {/* exercise2 */}
     <Event/>
     <Phone/>
     <Color/>

    
    </div>


  );
}

export default App;
