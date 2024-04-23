const arrays = [[1, 4], [11], [3, 5, 7]];

// Make a func that return 2 dimosounal array in one array 
const collect = array => array.reduce((acc, cur) => acc.concat(cur));

// Using functional programming to find the sum of the all number
const sum = collect(arrays).reduce((acc, cur) => acc + cur, 0);
console.log(sum)
