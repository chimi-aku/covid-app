import React from 'react'

const Results = props => (
    <div className="results">
    <div className="data confirmed">
        <p>Confirmed:</p>
        <p className='num'>{props.data.confirmed}</p>
    </div>
    <div className="data deaths">
        <p>Deaths:</p>
        <p className='num'>{props.data.deaths}</p>
    </div>
    <div className="data recovered">
        <p>Recovered:</p>
        <p className='num'>{props.data.recovered}</p>
    </div>
</div>
)

export default Results;