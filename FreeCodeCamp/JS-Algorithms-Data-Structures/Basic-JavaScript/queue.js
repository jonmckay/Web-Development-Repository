// Create a manual queue by adding an item to the end of an array and removing the first item from the arrayfunction nextInLine(arr, item) {

function nextInLine(arr, item)
{
    // Your code here
    arr.push(item);
    item = arr.shift();
    return item;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 3)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));