

// Place an Event Listener to the button to run the placeOrder function

document.getElementById("btn").addEventListener("click", greet);
// Store order code in a function
function greet() {
  //Input - extremely cool and awesome
  let number = +document.getElementById("number").value;


  //Process - Create confirmation message using template strings

  if (number > 0) {
    posnegmessage = `Positive/Negative/Zero: Positive`
  } else if (number < 0) {
    posgnegmessage = "Positive/Negative/Zero: Negative"
  } else {
    posnegmessage = "Positive/Negative/Zero: Zero"
  }

  if (number % 2 == 0) {
    evenoddmessage = "Even/Odd: Even"
  } else {
    evenoddmessage = "Even/Odd: Odd"
  }
  


                                                                                                                                  
                                                                                                                                                                                                        
                                                                                                                                                                                                        
  document.getElementById("posnegoutput").innerHTML = posnegmessage;       


  //Output
  document.getElementById("evenoddoutput").innerHTML = evenoddmessage;
}
