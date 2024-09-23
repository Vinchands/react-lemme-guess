import './Table.css'

export default function Table({ order, numbers, onTableCheck }) {
    
    let rows = []
    
    for (let i = 0; i < numbers.length; i += 8) {
        const cols = numbers.slice(i, i + 8);
        
        rows.push(
            <tr key={ i }>
                { cols.map(col => <td key={ col }>{ col }</td>) }
            </tr>
        )
    }
    
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th colSpan={ 8 }>
                        <div>
                            Table #{ order }
                            <input type='checkbox' 
                                id={ `table${ order }` } 
                                className='table-checkbox' 
                                onChange={ e => onTableCheck(e.target.checked) } />
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                { rows }
            </tbody>
        </table>
    )
}
