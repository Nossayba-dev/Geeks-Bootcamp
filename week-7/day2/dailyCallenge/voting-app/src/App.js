import React ,{useState} from 'react';
import './App.css';

function App() {
  const [languages, setLanguages] = useState([
                                            {name: "Php", votes: 0},
                                            {name: "Python", votes: 0},
                                            {name: "JavaSript", votes: 0},
                                            {name: "Java", votes: 0}
                                          ]);
  
  const vote =(index)=>{
    const updatedLanguages = languages.map((lang, i) =>
      i === index ? { ...lang, votes: lang.votes + 1 } : lang
    );
    setLanguages(updatedLanguages);
  }                                        
  return (
    <div className="App">
      <h1>vote your language!</h1>
       {languages.map((language, index) => (
          <div key={index} className='border'>
            <p>{language.votes}</p>
            <p>{language.name}</p>
            <p onClick={() => vote(index)}><span>Click Here</span></p>
          </div>
        ))}
    </div>
    
  );
}

export default App;
