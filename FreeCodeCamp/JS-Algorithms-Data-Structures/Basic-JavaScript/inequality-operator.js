/* The inequality operator != will convert types when comparing them
1 != 2 // true
1 != "1" // false
1 != '1' // false
1 != true // false
0 != false // false
*/

// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  // Change this value to test
  testNotEqual(10);