console.log("HELLO PAPA PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM

let randomNum = Math.floor(Math.random()*100) +1;

const showGuess = () => {
  console.log(randomNum)
  
  // Takes Input by interger only
  let input_guess = document.getElementById("input-guess").value
  if (isNaN(input_guess)){
    document.getElementById('output').innerText = 'Must be a number'
  }else if(input_guess>100 || input_guess<1){
    document.getElementById('output').innerText = 'Must be between 1 and 100'
  }else{
    input_guess = parseInt(input_guess)
    console.log(input_guess)
    // Output
    if (input_guess===randomNum){
      document.getElementById('output').innerText = 'Congrats you Won'
    }else if(input_guess>randomNum){
      document.getElementById('output').innerText = 'Too High'
    }else if(input_guess<randomNum){
      document.getElementById('output').innerText = 'Too Low'
    }
  }
};