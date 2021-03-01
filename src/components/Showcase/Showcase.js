import React, { useEffect, useState } from 'react';
import AuctionSummary from '../AuctionSummary/AuctionSummary';
import Player from '../Player/Player';
import playerData from './../../playerData/players_info.json'
import './Showcase.css'


const Showcase = () => {
    const [players, setPlayers] = useState([]);
    const [ addePlayer, setAddedPlayer] = useState([]);

    useEffect(() =>{
        setPlayers(playerData)
    }, [])
    
    const handleAddPlayer = (player)=> {
        const newAddedPlayer = [...addePlayer, player];
        setAddedPlayer(newAddedPlayer);
    }


    return (
        <div className = 'container'>
            <div className = 'playerContainer'>
            {
                players.map(player => <Player handleAddPlayer = {handleAddPlayer} player = {player}>
                </Player>)
            }
            </div>
            <div className = 'summaryContainer'>
                <AuctionSummary addePlayer={addePlayer}>
                </AuctionSummary>
            </div>
        </div>
    );

};

export default Showcase;