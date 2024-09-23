import { useState } from 'react'
import './GuideText.css'

export default function GuideText() {
    
    const [showGuide, setShowGuide] = useState(false)
    
    return (
        <>
            <button className='guide-toggle'
                onClick={ () => setShowGuide(!showGuide) } >{ !showGuide? 'Show guide' : 'Hide' }</button>
            {
                showGuide &&
                <div className='guide-text'>
                    <h3>How to play</h3>
                    <ol>
                        <li>Think of a random number between 1 to 63.</li>
                        <li>Look at those tables below (scroll down to see more). If your number is there, check it and skip otherwhise.</li>
                        <li>Once you done, the <b>Guess</b> button will appears below and click to see what it says.</li>
                    </ol>
                </div>
            }
        </>
    )
}
