/* JavaScript will convert one data type to another to compare equality
*
*  1 == 1   // True
*  1 == 2   // False
*  1 == '1' // True
* "3" == 3  // True
*/

// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  // Change this value to test
  testEqual(10);