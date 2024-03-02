import React from 'react';

const Game = (props) => {
    return (
        <div className='Game'>
            <img src={props.img} alt={props.name}/>
            <h5>{props.name}</h5>
            <h6>{props.desc}</h6>
            <a href={props.link}>Get</a>
        </div>
    )
}

export default Game;