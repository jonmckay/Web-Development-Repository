// After defining myVar in myLocalScope() it only has a local scope. The console.log() outside of the function cannot see myVar therefore it is undefined.


function myLocalScope() {
    'use strict'; // you shouldn't need to edit this line
    var myVar;
    console.log(myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  //console.log(myVar);
  
  // Now remove the console log line to pass the test
  