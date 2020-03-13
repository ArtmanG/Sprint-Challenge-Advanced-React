import React from 'react';

const PlayerCard = props => {
    console.log('props', props)

    return (
        <div>
            {props.players.map((player, index) => {
                console.log('player', player)
                return (
                    <div key={index}>
                        <h2>{player.name}</h2>
                        <p>Country: {player.country}</p>
                        <p>Searches: {player.searches}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default PlayerCard;