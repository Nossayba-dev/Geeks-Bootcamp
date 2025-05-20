const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors);
console.log(`${building.numberOfAptByFloor.firstFloor} and ${building.numberOfAptByFloor.secondFloor}`);
console.log(`${building.nameOfTenants.slice(1,2)} : ${building.numberOfRoomsAndRent.dan}`);