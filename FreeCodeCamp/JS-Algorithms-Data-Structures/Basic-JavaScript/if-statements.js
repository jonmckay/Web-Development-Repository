// Create an if statement inside the function trueOrFalse to return "Yes, that was true" if wasThatTrue is true and "No, that was false" if it was false

// Example
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) { 
      return "Yes, it's true";
    }
    return "No, it's false";
  }
  
  // Setup
  function trueOrFalse(wasThatTrue) {
  
    // Only change code below this line.
    if(wasThatTrue) {
      return "Yes, that was true"
    } else {
      return "No, that was false"
    }
    
    
    // Only change code above this line.
  
  }
  
  // Change this value to test
  trueOrFalse(true);