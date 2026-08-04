const array = [115,5,40,8,145];
let smallest = array[0];

array.forEach(element => {
  if (element < smallest) {
    smallest = element;
  }
});
console.log("Smallest element:", smallest);
