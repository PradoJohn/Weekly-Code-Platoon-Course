

function GuessingGame(){
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const gameName = "Random Number Guesser";
  console.log(randomNumber); //why is this logging to the console twice? (Strict Mode?)
  const guessNumber = (e) => {
    e.preventDefault();
    let userInput = document.getElementById("userInput");
    let result = document.getElementById("result");
    if (userInput.value > randomNumber) {
      result.innerHTML = "<h3>Too High</h3>";
    } else if (userInput.value < randomNumber) {
      result.innerHTML = "<h3>Too Low</h3>";
    } else {
      result.innerHTML = "<h1>You Won!</h1>";
    }
  };
  return (
    <main>
      <div className="container">
        <h1 className="title">Guess A Number</h1>

        <form onSubmit={(e) => guessNumber(e)}>
          <input type="number" id="userInput" />
          <button type="submit">Submit</button>
        </form>
        <div id="result">
        </div>
      </div>
    </main>
  );
  
}

export default GuessingGame