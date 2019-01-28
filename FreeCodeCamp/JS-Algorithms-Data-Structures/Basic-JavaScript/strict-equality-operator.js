/* In JavaScript, the strict equality operator will not convert types
*   3 === 3 // True
*   3 === "3" // False
*/

// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  // Change this value to test
  testStrict(10);