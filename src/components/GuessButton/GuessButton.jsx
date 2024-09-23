import './GuessButton.css'

export default function GuessButton({ onGuess }) {
    
    return (
        <button className='guess-button' onClick={ onGuess }>Guess</button>
    )
}
