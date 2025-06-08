let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
 const displayGroceries=()=>{
    groceries.fruits.forEach(element => console.log(element))
};
 displayGroceries();
 const cloneGroceries=()=>{
    let user = client; 
     client = 'Betty';
    console.log(user); 
    console.log(client); 
    // non car on a juste copie la valeur de client dans user 

    let shopping =groceries;
    groceries.totalPrice='35$';
    console.log(shopping.totalPrice)// the same reson
    groceries.other.paid=false;
    console.log(shopping.other.paid)
    // oui car shopping = groceries signifie que shopping pointe vers le même objet.
     }
 cloneGroceries()