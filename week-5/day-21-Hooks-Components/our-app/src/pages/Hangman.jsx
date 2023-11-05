import { useState, useEffect } from 'react'
import axios from 'axios'

function Hangman() {
  const [word, setWord] = useState("")
  const [displayedWord, setDisplayedWord] = useState("")
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [remainingAttempts, setRemainingAttempts] = useState(6);
  const [guess, setGuess] = useState('');
  

  useEffect(()=>{
    
    const randomWord = async()=>{
      try{
      const response = await axios.get("https://random-word-api.herokuapp.com/word?lang=en")

      const newWord = response.data[0].toUpperCase();
      setWord(newWord);
      
      setDisplayedWord(newWord.split('').map(() => '_').join(' '));
      console.log(newWord);
        
      }catch(e){
      console.log(e, "Something went wrong")
      }
    }
    randomWord()
    console.log(word)
  }, [])


  const  handleGuess = (letter) => {
    const newGuessedLetters = [...guessedLetters, letter];
    if (!guessedLetters.includes(letter)) {

      setGuessedLetters(newGuessedLetters);
      if (word.includes(letter)) {
        const newDisplayedWord = word.split('')
        .map((char) => (newGuessedLetters.includes(char) ? char : "_"))
        .join(' ');
        setDisplayedWord(newDisplayedWord);

        if (!newDisplayedWord.includes('_')) {
          alert(`Congratulations! You win!`)
        }
      
      }else {
        //If the letter is not in the word
        setRemainingAttempts(remainingAttempts-1)
        if (remainingAttempts === 1) {
          const img = 'https://art.pixilart.com/971d9a48ed736fe.gif'
          let image = document.createElement('img')
          image.src = img
          image.id = "hangman"
          document.getElementById('hangman-img').appendChild(image)
        }
        //if remaining attempts === 1 , Alert it's over. GIF IMAGE !!!!
      }
    }else{
      //if the letter has already been guessed
      alert(`You have already guessed!`)
    }
// letter is in the guessed letter --> decrement remaining
// 
  }
  //guess handler (letter)
  //store each guess
  // throw alert if letter has been guessed
  //throw alert if out of guesses
  //throw alert if they win
  //check every guess against the word
  //change correct letters in the displayed word to their proper form

  const handleInput = (event) => {
    setGuess(event.target.value.toUpperCase());
  };
  //handle input... event.... letter is converted to uppercase

  const handleSubmit = (event) => {
    event.preventDefault();
    if (/^[A-Z]$/.test(guess)) {
      handleGuess(guess);
      setGuess("")
    } else {
      alert("Letters ONLY!!!!")
    }
    
  }
  //handle submit....prevent default...and ensure [A-Z]


  return (
    <>
      <h1>Hangman</h1>
      <h1>{displayedWord}</h1>
      <div id="hangman-img">  
      </div>
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        maxLength="1" 
        value={guess}
        onChange={handleInput}
        name="" 
        id=""/>
        <button type="submit">Guess</button>
      </form>
      <h2> Remaining Attempts: {remainingAttempts}</h2>
      <h2>Letters Guessed: {guessedLetters}</h2>
      {/* guess remaining */}
      {/* Guessed letters */}
    </>
  )
}

export default Hangman
// Random word
// transform the letters  of the word to "_  "
// Take input
// Create a function to check the input if exists
// exist=> if letter exists, transform the letter from _ to the letter.
// not exist => keep count for missed guesses 6 --> once 6 is reached, we hang
