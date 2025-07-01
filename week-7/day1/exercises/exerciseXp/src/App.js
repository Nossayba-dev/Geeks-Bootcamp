// exercise1
import React from 'react';
import UserFavoriteAnimals from './UserFavoriteAnimals'; //exercise2
import Exercise from './Exercise3';//exercise3

// const user = {
//   firstName: 'Bob',
//   lastName: 'Dylan',
//   favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
// };//exercise2

function App() {
  // const myelement = <h1>I Love JSX!</h1>;
  // const sum = 5 + 5;

  return (
    // <div>
    //   <p>Hello World!</p>
    //   {myelement}
    //   <p>React is {sum} times better with JSX</p>
    // </div>
    //     // exercise2
    //     <div>
    //       <h3>{user.firstName}</h3>
    //       <h3>{user.lastName}</h3>
    //       <UserFavoriteAnimals favAnimals={user.favAnimals} />
    //     </div>
        // exercise3
         <div className="App">
            <Exercise />
          </div>
  );
}

export default App;



