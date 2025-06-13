const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}

let jsonMarioGame = JSON.stringify(marioGame)
console.log(jsonMarioGame)
// Chaque objet imbriqué est transformé en structure JSON avec
// des guillemets autour des clés et des chaînes
let jsonMarioGame1 = JSON.stringify(marioGame,null,2)
console.log(jsonMarioGame1)

/*
{"detail":"An amazing game!","characters":{"mario":{"description":"Small and jumpy. Likes princesses.","height":10,"weight":3,"speed":12},"bowser":{"description":"Big and green, Hates princesses.","height":16,"weight":6,"speed":4},"princessPeach":{"description":"Beautiful princess.","height":12,"weight":2,"speed":2}}}
script.js:30 
{
  "detail": "An amazing game!",
  "characters": {
    "mario": {
      "description": "Small and jumpy. Likes princesses.",
      "height": 10,
      "weight": 3,
      "speed": 12
    },
    "bowser": {
      "description": "Big and green, Hates princesses.",
      "height": 16,
      "weight": 6,
      "speed": 4
    },
    "princessPeach": {
      "description": "Beautiful princess.",
      "height": 12,
      "weight": 2,
      "speed": 2
    }
  }
} */


