import React from 'react'
import './Card.scss'

function Card(props) {
    return (
        <div className="card">
            <h3 className="card__title">{props.name}</h3>
            <h4 style={{color:'gray'}}><span role="img" aria-label="Star">🌟</span>{props.stars} </h4>
            <p className="card__p">{props.description}</p>
        </div>
    )
}

export default Card
