
const products = require('./products');

function findProductByName(name) {
  return products.find(
    p => p.name.toLowerCase() === name.toLowerCase()
  );
}

["Laptop", "banana", "Watch"].forEach(searchName => {
  const result = findProductByName(searchName);
  if (result) {
    console.log(`Found:`, result);
  } else {
    console.log(`Product "${searchName}" not found.`);
  }
});
