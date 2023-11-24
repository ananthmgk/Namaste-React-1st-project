// Create an array of 10 elements
let arr = Array(10);
console.log(arr); // [empty x 10]

// Fill each element with an empty string
arr = arr.fill("2");
console.log(arr); // ["", "", "", "", "", "", "", "", "", ""]

// // Transform each element into a <div> element
arr = arr.map((e, index) => e);
console.log(arr); // [<div key=0 class="shimmer-card"></div>, <div key=1 class="shimmer-card"></div>, ...]
