import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
margin: 1%;
    div {
        margin: 1% auto;
    }

`;

const PlayerCard = props => {
    console.log('props', props)

    return (
        <Card data-testid='playerCard'>
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
        </Card>
    )
}

export default PlayerCard;