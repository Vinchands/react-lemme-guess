import './ResetButton.css'

export default function ResetButton({ onReset }) {
    return (
        <button className="reset-button" onClick={ onReset }>
            Reset
        </button>
    )
}
