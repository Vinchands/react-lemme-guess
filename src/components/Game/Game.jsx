import Title from '@/components/Title/Title'
import GuideText from '@/components/GuideText/GuideText'
import Table from '@/components/Table/Table'
import GuessButton from '@/components/GuessButton/GuessButton'
import ResetButton from '@/components/ResetButton/ResetButton'
import numberTables from './data'
import { useState } from 'react'
import './Game.css'

export default function Game() {

    const [selectedTables, setSelectedTables] = useState([])
    const [gameFinish, setGameFinish] = useState(false)
    
    function handleTableCheck(table, isChecked) {
        const updated = [...selectedTables];
        
        if (isChecked && !updated.includes(table)) updated.push(table)
            
        else {
            const index = updated.indexOf(table)
            if (index !== -1) updated.splice(index, 1)
        }
        
        setSelectedTables(updated);
    }

    return (
        <div>
            <Title />
            <hr />
            <GuideText />
            <div className='table-container'>
                {
                    numberTables.map((numbers, i) => (
                        <Table key={ i } order={ i + 1 } numbers={ numbers } onTableCheck={ isChecked => handleTableCheck(2**i, isChecked) } />
                    ))
                }
            </div>
            {
                selectedTables.length > 0 &&
                <>
                    <GuessButton onGuess={ () => alert(`Lemme guess...\n\nThe number in your mind is ${guess(selectedTables)}, isn't it? 😏`) } />
                    <ResetButton onReset={ () => window.location.reload() } />
                </>
            }
        </div>
    )
}

function guess(selectedTables) {
    return selectedTables.reduce((t, v) => t + v, 0)
}
