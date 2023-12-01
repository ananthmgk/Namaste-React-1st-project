// Create an array of 10 elements
let arr = Array(10);
console.log(arr); // [empty x 10]

// Fill each element with an empty string
arr = arr.fill("2");
console.log(arr); // ["", "", "", "", "", "", "", "", "", ""]

// // Transform each element into a <div> element
arr = arr.map((e, index) => e);
console.log(arr); // [<div key=0 class="shimmer-card"></div>, <div key=1 class="shimmer-card"></div>, ...]

.header {
  display: flex;
  justify-content: space-between;
  margin: 10px;
  border: 1px solid black;
}

.nav-items ul {
  list-style-type: none;
  display: flex;
}

.nav-items ul li {
  padding: 10px;
}

.logo {
  width: 100px;
}

.card {
  width: 200px;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
}

.card img {
  width: 100%;
}

.restaurant-list {
  display: flex;
  flex-wrap: wrap;
}

.shimmer-card {
  width: 200px;
  height: 200px;
  background-color: lightgray;
  margin: 20px;
}

.selfi-image {
  width: 300px;
  height: 300px;
}
