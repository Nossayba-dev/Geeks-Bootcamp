// part1
const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

const getCarHonda = (carInventory) => {
  const hondaCar = carInventory.find(car => car.car_make === "Honda");
  console.log(hondaCar)
  if (hondaCar) {
    console.log(`This is a ${hondaCar.car_make} ${hondaCar.car_model} from ${hondaCar.car_year}`);
  } else {
    console.log("No Honda found in the inventory.");
  }
};

getCarHonda(inventory);

// part2
inventory.sort((a, b) => a.car_year - b.car_year);
console.log(inventory); 


