const exampleArr = [3,23,12,4,4,31,3,4,3,4,35,23,4,54,23,1,31,3,2,42];


// ***For make an array that contains only unique items , from a given array***

// Short Way
const groups = [...new Set(exampleArr.map((b) => b.group))];

// Long but more explicit
function getUniqueValues (array, property) {
  const propValues = array.map(element => element[property]);
  const uniqueValues = new Set(propValues);
  const uniqueValuesArray = [...uniqueValues];
  return uniqueValuesArray;
 }
