// The try catch error handling method: 
try {

  // code...

} catch (err) {

    // error handling
  
  }
 // It works like this: First, the code in try {...} is executed. If there were no errors, then catch (err) is ignored: the execution reaches the end of try and goes on, skipping catch. but

 // If an error occurs, then the try execution is stopped, and control flows to the beginning of catch (err). The err variable (we can use any name for it) will contain an error object with details about what happened.

 //kindly note that: For try...catch to work, the code must be runnable. In other words, it should be valid JavaScript. It won’t work if the code is syntactically wrong.

 try {

    alert('Start of the try runs');  

    alert('End of the try runs');   
  
  } catch (err) {
  
    alert('Catch is ignored, because there are no errors'); //This will not be alerted cause there is no error in the try
  
  }


  try {
    // code that may throw an error
  } catch (err) {
    // code to be executed if an error occurs
  } finally {
    // code to be executed regardless of an error occurs or not
  }