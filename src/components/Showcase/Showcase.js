import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import playerData from './../../playerData/players_info.json'

const Showcase = () => {
    const [players, setPlayers] = useState([])

    useEffect(() =>{
        setPlayers(playerData)
    }, [])
    
    
    return (
        <div>
            {
                players.map(player => <Player player = {player}>
                </Player>)
             }
        </div>
    );
};

export default Showcase;