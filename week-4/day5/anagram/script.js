function areAnagrams(str1, str2) {
  const cleanStr1 = str1.split(" ").join("").trim().toLowerCase();
  const cleanStr2 = str2.split(" ").join("").trim().toLowerCase();

  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  const sortedStr1 = cleanStr1.split("").sort().join("");
  const sortedStr2 = cleanStr2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

console.log(areAnagrams("Astronomer", "Moon starer"));
console.log(areAnagrams("The Morse Code", "Here come dots"));
console.log(areAnagrams("oussama", "ait ameur"));
